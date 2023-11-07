import { DatePicker, Form, FormInstance, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { getDays } from "../../utils/getDays";

type Props = {
  isModalOpen: boolean;
  setShowModal: (res: boolean) => void;
  onOk: (fromDate: Date, toData: Date) => void;
  item: ItemType | undefined;
};

const ProductAddToCart = ({ setShowModal, isModalOpen, onOk, item }: Props) => {
  const [from, setFrom] = useState<any>();
  const [to, setTo] = useState<any>();

  useEffect(() => {
    setFrom(undefined);
    setTo(undefined);
  }, [item, isModalOpen]);

  const calculatePrice = () => {
    if (from && to) {
      return getDays(to, from) * Number(item?.price);
    }
    return "N/A";
  };

  const getDayCount = () => {
    if (from && to) {
      return getDays(to, from);
    }
    return "N/A";
  };
  
  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  return (
    <Modal
      title={"Add To Cart"}
      open={isModalOpen}
      onOk={from && to ? () => onOk(from, to) : undefined}
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
      <DatePicker.RangePicker className="mt-5"
        onChange={(e) => {
          setFrom(e?.[0]?.toDate());
          setTo(e?.[1]?.toDate());
        }}
      />
      <div className="mt-5 font-italic">Description: {item?.description}</div>
      <div className="mt-5 font-italic">Price per day : {item?.price}</div>
      <div className="mt-5 font-bold">Days : {getDayCount()}</div>
      <div className="mt-5 font-bold">Price for selection: {calculatePrice()}</div>
      
    </Modal>
  );
};

export default ProductAddToCart;
