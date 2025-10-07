import Reveal from "./Ui/Reveal";
import type { FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);

  return (
    <section className="py-16 " id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
          Contact
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have a question or want to work together? Use the form below or reach
          me via socials.
        </p>
        <Reveal>
          <form
            onSubmit={async (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              if (isSubmitting || isCooldown) return;
              setIsSubmitting(true);
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = String(formData.get("name") || "");
              const email = String(formData.get("email") || "");
              const subject = String(formData.get("subject") || "");
              const message = String(formData.get("message") || "");

              const templateParams = {
                name,
                email,
                subject,
                message,
                reply_to: email,
              };
              try {
                const serviceId = import.meta.env
                  .VITE_EMAILJS_SERVICE_ID as string;
                const templateId = import.meta.env
                  .VITE_EMAILJS_TEMPLATE_ID as string;
                const publicKey = import.meta.env
                  .VITE_EMAILJS_PUBLIC_KEY as string;
                await emailjs.send(
                  serviceId,
                  templateId,
                  templateParams,
                  publicKey
                );
                form.reset();
                window.alert("Message sent successfully!");
              } catch (_err) {
                window.alert("Failed to send message. Please try again.");
              } finally {
                setIsSubmitting(false);
                setIsCooldown(true);
                window.setTimeout(() => setIsCooldown(false), 2000);
              }
            }}
            className="bg-gray-100 rounded-xl shadow p-8 flex flex-col gap-6 border border-gray-200"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              name="message"
              required
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting || isCooldown}
              aria-busy={isSubmitting}
              className="bg-black text-white py-3 rounded font-semibold hover:bg-gray-900 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="animate-spin"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="4"
                  />
                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              )}
              {isSubmitting
                ? "Sending..."
                : isCooldown
                ? "Please wait..."
                : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
