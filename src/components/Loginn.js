import React from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form } from "antd";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import "./Loginn.css";
import { useNavigate } from "react-router-dom";
function Loginn() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onFinish = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
      if (!response.ok) {
        toast.error("wrong credentials");

        navigate("/register");
      } else {
        toast.success("login succesful", {
          position: "top-center",
        });
        navigate("/home");
      }

      const responseData = await response.json();
      console.log(responseData);
      const token = responseData.token;

      // Handle the response, e.g., save JWT token to local storage

      // store JWT to the session
      sessionStorage.setItem("Token", token);

      // Handle redirect
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
        <h3 style={{ textDecorationLine: "underline" }}>Admin Login</h3>
      </div>
      <Form.Item>
        <label>Email:</label>
        <input
          {...register("email", { required: true })}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item>
        <label>Pass:</label>
        <input
          {...register("password", { required: true })}
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
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Loginn;
