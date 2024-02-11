import React from "react";
import { Button, Checkbox, Form } from "antd";
import { useForm } from "react-hook-form";
import { useLogIn } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import "./Loginn.css";
// import { useUsers } from "../context/userContext";

function Loginn() {
  // const { login, isLoading } = useUsers();
  const { handleSubmit, register, reset } = useForm();
  const { loginFn, isLoading } = useLogIn();
  async function onFinish(email, password) {
    loginFn(email, password, {
      onSettled: () => {
        reset();
      },
    });
  }
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
          {...register("email", { required: "This filled is required" })}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item>
        <label>Pass:</label>
        <input
          {...register("password", { required: "This filled is required" })}
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
          {isLoading ? <p>loading...</p> : "login"}
        </Button>
      </Form.Item>
      <div style={{ display: "flex" }}>
        <p>Not yet Registered?</p>

        <Form.Item>
          <Link to='/'>
            <Button type='primary'>Register</Button>
          </Link>
        </Form.Item>
      </div>
    </Form>
  );
}
export default Loginn;
