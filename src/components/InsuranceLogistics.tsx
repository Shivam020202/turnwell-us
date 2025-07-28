import React from "react";
import {
  CreditCard,
  Clock,
  MapPin,
  Phone,
  Calendar,
  FileText,
} from "lucide-react";

interface InsuranceLogisticsProps {
  onContactClick: () => void;
}

const InsuranceLogistics = ({ onContactClick }: InsuranceLogisticsProps) => {
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

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Office Hours & Contact
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Monday - Friday</p>
                    <p className="text-sm text-gray-600">8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Saturday</p>
                    <p className="text-sm text-gray-600">9:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <p className="text-sm text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Crisis Line</p>
                    <p className="text-sm text-gray-600">(555) 911-HELP</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">
                      123 Medical Plaza, Suite 200
                      <br />
                      Healthcare City, HC 12345
                    </p>
                  </div>
                </div>
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
