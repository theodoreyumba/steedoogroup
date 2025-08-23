import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Steedoo Group SAS code of conduct and ethical business practices.',
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Code of Conduct</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">STEEDOO GROUP SAS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Effective Date:</strong> January 1, 2025</p>
                <p><strong>Version:</strong> 1.0</p>
              </div>
              <div>
                <p><strong>Approved by:</strong> Board of Directors</p>
                <p><strong>Review Date:</strong> January 1, 2026</p>
              </div>
            </div>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to Ethical Excellence</h2>
            
            <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
            <p>
              At Steedoo Group SAS, we are committed to conducting business with the highest standards of 
              integrity, transparency, and ethical behavior. This Code of Conduct serves as our foundation 
              for making ethical decisions and building trust with all stakeholders across the Democratic 
              Republic of Congo and internationally.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Core Values</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>INTEGRITY:</strong> We act honestly and transparently in all business dealings</li>
              <li><strong>RESPECT:</strong> We treat all individuals with dignity and respect</li>
              <li><strong>ACCOUNTABILITY:</strong> We take responsibility for our actions and decisions</li>
              <li><strong>EXCELLENCE:</strong> We strive for the highest quality in everything we do</li>
              <li><strong>INNOVATION:</strong> We embrace creativity and continuous improvement</li>
              <li><strong>SUSTAINABILITY:</strong> We consider the long-term impact of our actions</li>
              <li><strong>COMMUNITY:</strong> We contribute positively to the communities we serve</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Scope and Application</h3>
            <p>This Code applies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All employees, directors, and officers</li>
              <li>Contractors, consultants, and temporary workers</li>
              <li>Business partners and representatives</li>
              <li>Anyone acting on behalf of Steedoo Group SAS</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Workplace Ethics and Conduct</h2>
            
            <h3 className="text-xl font-semibold mb-3">Respectful Workplace</h3>
            <p>We are committed to maintaining a workplace free from discrimination, harassment, and intimidation:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Treat all colleagues with dignity and respect regardless of background</li>
              <li>Prohibit discrimination based on race, gender, religion, nationality, age, or other protected characteristics</li>
              <li>Zero tolerance for harassment, bullying, or inappropriate behavior</li>
              <li>Promote diversity, equity, and inclusion in all aspects of our business</li>
              <li>Provide equal opportunities for professional development and advancement</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Health and Safety</h3>
            <p>We prioritize the health and safety of all individuals:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintain safe working conditions and follow safety protocols</li>
              <li>Report unsafe conditions or practices immediately</li>
              <li>Comply with all health and safety regulations</li>
              <li>Support employee well-being and work-life balance</li>
              <li>Provide necessary training and safety equipment</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
            <p>We invest in our people and their growth:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide opportunities for continuous learning and skill development</li>
              <li>Support professional certifications and education</li>
              <li>Encourage knowledge sharing and mentorship</li>
              <li>Recognize and reward outstanding performance</li>
              <li>Foster innovation and creative problem-solving</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Business Integrity and Anti-Corruption</h2>
            
            <h3 className="text-xl font-semibold mb-3">Anti-Corruption and Bribery</h3>
            <p>We maintain zero tolerance for corruption in any form:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prohibit offering, giving, soliciting, or accepting bribes</li>
              <li>No facilitation payments to government officials</li>
              <li>Transparent dealings with public and private sector entities</li>
              <li>Proper documentation of all business transactions</li>
              <li>Regular training on anti-corruption policies</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Gifts and Entertainment</h3>
            <p>Guidelines for appropriate business courtesies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accept only modest gifts of nominal value (under USD 50)</li>
              <li>Business entertainment must be reasonable and infrequent</li>
              <li>No gifts or entertainment during contract negotiations</li>
              <li>Declare all gifts and entertainment above threshold limits</li>
              <li>Never accept cash, cash equivalents, or personal favors</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Conflicts of Interest</h3>
            <p>We avoid situations that compromise our judgment:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Disclose any potential conflicts of interest immediately</li>
              <li>Avoid personal financial interests in competitors or business partners</li>
              <li>Do not hire family members without proper disclosure and approval</li>
              <li>Separate personal activities from company business</li>
              <li>Seek guidance when uncertain about potential conflicts</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Security and Confidentiality</h2>
            
            <h3 className="text-xl font-semibold mb-3">Confidential Information</h3>
            <p>We protect sensitive information and trade secrets:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintain confidentiality of proprietary business information</li>
              <li>Protect customer, supplier, and employee personal data</li>
              <li>Do not share confidential information with unauthorized parties</li>
              <li>Use confidential information only for legitimate business purposes</li>
              <li>Continue confidentiality obligations after employment ends</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Data Protection and Privacy</h3>
            <p>We respect privacy rights and protect personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with applicable data protection laws and regulations</li>
              <li>Collect personal data only for legitimate business purposes</li>
              <li>Implement appropriate security measures to protect data</li>
              <li>Provide individuals with access to their personal information</li>
              <li>Report data breaches immediately to appropriate authorities</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Information Technology</h3>
            <p>We use technology resources responsibly:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use company IT systems for business purposes only</li>
              <li>Maintain strong passwords and follow security protocols</li>
              <li>Do not install unauthorized software or access inappropriate content</li>
              <li>Report security incidents and cyber threats immediately</li>
              <li>Respect intellectual property rights in digital content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Financial Integrity and Reporting</h2>
            
            <h3 className="text-xl font-semibold mb-3">Accurate Financial Reporting</h3>
            <p>We maintain accurate and transparent financial records:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensure all financial transactions are properly recorded</li>
              <li>Provide complete and accurate information for financial reporting</li>
              <li>Comply with accounting standards and regulatory requirements</li>
              <li>Never falsify records or engage in fraudulent activities</li>
              <li>Cooperate fully with internal and external audits</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Expense Management</h3>
            <p>We manage company resources responsibly:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Submit accurate and timely expense reports</li>
              <li>Use company funds only for legitimate business purposes</li>
              <li>Obtain proper approvals for expenditures</li>
              <li>Maintain receipts and supporting documentation</li>
              <li>Avoid excessive or lavish spending</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Anti-Money Laundering</h3>
            <p>We prevent our systems from being used for money laundering:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Know our customers and verify their identities</li>
              <li>Monitor transactions for suspicious activities</li>
              <li>Report unusual or suspicious transactions to authorities</li>
              <li>Comply with all anti-money laundering regulations</li>
              <li>Maintain proper records of financial transactions</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. External Relationships and Community</h2>
            
            <h3 className="text-xl font-semibold mb-3">Customer Relations</h3>
            <p>We build trust through exceptional service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide honest and accurate information about our products and services</li>
              <li>Honor commitments and deliver on promises</li>
              <li>Address customer concerns promptly and fairly</li>
              <li>Protect customer confidentiality and privacy</li>
              <li>Continuously improve customer satisfaction</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Supplier and Partner Relations</h3>
            <p>We work with ethical business partners:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Select suppliers based on merit, quality, and ethical standards</li>
              <li>Require suppliers to comply with our code of conduct</li>
              <li>Pay suppliers fairly and on time</li>
              <li>Maintain fair and transparent procurement processes</li>
              <li>Monitor supplier compliance with labor and environmental standards</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
            <p>We contribute positively to our communities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Support local economic development and employment</li>
              <li>Engage in community development projects</li>
              <li>Respect local customs and cultural practices</li>
              <li>Contribute to education and skill development programs</li>
              <li>Participate in charitable and social initiatives</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Environmental Responsibility</h2>
            
            <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
            <p>We are committed to environmental protection:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with all environmental laws and regulations</li>
              <li>Minimize our environmental footprint</li>
              <li>Promote sustainable business practices</li>
              <li>Reduce waste, energy consumption, and emissions</li>
              <li>Support renewable energy and clean technology initiatives</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Resource Conservation</h3>
            <p>We use natural resources responsibly:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Implement energy-efficient practices and technologies</li>
              <li>Reduce water consumption and waste generation</li>
              <li>Promote recycling and reuse programs</li>
              <li>Choose environmentally friendly materials and suppliers</li>
              <li>Educate employees on environmental best practices</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Government Relations and Political Activities</h2>
            
            <h3 className="text-xl font-semibold mb-3">Government Interactions</h3>
            <p>We maintain transparent relationships with government entities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with all applicable laws and regulations</li>
              <li>Provide accurate information to government officials</li>
              <li>Avoid improper influence or preferential treatment</li>
              <li>Respect government procurement processes</li>
              <li>Cooperate with lawful government investigations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Political Activities</h3>
            <p>We respect individual political rights while maintaining neutrality:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The company does not make political contributions</li>
              <li>Employees may participate in personal political activities</li>
              <li>Political activities must be conducted on personal time</li>
              <li>Do not use company resources for political purposes</li>
              <li>Respect diverse political views and opinions</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Compliance and Reporting</h2>
            
            <h3 className="text-xl font-semibold mb-3">Legal Compliance</h3>
            <p>We comply with all applicable laws and regulations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Understand and follow laws relevant to your role</li>
              <li>Seek guidance when legal requirements are unclear</li>
              <li>Report potential legal violations immediately</li>
              <li>Cooperate with compliance monitoring and audits</li>
              <li>Stay informed about regulatory changes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Reporting Concerns</h3>
            <p>We encourage open communication about ethical concerns:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Report suspected violations of this Code immediately</li>
              <li>Use available reporting channels including anonymous options</li>
              <li>Cooperate with investigations honestly and completely</li>
              <li>No retaliation against those who report in good faith</li>
              <li>Seek guidance when facing ethical dilemmas</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Reporting Channels</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Direct Supervisor:</strong> Immediate manager or department head</li>
                <li><strong>Human Resources:</strong> hr@steedoogroup.com</li>
                <li><strong>Compliance Officer:</strong> compliance@steedoogroup.com</li>
                <li><strong>Ethics Hotline:</strong> +243 818-884-686</li>
                <li><strong>Online Portal:</strong> https://steedoo.group/ethics-reporting</li>
                <li><strong>Anonymous Reporting:</strong> Available through all channels</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Implementation and Enforcement</h2>
            
            <h3 className="text-xl font-semibold mb-3">Training and Awareness</h3>
            <p>We ensure all personnel understand and apply this Code:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mandatory Code of Conduct training for all employees</li>
              <li>Regular refresher training and updates</li>
              <li>Role-specific ethics training based on responsibilities</li>
              <li>Integration of ethical considerations in decision-making</li>
              <li>Leadership modeling of ethical behavior</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Monitoring and Auditing</h3>
            <p>We regularly assess compliance with this Code:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Regular compliance audits and assessments</li>
              <li>Monitoring of key risk areas and activities</li>
              <li>Review of policies and procedures for effectiveness</li>
              <li>Benchmarking against industry best practices</li>
              <li>Continuous improvement of ethics programs</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Disciplinary Actions</h3>
            <p>Violations of this Code will result in appropriate disciplinary action:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Disciplinary measures based on severity of violation</li>
              <li>Range from counseling to termination of employment</li>
              <li>Legal action may be pursued for serious violations</li>
              <li>Consistent application of disciplinary policies</li>
              <li>Focus on prevention and rehabilitation where appropriate</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Leadership and Governance</h2>
            
            <h3 className="text-xl font-semibold mb-3">Board of Directors</h3>
            <p>Our Board provides ethical leadership and oversight:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Set the ethical tone and expectations for the organization</li>
              <li>Approve and oversee implementation of this Code</li>
              <li>Review compliance performance and effectiveness</li>
              <li>Ensure adequate resources for ethics programs</li>
              <li>Hold management accountable for ethical conduct</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Senior Management</h3>
            <p>Leadership demonstrates commitment to ethical excellence:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Model ethical behavior in all business activities</li>
              <li>Communicate ethics expectations clearly and consistently</li>
              <li>Support employees in making ethical decisions</li>
              <li>Allocate necessary resources for compliance programs</li>
              <li>Address ethical concerns promptly and effectively</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Individual Responsibility</h3>
            <p>Every person has a role in maintaining our ethical culture:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Understand and follow this Code of Conduct</li>
              <li>Make ethical decisions in daily work activities</li>
              <li>Report concerns and seek guidance when needed</li>
              <li>Support colleagues in ethical decision-making</li>
              <li>Continuously improve personal ethical standards</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information and Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Ethics and Compliance</h3>
                <p>
                  Email: compliance@steedoogroup.com<br />
                  Phone: +243 818-884-686<br />
                  Available: 24/7 for urgent matters
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Human Resources</h3>
                <p>
                  Email: hr@steedoogroup.com<br />
                  Phone: +243 818-884-686<br />
                  Available: Business hours (8 AM - 5 PM CAT)
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Additional Resources</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Anti-Corruption Policy: Available on company intranet</li>
                <li>Employee Handbook: Complete policies and procedures</li>
                <li>Training Portal: Online ethics and compliance training</li>
                <li>Legal Updates: Regular communications on regulatory changes</li>
                <li>Ethics Committee: Monthly meetings and guidance sessions</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Document Control and Updates</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Document ID:</strong> SG-COC-001</p>
                  <p><strong>Version:</strong> 1.0</p>
                  <p><strong>Effective Date:</strong> January 1, 2025</p>
                </div>
                <div>
                  <p><strong>Next Review Date:</strong> January 1, 2026</p>
                  <p><strong>Document Owner:</strong> Chief Compliance Officer</p>
                  <p><strong>Approved By:</strong> Board of Directors</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Acknowledgment Required:</strong> All employees must read, understand, and acknowledge 
                receipt of this Code of Conduct. Annual recertification is required for continued employment. 
                Updates to this Code will be communicated through official channels and require new acknowledgment.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}