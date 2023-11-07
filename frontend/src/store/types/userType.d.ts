type UserType = {
  usertype: "user" | "admin" | "owner" | "rider" | "cashier";
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  is_deleted: string;
};
