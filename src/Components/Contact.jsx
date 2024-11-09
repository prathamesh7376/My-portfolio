import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_vl7hxfp", // Your service ID
        "template_10kyuag", // Your template ID
        formData, // Pass formData directly
        "LPb2uGJ6JHsW3WzNb" // Your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormData({
            from_name: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 mt-12 md:mt-20">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form
            className="bg-white p-6 shadow-md rounded-lg border-4 border-yellow-500"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="from_name"
                type="text"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="from_email"
                type="email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="from_phone"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.from_phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
            {isSent && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Address</h2>
          <p className="text-lg">
            <strong>Prathamesh Lokhande</strong>
          </p>
          <p className="text-lg">Khopoli, Maharashtra, India. 410203</p>
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:prathameshlokhande378@gmail.com"
              className="text-blue-500"
            >
              prathameshlokhande378@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <strong>Phone:</strong>{" "}
            <a href="tel:+918329173454" className="text-blue-500">
              +91 8329173454
            </a>
          </p>
          <div className="mt-8 border-4 border-yellow-500 rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0830383058535!2d73.3436581142795!3d18.784080887273385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8051ebc61c813%3A0x1c4ff1a3edff63df!2sKhopoli%2C%20Maharashtra%20410203!5e0!3m2!1sen!2sin!4v1595156458244!5m2!1sen!2sin"
              width="100%"
              height="320"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="rounded-2xl shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
