import React from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';
import ImageSlider from './ImageSlider';
export default function About() {
  const features = [
    {
      icon: Award,
      title: "Professional Heritage",
      description: "Our members are former professional players from various leagues, bringing decades of experience and knowledge."
    },
    {
      icon: Users,
      title: "Strong Brotherhood",
      description: "More than just a club, we're a family of players who understand the beautiful game and support each other."
    },
    {
      icon: Heart,
      title: "Passion Lives On",
      description: "Age may slow us down, but the love for football burns as bright as ever in every training session."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Continue honing your skills while sharing knowledge with fellow ex-professionals in a supportive environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by ex-professional footballers in Ikorodu, our club serves as a sanctuary where 
              former players can continue their love affair with the beautiful game while building 
              lasting friendships and staying active.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a casual meetup between a few retired footballers has grown into 
                Ikorodu's premier ex-professional football community. Every Saturday, we gather at 
                Lagos State University of Science and Technology to relive our glory days, share stories, and prove that class is permanent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our club represents the spirit of Nigerian football - resilient, passionate, and 
                united. Whether you played in the Nigerian Professional League, international 
                competitions, or local clubs, you'll find your place among legends.
              </p>
            </div>
            <ImageSlider />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}