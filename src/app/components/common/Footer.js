"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-0.5s">
              <h3 className="text-2xl font-bold text-black">Hakkımızda</h3>
              <p className="text-lg text-black">
                ALL DAY FIT CLUB, sadece bir spor salonu değil; hedeflerine
                ulaşmak isteyen herkes için bir başlangıç noktası. ''Burada saat
                değil, sen ilerlersin''
              </p>
            </div>

            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-black">İletişim</h3>
              <ul className="space-y-2 text-black">
                <li>Email : info@alldayfitclub.com</li>
                <li>Telefon : +90 531 619 54 00</li>
                <li>
                  Adres : Yağcılar Mah. 15 Temmuz Blv. No:135/3A
                  Adapazarı/Sakarya
                </li>
              </ul>
            </div>

            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-black">
                ALL DAY FIT CLUB
              </h3>
              <div className="flex space-x-6">
                {/* <a
                  href="#"
                  className="text-black hover:text-yellow-700 transition duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-700 transition duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-700 transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-700 transition duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a> */}
                <a
                  href="https://www.instagram.com/alldayfitclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition-transform hover:scale-105"
                >
                  <FaInstagram size={24} />
                  <span>Instagram’da Takip Et</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} ALL DAY FIT CLUB tarafından oluşturulmuştur.
            Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
