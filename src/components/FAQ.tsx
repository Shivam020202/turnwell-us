import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of mental health conditions do you treat?",
      answer:
        "We specialize in treating a wide range of mental health conditions including depression, anxiety disorders, bipolar disorder, PTSD, OCD, ADHD, and treatment-resistant depression. Our team uses evidence-based approaches tailored to each individual's specific needs.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, Kaiser Permanente, Medicare, Medicaid, and many others. We provide comprehensive benefits verification before your first appointment to ensure transparent pricing.",
    },
    {
      question: "What is TMS therapy and how effective is it?",
      answer:
        "Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment for depression that uses magnetic fields to stimulate specific areas of the brain. Our clinical data shows a 67% remission rate in patients with treatment-resistant depression, typically requiring 36 sessions over 6-9 weeks.",
    },
    {
      question: "How do I schedule my first appointment?",
      answer:
        "You can schedule your initial clinical assessment by calling us at (555) 123-4567, filling out our contact form, or using our online scheduling system. We typically respond within 24 hours and can often accommodate new patients within 1-2 weeks.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your initial psychiatric evaluation is a comprehensive 90-minute appointment that includes a detailed assessment of your mental health history, current symptoms, and treatment goals. Our clinicians will work with you to develop a personalized treatment plan based on evidence-based practices.",
    },
    {
      question: "Do you offer telehealth services?",
      answer:
        "Yes, we offer secure telehealth appointments for certain types of therapy sessions and medication management visits. Our digital health platform is HIPAA-compliant and provides the same quality of care as in-person visits when appropriate.",
    },
    {
      question:
        "What makes your approach different from other mental health providers?",
      answer:
        "Our approach combines cutting-edge treatments like TMS and ketamine-assisted therapy with traditional evidence-based practices. We use precision psychiatry, including pharmacogenomic testing, to optimize medication selection. Our outcomes consistently exceed national benchmarks with an 87% treatment response rate.",
    },
    {
      question: "How long does treatment typically take?",
      answer:
        "Treatment duration varies based on individual needs and the specific condition being treated. Most patients see significant improvement within 12 weeks, with some experiencing benefits much sooner. We provide ongoing monitoring and adjust treatment plans as needed to ensure optimal outcomes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our mental health services and
            treatment approaches.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our clinical team is here to help you understand your treatment
              options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#locations"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
