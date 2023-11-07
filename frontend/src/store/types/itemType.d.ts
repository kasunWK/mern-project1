type ItemType = {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: Categories;
  image: string;
  quantity: Number;
};

type CartItem = ItemType & {
  order_from_date: Date;
  order_to_date: Date;
  id: string;
  cart_quantity: Number;
};
