import React from "react";
import { Button, Checkbox, Form } from "antd";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAddUser } from "../hooks/useAddUser";
import { Link } from "react-router-dom";

function RegForm() {
  const { handleSubmit, reset, register } = useForm();
  const { addingUser, isAddingUser, error } = useAddUser();
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
    if (error) {
      toast.error("error");
    } else {
      toast.success("User Registered");
      window.location.assign("/login");
    }
  }

  //   const onRegister = async (data) => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/user", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (!response.ok) {
  //         toast.error("wrong credentials");
  //       } else {
  //         toast.success("login succesful", {
  //           position: "top-center",
  //         });
  //       }

  //       const responseData = await response.json();
  //       console.log(responseData);

  //       // Handle the response, e.g., save JWT token to local storage

  //       // store JWT to the session
  //       //   sessionStorage.setItem("Token:", "token");

  //       // Handle redirect
  //       window.location.assign("/login");
  //     } catch (error) {
  //       toast.error("Login failed:", error.message);
  //     }
  //   };
  return (
    <>
      {/* <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit(onAdd)}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}>
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
            <label>Password:</label>
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
      </Form> */}
      <form onSubmit={handleSubmit(onAdd)}>
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
      </form>
    </>
  );
}
export default RegForm;
