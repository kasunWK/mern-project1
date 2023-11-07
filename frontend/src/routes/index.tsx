import { ReactNode } from "react";
import ProductsPage from "../pages/productsPage";
import MainLayout from "../layouts/mainLayout";
import AdminLayout from "../layouts/adminLayout";
import AdminProductsPage from "../pages/admin/adminProductsPage";
import AdminUsersPage from "../pages/admin/adminUsersPage";
import AdminOrdersPage from "../pages/admin/adminOrdersPage";
import CartPage from "../pages/cartPage";
import RiderOrdersPage from "../pages/rider/riderOrdersPage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import AdminOverviewPage from "../pages/admin/adminOverviewPage";
import SingleItemPage from "../pages/singleItemPage";
import Service from "../pages/service";
import Dj from "../pages/dj";
import Event from "../pages/event";



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
        route: "cart",
        component: <CartPage />,
        userAccess: true,
      },
      {
        route: "products/:id",
        component: <SingleItemPage />,
        userAccess: true,
        bypassLogin: true,
      },
    ],
  },
  {
    route: "/about",
    component: <AboutPage />,
    riderAccess: true,
    bypassLogin: true,
  },
  {
    route: "/contact",
    component: <ContactPage />,
    riderAccess: true,
    bypassLogin: true,
  },

  {
    route: "/Service",
    component:<Service />,
    riderAccess: true,
    bypassLogin: true,
  },

  {
    route: "/Dj",
    component:<Dj />,
    bypassLogin: true,
  },
  {
    route: "/event",
    component:<Event />,
    bypassLogin: true,
  }, 

  {
    route: "admin",
    component: <AdminLayout />,
    adminAccess: true,
    children: [
      {
        route: "overview",
        component: <AdminOverviewPage />,
        adminAccess: true,
      },
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
        route: "overview",
        component: <AdminOverviewPage />,
        ownerAccess: true,
      },
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
