type OrderType = {
  status: "pending" | "completed" | "approved";
  _id: string;
  customer_id: string;
  customer_name: string;
  orderforname: string;
  address: string;
  phone: string;
  total: string;
  items: OrderItem[];
};

type OrderItem = {
  item_id: string;
  name: string;
  order_from_date: string;
  order_to_date: string;
  quantity: Number;
};
