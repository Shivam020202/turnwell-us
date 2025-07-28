import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const ClinicalTeam = () => {
  const team = [
    {
      name: "Jose I. Reyes, MD",
      title: "Board Certified Psychiatrist",
      credentials: "MD, Board Certified Psychiatrist",
      specializations: [
        "General Psychiatry",
        "Mood Disorders",
        "Medication Management",
      ],
      education: "Medical School Graduate",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-jose-reyes-profile-1-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Amira Perviz, DO",
      title: "Board-Certified Psychiatrist",
      credentials: "DO, Board-Certified Psychiatrist",
      specializations: [
        "General Psychiatry",
        "Psychotherapy",
        "Medication Management",
      ],
      education: "Doctor of Osteopathic Medicine",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-amira-perviz-profile-1-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Autumn Hierholzer, LCSW",
      title: "Therapist",
      credentials: "LCSW, Licensed Clinical Social Worker",
      specializations: [
        "Therapy",
        "Crisis Intervention",
        "Mental Health Counseling",
      ],
      education: "Master of Social Work",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-autumn-hierholzer-profile-1-r68k2e0cqjk76g4nj1nddxnifmgmk8hpuklm8x1q9w.webp",
    },
    {
      name: "Nate Upshaw, MD",
      title: "Lead Psychiatrist",
      credentials: "MD, Lead Psychiatrist",
      specializations: [
        "General Psychiatry",
        "Leadership",
        "Medication Management",
      ],
      education: "Medical School Graduate",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-nate-upshaw-profile-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Mallory Darnell, PMHNP",
      title: "Psychiatric Nurse Practitioner",
      credentials: "PMHNP, Psychiatric Nurse Practitioner",
      specializations: [
        "Medication Management",
        "Patient Care",
        "Mental Health Nursing",
      ],
      education: "Master of Science in Nursing",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-mallory-darnell-profile-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Kelsey Steinkoenig, LMSW",
      title: "Therapist",
      credentials: "LMSW, Licensed Master Social Worker",
      specializations: [
        "Therapy",
        "Mental Health Counseling",
        "Support Services",
      ],
      education: "Master of Social Work",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-kelsey-steinkoenig-profile-2-r7eqgj6phfwxycbd023f94sno7pnqfewj2bevoxxl0.webp",
    },
    {
      name: "Shannon Bray, LPC",
      title: "Therapist",
      credentials: "LPC, Licensed Professional Counselor",
      specializations: ["Therapy", "Counseling", "Mental Health Support"],
      education: "Master of Counseling",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-shannon-bray-profile-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Avery Erickson, LMSW",
      title: "Therapist",
      credentials: "LMSW, Licensed Master Social Worker",
      specializations: [
        "Therapy",
        "Mental Health Counseling",
        "Support Services",
      ],
      education: "Master of Social Work",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-avery-erickson-profile-r5ppewxyxipqk87i6en4n4rbcm35q18eu03u75u69w.webp",
    },
    {
      name: "Mostafa Sherazy, MD",
      title: "Board-Certified in General Psychiatry and Addiction Medicine",
      credentials:
        "MD, Board-Certified in General Psychiatry and Addiction Medicine",
      specializations: [
        "General Psychiatry",
        "Addiction Medicine",
        "Dual Diagnosis",
      ],
      education: "Medical School Graduate",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-mostafa-sherazy-profile-r8r4o3pwn8a13yn1rfr2ckg9lsxm08re045fug0dhg.webp",
    },
    {
      name: "Mark A. Rodriguez, MD, ABPN",
      title: "Board-Certified in General Psychiatry and Addiction Medicine",
      credentials:
        "MD, ABPN, Board-Certified in General Psychiatry and Addiction Medicine",
      specializations: [
        "General Psychiatry",
        "Addiction Medicine",
        "Dual Diagnosis",
      ],
      education: "Medical School Graduate",
      publications: "Clinical experience and patient care",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://turnwell.com/wp-content/uploads/elementor/thumbs/turnwell-mark-rodriguez-profile-r8r4o4nqu2bbfkloly5ox27q76sz7xv4c8sxbpyzb8.webp",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Distinguished Clinical Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary team combines decades of clinical experience
            with active research contributions, ensuring patients receive care
            from leading experts in mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.credentials}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Specializations:
                        </p>
                        <p className="text-sm text-gray-600">
                          {member.specializations.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <GraduationCap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Education:
                        </p>
                        <p className="text-sm text-gray-600">
                          {member.education}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <BookOpen className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Research:
                        </p>
                        <p className="text-sm text-gray-600">
                          {member.publications}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeam;
