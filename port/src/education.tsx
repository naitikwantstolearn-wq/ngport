export default function Education() {
  const education = [
    {
      degree: "Bachelor of Fine Arts",
      field: "Visual Communication Design",
      period: "2014 - 2018",
      description: "Comprehensive study of design principles, typography, color theory, and digital media. Graduated with honors.",
      color: "text-cyan-400",
    },
    {
      degree: "Diploma in Digital Media",
      field: "Advanced Video Production & Motion Graphics",
      period: "2018 - 2019",
      description: "Specialized training in video editing, motion graphics, and digital storytelling techniques.",
      color: "text-yellow-400",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text font-space">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-dark-gray p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold mb-2 md:mb-0">{edu.degree}</h3>
                  <span className={`${edu.color} font-medium`}>{edu.period}</span>
                </div>
                <p className="text-lg text-light-gray mb-2">{edu.field}</p>
                <p className="text-light-gray">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
