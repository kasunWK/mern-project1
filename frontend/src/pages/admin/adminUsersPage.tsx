import { Button, Col, Row, message } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import UsersGrid from "../../componant/admin/usersGrid";
import { useForm } from "antd/es/form/Form";
import AddEditUser from "../../componant/common/addEditUser";
import {
  useEditUserMutation,
  useRegisterMutation,
} from "../../store/api/userApi";

const AdminUsersPage = () => {
  const [searchText, setSearchText] = useState("");
  const [showUserModal, setShowUserModal] = useState(false);
  const [editId, setEditId] = useState<string | undefined>();
  const [form] = useForm();
  const [msg, msgContext] = message.useMessage();
  const [createUser] = useRegisterMutation();
  const [updateUser] = useEditUserMutation();

  const onAddUserClick = () => {
    setEditId(undefined);
    form.resetFields();
    setShowUserModal(true);
  };

  const onEditUser = (user: UserType) => {
    setEditId(user._id);
    form.setFieldsValue({ ...user });
    setShowUserModal(true);
  };

  const editUser = (values: any) => {
    updateUser({ ...values, user_id: editId })
      .then(() => {
        msg.success("User updated");
        setShowUserModal(false);
      })
      .catch(() => {
        msg.error("Failed to update the user");
      });
  };

  const addUser = (values: any) => {
    createUser({ ...values, item_id: editId })
      .then(() => {
        msg.success("User created");
        setShowUserModal(false);
      })
      .catch(() => {
        msg.error("Failed to create the user");
      });
  };

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editId) {
          editUser(values);
        } else {
          addUser(values);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="m-5 bg-gray-300 p-10">
      {msgContext}
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold">Users</div>
        </Col>
        <Col>
          <Row>
            <Col>
              <Search
                placeholder="input search text"
                onSearch={(e) => setSearchText(e)}
                style={{ width: 200 }}
              />
            </Col>
            <Col>
              <Button onClick={onAddUserClick} className="bg-blue-300">
                Add Users
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <AddEditUser
        form={form}
        isModalOpen={showUserModal}
        onOk={onOk}
        setShowModal={setShowUserModal}
        isEdit={editId != undefined}
      />
      <UsersGrid search={searchText} onClickEdit={onEditUser} />
    </section>
  );
};

export default AdminUsersPage;
