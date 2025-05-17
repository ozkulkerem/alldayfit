"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const CTA = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const { scrollYProgress } = useScroll();
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      id="cta"
      className="relative bg-black text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="container mx-auto space-y-16">
        <motion.div className="relative flex items-center justify-center w-full h-[500px] sm:h-[600px] lg:h-[500px] bg-black">
          <Image
            src={`${basePath}/images/fitness4.jpg`}
            alt="Image CTA"
            fill
            className="object-cover w-full h-full opacity-50"
            priority
          />

          <div className="absolute flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-12 w-full max-w-4xl">
            {/* Başlık */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-500 w-full"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Açılışa Özel Kampanya
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed pt-4 sm:pt-6 md:pt-8"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              İlk 100 kurucu üyeye sürpriz indirimler ve avantajlı üyelik
              paketleri.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 sm:mt-6 md:mt-8"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              ► Bizi Instagram’da @alldayfitclub hesabından takip et, duyuruları
              kaçırma!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://www.instagram.com/alldayfitclub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition-transform hover:scale-105"
              >
                <FaInstagram size={24} />
                <span>Instagram’da Takip Et</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
