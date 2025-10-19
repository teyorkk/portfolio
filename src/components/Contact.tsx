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
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          Contact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
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

                if (!serviceId || !templateId || !publicKey) {
                  // eslint-disable-next-line no-console
                  console.error("EmailJS envs missing", {
                    hasServiceId: Boolean(serviceId),
                    hasTemplateId: Boolean(templateId),
                    hasPublicKey: Boolean(publicKey),
                    mode: import.meta.env.MODE,
                  });
                  window.alert(
                    "Email service misconfigured. Please try again later."
                  );
                  setIsSubmitting(false);
                  return;
                }

                await emailjs.send(
                  serviceId,
                  templateId,
                  templateParams,
                  publicKey
                );
                form.reset();
                window.alert("Message sent successfully!");
              } catch (err: unknown) {
                // eslint-disable-next-line no-console
                console.error("EmailJS send failed", err);
                const message =
                  err && typeof err === "object" && "text" in err
                    ? (err as { text?: string }).text || ""
                    : err instanceof Error
                    ? err.message
                    : "";
                window.alert(
                  message
                    ? `Failed to send: ${message}`
                    : "Failed to send message. Please try again."
                );
              } finally {
                setIsSubmitting(false);
                setIsCooldown(true);
                window.setTimeout(() => setIsCooldown(false), 2000);
              }
            }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-6 border border-gray-200 dark:border-gray-700"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              name="message"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting || isCooldown}
              aria-busy={isSubmitting}
              className="bg-black dark:bg-white text-white dark:text-black py-3 rounded font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
