import React from 'react';
import { Check, Star, Shield, Calendar } from 'lucide-react';

export default function Membership() {
  const benefits = [
    "Access to professional-grade training facilities",
    "Weekly structured training sessions with ex-pros",
    "Networking opportunities with football legends",
    "Competitive matches and mini-tournaments",
    "Fitness and wellness programs",
    "Mentorship for younger players",
    "Social events and club gatherings",
    "Equipment and kit provided"
  ];

  const requirements = [
    {
      icon: Star,
      title: "Former Professional Player",
      description: "Played professionally in any recognized league"
    },
    {
      icon: Shield,
      title: "Good Character",
      description: "Demonstrated sportsmanship and positive attitude"
    },
    {
      icon: Calendar,
      title: "Regular Attendance",
      description: "Commitment to attend weekly training sessions"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Brotherhood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Become part of Ikorodu's most exclusive football community. Connect with fellow 
              ex-professionals who share your passion for the beautiful game.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Membership Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements & Application */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Requirements</h3>
              <div className="space-y-6 mb-8">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <req.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{req.title}</h4>
                      <p className="text-gray-600">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-green-600 rounded-xl p-8 text-white text-center">
                <h4 className="text-2xl font-bold mb-4">Ready to Join?</h4>
                <p className="text-green-100 mb-6">
                  Take the first step towards reconnecting with your football family. 
                  Contact us today to begin your membership application.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Apply for Membership
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Members Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Adebayo Johnson",
                  role: "Former Super Eagles Midfielder",
                  quote: "This club brought back my love for football. The brotherhood here is unmatched."
                },
                {
                  name: "Emeka Okafor",
                  role: "Ex-Professional League Player",
                  quote: "Training here keeps me fit and connected to the game I dedicated my life to."
                },
                {
                  name: "Ibrahim Musa",
                  role: "Retired Club Captain",
                  quote: "More than just football - we're a family supporting each other on and off the pitch."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
