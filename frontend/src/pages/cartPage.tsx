import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, Table, message } from "antd";
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
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditCartProduct from "../componant/common/editProductCart";
import md5 from 'crypto-js/md5';

const CartPage: React.FC = () => {
  const cartItems = useAppSelector(selectCart);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();
  const [msg, msgContext] = message.useMessage();
  const [selectedUser, setSelectedUser] = useState<undefined | string>();
  const [getUsers, { data: users }] = useLazyGetUsersQuery();

  const [orderaddress, setorderaddress] = useState("");
  const [orderPhone, setorderPhone] = useState("");
  const [orderforname, setorderforname] = useState("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setorderaddress(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setorderPhone(event.target.value);
  };

  const handleOrderforName = (event: ChangeEvent<HTMLInputElement>) => {
    setorderforname(event.target.value);
  };

  useEffect(() => {
    getUsers({});
  }, []);

  const handleRemoveItem = (key: string) => {
    dispatch(removeItemFromCart(key));
  };

  const handleEditItem = (id: string) => {
    setSelectedItem(id);
    setShowEditModal(true);
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
        orderforname: orderforname,
        address: orderaddress,
        phone: orderPhone,
        items: cartItems.map((e) => ({
          item_id: e._id,
          name: e.name,
          order_from_date: e.order_from_date.toLocaleString(),
          order_to_date: e.order_to_date.toLocaleString(),
          quantity: e.cart_quantity,
        })),
        total: cartItems.reduce(
          (acc, item) =>
            acc +
            Number(item.price) *
            getDays(
              new Date(item.order_to_date),
              new Date(item.order_from_date)
            ) *
            Number(item.quantity),
          0
        ),
      })
        .then(() => {
          msg.success("Order placed");
          setorderPhone("");
          setorderaddress("");
          setorderforname("");
          dispatch(clearCart());
        })
        .catch(() => {
          msg.error("Failed to place the order");
        });
  };


  return (
    <section className="m-5 bg-gray-300 p-10">
      {msgContext}
      <EditCartProduct
        id={selectedItem}
        isModalOpen={showEditModal}
        setShowModal={setShowEditModal}
      />
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
        <Column title="Quantity" dataIndex="cart_quantity" key="quantity" />

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
                ) *
                Number(record.cart_quantity)}
            </div>
          )}
        />
        <Column
          title="Actions"
          key="actions"
          dataIndex="id"
          width={100}
          render={(value: any) => (
            <Row>
              <Col flex={1}>
                <AiFillEdit
                  className="cursor-pointer"
                  onClick={() => handleEditItem(value)}
                />
              </Col>
              <Col flex={1}>
                <AiFillDelete
                  color="red"
                  className="cursor-pointer"
                  onClick={() => handleRemoveItem(value)}
                />
              </Col>
            </Row>
          )}
        />
      </Table>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Row justify="space-between">
          <Input
            className="mt-5"
            style={{ width: "30%" }}
            type="text"
            placeholder="Order For Name"
            value={orderforname}
            onChange={handleOrderforName}
          />
          <Input
            className="mt-5"
            style={{ width: "30%" }}
            type="text"
            value={orderaddress}
            onChange={handleAddressChange}
            placeholder="Address"
          />
          <Input
            className="mt-5"
            style={{ width: "30%" }}
            type="phone"
            placeholder="Phone"
            value={orderPhone}
            onChange={handlePhoneChange}
          />
        </Row>
      </Form>
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

            /// payment gateway eka nathuwa order place krnna meka uncomment krnna

            // <Button
            //   onClick={() => placeOrder()}
            //   className="bg-gray-200"
            //   disabled={user?.usertype == "cashier" && !selectedUser}
            // >
            //   Place Order
            // </Button>

            //CODE FOR PAYHERE

            <form action="https://sandbox.payhere.lk/pay/checkout" method="post">
              <input type="hidden" name="merchant_id" value="1223403" />
              <input type="hidden" name="return_url" value="http://sample.com/return" />
              <input type="hidden" name="cancel_url" value="http://sample.com/cancel" />
              <input type="hidden" name="notify_url" value="http://sample.com/notify" />

              <input type="hidden" name="order_id" value={Date.now()} />
              <input type="hidden" name="items" value="" />
              <input type="hidden" name="currency" value="LKR" />
              <input type="hidden" name="amount" value={cartItems.reduce(
                (acc, item) =>
                  acc +
                  Number(item.price) *
                  getDays(
                    new Date(item.order_to_date),
                    new Date(item.order_from_date)
                  ),
                0
              )} />

              <input type="hidden" name="first_name" value={orderforname} />
              <input type="hidden" name="last_name" value="" />
              <input type="hidden" name="email" value={user?.email} />
              <input type="hidden" name="phone" value={orderPhone} />
              <input type="hidden" name="address" value={orderaddress} />
              <input type="hidden" name="city" value="" />
              <input type="hidden" name="country" value="Sri Lanka" />
              <input type="hidden" name="hash" value={md5("1223403" + Date.now() + parseFloat(cartItems.reduce(
                (acc, item) =>
                  acc +
                  Number(item.price) *
                  getDays(
                    new Date(item.order_to_date),
                    new Date(item.order_from_date)
                  ),
                0
              ).toString()).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '') + "LKR" + md5("MjQ1ODY5MTg0MTM0OTkzMDg2MjI0MjMwNjgyMTE2Mzk1NTU5MjExNQ==").toString().toUpperCase()).toString().toUpperCase()} />

              <button type="submit" 

              // meka uncomment kaloth payment order eka save wenwa payment eka enna klin
              onClick={()=>placeOrder()} 
              
              className="bg-gray-200 ant-btn css-dev-only-do-not-override-1vdi0k4 ant-btn-default bg-gray-200" disabled={user?.usertype == "cashier" && !selectedUser}>
                Place Order
              </button>
            </form>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default CartPage;
