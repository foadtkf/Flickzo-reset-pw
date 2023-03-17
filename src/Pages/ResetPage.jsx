import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const ResetPage = () => {
  const urlPathname = window.location.pathname;
  const token = urlPathname.split("/").pop();
  const { register, handleSubmit, reset, formState } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    if (data.password === data.conpassword) {
      setLoading(true);
      const url = `https://flickzo-backend.vercel.app/api/auth/reset-password?token=${token}`;
      // console.log(url);
      axios
        .post(url, { password: data.password })
        .then((res) => {
          toast.dark("Successfully reset password");
          reset();
          setLoading(false);
        })
        .catch((err) => {
          toast.error("Looks like your token got expired! Please try again.");
          setLoading(false);
        });
    } else {
      toast.error("passwords did not mathced");
      setLoading(false);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  gap-y-3 px-[10%] lg:px-[20%]  py-[5%]"
      >
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Enter Password"
          className="input input-bordered input-sm md:input-md w-full shadow-2xl shadow-blue-700 focus:shadow-none"
        />
        <input
          {...register("conpassword", { required: true })}
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered input-sm md:input-md w-full shadow-2xl shadow-blue-700 focus:shadow-none"
        />
        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-[12px] sm:text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPage;
