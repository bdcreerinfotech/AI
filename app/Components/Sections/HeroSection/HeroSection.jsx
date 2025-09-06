"use client";
import { formSubmit } from "@/app/http";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Toaster, toast } from "sonner";

export default function HeroSection({ onForm }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  function emptyField() {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
  }

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
    const toastId = toast.loading("Submitting...");
    try {
      const formParams = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
      };

      const { data } = await formSubmit(formParams);

      toast.dismiss(toastId);

      if (data.error) {
        return toast.error("Can't submit form!");
      }

      toast.success("Form Submited Successfully!");

      emptyField();
      formRef.current.reset();
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Can't submit form!");
      console.log(err);
      emptyField();
      formRef.current.reset();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full md:h-fit h-fit bg-amber-50">
      <Toaster
        richColors
        toastOptions={{ style: { fontFamily: "DM Sans", fontSize: "16px" } }}
      />
      <Image
        src={"/assets/hero-img.webp"}
        fill={true}
        sizes="100%"
        alt={"Hero Image"}
        style={{ zIndex: 0, objectFit: "cover" }}
        className="absolute w-100 h-100 top-0 left-0"
      />
      <div className="relative box-layout flex-col md:flex-row md:items-center md:justify-between py-[120px] !pb-[70px] ">
        <div className="w-full md:w-[50%] flex flex-col gap-5 mb-20 md:mb-0">
          <h1 className="text-[30px]/[1.3] md:text-[52px]/[1.3] font-bold">
            AI Development <br /> Services in India
          </h1>
          <p className="!text-base md:!text-2xl">
            Harness cutting-edge AI solutions to automate workflows, boost
            efficiency, and unlock smarter decision-making for your business.
          </p>
          <button
            onClick={onForm}
            className="animated-btn !text-[14px] text-nowrap md:!text-[20px] rounded-tl-[0]! sm:p-2 max-sm:!w-full max-sm:!justify-center"
          >
            <FaArrowRight className="icon left_side_arrow" />
            CONSULT OUR AI EXPERTS
            <FaArrowRight className="icon right_side_arrow" />
          </button>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-end h-fit md:w-[500px] max-sm:!h-fit gap-3 md:gap-5 bg-[var(--primary-color)] rounded-xl box-border md:p-10 p-5"
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
  );
}
