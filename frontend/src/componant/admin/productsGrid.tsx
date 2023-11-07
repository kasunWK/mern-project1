import { useEffect, useState } from "react";
import { useLazyGetProductsQuery } from "../../store/api/productApi";
import { Space, Table } from "antd";
import Column from "antd/es/table/Column";

type Props = {
  search?: string;
  onEditClick: (value: ItemType) => void;
  onDeleteClick: (value: ItemType) => void;
};

const ProductsGrid = ({ search, onEditClick, onDeleteClick }: Props) => {
  const [fetchProducts, { data: products }] = useLazyGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState<ItemType[]>([]);

  useEffect(() => {
    const filterProductsBySearch = (item: ItemType) => {
      if (search) {
        return item.name.toUpperCase().includes(search.toUpperCase());
      }
      return true;
    };

    setFilteredProducts(
      products
        ?.filter((e) => filterProductsBySearch(e))
        .map((e) => ({ ...e, key: e._id })) ?? []
    );
  }, [products, search]);

  useEffect(() => {
    fetchProducts({});
  }, []);

  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  return (
    <div>
      {filteredProducts && (
        <Table dataSource={filteredProducts} pagination={false}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Image"
            dataIndex="image"
            key="image"
            render={(_: any, record: ItemType) => (
              <Space size="middle">
                <img
                  alt={record.name}
                  placeholder=""
                  src={`http://localhost:3001/uploads/${record.image}`}
                  onError={addImageFallback}
                  style={{ height: "30px", width: "100%" }}
                />
              </Space>
            )}
          />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column
            title="Action"
            key="action"
            render={(_: any, record: ItemType) => (
              <Space size="middle">
                <a onClick={() => onEditClick(record)}>Edit</a>
                <a onClick={() => onDeleteClick(record)}>Delete</a>
              </Space>
            )}
          />
        </Table>
      )}
    </div>
  );
};

export default ProductsGrid;
