import ProjectCard from "./ProjectCard"

const projects= [
    {
      title: "BloomScroll",
      description:
        "A landing Page attempt for a fictional Postivity App. Built with React and TailwindCSS, it features a clean design and smooth animations.",
      image: "public/images/Bloomscroll.jpeg",
      link: "https://bloom-landing-page-one.vercel.app/",
      github: "https://github.com/yakatyansh/Bloom_landing_page",
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"]
    },
    {
      title: "Pokedex",
      description:
        "A simple Pokedex app built with React. It fetches data from the PokeAPI and displays it in a user-friendly interface.",
      image: "public/images/Pokedex.jpeg",
      link: "https://pokereact-pied.vercel.app/",
      github: "https://github.com/yakatyansh/PokeReact",
      technologies: ["React.js", "TailwindCSS"]
    },
    {
      title: "Loan Calculator",
      description:
        "A simple loan calculator built with React. It allows users to calculate their monthly payments based on the loan amount, interest rate, and term.",
      image: "public/images/Loan.jpeg",
      link: "https://loan-repayment-frontend.vercel.app/",
      github: "https://github.com/yakatyansh/loan-repayment-frontend",
      technologies: ["React.js", "TailwindCSS",'Python', 'FastAPI']
    }
  ]

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard  key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
