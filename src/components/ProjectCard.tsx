import { motion } from "framer-motion"

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: string[];
  }

const ProjectCard = ({
  title,
  description,
  image,
  link,
  technologies,
  github,
}: ProjectProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col hover:shadow-2xl transition duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 text-sm mb-4">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Live ↗
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub 🐙
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
