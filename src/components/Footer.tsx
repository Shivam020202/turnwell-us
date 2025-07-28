import React from "react";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mb-10 md:mb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/cropped-turnwell-mental-health-logo.webp"
              alt="Turnwell Mental Health"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Advanced mental health solutions combining evidence-based
              treatments with compassionate clinical expertise.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant • Joint Commission Accredited</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">Crisis: (555) 911-HELP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@turnwellmh.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Medical Plaza, Suite 200
                  <br />
                  Healthcare City, HC 12345
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-gray-400">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-gray-400">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-gray-400">Closed</span>
              </div>
              <div className="flex items-center space-x-2 mt-4 text-sm">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-green-400">
                  24/7 Crisis Support Available
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Treatment Modalities
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Clinical Team
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("results")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Clinical Outcomes
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("insurance")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Insurance & Scheduling
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("faq")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                FAQ
              </button>
              <button className="block text-gray-300 hover:text-blue-400 transition-colors text-left">
                Patient Portal
              </button>
              <button className="block text-gray-300 hover:text-blue-400 transition-colors text-left">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">
                  Joint Commission Accredited
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">CARF Certified</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2024 Turnwell Mental Health. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Licensed Healthcare Facility • State License #MH-2024-001
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
