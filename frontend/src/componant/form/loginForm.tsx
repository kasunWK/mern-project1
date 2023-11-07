import { Button, Form, Input, message } from "antd";
import { selectUser, useLoginMutation } from "../../store/api/userApi";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addUser } from "../../store/features/userSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addUser(data));
    }
  });
  const user = useAppSelector(selectUser);

  return (
    <div className="flex justify-center items-center flex-col w-6/12">
      <div className="flex flex-col items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Courier New'}}>LOGIN</h1>
      </div>

      <div>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={login}
          autoComplete="off"
        >
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

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="p-2">
            Don't have an account ? <Link to={"/register"}>Register here.</Link>
          </div>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-4 bg-black"
            >
              Submit
            </Button>
            {error && (
              <div className="text-red-800 py-2 px-1">Error login !</div>
            )}
            {
              (!error)&&(user?.is_deleted)?<div className="text-red-800 py-2 px-1"> Account Not Active !</div>:<></>
            }
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
