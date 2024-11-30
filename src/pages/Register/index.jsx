import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-4 sm:px-0 px-2">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        className="border border-gray-300 rounded-xl w-full sm:w-[600px] md:w-[600px] lg:w-[600px] px-4 sm:px-5 pt-7"
      >
        <Link
          to={"/"}
          className="text-black no-underline text-xl font-bold hover:text-black"
        >
          <div className="flex flex-col justify-center items-center text-center text-3xl sm:text-4xl font-bold mb-8">
            <h1 className="relative z-20">E_Shop</h1>
            <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20"></span>
          </div>
        </Link>

        <div>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <div className="flex justify-start">
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => navigate("/")}
            className="bg-red-600 hover:bg-red-800 w-full"
          >
            Register
          </Button>
        </div>

        <Form.Item className="flex flex-row justify-center mt-4">
          <div className="w-[300px] p-2 flex flex-row justify-center gap-x-2">
            <span>Already have an account?</span>
            <Link
              to={"/login"}
              className="text-gray-500 underline hover:text-red-600 hover:underline"
            >
              Login
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
