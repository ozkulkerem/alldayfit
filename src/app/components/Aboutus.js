"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <section id="about" className="bg-black text-white py-16 px-6 lg:px-48">
      <div className="container mx-auto space-y-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="lg:w-1/2 shrink-0">
            <Image
              src={`${basePath}/images/alldayfitmen.png`}
              alt="ALL DAY FIT CLUB iç mekânı"
              width={600}
              height={400}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <motion.h2
              className="text-4xl font-extrabold text-yellow-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sakarya Adapazarı’nın En Modern Fitness Salonu
            </motion.h2>

            <section>
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Konum & Alan
              </motion.h3>

              <motion.p
                className="mt-2 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Adapazarı Yeni Stat Mevkii’ndeki 800 m²’lik ferah ve tam
                donanımlı salonumuz; fitness, gym ve CrossFit arayışında olan
                herkes için kolay ulaşım imkânı sunar.
              </motion.p>
            </section>

            <section>
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Hizmetlerimiz
              </motion.h3>

              <motion.ul
                className="mt-4 space-y-3 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  "Fitness – yeni başlayanlardan profesyonellere",
                  "CrossFit – yüksek yoğunluklu fonksiyonel antrenmanlar",
                  "Kişiye Özel Antrenman (Personal Training) – hedef odaklı bire bir koçluk",
                  "Kadınlara Özel Reformer Pilates – güç, esneklik ve postür geliştirme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-yellow-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </section>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="lg:w-1/2 space-y-6">
            <motion.h2
              className="text-4xl font-extrabold text-yellow-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Felsefemiz - Aynada Dönüşümünü Keşfet
            </motion.h2>

            <section className="space-y-2">
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Felsefemiz
              </motion.h3>
              <motion.p
                className="text-lg leading-relaxed italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                “Burada saat değil, sen ilerlersin.”
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Sporu kısa vadeli bir alışkanlık yerine yaşam tarzına
                dönüştürmek için buradayız. Motivasyonu yüksek, sürdürülebilir
                bir spor ortamı sunuyoruz.
              </motion.p>
            </section>

            <section className="space-y-2">
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Poz Odası – Değişimini Gör
              </motion.h3>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Tüm duvarları ayna kaplı özel Poz Odası’nda form değişimini adım
                adım takip et, antrenman sonrası fotoğraflarla motivasyonunu
                artır.
              </motion.p>
            </section>
          </div>

          <div className="lg:w-1/2">
            <Image
              src={`${basePath}/images/pozodasi.png`}
              alt="Yüksek kaliteli spor ekipmanları"
              width={600}
              height={400}
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
