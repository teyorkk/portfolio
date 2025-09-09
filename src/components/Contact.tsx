const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Contact
        </h2>
        <form className="bg-gray-100 rounded-xl shadow p-8 flex flex-col gap-6 border border-gray-200">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 rounded font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
