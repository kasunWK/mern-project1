import { DatePicker, Form, FormInstance, Input, Modal, Select } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { getDays } from "../../utils/getDays";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { editItemFromCart, selectCart } from "../../store/features/cartSlice";
import dayjs from "dayjs";

type Props = {
  isModalOpen: boolean;
  setShowModal: (res: boolean) => void;
  id: string;
};

const EditCartProduct = ({ setShowModal, isModalOpen, id }: Props) => {
  const cartItems = useAppSelector(selectCart);
  const [from, setFrom] = useState<dayjs.Dayjs>();
  const [to, setTo] = useState<dayjs.Dayjs>();
  const [quantity, setQuantity] = useState("0");
  const item = cartItems.find((p) => p.id == id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setQuantity(`${item?.cart_quantity ?? 0}`);
    setFrom(dayjs(item?.order_from_date));
    setTo(dayjs(item?.order_to_date));
  }, [item, isModalOpen]);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const calculatePrice = () => {
    if (from && to && quantity) {
      return (
        getDays(to.toDate(), from.toDate()) *
        Number(item?.price) *
        Number(quantity)
      );
    }
    return "N/A";
  };

  const getDayCount = () => {
    if (from && to) {
      return getDays(to.toDate(), from.toDate());
    }
    return "N/A";
  };

  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  const onEdit = () => {
    if (item) {
      dispatch(
        editItemFromCart({
          ...item,
          order_from_date: from!.toDate(),
          order_to_date: to!.toDate(),
          cart_quantity: Number(quantity),
        })
      );
    }
    setShowModal(false);
  };

  return (
    <Modal
      title={"Add To Cart"}
      open={isModalOpen}
      onOk={
        from && to && Number(quantity) >= 0
          ? () =>
              Number(item?.quantity) >= Number(quantity) ? onEdit() : undefined
          : undefined
      }
      onCancel={() => setShowModal(false)}
      okType="default"
    >
      <img
        alt={item?.name}
        placeholder=""
        src={`http://localhost:3001/uploads/${item?.image}`}
        onError={addImageFallback}
        style={{ height: "200px", width: "100%" }}
      />
      <Form className="my-2">
        <Form.Item label="Dates">
          <DatePicker.RangePicker
            value={[dayjs(from), dayjs(to)]}
            onChange={(e) => {
              setFrom(dayjs(e?.[0]));
              setTo(dayjs(e?.[1]));
            }}
          />
        </Form.Item>
        <Form.Item label="Quantity">
          <Input
            className="w-20"
            type="number"
            min={0}
            placeholder="Required Quantity"
            value={Number(quantity)}
            onChange={handleQuantityChange}
          />
        </Form.Item>
      </Form>
      <div>{item?.quantity.toString()} Available</div>
      <div style={{ color: "red" }}>
        {Number(item?.quantity) >= Number(quantity) ? "" : "Not Enough Items"}
      </div>

      <div className="mt-5 font-italic">Description: {item?.description}</div>
      {/* <div className="mt-5 font-italic">Description: {item?.description}</div> */}
      <div className="mt-5 font-italic">Price per day : {item?.price}</div>
      <div className="mt-5 font-bold">Days : {getDayCount()}</div>
      <div className="mt-5 font-bold">
        Price for selection: {calculatePrice()}
      </div>
    </Modal>
  );
};

export default EditCartProduct;
