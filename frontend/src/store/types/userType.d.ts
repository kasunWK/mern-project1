type UserType = {
  usertype: "user" | "admin" | "owner" | "rider" | "cashier";
  _id: string;
  name: string;
  email: string;
  is_deleted: boolean;
};
