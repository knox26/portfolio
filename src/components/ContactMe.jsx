import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FadeIn } from "./ui/fade-in";
import { Send } from "lucide-react";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => {
      setStatus("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
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
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn className="w-full mt-24 mb-20 flex justify-center">
      <div className="w-full max-w-md p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <h1 className="text-center text-4xl font-bold tracking-tight text-white mb-8 relative z-10">
          Get in touch
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
          <div>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full bg-zinc-950/50 border-white/10 focus-visible:ring-1 focus-visible:ring-blue-500/50 text-white h-12 rounded-xl transition-all"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-2 ml-1">{errors.name.message}</p>
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
              className="w-full bg-zinc-950/50 border-white/10 focus-visible:ring-1 focus-visible:ring-blue-500/50 text-white h-12 rounded-xl transition-all"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Type your message here."
              className="w-full bg-zinc-950/50 border-white/10 focus-visible:ring-1 focus-visible:ring-blue-500/50 text-white min-h-[120px] rounded-xl transition-all resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-2 ml-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? "Sending..." : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
        {status && <p className="text-center text-sm mt-6 text-zinc-400 relative z-10">{status}</p>}
      </div>
    </FadeIn>
  );
};

export default ContactMe;
