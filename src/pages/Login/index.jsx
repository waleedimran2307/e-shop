import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CustomCheckedBox from "../../components/CustomCheckedBox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderSection from "../../components/LoaderSection";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    toast.success("You have log in Successfully!");
    navigate("/");
  };

  return (
    <>
      <ToastContainer theme="dark" bodyClassName="toast-body" />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 sm:px-0 px-2">
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          className="border border-gray-300 px-6 pt-6 pb-4 rounded-xl w-full sm:w-[360px] md:w-[460px] lg:w-[520px]"
        >
          <Link to={"/"} className="text-black no-underline text-xl font-bold hover:text-black">
            <div className="flex flex-col justify-center items-center text-center text-3xl font-bold mb-6 ">
              <h1 className="relative z-20">E_Shop</h1>
              <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20"></span>
            </div>
          </Link>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <CustomCheckedBox />
              </Form.Item>
              <span className="text-sm underline cursor-pointer hover:text-red-700">
                Forgot password?
              </span>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="bg-red-600 hover:bg-red-800"
   a
            >
              Login
            </Button>

            <div className="flex flex-row gap-x-2 justify-center mt-2">
              <span className="text-sm">Already have an account?</span>
              <Link
                to={"/register"}
                className="text-gray-500 underline hover:text-red-700 hover:underline"
              >
                Register
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
