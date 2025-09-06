"use client";
import React, { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import { formSubmit } from "@/app/http";

export default function Form({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^\+[1-9]\d{9,14}$/.test(value)) {
          error = "Invalid phone number (e.g. +919090909090)";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check fields
    let newErrors = {};
    let firstError = "";

    for (let [key, value] of Object.entries(formData)) {
      const error = validateField(key, value);
      if (error && !firstError) {
        firstError = error; // keep the first error only
      }
      if (error) newErrors[key] = error;
    }

    setErrors(newErrors);

    if (firstError) {
      toast.dismiss();
      toast.error(firstError); // show only the first error
      return;
    }

    // API Call
    try {
      const formParams = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
      };
      console.log(formParams);
      // return
      const { data } = await formSubmit(formParams);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="fixed inset-0 w-full h-full top-0 left-0 z-100 bg-[#0d0d0d9f] text-white backdrop-blur-[1px] flex justify-center items-center">
      <Toaster
        richColors
        toastOptions={{ style: { fontFamily: "DM Sans", fontSize: "16px" } }}
      />
      <div className="flex flex-col h-fit w-[90%] md:w-fit bg-[var(--primary-color)] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-[#262422] p-3 px-4 md:p-5 font-semibold md:font-bold md:text-xl">
          <span>Contact Form</span>
          <button
            onClick={onClose}
            className="bg-white text-[#262422] p-2 rounded-md cursor-pointer"
          >
            <RiCloseLargeFill />
          </button>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between items-end text-black h-fit md:w-[500px] max-sm:!h-fit gap-3 md:gap-5 bg-[var(--primary-color)] rounded-xl box-border md:p-10 p-5"
          >
            <div className="input-row max-sm:!gap-3">
              <div className="input-col">
                <label htmlFor="first-name" className="input-label">
                  First Name
                </label>
                <input
                  className="input-field"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="!text-red-700 !text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="input-col">
                <label htmlFor="first-name" className="input-label">
                  Last Name
                </label>
                <input
                  className="input-field"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="!text-red-700 !text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="input-row">
              <div className="input-col w-[100%]">
                <label htmlFor="first-name" className="input-label">
                  Phone Number
                </label>
                <input
                  className="input-field w-[100%]!"
                  type="phone"
                  name="phone"
                  placeholder="+91 9090909090"
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="!text-red-700 !text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="input-row">
              <div className="input-col w-[100%]">
                <label htmlFor="first-name" className="input-label">
                  Email
                </label>
                <input
                  className="input-field w-[100%]!"
                  type="phone"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="!text-red-700 !text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-white font-bold text-[var(--primary-color)] p-[15px_30px] max-sm:!p-[10px_20px] mt-3 rounded-[.25rem] cursor-pointer"
            >
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
