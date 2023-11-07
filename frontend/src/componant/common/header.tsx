import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectUser } from "../../store/api/userApi";
import { removeUser } from "../../store/features/userSlice";
import { useLocation, useNavigate, NavLink } from "react-router-dom"; // Import NavLink
import { clearCart, selectCart } from "../../store/features/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(removeUser());
    dispatch(clearCart());
  };

  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const { pathname } = useLocation();

  const linkStyle = {
    color: "white",
    textDecoration: "none", // Remove underline
  };

  const activeLinkStyle = {
    color: "#ff5e14", // Your active link color
    textDecoration: "none", // Remove underline for active link
    backgroundColor: "gray-800", // Background color for active link
  };

  const generateMenu = () => {
    if (user)
      switch (user.usertype) {
        case "owner":
          return (
            <>
              <div>
                <NavLink
                  to="/owner/overview"
                  style={pathname === "/owner/overview" ? activeLinkStyle : linkStyle}
                  className="text-sm inline capitalize p-2 rounded"
                >
                  Overview
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/owner/orders"
                  style={pathname === "/owner/orders" ? activeLinkStyle : linkStyle}
                  className="text-sm inline capitalize p-2 rounded"
                >
                  Sales
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/owner/products"
                  style={pathname === "/owner/products" ? activeLinkStyle : linkStyle}
                  className="text-sm inline capitalize p-2 rounded"
                >
                  Stock
                </NavLink>
              </div>
            </>
          );
        case "rider":
          return (
            <>
              <div>
                <NavLink
                  to="/rider/orders"
                  style={pathname === "/rider/orders" ? activeLinkStyle : linkStyle}
                  className="text-sm inline capitalize p-2 rounded"
                >
                  Orders
                </NavLink>
              </div>
            </>
          );
        default:
          return (
            <>
              <div>
                <div
                  className="cursor-pointer hover:bg-gray-800 p-0 rounded align-middle relative"
                  onClick={() => navigate("/cart")}
                >
                  <AiOutlineShoppingCart
                    size={20}
                    className="m-0 mx-3"
                    color="white"
                  />
                  <div className="absolute -top-3 px-1 -right-1 bg-red-500 rounded w-4 text-center text-white">
                    {cart.length}
                  </div>
                </div>
              </div>
              <div>
                <NavLink
                  to="/products"
                  style={pathname === "/products" ? activeLinkStyle : linkStyle}
                  className="text-sm inline capitalize p-2 rounded"
                >
                  Products
                </NavLink>
              </div>
            </>
          );
      }
    return (
      <>
        <div>
          <NavLink
            to="/"
            style={pathname === "/" ? activeLinkStyle : linkStyle}
            className="text-sm inline capitalize p-2 rounded"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            style={pathname === "/about" ? activeLinkStyle : linkStyle}
            className="text-sm inline capitalize p-2 rounded"
          >
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact"
            style={pathname === "/contact" ? activeLinkStyle : linkStyle}
            className="text-sm inline capitalize p-2 rounded"
          >
            Contact Us
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Service"
            style={pathname === "/Service" ? activeLinkStyle : linkStyle}
            className="text-sm inline capitalize p-2 rounded"
          >
            Service
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" style={{ height: "100px" }}>
          <div className="flex-shrink-0" >
            <img src="/temp/bl.png" alt="logo" width={110} className="rounded-full" />
          </div>
          <div style={{ color: "#ff5e14", fontFamily: 'Courier New', fontSize: "20px" }}>Buddhika Light(pvt)Ltd.</div>
          <div className="hidden md:block">
            {user != null ? (
              <div
                className="ml-10 flex items-center space-x-4"
                style={{ color: "white" }}
              >
                Hello {user.name} 👋🏼
                {generateMenu()}
                <button
                  className="text-white border p-1 rounded hover-text-gray-600 hover-border-gray-600"
                  onClick={logout}
                  style={{ color: "#ff5e14", fontFamily: 'Courier New' }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="ml-10 flex items-center space-x-4">
                {generateMenu()}
                <button
                  className="text-white border p-1 rounded hover-text-gray-600 hover-border-gray-600"
                  onClick={() => navigate("/login")}
                  style={{ color: "#ff5e14", fontFamily: 'Courier New' }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover-text-white hover-bg-gray-700 focus:outline-none focus-ring-2 focus-ring-inset focus-ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black absolute right-0 z-10">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {user != null ? (
              <div className="flex flex-col items-center space-x-1 gap-2 mt-2">
                {generateMenu()}
                <button
                  className="text-white border p-1 rounded hover-text-gray-600 hover-border-gray-600"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-x-1 gap-2 mt-2">
                {generateMenu()}
                <button
                  className="text-white border p-1 rounded hover-text-gray-600 hover-border-gray-600"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
