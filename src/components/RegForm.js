import React from "react";
import { Button, Checkbox, Form } from "antd";
import { useForm } from "react-hook-form";
import { useAddUser } from "../hooks/useAddUser";
import { Link } from "react-router-dom";

function RegForm() {
  const { handleSubmit, reset, register } = useForm();
  const { addingUser, isAddingUser } = useAddUser();
  function onAdd(data) {
    console.log(data);
    addingUser(data, {
      onSettled: () => {
        reset();
      },
    });
    if (isAddingUser) {
      return <p>Adding...</p>;
    }
  }
  return (
    <>
      <Form
        name='normal_login'
        style={{
          padding: "2rem 3rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: " lightskyblue",
          borderRadius: "7px",
          marginLeft: "5.5rem",
          minHeight: "calc(100vh - 6rem)",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit(onAdd)}>
        <div>
          <h3 style={{ textDecorationLine: "underline" }}>Sign Up</h3>
        </div>
        <div>
          <Form.Item>
            <label>Name:</label>
            <input
              type='text'
              placeholder='Name'
              {...register("name", { required: true })}
            />
          </Form.Item>
          <Form.Item>
            <label>Email:</label>
            <input
              type='email'
              placeholder='Email'
              {...register("email", { required: true })}
            />
          </Form.Item>
          <Form.Item>
            <label>Pass:</label>
            <input
              {...register("password", { required: true })}
              placeholder='Password'
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Form.Item
            name='remember'
            valuePropName='checked'
            noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <div style={{ display: " flex" }}>
          <div>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'>
                Sign Up
              </Button>
            </Form.Item>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <Form.Item>
              <Link to='/login'>
                <Button type='primary'>Login</Button>
              </Link>
            </Form.Item>
          </div>
        </div>
      </Form>
      {/* <form onSubmit={handleSubmit(onAdd)}>
        <div style={{ position: "relative" }}>
          <label>Name</label>
          <input
            style={{
              borderRadius: "8px",
              outline: "none",
              borderColor: "black",
            }}
            type='text'
            placeholder='Name'
            {...register("name")}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            style={{
              borderRadius: "8px",
              outline: "none",
              borderColor: "black",
            }}
            type='email'
            placeholder='Email'
            {...register("email")}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            style={{
              borderRadius: "8px",
              outline: "none",
              borderColor: "black",
            }}
            type='password'
            placeholder='Password'
            {...register("password")}
            required
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "blue",
              borderRadius: "8px",
              borderColor: "blue",
            }}
            type='submit'>
            Signup
          </button>
        </div>
      </form> */}
    </>
  );
}
export default RegForm;
