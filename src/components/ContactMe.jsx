import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/pokeknox999@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  return (
    <div className="w-full h-[75vh] mt-14 ">
      <div className="p-6  max-w-md mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-10">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your Email"
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Type your message here."
              className="w-full"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-purple-950 text-white rounded hover:bg-purple-950/70 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default ContactMe;
