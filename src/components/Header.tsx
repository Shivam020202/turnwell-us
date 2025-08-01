import React from "react";
import { Calendar, Menu } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img
              src="/cropped-turnwell-mental-health-logo.webp"
              alt="Turnwell Mental Health"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Treatment Modalities
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Clinical Team
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("results")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Clinical Outcomes
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("facility")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Facility
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("insurance")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Insurance
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Schedule Consultation</span>
            </button>
            <button className="hidden p-2">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
