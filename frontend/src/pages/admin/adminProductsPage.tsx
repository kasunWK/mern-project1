import { Button, Col, Row, message } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import ProductsGrid from "../../componant/admin/productsGrid";
import AddEditProduct from "../../componant/admin/addEditProduct";
import { useForm } from "antd/es/form/Form";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} from "../../store/api/productApi";
import confirm from "antd/es/modal/confirm";
import { CloseCircleOutlined } from '@ant-design/icons';
import { selectUser } from "../../store/api/userApi";
import { useAppSelector } from "../../store/store";

const AdminProductsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [showProductsModal, setShowProductsModal] = useState(false);
  const [editId, setEditId] = useState<string | undefined>();
  const [form] = useForm();
  const [addProductMutation] = useAddProductMutation();
  const [editProductMutation] = useEditProductMutation();
  const [deleteProductMutation] = useDeleteProductMutation();
  const [msg, msgContext] = message.useMessage();
  const [img, setImg] = useState<File | undefined>();

  const addProduct = (values: any) => {
    let form = new FormData();
    form.append("name", values.name);
    form.append("description", values.description);
    form.append("category", values.category);
    form.append("price", values.price);
    form.append("quantity", values.quantity);
    if (img) form.append("img", img);
    addProductMutation(form)
      .then(() => {
        msg.success("Product added");
        setShowProductsModal(false);
      })
      .catch(() => {
        msg.error("Failed to add the product");
      });
  };

  const editProduct = (values: any) => {
    editProductMutation({ ...values, item_id: editId })
      .then(() => {
        msg.success("Product updated");
        setShowProductsModal(false);
      })
      .catch(() => {
        msg.error("Failed to update the product");
      });
  };

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editId) {
          editProduct(values);
        } else {
          addProduct(values);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onAddProductClick = () => {
    setEditId(undefined);
    form.resetFields();
    setShowProductsModal(true);
  };

  const onEditProduct = (item: ItemType) => {
    setEditId(item._id);
    form.setFieldsValue({ ...item });
    setShowProductsModal(true);
  };

  const onDelete = (item: ItemType) => {
    confirm({
      content: "Product will be deleted. Continue ?",
      okType: "default",
      onOk: () => {
        deleteProductMutation({ item_id: item._id })
          .then(() => {
            msg.success("Product deleted");
            setShowProductsModal(false);
          })
          .catch(() => {
            msg.error("Failed to delete the product");
          });
      },
      
      icon: <CloseCircleOutlined />,
    });
  };

  const user = useAppSelector(selectUser);


  return (
    <section className="m-5 bg-gray-300 p-10">
      {msgContext}
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold">Products</div>
        </Col>
        <Col>
          <Row>
            <Col>
              <Search
                placeholder="input search text"
                onSearch={(e) => setSearchText(e)}
                style={{ width: 200 }}
              />
            </Col>
            {user?.usertype != "owner"?
            <Col>
              <Button onClick={onAddProductClick} className="bg-blue-300">
                Add Product
              </Button>
            </Col>:<></>}
          </Row>
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <AddEditProduct
        isModalOpen={showProductsModal}
        setShowModal={setShowProductsModal}
        form={form}
        onOk={onOk}
        onImageChange={(img) => setImg(img)}
        isEdit={editId!=undefined}
      />
      <ProductsGrid
        search={searchText}
        onEditClick={onEditProduct}
        onDeleteClick={onDelete}
      />
    </section>
  );
};

export default AdminProductsPage;
