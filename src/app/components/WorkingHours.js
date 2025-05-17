"use client";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

const WorkingHoursList = () => {
  const hoursData = [
    { day: "Pazartesi", hours: "06:30 – 23:00" },
    { day: "Salı", hours: "06:30 – 23:00" },
    { day: "Çarşamba", hours: "06:30 – 23:00" },
    { day: "Perşembe", hours: "06:30 – 23:00" },
    { day: "Cuma", hours: "06:30 – 23:00" },
    { day: "Cumartesi", hours: "10:00 – 21:00" },
    { day: "Pazar", hours: "10:00 – 21:00" },
  ];

  const list = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="working-hours" className="bg-black text-white py-12 px-6">
      <div className="mx-auto max-w-lg space-y-10">
        <motion.h2
          className="text-3xl font-extrabold text-yellow-500 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Çalışma Saatlerimiz
        </motion.h2>

        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          className="space-y-2 w-full"
        >
          {hoursData.map(({ day, hours }) => (
            <motion.li
              key={day}
              variants={item}
              className="grid grid-cols-[120px_1fr] items-center bg-gray-800 py-2 px-6 rounded-lg shadow"
            >
              <span className="px-10 font-medium">{day}</span>

              <div className="flex px-10 items-center gap-2">
                <FaClock className="text-yellow-500" />
                <span>{hours}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WorkingHoursList;
