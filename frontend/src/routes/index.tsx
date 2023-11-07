import { ReactNode } from "react";
import ProductsPage from "../pages/productsPage";
import MainLayout from "../layouts/mainLayout";
import AdminLayout from "../layouts/adminLayout";
import AdminProductsPage from "../pages/admin/adminProductsPage";
import AdminUsersPage from "../pages/admin/adminUsersPage";
import AdminOrdersPage from "../pages/admin/adminOrdersPage";
import CartPage from "../pages/cartPage";
import RiderOrdersPage from "../pages/rider/riderOrdersPage";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";






export type RouteType = {
  route: string;
  component: ReactNode;
  adminAccess?: boolean;
  userAccess?: boolean;
  ownerAccess?: boolean;
  riderAccess?: boolean;
  bypassLogin?: boolean;
  children?: RouteType[];
};

const PageRoutes: RouteType[] = [
  {
    route: "/",
    component: <MainLayout />,
    userAccess: true,
    bypassLogin: true,
    children: [
      {
        route: "products",
        component: <ProductsPage />,
        userAccess: true,
        bypassLogin: true,
      },
      {
        route: "contact",
        component: <Contact />,
        userAccess: true,
        bypassLogin: true,
      },
      {
        route: "about",
        component: <About />,
        userAccess: true,
        bypassLogin: true,
      },
      {
        route: "service",
        component: <Service />,
        userAccess: true,
        bypassLogin: true,
      },
      {
        route: "cart",
        component: <CartPage />,
        userAccess: true,
      },
    ],
  },
 

  {
    route: "admin",
    component: <AdminLayout />,
    adminAccess: true,
    children: [
      {
        route: "products",
        component: <AdminProductsPage />,
        adminAccess: true,
      },
      {
        route: "users",
        component: <AdminUsersPage />,
        adminAccess: true,
      },
      {
        route: "orders",
        component: <AdminOrdersPage />,
        adminAccess: true,
      },
    ],
  },
  {
    route: "owner",
    component: <MainLayout />,
    ownerAccess: true,
    children: [
      {
        route: "products",
        component: <AdminProductsPage />,
        ownerAccess: true,
      },
      {
        route: "orders",
        component: <AdminOrdersPage />,
        ownerAccess: true,
      },
    ],
  },
  {
    route: "rider",
    component: <MainLayout />,
    riderAccess: true,
    children: [
      {
        route: "orders",
        component: <RiderOrdersPage />,
        riderAccess: true,
      },
    ],
  },
];

export default PageRoutes;
