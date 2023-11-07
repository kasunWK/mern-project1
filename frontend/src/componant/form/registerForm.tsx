import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useRegisterMutation } from "../../store/api/userApi";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [register, { data, isSuccess }] = useRegisterMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  });

  return (
    <div className="flex justify-center items-center flex-col w-6/12">
      <div className="flex flex-col items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Courier New'}}>Register</h1>
      </div>

      <div>
        <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={register}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
          {/* <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="p-2">
            Already have an account ? <Link to={"/login"}>Login here.</Link>
          </div>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="default"
              htmlType="submit"
              className="w-full mt-4 bg-black text-white"
            >
              Register
            </Button>
          </Form.Item>
          {isSuccess && !data && (
            <div className="text-red-800 py-2 px-1">Error register !</div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
