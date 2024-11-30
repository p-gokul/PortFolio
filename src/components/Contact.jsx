import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter max-w-xl mx-auto space-y-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-3"
        >
          <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
          <p className="text-lg text-stone-300">{CONTACT.address}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-3"
        >
          <FaPhone className="text-green-500 text-2xl" />
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-lg text-stone-300 hover:text-green-400 transition-colors duration-300"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.div>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center justify-center text-lg text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-300 space-x-3"
        >
          <FaEnvelope className="text-xl" />
          <span>{CONTACT.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
