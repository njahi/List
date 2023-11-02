import React from "react";
import { Button, Checkbox, Form } from "antd";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAddUser } from "../hooks/useAddUser";

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
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onAdd)}>
      <div>
        <h3 style={{ textDecorationLine: "underline" }}>Sign Up</h3>
      </div>
      <div>
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
      </div>
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
