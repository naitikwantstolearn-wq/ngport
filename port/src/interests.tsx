export default function Interests() {
  const interests = [
    {
      emoji: "🎨",
      title: "Digital Art",
      description: "Exploring new digital art techniques and staying updated with design trends",
    },
    {
      emoji: "📷",
      title: "Photography",
      description: "Capturing moments and finding inspiration in everyday life",
    },
    {
      emoji: "🎬",
      title: "Film Making",
      description: "Creating short films and experimenting with visual storytelling",
    },
    {
      emoji: "🎵",
      title: "Music",
      description: "Listening to various genres and finding rhythm in design",
    },
    {
      emoji: "🌍",
      title: "Travel",
      description: "Exploring different cultures and finding design inspiration globally",
    },
    {
      emoji: "💻",
      title: "Technology",
      description: "Staying updated with latest design tools and tech innovations",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-r from-dark-gray/50 to-rich-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text font-space">
          Interests
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-dark-gray p-6 rounded-2xl text-center group hover:transform hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{interest.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-light-gray">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
