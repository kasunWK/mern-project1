type CommonResponse<T> =
  | {
      error: true;
      data: undefined;
    }
  | { error: false; data: T };

type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type UserEditRequest = {
  name: string;
  email: string;
  user_id: string;
};

type ProductByCategoryRequest = {
  category: Categories;
};

type UpdateProductRequest = {
  item_id: string;
  name: string;
  description: string;
  price: string;
  category: string;
};

type ChangeOrderStatusRequest = {
  order_id: string;
  status: string;
};

type UserRequest = { user_id: string };

type CreateOrderRequest = {
  customer_id: string;
  customer_name: string;
  orderforname:string;
  address: string;
  phone: string;
  total: number;
  items: OrderItem[];
};
