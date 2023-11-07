// src/SingleItemPage.js
import { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Button, message, DatePicker, Form, Input } from "antd";
import { useLazyGetProductsQuery } from "../store/api/productApi";
import { useParams } from "react-router";
import { selectUser } from "../store/api/userApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import uuid from "react-uuid";
import { addItemToCart } from "../store/features/cartSlice";
import { getDays } from "../utils/getDays";

const SingleItemPage = () => {
  const [getProducts, { data }] = useLazyGetProductsQuery();
  const { id } = useParams();
  const user = useAppSelector(selectUser);
  const [msg, msgContext] = message.useMessage();
  const dispatch = useAppDispatch();
  const [from, setFrom] = useState<any>();
  const [to, setTo] = useState<any>();
  const [quantity, setQuantity] = useState("0");

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    getProducts({});
  }, [id]);

  let product: ItemType | undefined = data?.find((p) => p?._id == id);

  const onAddToCart = () => {
    if (product) {
      dispatch(
        addItemToCart({
          ...product,
          id: uuid(),
          order_from_date: from,
          order_to_date: to,
          cart_quantity: Number(quantity),
        })
      );
      msg.success("Item Added to Cart");
    }
  };

  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  const calculatePrice = () => {
    if (from && to && quantity && product) {
      return getDays(to, from) * Number(product.price) * Number(quantity);
    }
    return "N/A";
  };

  const getDayCount = () => {
    if (from && to) {
      return getDays(to, from);
    }
    return "N/A";
  };

  return (
    <div style={{ padding: "20px" }}>
      {msgContext}
      {product && (
        <center>
          <Row className="border-2 py-10 border-black rounded">
            <Col flex={1}>
              <img
                alt={product.name}
                placeholder=""
                src={`http://localhost:3001/uploads/${product.image}`}
                onError={addImageFallback}
                style={{ height: "100%", width: "80%" }}
              />
            </Col>
            <Col flex={5} className="text-left">
              <div className="text-4xl font-bold capitalize">
                {product.name}
              </div>
              <div className="py-2">{product.description}</div>
              <div className="mt-2 font-bold text-xl">
                {"Rs : " + product.price}
              </div>
              <Form className="my-2">
                <Form.Item label="Dates">
                  <DatePicker.RangePicker
                    onChange={(e) => {
                      setFrom(e?.[0]?.toDate());
                      setTo(e?.[1]?.toDate());
                    }}
                  />
                </Form.Item>
                <Form.Item label="Quantity">
                  <Input
                    className="w-20"
                    type="number"
                    max={Number(product.quantity)}
                    min={0}
                    placeholder="Required Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </Form.Item>
              </Form>
              <div>{product.quantity.toString()} Available</div>
              <div style={{ color: "red" }}>
                {Number(product.quantity) >= Number(quantity)
                  ? ""
                  : "Not Enough Items"}
              </div>

              <div className="mt-5 font-italic">
                Description: {product.description}
              </div>
              {/* <div className="mt-5 font-italic">Description: {item?.description}</div> */}
              <div className="mt-5 font-italic">
                Price per day : {product.price}
              </div>
              <div className="mt-5 font-bold">Days : {getDayCount()}</div>
              <div className="mt-5 font-bold">
                Price for selection: {calculatePrice()}
              </div>
              {user != null && (
                <Button
                  size="large"
                  type="default"
                  className="bg-blue-600 w-10/12 text-white mt-2"
                  disabled={!to || !from || Number(quantity) <= 0}
                  onClick={() => product && onAddToCart()}
                >
                  Add To Cart
                </Button>
              )}
            </Col>
          </Row>
        </center>
      )}
    </div>
  );
};

export default SingleItemPage;
