const Hero = () => {
    return (
      <section className="flex flex-col justify-center items-center text-center h-screen bg-gray-900 px-6" id="hero">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hey, I'm Yash 👋</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
          A frontend-heavy fullstack developer who loves building modern, performant web apps.
        </p>
        <div className="mt-6">
          <a
            href="mailto:yash@example.com"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition-all"
          >
            Let's Connect
          </a>
        </div>
      </section>
    )
  }
  
  export default Hero
  