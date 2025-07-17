export default function About() {
  const skills = [
    { name: "Graphic Design", gradient: "from-purple-500 to-pink-500" },
    { name: "Video Editing", gradient: "from-blue-500 to-cyan-500" },
    { name: "Branding", gradient: "from-green-500 to-yellow-500" },
    { name: "Illustration", gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-dark-gray/50 to-rich-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text font-space">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-light-gray mb-6 leading-relaxed">
                I'm a passionate graphic designer and video editor with a keen eye for visual storytelling. 
                My work spans across various mediums including digital design, print media, and motion graphics.
              </p>
              <p className="text-lg text-light-gray mb-6 leading-relaxed">
                I believe in creating designs that not only look stunning but also communicate effectively 
                with the target audience. Every project is an opportunity to push creative boundaries.
              </p>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${skill.gradient} rounded-full text-sm font-medium`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Creative workspace with design tools and computer setup"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
