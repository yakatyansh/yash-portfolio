import { motion } from "framer-motion"

const Hero = () => {
    return (
      <section className="flex flex-col justify-center items-center text-center h-screen bg-gray-900 px-6" id="hero">

        <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >Hey, I'm Yash 👋

        </motion.h1>
        <motion.p className="text-lg md:text-2xl text-gray-400 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
            A passionate frontend developer with a knack for creating stunning user experiences.
        </motion.p>
        <div className="mt-6">
          <a
            href="mailto:yashkatyan1208@gmail.com"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition-all"
          >
            Let's Connect
          </a>
        </div>
      </section>
    )
  }
  
  export default Hero
  