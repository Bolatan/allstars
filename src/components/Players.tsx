import React from 'react';
import { Calendar } from 'lucide-react';

export default function Players() {
  const players = [
    {
      name: "Professor Fatai A. Abatan",
      position: "President",
      career: "2005 - Present",
      clubs: ["Dean: Students Affairs", "Lagos State University (LASU)"],
      image: "/president.jpeg",
      quote: "It is a great pleasure to lead this illustrious Club at this moment. LASUSTECH ALL STARS FC is the pride of Lagos and worthy ambassadors. The warmth is great and the bonding is exceptional."
    },
    {
      name: "Abiodun Alabi Kogboyinbo",
      position: "Former Striker",
      career: "1992 - 2007",
      clubs: ["Pepsi Academy", "GASKIYA College", "Gray United, Osun State", "SAMBA United, Kaduna State", "Excel FC, Lagos", "Dream United, Ghana", "Platinum Stars FC South Africa"],
      image: "/Abiodun Alabi Kogboyinbo.jpg",
      quote: ""
    },
    {
      name: "Dada Kayode",
      position: "Midfielder",
      career: "1991 - 2003",
      clubs: ["Eko Boys, Mushin", "Nucleus FC", "Glory FC", "Nipost FC", "Dragon FC, Benin Republic", "African sport FC, Ivory Coast"],
      image: "/Dadakayode.jpeg",
      quote: ""
    },
    {
      name: "Shakiru Sowemimo (aka Omo Alhaja)",
      position: "Forward",
      career: "1982 - ",
      clubs: ["Atunrase Boys High School, Surulere", "Eko Boys High School, Mushin", "Govt College, Ikorodu"],
      image: "/55.jpg",
      quote: ""
    },
    {
      name: "Rafiu Yusuf",
      position: "Midfielder",
      career: "",
      clubs: ["Yewa Secondary school, Ikorodu", "Greater Tomorrow FC"],
      image: "/rafiuyusuf.jpg",
      quote: ""
    },
    {
      name: "Ernest Madu",
      position: "Midfielder",
      career: "1989 - 2005",
      clubs: ["IFY BABES FC", "PRINCESS JEGEDE FC IMT FC, ENUGU"],
      image: "/33.jpg",
      quote: ""
    },
    {
      name: "Ibrahim Oseni",
      position: "Midfielder",
      career: "",
      clubs: ["FC Bambutus, Cameroon"],
      image: "/44.jpg",
      quote: ""
    }
  ];

  return (
    <section id="players" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Players
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the legends who make up our brotherhood. Each player brings a wealth of 
              experience and passion that continues to inspire on and off the pitch.
            </p>
          </div>

          {/* Players Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Player Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {player.position.replace('Former ', '')}
                  </div>
                </div>

                {/* Player Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{player.position}</p>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Career: {player.career}</span>
                  </div>

                  {/* Clubs */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Former Clubs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {player.clubs.map((club, clubIndex) => (
                        <span
                          key={clubIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {club}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 text-sm">
                    "{player.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Legendary Squad</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Are you a former professional footballer looking to reconnect with the game? 
                Join our community of legends and continue your football journey.
              </p>
              <a href="#contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Apply for Membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
