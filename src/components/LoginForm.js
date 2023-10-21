import React from "react";
import "./LoginForm.css";
import { useForm, Controller } from "react-hook-form";
import toast, { ToastIcon } from "react-hot-toast";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast.error("Login failed");
      }

      const responseData = await response.json();
      console.log(responseData);
      ToastIcon.success("login okay", {
        position: "top-center",
      });
      // Handle the response, e.g., save JWT token to local storage

      // store JWT to the session
      sessionStorage.setItem("Token", "123456");

      // Handle redirect
      window.location.assign("/home");
    } catch (error) {
      toast.error("Login failed:", error.message);
    }
  };

  return (
    <>
      <div className='login'>
        <div className='h1'>
          <h1> Admin Login</h1>
          <hr />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='email'>
            <label>Email:</label>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <input
                  type='email'
                  {...field}
                />
              )}
            />
          </div>
          <div className='pass'>
            <label>Password:</label>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <input
                  type='password'
                  {...field}
                />
              )}
            />
          </div>
          <div className='button'>
            <button
              type='submit'
              style={{ backgroundColor: "green" }}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
