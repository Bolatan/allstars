import React from 'react';
import { Trophy, Calendar, MapPin, Star } from 'lucide-react';

export default function Players() {
  const players = [
    {
      name: "Adebayo Ogundimu",
      position: "Former Midfielder",
      career: "1995-2010",
      clubs: ["Shooting Stars FC", "Enyimba FC", "Al-Hilal Sudan"],
      achievements: ["CAF Champions League Winner", "Nigerian League Champion"],
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "Football taught me discipline. This club keeps that spirit alive."
    },
    {
      name: "Emeka Okafor",
      position: "Former Striker",
      career: "1998-2015",
      clubs: ["Kano Pillars", "Heartland FC", "FC Ifeanyi Ubah"],
      achievements: ["Top Scorer NPFL 2008", "Nigeria U-23 Captain"],
      image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "The brotherhood here reminds me why I fell in love with football."
    },
    {
      name: "Ibrahim Musa",
      position: "Former Defender",
      career: "1992-2008",
      clubs: ["Kaduna United", "Lobi Stars", "Rangers International"],
      achievements: ["NPFL Champion", "Nigeria B International"],
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "Every Saturday feels like match day. The passion never dies."
    },
    {
      name: "Chinedu Okoro",
      position: "Former Goalkeeper",
      career: "1996-2012",
      clubs: ["Enugu Rangers", "Wikki Tourists", "Nasarawa United"],
      achievements: ["Golden Gloves Award", "CAF Cup Finalist"],
      image: "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "Keeping goal taught me leadership. Now I help guide our team."
    },
    {
      name: "Olumide Adeyemi",
      position: "Former Winger",
      career: "2000-2016",
      clubs: ["MFM FC", "Sunshine Stars", "Akwa United"],
      achievements: ["NPFL All-Star", "Federation Cup Winner"],
      image: "https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "Speed was my weapon. Now wisdom is what I bring to the pitch."
    },
    {
      name: "Yakubu Hassan",
      position: "Former Central Midfielder",
      career: "1994-2009",
      clubs: ["Katsina United", "Plateau United", "Gombe United"],
      achievements: ["Nigeria U-20 World Cup", "NPFL Champion"],
      image: "https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      quote: "Football is life. This club proves that legends never truly retire."
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

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {player.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Trophy className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
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
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Apply for Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}