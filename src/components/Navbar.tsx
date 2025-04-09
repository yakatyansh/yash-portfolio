import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-teal-400">Yash Katyan</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#skills" className="hover:text-teal-400">Skills</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
