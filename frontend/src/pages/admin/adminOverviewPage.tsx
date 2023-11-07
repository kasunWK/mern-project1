import { Button, Card, Col, Row, message } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import ProductsGrid from "../../componant/admin/productsGrid";
import AddEditProduct from "../../componant/admin/addEditProduct";
import { useForm } from "antd/es/form/Form";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useLazyGetProductsQuery,
} from "../../store/api/productApi";
import confirm from "antd/es/modal/confirm";
import { CloseCircleOutlined } from '@ant-design/icons';
import { useChangeOrderStatusMutation, useLazyGetOrdersQuery } from "../../store/api/orderApi";
import { useLazyGetUsersQuery } from "../../store/api/userApi";

const AdminOverviewPage = () => {

  const [msg, msgContext] = message.useMessage();

  const [fetchOrders, { data: orders }] = useLazyGetOrdersQuery();
  const [fetchUsers, { data: users }] = useLazyGetUsersQuery();
  const [fetchProducts, { data: products }] = useLazyGetProductsQuery();



  useEffect(() => {
    fetchOrders({});
    fetchUsers({});
    fetchProducts({});

  }, []);


  return (
    <section className="m-5 bg-gray-300 p-10">
      {msgContext}
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold">Overview</div>
        </Col>
        <Col>
          {/* <Row>
            <Col>
              <Search
                placeholder="input search text"
                onSearch={(e) => setSearchText(e)}
                style={{ width: 200 }}
              />
            </Col>
            <Col>
              <Button 
              // onClick={onAddProductClick}
               className="bg-blue-300">
                Add Product
              </Button>
            </Col>
          </Row> */}
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Orders" bordered={false}>
            {orders?.length} Total Orders
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Users" bordered={false}>
            {users?.length} Total Users
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Products" bordered={false}>
            {products?.length} Total Products
          </Card>
        </Col>
      </Row>
      {/*       
      <ProductsGrid
        search={searchText}
        onEditClick={onEditProduct}
        onDeleteClick={onDelete}
      /> */}
    </section>
  );
};

export default AdminOverviewPage;
