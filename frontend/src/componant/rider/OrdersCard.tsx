import { useEffect, useState } from "react";
import { Button, Card, Col, Row, message } from "antd";
import Meta from "antd/es/card/Meta";
import { useAppDispatch } from "../../store/store";
import {
  useChangeOrderStatusMutation,
  useLazyGetOrdersQuery,
} from "../../store/api/orderApi";

export enum Categories {
  genareter,
  screen,
  lights,
  sounds,
}

type Props = {
  search?: string;
};

const OrdersCard = ({ search }: Props) => {
  const [fetchOrders, { data: orders }] = useLazyGetOrdersQuery();
  const [changeOrderStatus] = useChangeOrderStatusMutation();
  const [filteredOrders, setFilteredOrders] = useState<OrderType[]>([]);
  const dispatch = useAppDispatch();
  const [msg, msgContext] = message.useMessage();

  useEffect(() => {
    const filterProductsBySearch = (item: OrderType) => {
      if (search) {
        return item.customer_name.toUpperCase().includes(search.toUpperCase());
      }
      return true;
    };

    setFilteredOrders(
      orders
        ?.filter((e) => filterProductsBySearch(e))
        .filter((e) => e.status == "approved") ?? []
    );
  }, [orders, search]);

  useEffect(() => {
    fetchOrders({});
  }, []);

  const completeOrder = (order_id: string) => {
    changeOrderStatus({ order_id, status: "completed" })
      .then(() => {
        msg.success("Order completed");
      })
      .catch(() => {
        msg.error("Failed to update the order");
      });
  };

  return (
    <Row gutter={10}>
      {msgContext}
      {filteredOrders.map((order) => (
        <Col key={order._id}>
          <Card
            hoverable
            bodyStyle={{ paddingBottom: "5px" }}
            style={{ width: 240, margin: "5px" }}
            actions={[
              <Button type="default" className="bg-blue-600 w-10/12 text-white">
                <a
                  target="_blank"
                  href={"https://www.google.com/maps?q=" + encodeURIComponent(order.address)}
                  style={{ color: "white" }}
                >
                  Map
                </a>
              </Button>,
              <Button
                onClick={() => completeOrder(order._id)}
                type="default"
                className="bg-blue-600 w-10/12 text-white"
              >
                Complete
              </Button>,
            ]}
          >
            <Meta
              title={order.customer_name}
              description={order.items.map((e) => e.name)}
            />
            <Meta
              title={order.address}
              description={order.phone}
            />
            <div className="mt-5 font-bold">{"Rs : " + order.total}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default OrdersCard;
