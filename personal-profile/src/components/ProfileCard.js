// src/components/ProfileCard.js
import React from "react";
import { Github, Instagram, Linkedin, Send, PenTool } from "lucide-react";
import ProfilePicture from "../assets/images/profile.jpg";

function ProfileCard() {
  const socialIcons = [
    { Icon: Instagram, href: "https://www.instagram.com/m_hanif25?igsh=MTA0bmNxZXZqaG1tcg==" },
    { Icon: Github, href: "https://github.com/Hans-fik" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hanif-17b753285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { Icon: PenTool, href: "https://medium.com/@muhammadhanifkanan" },
  ];

  return (
    <section id="profile" className="bg-hero-gradient pt-48 pb-32 px-16">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Div Kiri (Text & Buttons) - TIDAK ADA PERUBAHAN */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <p className="text-sm font-bold text-primary-purple uppercase tracking-widest">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-dark-blue leading-tight">
            Muhammad Hanif
            <br />
            UI/UX Designer & <br /> Frontend Developer
          </h1>

          <p
            className="text-lg font-normal text-grayish-blue mt-4"
            style={{ maxWidth: "446px" }}
          >
            Passionate about creating well-designed and efficient digital
            products. With a strong foundation in visual design and frontend
            development, I strive to deliver solutions that are both
            aesthetically pleasing and highly functional.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="#portfolio"
              className="py-3 px-6 text-base font-semibold text-white rounded-xl bg-btn-gradient hover:opacity-90 transition-opacity"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="py-3 px-6 text-base font-semibold rounded-xl border border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-12 pt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-grayish-blue hover:text-dark-blue transition-colors"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Div Kanan (Image) - PERUBAHAN DI SINI */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative p-12 lg:p-0">
          {/* Background Shape */}
          <div
            className="absolute rounded-full w-64 h-64 lg:w-80 lg:h-80 opacity-20 bg-gradient-to-br from-primary-pink via-primary-purple to-[#FFE978]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          ></div>

          {/* Frame Image Container */}
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white"
            style={{
              boxShadow: "0 25px 50px 0 rgba(0, 0, 0, 0.25)",
              zIndex: 2,
              // Hapus: backgroundSize: "cover",
              // Hapus: bg-gray-300
            }}
          >
            {/* 2. GANTI DENGAN TAG <img> */}
            <img
              src={ProfilePicture}
              alt="Profile Rama Putra"
              // Tambahkan object-cover untuk memastikan gambar mengisi frame tanpa terdistorsi
              className="w-full h-full object-cover rounded-full"
            />

            {/* Working Experience Tag */}
            <div
              className="absolute bottom-4 right-0 bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-2 whitespace-nowrap"
              style={{ transform: "translate(25%, 25%)", zIndex: 3 }}
            >
              <Send className="w-4 h-4 text-primary-purple" fill="#7755FF" />
              <span className="text-sm font-semibold text-dark-blue">
                2+ Years Exp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
