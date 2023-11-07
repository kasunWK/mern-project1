import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { LiaClipboardListSolid } from "react-icons/lia";
import { AiFillDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { Layout, Menu, Button, Row, Col } from "antd";
import { Outlet, useNavigate } from "react-router";
import { selectUser } from "../store/api/userApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { removeUser } from "../store/features/userSlice";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-10 rounded bg-gray-800 m-2"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              key: "0",
              icon: <AiFillDashboard />,
              label: "Overview",
              onClick: () => navigate("/admin/overview"),
            },
            {
              key: "1",
              icon: <LiaClipboardListSolid />,
              label: "Products",
              onClick: () => navigate("/admin/products"),
            },
            {
              key: "2",
              icon: <AiOutlineShoppingCart />,
              label: "Orders",
              onClick: () => navigate("/admin/orders"),
            },
            {
              key: "3",
              icon: <FiUsers />,
              label: "Users",
              onClick: () => navigate("/admin/users"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Row align="middle">
            <Col xs={4} sm={2} md={2} xl={1}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "white",
                }}
              />
            </Col>
            <Col xs={8} sm={4} md={4} xl={3}>
              <div className="text-sm inine capitalize text-white">
                Hello {user?.name}
              </div>
            </Col>
            <Col
              xs={{ offset: 6 }}
              sm={{ offset: 15 }}
              md={{ offset: 15 }}
              xl={{ offset: 18 }}
              xxl={{ offset: 19 }}
            >
              <button className="text-white " onClick={logout}>
                Logout
              </button>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
