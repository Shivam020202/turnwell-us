import React, { useState } from "react";
import {
  CreditCard,
  Clock,
  MapPin,
  Phone,
  Calendar,
  FileText,
  Mail,
  List,
} from "lucide-react";

interface InsuranceLogisticsProps {
  onContactClick: () => void;
}

const InsuranceLogistics = ({ onContactClick }: InsuranceLogisticsProps) => {
  // Define the data for each clinic location
  const locations = [
    {
      id: "alpharetta",
      tabName: "Alpharetta - GA",
      title: "Turnwell Mental Health of Alpharetta, GA",
      address: "11125 Jones Bridge Rd, Ste 100 Alpharetta, GA 30022",
      phone: "(678) 383-0008",
      fax: "(470) 735-6656",
      services: [
        "Medication Management",
        "TMS Therapy",
        "Spravato",
        "Individual Psychotherapy",
      ],
    },
    {
      id: "charleston",
      tabName: "Charleston - SC",
      title: "Turnwell Mental Health of Charleston, SC",
      address: "600 Seacoast Parkway, Ste 200 Mt. Pleasant, SC, 29464",
      phone: "(843) 868-2005",
      fax: "(843) 932-9089",
      services: [
        "Medication Management",
        "TMS Therapy",
        "Spravato",
        "Individual Psychotherapy",
        "Group Psychotherapy",
      ],
    },
    {
      id: "aventura",
      tabName: "Aventura - FL",
      title: "Turnwell Mental Health of Aventura, FL",
      address: "2999 NE 191st St, Ste 600 Aventura, FL, 33180",
      phone: "(786) 981-0640",
      fax: "(305) 677-8067",
      services: ["Medication Management", "Spravato"],
    },
  ];

  // State to keep track of the currently active tab.
  const [activeTab, setActiveTab] = useState(locations[0].id);

  // Find the data for the currently active location
  const activeLocation = locations.find((loc) => loc.id === activeTab);

  const insuranceProviders = [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "Humana",
    "Kaiser Permanente",
    "Medicare",
    "Medicaid",
    "Tricare",
    "Anthem",
    "Molina Healthcare",
    "Centene",
  ];

  const appointmentTypes = [
    {
      type: "Initial Psychiatric Evaluation",
      duration: "90 minutes",
      description:
        "Comprehensive assessment with diagnostic evaluation and treatment planning",
    },
    {
      type: "Medication Management",
      duration: "30 minutes",
      description:
        "Follow-up appointments for medication monitoring and adjustments",
    },
    {
      type: "Psychotherapy Session",
      duration: "50 minutes",
      description:
        "Individual therapy sessions with specialized treatment modalities",
    },
    {
      type: "TMS Treatment",
      duration: "45 minutes",
      description: "Transcranial magnetic stimulation therapy sessions",
    },
  ];

  return (
    <section id="insurance" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insurance & Scheduling Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with most major insurance providers and offer flexible
            scheduling options to ensure accessible mental health care for all
            patients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Insurance Coverage
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                We accept most major insurance plans and provide comprehensive
                benefits verification before your first appointment to ensure
                transparent pricing.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg border border-gray-200"
                  >
                    <p className="text-sm font-medium text-gray-700">
                      {provider}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-800 mb-2">
                  Don't see your insurance listed?
                </p>
                <p className="text-sm text-gray-600">
                  Contact our billing department for verification and
                  out-of-network options.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gray-200 rounded-lg">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Payment Options
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Insurance Co-pay</span>
                  <span className="font-semibold text-gray-900">$20-$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Self-Pay Discount</span>
                  <span className="font-semibold text-green-600">20% off</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Payment Plans</span>
                  <span className="font-semibold text-blue-600">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">HSA/FSA</span>
                  <span className="font-semibold text-gray-900">Accepted</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Appointment Types
                </h3>
              </div>

              <div className="space-y-4">
                {appointmentTypes.map((appointment, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {appointment.type}
                      </h4>
                      <span className="text-sm font-medium text-teal-600">
                        {appointment.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {appointment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic Locations and Contact */}
            <div
              className="bg-purple-50 rounded-xl border border-purple-100"
              id="locations"
            >
              {/* Tab Navigation for Locations */}
              <div className="flex flex-col sm:flex-row bg-purple-600 rounded-t-xl">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveTab(location.id)}
                    className={`flex-1 py-4 px-2 text-center text-sm font-semibold transition-colors duration-300 ${
                      activeTab === location.id
                        ? "bg-purple-700 text-white border-b-2 border-white"
                        : "text-purple-200 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    {location.tabName}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Area for the Active Tab */}
              <div className="p-8">
                {activeLocation && (
                  <>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {activeLocation.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Address Section */}
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-sm text-gray-600">
                            {activeLocation.address}
                          </p>
                        </div>
                      </div>

                      {/* Phone Section */}
                      <div className="flex items-start space-x-4">
                        <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <a
                            href={`tel:${activeLocation.phone}`}
                            className="text-sm text-gray-600"
                          >
                            {activeLocation.phone}
                          </a>
                        </div>
                      </div>

                      {/* Fax Section */}
                      <div className="flex items-start space-x-4">
                        <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Fax</p>
                          <p className="text-sm text-gray-600">
                            {activeLocation.fax}
                          </p>
                        </div>
                      </div>

                      {/* Services Offered Section */}
                      <div className="flex items-start space-x-4">
                        <List className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Services Offered
                          </p>
                          <ul className="text-sm text-gray-600 list-disc list-inside">
                            {activeLocation.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Hardcoded Office Hours. This can be made dynamic if needed. */}
                      <div className="flex items-start space-x-4">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Office Hours
                          </p>
                          <p className="text-sm text-gray-600">
                            Monday - Friday: 8:00 AM - 6:00 PM
                          </p>
                          <p className="text-sm text-gray-600">
                            Saturday: 9:00 AM - 2:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Take the first step toward better mental health. Our clinical team
              is ready to provide personalized, evidence-based care tailored to
              your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onContactClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </button>
              <button
                onClick={onContactClick}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Verify Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceLogistics;
