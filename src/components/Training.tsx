import React from 'react';
import { Calendar, Clock, MapPin, Users2, Trophy, Dumbbell } from 'lucide-react';

export default function Training() {
  const trainingDetails = [
    {
      icon: Calendar,
      title: "Every Saturday",
      description: "Weekly sessions to maintain fitness and skills"
    },
    {
      icon: Clock,
      title: "7:00 AM - 4:00 PM",
      description: "Afternoon sessions perfect for weekend warriors"
    },
    {
      icon: MapPin,
      title: "LASUSTECH FOOTBALL PITCH",
      description: "Professional-grade facilities in Ikorodu"
    },
    {
      icon: Users2,
      title: "All Skill Levels",
      description: "From local legends to international stars"
    }
  ];

  const activities = [
    {
      icon: Dumbbell,
      title: "Fitness Training",
      description: "Maintain peak physical condition with structured warm-ups and conditioning exercises."
    },
    {
      icon: Trophy,
      title: "Skill Drills",
      description: "Sharpen your technical abilities with ball control, passing, and shooting practice."
    },
    {
      icon: Users2,
      title: "Team Matches",
      description: "Competitive 11v11 games that bring out the competitor in every ex-professional."
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us every Saturday for intensive training sessions that combine fitness, 
              skill development, and competitive matches in a professional environment.
            </p>
          </div>

          {/* Training Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trainingDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            ))}
          </div>

          {/* Training Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What We Do During Training
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <activity.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{activity.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Training Venue</h3>
            <p className="text-xl mb-6">
              Lagos State University of Science and Technology Football Field, Ikorodu
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Our training ground features professional-grade grass pitches, proper drainage, 
              and all necessary facilities to ensure optimal training conditions for our members.
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Ikorodu, Lagos State, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}