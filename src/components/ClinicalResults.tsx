import React from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

const ClinicalResults = () => {
  const outcomes = [
    {
      metric: "Treatment Response Rate",
      value: "87%",
      description: "Patients showing significant improvement within 12 weeks",
      comparison: "+23% above national average",
    },
    {
      metric: "Remission Rate",
      value: "72%",
      description: "Complete symptom resolution at 6-month follow-up",
      comparison: "+18% above industry standard",
    },
    {
      metric: "Patient Satisfaction",
      value: "96%",
      description: "Would recommend our services to family/friends",
      comparison: "Top 5% nationally",
    },
    {
      metric: "Treatment Adherence",
      value: "91%",
      description: "Patients completing full treatment protocols",
      comparison: "+27% above typical rates",
    },
  ];

  const studies = [
    {
      title: "TMS Efficacy in Treatment-Resistant Depression",
      journal: "Journal of Clinical Psychiatry",
      year: "2023",
      findings: "67% remission rate in 156 patients over 6-week protocol",
    },
    {
      title: "Ketamine-Assisted Therapy Outcomes",
      journal: "American Journal of Psychiatry",
      year: "2023",
      findings: "Rapid response in 71% of severe depression cases",
    },
    {
      title: "Precision Psychiatry Implementation",
      journal: "Nature Medicine",
      year: "2022",
      findings: "73% improvement in medication selection accuracy",
    },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Evidence-Based Clinical Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to measurable results drives continuous improvement
            in patient care, with outcomes consistently exceeding national
            benchmarks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {outcome.metric}
                </h3>
              </div>

              <div className="mb-4">
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {outcome.value}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {outcome.description}
                </p>
                <p className="text-xs font-medium text-teal-600">
                  {outcome.comparison}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Published Research & Clinical Studies
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {studies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {study.title}
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium text-blue-600">
                    {study.journal}
                  </span>
                  <span className="text-sm text-gray-500">({study.year})</span>
                </div>
                <p className="text-sm text-gray-600">{study.findings}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Accredited by Joint Commission • CARF Certified • HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResults;
