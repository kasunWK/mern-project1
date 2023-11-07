import React, { useEffect, useState } from "react";
import { Button, Col, Row, Select, Table, message } from "antd";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  clearCart,
  removeItemFromCart,
  selectCart,
} from "../store/features/cartSlice";
import { getDays } from "../utils/getDays";
import Column from "antd/es/table/Column";
import { selectUser, useLazyGetUsersQuery } from "../store/api/userApi";
import { useCreateOrderMutation } from "../store/api/orderApi";

const CartPage: React.FC = () => {
  const cartItems = useAppSelector(selectCart);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();
  const [msg, msgContext] = message.useMessage();
  const [selectedUser, setSelectedUser] = useState<undefined | string>();
  const [getUsers, { data: users }] = useLazyGetUsersQuery();

  useEffect(() => {
    getUsers({});
  }, []);

  const handleRemoveItem = (key: string) => {
    dispatch(removeItemFromCart(key));
  };

  const placeOrder = () => {
    if (user)
      createOrder({
        customer_id:
          user.usertype == "cashier" && selectedUser ? selectedUser : user._id,
        customer_name:
          user.usertype == "cashier" && selectedUser
            ? users?.filter((e) => e._id == selectedUser)[0].name ?? ""
            : user.name,
        items: cartItems.map((e) => ({
          item_id: e._id,
          name: e.name,
          order_from_date: e.order_from_date.toLocaleString(),
          order_to_date: e.order_to_date.toLocaleString(),
        })),
        total: cartItems.reduce(
          (acc, item) =>
            acc +
            Number(item.price) *
              getDays(
                new Date(item.order_to_date),
                new Date(item.order_from_date)
              ),
          0
        ),
      })
        .then(() => {
          msg.success("Order placed");
          dispatch(clearCart());
        })
        .catch(() => {
          msg.error("Failed to place the order");
        });
  };

  return (
    <section className="m-5 bg-gray-300 p-10">
      {msgContext}
      <div className="text-xl font-bold">Cart</div>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <Table
        dataSource={cartItems.map((e) => ({ ...e, key: e._id }))}
        pagination={false}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Order From Date"
          dataIndex="order_from_date"
          key="order_from_date"
          render={(data) => <div>{new Date(data).toLocaleDateString()}</div>}
        />
        <Column
          title="Order To Date"
          dataIndex="order_to_date"
          key="order_to_date"
          render={(data) => <div>{new Date(data).toLocaleDateString()}</div>}
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(value: any, record: CartItem) => (
            <div>
              {Number(value) *
                getDays(
                  new Date(record.order_to_date),
                  new Date(record.order_from_date)
                )}
            </div>
          )}
        />
        <Column
          title="Actions"
          key="actions"
          dataIndex="id"
          render={(value: any) => (
            <a onClick={() => handleRemoveItem(value)}>Remove</a>
          )}
        />
      </Table>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <Row align="middle" justify="space-between">
        <Col>
          <div className="w-full font-bold">
            Total: Rs{" "}
            {cartItems.reduce(
              (acc, item) =>
                acc +
                Number(item.price) *
                  getDays(
                    new Date(item.order_to_date),
                    new Date(item.order_from_date)
                  ),
              0
            )}
          </div>
        </Col>
        <Col>
          {user?.usertype == "cashier" && (
            <Select
              style={{ width: "10rem", marginRight: "5px" }}
              options={users?.map((u) => ({ value: u._id, label: u.name }))}
              onChange={(e) => setSelectedUser(e)}
            />
          )}
          {cartItems.length > 0 && (
            <Button
              onClick={() => placeOrder()}
              className="bg-gray-200"
              disabled={user?.usertype == "cashier" && !selectedUser}
            >
              Place Order
            </Button>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default CartPage;
