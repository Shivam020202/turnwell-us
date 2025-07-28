import React from "react";
import { Brain, Heart, Zap, Shield, Target, Microscope } from "lucide-react";

const TreatmentModalities = () => {
  const treatments = [
    {
      icon: Brain,
      title: "Cognitive Behavioral Therapy",
      description:
        "Evidence-based psychotherapy targeting thought patterns and behavioral responses with measurable clinical outcomes.",
      efficacy: "92% efficacy rate",
      sessions: "12-16 sessions average",
    },
    {
      icon: Zap,
      title: "Transcranial Magnetic Stimulation",
      description:
        "FDA-approved non-invasive brain stimulation for treatment-resistant depression using targeted magnetic fields.",
      efficacy: "67% remission rate",
      sessions: "36 sessions protocol",
    },
    {
      icon: Heart,
      title: "Dialectical Behavior Therapy",
      description:
        "Specialized therapy for emotional regulation, interpersonal effectiveness, and distress tolerance skills.",
      efficacy: "78% improvement",
      sessions: "24-week program",
    },
    {
      icon: Shield,
      title: "Trauma-Informed Care",
      description:
        "EMDR and trauma-focused interventions addressing PTSD and complex trauma with neurobiological approaches.",
      efficacy: "84% symptom reduction",
      sessions: "8-12 sessions typical",
    },
    {
      icon: Target,
      title: "Precision Psychiatry",
      description:
        "Pharmacogenomic testing and personalized medication management based on genetic markers and biomarkers.",
      efficacy: "73% medication optimization",
      sessions: "Ongoing monitoring",
    },
    {
      icon: Microscope,
      title: "Ketamine-Assisted Therapy",
      description:
        "Innovative treatment for severe depression and anxiety using controlled ketamine administration with therapy.",
      efficacy: "71% rapid response",
      sessions: "6-session initial series",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Evidence-Based Treatment Modalities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clinical protocols integrate the latest research findings with
            proven therapeutic interventions, ensuring optimal patient outcomes
            through scientific rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {treatment.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Clinical Efficacy:
                    </span>
                    <span className="text-sm font-semibold text-teal-600">
                      {treatment.efficacy}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Treatment Duration:
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {treatment.sessions}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentModalities;
