import React, { useRef } from 'react';
import { ArrowLeft, Download } from 'lucide-react';

const CV = ({ setActiveSection }) => {
  const cvRef = useRef(null);

  const handleDownload = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    html2pdf()
      .set({
        margin: 0.5,
        filename: 'CV_Rafiatou_OKERE.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      })
      .from(cvRef.current)
      .save();
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-navy">
      <div className="max-w-5xl mx-auto">
        
        {/* Bouton retour */}
        <button 
          onClick={() => setActiveSection('home')}
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-stone-700 dark:hover:text-stone-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to home</span>
        </button>

        {/* CV Container */}
        <div ref={cvRef} className="bg-white dark:bg-navy-light rounded-2xl shadow-2xl overflow-hidden">
          {/* En-tête avec nom */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 text-white py-8 px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              Miss OKERE Rafiatou
            </h1>
            <p className="text-center text-blue-100">
              01 BP 1820 Porto-Novo Oganla – Porto-Novo, Benin
            </p>
            <p className="text-center text-blue-100">
              +221 71 061 99 43 • okererafiatou@gmail.com
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            
            {/* Colonne gauche - Sidebar */}
            <div className="md:col-span-1 bg-gray-50 dark:bg-navy-light p-8 space-y-8">
              
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/src/assets/images/raf.jpeg"
                    alt="Rafiatou OKERE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Research Interest */}
              <div>
                <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Research Interest
                </h2>
                <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <li>• Machine Learning and Predictive Modeling</li>
                  <li>• Applied Statistics and Data Analysis</li>
                  <li>• Health Data Science</li>
                  <li>• Food Security and Agricultural Research</li>
                  <li>• Blockchain for Data Security and Decentralized Applications</li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Languages
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">French</p>
                    <p className="text-slate-600 dark:text-slate-300">Advanced proficiency</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">English</p>
                    <p className="text-slate-600 dark:text-slate-300">Intermediate proficiency</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Fon</p>
                    <p className="text-slate-600 dark:text-slate-300">Native Language</p>
                  </div>
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Other Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {['Jupyter Notebook', 'Python', 'Communication', 'Leadership', 'Microsoft Office', 'Project Management', 'Data Analysis', 'Business analytics', 'Solidity', 'Smart contracts'].map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bouton Download */}
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-stone-800 dark:bg-stone-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>

            {/* Colonne droite - Contenu principal */}
            <div className="md:col-span-2 p-8 space-y-6">
              
              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Education
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Institute of Mathematics and Physical Sciences</h3>
                        <p className="text-slate-600 dark:text-slate-400">Dangbo, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2024</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Bachelor's Degree in Computer Science</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">Final Project: Development of a mobile carpooling application.</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">Advisor: Madame HOUNGUE Pélagie.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">UNSTIM</h3>
                        <p className="text-slate-600 dark:text-slate-400">Abomey, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2022</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Bachelor's Degree in Mathematics and Computer Science</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">Thesis: Surface in R3: Liebmann's Theorem.</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">Advisor: Dr. Raymond HOUNNONKPE.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">C.E.G. Les Cocotiers</h3>
                        <p className="text-slate-600 dark:text-slate-400">Porto-Novo, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2018</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">High School Diploma – Science Track (Series C)</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">Specialization in mathematics and physics.</p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Professional Experience
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">ITTIQ</h3>
                        <p className="text-slate-600 dark:text-slate-400">Cotonou, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2025</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Full-Stack Web Developer</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Developed and maintained dynamic web applications using modern technologies. Collaborated with the team on both front-end and back-end development, database integration, and system optimization to enhance performance and user experience.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400">Porto-Novo, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2024</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Entrepreneur - School Supplies Seller</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Managing sales and distribution of school supplies, customer relations, inventory tracking, and promoting products on social media.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">ABI (Sèmè City)</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2023-2024</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Blockchain Developer</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Participated in a blockchain development workshop where I learned to design and deploy smart contracts, as well as use blockchain technologies to develop secure applications.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">UNLEASH (ICT for Youth Agripreneurship)</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2023</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Participant - UNLEASH Hack Benin</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Took part in a hackathon to develop innovative solutions for agriculture, including a mobile application for data monitoring and analysis to reduce the mortality rate of tilapia larvae in southern Benin.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400">Natitingou, Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2019-2020</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Private Mathematics Tutor</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Provided personalized tutoring sessions in mathematics for students of different levels, helping them master fundamental concepts and improve their problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Projects */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Research Projects
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Personal Project</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2025</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Predictive Analysis for Breast Cancer Screening</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      This project aims to develop a predictive model based on machine learning to identify risk factors for breast cancer from clinical data and medical images. The model uses classification techniques to provide recommendations for early screening, contributing to reduced mortality risks.
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">Technologies used: Python, Machine Learning, Data Analysis, Scikit-Learn.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Personal Project</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2024</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Blockchain for Health Data Management</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      In this project, I explored the use of blockchain technology to empower patients to take control of their own health data. The goal was to create a secure, decentralized system where patients can store, share, and control access to their medical information, ensuring confidentiality and data integrity.
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">Technologies used: Blockchain, Smart Contracts, Ethereum, Solidity, Web3.</p>
                  </div>
                </div>
              </div>

              {/* Professional Internships */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Professional Internships
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Kas Digit</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2024-2025</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Intern - Web Development</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Worked on web development projects, building and optimizing websites using modern technologies. Gained hands-on experience in frontend and backend development.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Notre Dame de Lourdes School</h3>
                        <p className="text-slate-600 dark:text-slate-400">Benin</p>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white ml-4">2024-2025</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">Volunteer Trainer in Scratch Programming</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Conducted free training sessions to introduce children to programming with Scratch, designed engaging educational activities to develop their algorithmic logic, and fostered creativity through interactive coding exercises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honours and Awards */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Honours and Awards
                </h2>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li>• <strong>2024-2025:</strong> Scholarship for Online Data Analysis Training at Cedoriase Academy.</li>
                  <li>• <strong>2019-2022:</strong> Fully funded Government Scholarship for a Bachelor's Degree in Mathematics, awarded by the State of Benin.</li>
                  <li>• <strong>September 2024:</strong> Winner of the Hackathon organized by UNLEASH Hack Benin (ICT for Youth Agripreneurship), Benin – Developed an innovative mobile application for data monitoring and analysis to reduce the mortality rate of tilapia larvae in southern Benin.</li>
                </ul>
              </div>

              {/* Community Service */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Community Service
                </h2>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li>• <strong>Member, UNLEASH Hackathon - ICT for Youth Agripreneurship, 2024:</strong> Participate in the UNLEASH Hackathon, collaborating with other youth to develop technological solutions for sustainable agricultural practices and youth entrepreneurship in the community, including creating IoT-based systems for agricultural data analysis.</li>
                  <li>• <strong>Supporter, Education and Mentorship, 2021-Present:</strong> Provide personal mentorship and financial support for educational expenses, including tutoring in mathematics for first and second-cycle students, helping improve access to quality education in the community.</li>
                  <li>• <strong>Data Collector, Malaria Prevention Initiative, Parakou, 2022:</strong> Collected statistical data from local residents in Parakou to identify communities at risk of malaria and coordinated the distribution of impregnated mosquito nets, contributing to public health efforts aimed at reducing malaria transmission.</li>
                </ul>
              </div>

              {/* Professional Development Training */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 pb-2 border-b-2 border-blue-900 dark:border-blue-300">
                  Professional Development Training
                </h2>
                
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li>• February 2025: Data Analyst training at Cédoriase Academy.</li>
                  <li>• December 2024: Data Analyst training by Google.</li>
                  <li>• November 2024: Online blockchain training by Chainlink.</li>
                  <li>• July 2024: Blockchain training at Sèmè City, organized by ABI – Introduction to smart contracts and Solidity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;