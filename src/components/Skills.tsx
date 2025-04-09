import { motion } from "framer-motion"

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="text-gray-400 text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tenetur veniam quo ipsa quia officiis commodi laudantium facilis quis tempora! Culpa doloribus similique minima aliquam itaque ex sint totam consectetur!
        </p>
      </motion.div>
    </section>
  )
}

export default Skills
