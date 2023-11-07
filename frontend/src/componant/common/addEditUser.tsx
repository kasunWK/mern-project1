import { Form, FormInstance, Input, Modal, Select } from "antd";

type Props = {
  isModalOpen: boolean;
  setShowModal: (res: boolean) => void;
  onOk: () => void;
  form: FormInstance;
  isEdit?: boolean;
};

const AddEditUser = ({
  setShowModal,
  isModalOpen,
  form,
  onOk,
  isEdit = false,
}: Props) => {
  return (
    <Modal
      title={isEdit ? "Edit User" : "Add User"}
      open={isModalOpen}
      onOk={onOk}
      onCancel={() => setShowModal(false)}
      okType="default"
    >
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="usertype"
          label="User Type"
          rules={[{ required: true }]}
          initialValue={"user"}
        >
          <Select
            defaultValue="user"
            options={[
              { label: "User", value: "user" },
              { label: "Admin", value: "admin" },
              { label: "Rider", value: "rider" },
              { label: "Owner", value: "owner" },
              { label: "Cashier", value: "cashier" },
            ]}
          />
        </Form.Item>
        {!isEdit && (
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default AddEditUser;
