import { Col, Row } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import OrdersGrid from "../../componant/admin/ordersGrid";

const AdminOrdersPage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <section className="m-5 bg-gray-300 p-10">
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold">Orders</div>
        </Col>
        <Col>
          <Search
            placeholder="input search text"
            onSearch={(e) => setSearchText(e)}
            style={{ width: 200 }}
          />
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <OrdersGrid search={searchText} />
    </section>
  );
};

export default AdminOrdersPage;
