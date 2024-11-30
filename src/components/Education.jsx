import { EDUCATION } from "../constants";
import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((edu, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{edu.duration}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-xl text-white">
                {edu.degree}
              </h3>
              <p className="text-sm text-stone-400 mt-2">
                <FaUniversity className="mr-2 inline text-blue-500" />
                {edu.schoolName}
              </p>
              <p className="text-sm text-stone-400 mt-2">
                <span className="font-semibold text-white">CGPA:</span>{" "}
                {edu.CGPA}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
