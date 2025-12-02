import React from "react";

const Contact = () => {
  return (
    <div id="contact" name="contact" className="section-container bg-neutral-gray-50">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-neutral-gray-600 mt-4 sm:mt-6 text-base sm:text-lg px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="card bg-white">
          <form
            action="https://getform.io/f/14044879-d9c9-4a66-9a71-113df7e1f239"
            method="POST"
            className="space-y-5 sm:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry..."
                rows="6"
                required
                className="input-field resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
