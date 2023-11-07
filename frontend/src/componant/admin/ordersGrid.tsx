import { useEffect, useState } from "react";
import { Button, Select, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import {
  useChangeOrderStatusMutation,
  useLazyGetOrdersQuery,
} from "../../store/api/orderApi";

type Props = {
  search?: string;
};

const OrdersGrid = ({ search }: Props) => {
  const [fetchOrders, { data: orders }] = useLazyGetOrdersQuery();
  const [filteredOrders, setFilteredOrders] = useState<OrderType[]>([]);
  const [changeOrderStatus] = useChangeOrderStatusMutation();

  useEffect(() => {
    const filterProductsBySearch = (item: OrderType) => {
      if (search) {
        return (
          item.customer_name.toUpperCase().includes(search.toUpperCase()) ||
          item._id.toUpperCase().includes(search.toUpperCase())
        );
      }
      return true;
    };

    setFilteredOrders(
      orders
        ?.filter((e) => filterProductsBySearch(e))
        .map((e) => ({ ...e, key: e._id })) ?? []
    );
  }, [orders, search]);

  useEffect(() => {
    fetchOrders({});
  }, []);

  
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
    const csvData = convertToCSV(filteredOrders);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
  

  return (
    <div>
      <div className="w-full">
        <Button className="bg-blue-300" style={{"float":"right"}} onClick={handleExportCSV}>Export</Button>
      </div>
      {filteredOrders && (
        <Table dataSource={filteredOrders} pagination={false}>
          {/* <Column title="ID" dataIndex="_id" key="id" /> */}
          <Column
            title={
              <div>
                Customer/
                <br />
                Order Name
              </div>
            }
            dataIndex="customer_name"
            key="customer_name"
            render={(data: any, record: OrderType) => (
              <div>
                <div>{record.customer_name}</div>
                <div>{record.orderforname}</div>
              </div>
            )}
          />
          <Column title="Address" dataIndex="address" key="address" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column
            title="Items"
            dataIndex="items"
            key="items"
            render={(data: any[]) => (
              <Table dataSource={data} pagination={false}>
                <Column title="Item Name" dataIndex="name" key="name" />
                <Column title="Quantity" dataIndex="quantity" key="quantity" />
                <Column
                  title="Order From Date"
                  dataIndex="order_from_date"
                  key="order_from_date"
                  render={(data) => (
                    <div>{new Date(data).toLocaleDateString()}</div>
                  )}
                />
                <Column
                  title="Order To Date"
                  dataIndex="order_to_date"
                  key="order_to_date"
                  render={(data) => (
                    <div>{new Date(data).toLocaleDateString()}</div>
                  )}
                />
              </Table>
            )}
          />
          <Column title="Total" dataIndex="total" key="total" />
          <Column
            title="Status"
            key="status"
            dataIndex="status"
            render={(data: any, record: OrderType) => (
              <Space size="middle">
                <div
                  className={
                    (data == "completed"
                      ? "bg-green-200"
                      : data == "pending"
                      ? "bg-yellow-200"
                      : data == "approved"
                      ? "bg-orange-200"
                      : "bg-red-200") + " border rounded p-1"
                  }
                >
                  <Select
                    defaultValue={data}
                    onChange={(e) =>
                      changeOrderStatus({ order_id: record._id, status: e })
                    }
                    options={[
                      { label: "Pending", value: "pending" },
                      { label: "Completed", value: "completed" },
                      { label: "Approved", value: "approved" },
                      { label: "Rejected", value: "rejected" },
                    ]}
                  />
                </div>
              </Space>
            )}
          />
        </Table>
      )}
    </div>
  );
};

export default OrdersGrid;
