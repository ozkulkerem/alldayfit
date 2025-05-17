"use client";

import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      title: "1 Aylık",
      prices: [
        { frequency: "1 Kişi", price: "Hazırlanıyor..." },
        { frequency: "2 Kişi", price: "Hazırlanıyor..." },
        { frequency: "Grup", price: "Hazırlanıyor..." },
      ],
    },
    {
      title: "3 Aylık",
      prices: [
        { frequency: "1 Kişi", price: "Hazırlanıyor..." },
        { frequency: "2 Kişi", price: "Hazırlanıyor..." },
        { frequency: "Grup", price: "Hazırlanıyor..." },
      ],
    },
    {
      title: "6 Aylık",
      prices: [
        { frequency: "1 Kişi", price: "Hazırlanıyor..." },
        { frequency: "2 Kişi", price: "Hazırlanıyor..." },
        { frequency: "Grup", price: "Hazırlanıyor..." },
      ],
    },
    {
      title: "1 Yıllık",
      prices: [
        { frequency: "1 Kişi", price: "Hazırlanıyor..." },
        { frequency: "2 Kişi", price: "Hazırlanıyor..." },
        { frequency: "Grup", price: "Hazırlanıyor..." },
      ],
    },
  ];

  return (
    <motion.div
      id="pricing"
      className="bg-black text-white flex flex-col items-center py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center animate-pulse"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Güncel Fiyatlarımız Kısa Süre İçinde Yayınlanacaktır
      </motion.h1>

      <motion.div
        className="grid gap-8 md:grid-cols-4 w-full max-w-7xl px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {plan.title}
              </h2>
              <ul className="space-y-3">
                {plan.prices.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.frequency}</span>
                    <span className="text-yellow-400 font-semibold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="bg-yellow-400 text-black text-center py-3 font-semibold cursor-pointer hover:bg-yellow-500 transition"
              whileHover={{ scale: 1.05 }}
            >
              Kayıt Ol
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Pricing;
