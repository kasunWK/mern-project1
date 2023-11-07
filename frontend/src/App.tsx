import "./App.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import { ConfigProvider, message } from "antd";
import { useAppSelector } from "./store/store";
import { selectUser } from "./store/api/userApi";
import RegisterPage from "./pages/registerPage";
import { useEffect } from "react";
import PageRoutes, { RouteType } from "./routes";
import Contact from "./pages/contact";
import About from "./pages/about";
import Service from "./pages/service";





function App() {
  const user = useAppSelector(selectUser);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      if (pathname == "/login" || pathname == "/register") navigateToHomePage();
      if (pathname == "/") navigateToHomePage();
    } else if (pathname == "/") navigate("/products");
  });

  const navigateToHomePage = () => {
    switch (user?.usertype) {
      case "admin":
        return navigate("/admin/products");
      case "owner":
        return navigate("/owner/products");
      case "rider":
        return navigate("/rider/orders");
      case "user":
        return navigate("/products");
      case "cashier":
        return navigate("/products");
      default:
        return;
    }
  };

  const generateRoutes = (page: RouteType) => {
    const getPage = () => {
      if (user == null) {
        if (page.bypassLogin) return page.component;
        return <Navigate to="/" />;
      }
      switch (user.usertype) {
        case "user":
          return page.userAccess ? page.component : <Navigate to="/" />;
        case "cashier":
          return page.userAccess ? page.component : <Navigate to="/" />;
        case "admin":
          return page.adminAccess ? page.component : <Navigate to="/" />;
        case "owner":
          return page.ownerAccess ? page.component : <Navigate to="/" />;
        case "rider":
          return page.riderAccess ? page.component : <Navigate to="/" />;
        default:
          return <Navigate to="/" />;
      }
    };
    if (page.children) {
      return (
        <Route key={page.route} path={page.route} element={getPage()}>
          {page.children.map((e) => generateRoutes(e))}
        </Route>
      );
    }
    return <Route key={page.route} path={page.route} element={getPage()} />;
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "black",
          },
        }}
      >
        <Routes>
          {PageRoutes.map((e) => generateRoutes(e))}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
