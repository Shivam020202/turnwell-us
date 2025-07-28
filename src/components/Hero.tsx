import React from "react";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/tmsbanner.jpg')] bg-cover bg-center py-20 mt-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-100  leading-tight mb-6">
              Advanced Mental Health
              <span className="text-[#66BEB6] block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Evidence-based psychiatric care combining cutting-edge treatments
              with compassionate clinical expertise. Transforming lives through
              scientific innovation and personalized therapeutic approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#66BEB6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Begin Clinical Assessment
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-gray-300 text-gray-100 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
              >
                View Treatment Options
              </button>
            </div>
          </div>

          <div className="bg-white p-8 max-w-lg rounded-xl shadow-lg border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Schedule Your Clinical Assessment
              </h3>
              <p className="text-gray-600">
                Begin your personalized treatment journey with a comprehensive
                evaluation
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your needs or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Schedule Clinical Assessment</span>
                <Clock className="w-5 h-5" />
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Secure form • HIPAA compliant • Response within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
