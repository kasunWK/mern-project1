import { useEffect, useState } from "react";
import { useLazyGetProductsQuery } from "../../store/api/productApi";
import { Button, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { selectUser } from "../../store/api/userApi";
import { useAppSelector } from "../../store/store";

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

  function convertToCSV(data: any[]) {
    const csvArray = [];
    // Add the header row
    const header = Object.keys(data[0]);
    csvArray.push(header.join(','));
  
    // Add the data rows
    data.forEach(item => {
      const row = header.map(fieldName => item[fieldName]);
      csvArray.push(row.join(','));
    });
  
    return csvArray.join('\n');
  }
  

  function handleExportCSV() {
    const csvData = convertToCSV(filteredProducts);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  const user = useAppSelector(selectUser);

  

  return (
    <div>
      <div className="w-full">
        <Button className="bg-blue-300" style={{"float":"right"}} onClick={handleExportCSV}>Export</Button>
      </div>
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
          <Column title="Stock Quantity" dataIndex="quantity" key="quantity" />
          {user?.usertype != "owner" ?
          <Column
          title="Action"
          key="action"
          render={(_: any, record: ItemType) => (
            <Space size="middle">
              <a onClick={() => onEditClick(record)}>Edit</a>
              <a className="hover:text-red hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium" onClick={() => onDeleteClick(record)}>Delete</a>
            </Space>
          )}
        />:<></>}
          
        </Table>
      )}
    </div>
  );
};

export default ProductsGrid;
