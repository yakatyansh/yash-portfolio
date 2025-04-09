
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Contact us</h2>
        <p className="text-gray-400 text-lg">
        I’m a frontend-focused fullstack developer who loves turning ideas into interactive web experiences. 
        Currently deep into React and TypeScript — building, learning, and pushing code every single day.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
