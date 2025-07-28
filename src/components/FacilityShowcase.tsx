import React from "react";
import {
  Building2,
  Shield,
  Wifi,
  Coffee,
  Car,
  Accessibility,
} from "lucide-react";

interface FacilityShowcaseProps {
  onContactClick: () => void;
}

const FacilityShowcase = ({ onContactClick }: FacilityShowcaseProps) => {
  const features = [
    {
      icon: Building2,
      title: "Modern Clinical Suites",
      description:
        "State-of-the-art treatment rooms designed for optimal therapeutic environments",
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description:
        "Advanced privacy systems ensuring complete confidentiality and data protection",
    },
    {
      icon: Wifi,
      title: "Digital Health Integration",
      description:
        "Electronic health records and telemedicine capabilities for seamless care",
    },
    {
      icon: Coffee,
      title: "Comfort Amenities",
      description:
        "Relaxing waiting areas with refreshments and calming environments",
    },
    {
      icon: Car,
      title: "Convenient Parking",
      description:
        "Ample on-site parking with covered options for patient convenience",
    },
    {
      icon: Accessibility,
      title: "Full Accessibility",
      description:
        "ADA-compliant facilities ensuring access for all patients and visitors",
    },
  ];

  return (
    <section id="facility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Clinical Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 15,000 square foot facility combines cutting-edge medical
            technology with thoughtfully designed spaces that promote healing
            and comfort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-8 h-96 flex items-center justify-center">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://turnwell.com/wp-content/uploads/2025/04/About-Us.webp"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Designed for Therapeutic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every aspect of our facility has been carefully planned to support
              the therapeutic process. From soundproof consultation rooms to
              specialized equipment areas, our environment promotes both
              clinical effectiveness and patient comfort.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Private Treatment Rooms</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-teal-600">3</p>
                <p className="text-sm text-gray-600">TMS Treatment Suites</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-purple-600">2</p>
                <p className="text-sm text-gray-600">Group Therapy Rooms</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-green-600">1</p>
                <p className="text-sm text-gray-600">
                  Ketamine Treatment Center
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onContactClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Facility Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilityShowcase;
