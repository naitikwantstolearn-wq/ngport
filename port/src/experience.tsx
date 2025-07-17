export default function Experience() {
  const experiences = [
    {
      title: "Senior Graphic Designer",
      company: "Creative Studio XYZ",
      period: "2022 - Present",
      description: "Leading design projects for major brands, creating comprehensive visual identity systems and marketing materials. Specialized in digital design and brand development.",
      gradient: "from-purple-500 to-pink-500",
      color: "text-cyan-400",
    },
    {
      title: "Video Editor & Motion Designer",
      company: "Media Production House",
      period: "2020 - 2022",
      description: "Created engaging video content for social media campaigns and corporate communications. Developed motion graphics and animated sequences for various clients.",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-yellow-400",
    },
    {
      title: "Freelance Designer",
      company: "Independent",
      period: "2018 - 2020",
      description: "Provided design services to small businesses and startups. Specialized in logo design, branding, and print materials. Built strong client relationships and portfolio.",
      gradient: "from-green-500 to-yellow-500",
      color: "text-green-400",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-dark-gray/50 to-rich-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text font-space">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gradient-to-b">
                <div className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br ${exp.gradient} rounded-full`}></div>
                <div className="bg-dark-gray p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className={`${exp.color} mb-2`}>{exp.company} • {exp.period}</p>
                  <p className="text-light-gray">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
