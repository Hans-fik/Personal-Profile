import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { Icon: Mail, detail: "muhammadhnaifkanan@gmail.com", label: "Email" },
  { Icon: Phone, detail: "+62 857 1849 4293", label: "Phone" },
  { Icon: MapPin, detail: "Depok, Indonesia", label: "Location" },
];

function ContactInfoCard({ Icon, detail, label }) {
  // Tambahkan kondisi agar font lebih kecil kalau label-nya "Email"
  const isEmail = label === "Email";

  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-primary-purple bg-opacity-10 text-primary-purple flex-shrink-0">
        <Icon size={24} />
      </div>

      <div className="w-full min-w-0">
        <p className="text-sm font-medium text-grayish-blue">{label}</p>
        <p
          className={`${
            isEmail ? "text-sm" : "text-lg"
          } font-semibold text-dark-blue break-words`}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim! (Simulasi)");
  };

  return (
    <section id="contact" className="py-24 bg-white px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-dark-blue mb-4">
            Let's Talk!
          </h2>
          <p className="text-lg text-grayish-blue max-w-2xl mx-auto">
            Have a project idea or just want to say hi? Send me a message!
          </p>
        </div>

        {/* Content: Form and Info */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 bg-[#F9F9FB] p-12 rounded-2xl shadow-xl">
          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="p-4 border border-border-gray rounded-lg focus:ring-primary-purple focus:border-primary-purple transition-colors text-dark-blue"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="p-4 border border-border-gray rounded-lg focus:ring-primary-purple focus:border-primary-purple transition-colors text-dark-blue"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 border border-border-gray rounded-lg focus:ring-primary-purple focus:border-primary-purple transition-colors text-dark-blue"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-4 border border-border-gray rounded-lg focus:ring-primary-purple focus:border-primary-purple transition-colors text-dark-blue"
              ></textarea>

              {/* Submit Button (Gradient) */}
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white rounded-xl bg-btn-gradient hover:opacity-90 transition-opacity"
                style={{
                  boxShadow:
                    "0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-8 lg:mt-6">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">
              Contact Details
            </h3>
            <div className="flex flex-col space-y-8"></div>
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
