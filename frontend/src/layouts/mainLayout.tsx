import Footer from "../componant/common/footer";
import Header from "../componant/common/header";
import { Outlet } from "react-router-dom";

const MainLayout = (props: any) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
