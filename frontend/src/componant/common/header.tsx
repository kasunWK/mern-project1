import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectUser } from "../../store/api/userApi";
import { removeUser } from "../../store/features/userSlice";
import { useLocation, useNavigate } from "react-router";
import { clearCart, selectCart } from "../../store/features/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const { pathname } = useLocation();

  const logout = () => {
    dispatch(removeUser());
    dispatch(clearCart());
  };

  const generateMenu = () => {
    if (user)
      switch (user.usertype) {
        case "owner":
          return (
            <>
              <Col>
                <Link
                  to="/owner/orders"
                  className={
                    (pathname == "/owner/orders" ? "bg-gray-800 " : "") +
                    "text-sm inline capitalize p-2 rounded"
                  }
                >
                  Sales
                </Link>
              </Col>
              <Col>
                <Link
                  to="/owner/products"
                  className={
                    (pathname == "/owner/products" ? "bg-gray-800 " : "") +
                    "text-sm inline capitalize p-2 rounded"
                  }
                >
                  Stock
                </Link>
              </Col>
            </>
          );
        case "rider":
          return (
            <>
              <Col>
                <Link
                  to="/rider/orders"
                  className={
                    (pathname == "/rider/orders" ? "bg-gray-800 " : "") +
                    "text-sm inline capitalize p-2 rounded"
                  }
                >
                  Orders
                </Link>
              </Col>
            </>
          );
        default:
          return (
            <>
              <Col>
                <div
                  className="cursor-pointer hover:bg-gray-800 p-1 rounded"
                  onClick={() => navigate("/cart")}
                >
                  <AiOutlineShoppingCart size={20} className="m-2" />
                  <div className="absolute top-0 right-2 bg-red-500 rounded w-3 text-center">
                    {cart.length}
                  </div>
                </div>
              </Col>
              <Col>
                <Link
                  to="/products"
                  className={
                    (pathname == "/products" ? "bg-gray-800 " : "") +
                    "text-sm inline capitalize p-2 rounded"
                  }
                >
                  Products
                </Link>
              </Col>
            </>
          );
      }
    return (
      <Col style={{ color: "#ff5e14", fontFamily: 'Courier New' }}>
      <Link to="/" className={"text-sm inline capitalize p-2 rounded"}>
        Home
      </Link>
      <Link to="/about" className={"text-sm inline capitalize p-2 rounded"}>
        About
      </Link>
      <Link
        to="/contact"
        className={"text-sm inline capitalize p-2 rounded"}
      >
        Contact
      </Link>
      <Link
        to="/service"
        className={"text-sm inline capitalize p-2 rounded"}
      >
        Service
      </Link>
    </Col>
      
    );
  };

  return (
    <section>
      <div className="w-full px-2 py-3 flex items-center justify-between bg-black text-white">
      <img src="/temp/a.jpg" alt="logo" width={60} className="rounded-full" />
        <div style={{ color: "#ff5e14", fontFamily: 'Courier New' }}>Buddhika Light(pvt)</div>
        <div>
          {user != null ? (
            <Row justify="center" align={"middle"} gutter={10}>
              <Col>
                <div className="text-sm inline capitalize p-2">
                  Hello {user.name} 👋🏼
                </div>
              </Col>
              {generateMenu()}
              <Col>
                <button
                  className="text-white border p-1 rounded hover:text-gray-600 hover:border-gray-600"
                  onClick={logout} style={{ color: "#ff5e14", fontFamily: 'Courier New' }}
                >
                  Logout
                </button>
              </Col>
            </Row>
          ) : (
            <Row justify="center" align={"middle"} gutter={10}>
              {generateMenu()}
              <Col>
                <button
                  className="text-white border p-1 rounded hover:text-gray-600 hover:border-gray-600"
                  onClick={() => navigate("/login")} style={{ color: "#ff5e14", fontFamily: 'Courier New' }}
                >
                  Login
                </button>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
