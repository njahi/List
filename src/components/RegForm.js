import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function RegForm() {
  const { handleSubmit } = useForm();

  const onFinish = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast.error("wrong credentials");
      } else {
        toast.success("login succesful", {
          position: "top-center",
        });
      }

      const responseData = await response.json();
      console.log(responseData);

      // Handle the response, e.g., save JWT token to local storage

      // store JWT to the session
      //   sessionStorage.setItem("Token:", "token");

      // Handle redirect
      window.location.assign("/login");
    } catch (error) {
      toast.error("Login failed:", error.message);
    }
  };
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onFinish)}>
      <div>
        <h3 style={{ textDecorationLine: "underline" }}>Sign Up</h3>
      </div>
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}>
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name='remember'
          valuePropName='checked'
          noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          className='login-form-button'>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
export default RegForm;
