import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    setFormSent(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-10 py-10 md:px-20 lg:px-40">
      <Head>
        <title>Moses Ajila</title>
        <meta name="description" content="Contact form page" />
      </Head>
      <main>
        <section className="text-center py-10">
          <h2 className="text-4xl font-semibold text-teal-600 dark:text-teal-400">
            Get in Touch
          </h2>
          <p className="text-md py-4 leading-6 text-gray-800 dark:text-gray-200 max-w-md mx-auto">
            If you have any questions or just want to say hello, fill out the form below and I’ll get back to you as soon as possible.
          </p>
        </section>
        <section className="max-w-xl mx-auto">
          {formSent ? (
            <div className="text-center py-10">
              <h3 className="text-lg font-medium text-teal-600 dark:text-teal-400">Thank You!</h3>
              <p className="text-md py-4 text-gray-800 dark:text-gray-200">
                Your message has been sent. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-lg py-6 px-6 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                  style={{ height: '60px' }} // Adjust height to match ChatGPT's input size
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-lg py-4 px-6 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                  style={{ height: '60px' }} // Adjust height to match ChatGPT's input size
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-lg py-4 px-6 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                  style={{ minHeight: '150px' }} // Make textarea taller
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-md shadow-md hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
