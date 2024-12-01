import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaJenkins } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SolanaColorful } from "@ant-design/web3-icons";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

const iconData = [
  { Icon: RiReactjsLine, color: "text-cyan-400", name: "React.js" },
  { Icon: FaAws, color: "text-orange-500", name: "AWS" },
  { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  { Icon: DiRedis, color: "text-red-700", name: "Redis" },
  { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
  { Icon: FaDocker, color: "text-blue-400", name: "Docker" },
  { Icon: FaJenkins, color: "text-red-500", name: "Jenkins" },
  { Icon: SiNginx, color: "text-green-500", name: "Nginx" },
  { Icon: SolanaColorful, color: "text-blue-500", name: "Solana" },
  { Icon: AiOutlineKubernetes, color: "text-blue-500", name: "Kubernetes" },
];

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {iconData.map(({ Icon, color, name }, index) => (
          <motion.div
            key={name}
            initial="initial"
            animate="animate"
            variants={iconVariants(2 + index * 0.5)}
            className="relative group p-4"
          >
            {/* Tooltip */}
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </div>
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
