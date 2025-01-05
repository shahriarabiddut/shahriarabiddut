import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Bounce,
          });
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send email. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Bounce,
          });
        }
      );
  };

  return (
    <section className="bg-gray-200" id="contact">
      <div className="min-h-screen py-20 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-11/12">
        {/* Form Section */}
        <div className="grid items-center justify-center">
          <form
            className="card-body shadow-lg rounded-lg bg-white"
            ref={form}
            onSubmit={handleSubmit}
          >
            <h3 className="text-center text-5xl mx-auto font-paaji font-bold my-5 text-primary1">
              Send Message
            </h3>
            <div className="form-control">
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="input input-bordered"
                aria-label="Your Full Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered"
                aria-label="Your Email"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                rows="4"
                placeholder="Type Your Message!"
                className="h-20 p-1 input input-bordered"
                aria-label="Your Message"
                required
              ></textarea>
            </div>
            <div className="form-control my-6">
              <button
                type="submit"
                className="btn bg-primary1 text-white font-semibold hover:bg-white hover:font-bold hover:text-primary1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="px-2 flex flex-col gap-4 font-paaji">
          <h2 className="lg:text-left text-center text-gray-500 font-sans my-2">
            Contact Me
          </h2>
          <h2 className="lg:text-left text-center text-5xl font-bold text-primary1">
            Have questions?
            <br />
            Get in touch!
          </h2>
          <div className="flex flex-col justify-start gap-3">
            <a href="mailto:shahriarabiddut@gmail.com">
              <p className="flex items-center gap-3 text-xl">
                <FaEnvelope /> shahriarabiddut@gmail.com
              </p>
            </a>
            <a href="https://wa.me/01945506778">
              <p className="flex items-center gap-3 text-xl">
                <FaWhatsapp /> 01945506778
              </p>
            </a>
            <a href="tel:01945506778">
              <p className="flex items-center gap-3 text-xl">
                <FaPhoneAlt /> 01945506778
              </p>
            </a>
            <p className="flex items-center gap-3 text-xl">
              <FaLocationDot /> Muradnagar , Cumilla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
