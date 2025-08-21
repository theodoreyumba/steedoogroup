import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Steedoo Group Inc. code of conduct and ethical business practices.',
};

export default function USCodeOfConductPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Code of Conduct</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">STEEDOO GROUP INC.</h2>
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
              At Steedoo Group Inc., we are committed to conducting business with the highest standards of 
              integrity, transparency, and ethical behavior. This Code of Conduct serves as our foundation 
              for making ethical decisions and building trust with all stakeholders in the United States 
              and globally.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Core Values</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>INTEGRITY:</strong> We act honestly and transparently in all business dealings</li>
              <li><strong>RESPECT:</strong> We treat all individuals with dignity and respect</li>
              <li><strong>ACCOUNTABILITY:</strong> We take responsibility for our actions and decisions</li>
              <li><strong>EXCELLENCE:</strong> We strive for the highest quality in everything we do</li>
              <li><strong>INNOVATION:</strong> We embrace creativity and continuous improvement</li>
              <li><strong>COMPLIANCE:</strong> We adhere to all applicable laws and regulations</li>
              <li><strong>STAKEHOLDER VALUE:</strong> We create long-term value for all stakeholders</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Scope and Application</h3>
            <p>This Code applies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All employees, directors, and officers</li>
              <li>Contractors, consultants, and temporary workers</li>
              <li>Business partners and representatives</li>
              <li>Anyone acting on behalf of Steedoo Group Inc.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Workplace Ethics and Equal Opportunity</h2>
            
            <h3 className="text-xl font-semibold mb-3">Equal Employment Opportunity</h3>
            <p>We are committed to providing equal employment opportunities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prohibit discrimination based on race, color, religion, sex, national origin, age, disability, or veteran status</li>
              <li>Comply with all federal, state, and local equal employment opportunity laws</li>
              <li>Provide reasonable accommodations for qualified individuals with disabilities</li>
              <li>Ensure fair hiring, promotion, and compensation practices</li>
              <li>Promote diversity and inclusion in all aspects of our business</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Harassment-Free Workplace</h3>
            <p>We maintain a workplace free from harassment and discrimination:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Zero tolerance for sexual harassment, hostile work environment, or retaliation</li>
              <li>Prohibit unwelcome conduct based on protected characteristics</li>
              <li>Encourage reporting of harassment or discrimination</li>
              <li>Investigate all complaints promptly and thoroughly</li>
              <li>Take appropriate corrective action when violations occur</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Workplace Safety and Health</h3>
            <p>We prioritize employee safety and well-being:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Occupational Safety and Health Administration (OSHA) standards</li>
              <li>Maintain safe working conditions and provide safety training</li>
              <li>Report workplace injuries and safety hazards immediately</li>
              <li>Prohibit workplace violence and threats</li>
              <li>Support employee wellness and work-life balance</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Securities Laws and Financial Integrity</h2>
            
            <h3 className="text-xl font-semibold mb-3">Securities Law Compliance</h3>
            <p>We comply with all federal and state securities laws:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prohibit insider trading and tipping of material non-public information</li>
              <li>Maintain confidentiality of material information until properly disclosed</li>
              <li>Comply with Securities and Exchange Commission (SEC) reporting requirements</li>
              <li>Ensure accurate and timely disclosure of material information</li>
              <li>Maintain proper controls over financial reporting</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Financial Reporting and Controls</h3>
            <p>We maintain accurate financial records and reporting:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Generally Accepted Accounting Principles (GAAP)</li>
              <li>Ensure accuracy and completeness of financial statements</li>
              <li>Maintain effective internal controls over financial reporting</li>
              <li>Prohibit fraudulent or misleading financial reporting</li>
              <li>Cooperate fully with auditors and regulatory examinations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Sarbanes-Oxley Compliance</h3>
            <p>We comply with Sarbanes-Oxley Act requirements:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintain accurate books, records, and accounts</li>
              <li>Implement and maintain effective internal controls</li>
              <li>Ensure CEO and CFO certifications of financial statements</li>
              <li>Prohibit retaliation against whistleblowers</li>
              <li>Establish audit committee oversight of financial reporting</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Anti-Corruption and FCPA Compliance</h2>
            
            <h3 className="text-xl font-semibold mb-3">Foreign Corrupt Practices Act (FCPA)</h3>
            <p>We strictly comply with the FCPA and anti-bribery laws:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prohibit payments to foreign officials to obtain or retain business</li>
              <li>No facilitation payments to expedite routine government actions</li>
              <li>Maintain accurate books and records of all transactions</li>
              <li>Implement effective internal controls to prevent bribery</li>
              <li>Conduct due diligence on third-party business partners</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Gifts and Business Entertainment</h3>
            <p>We maintain appropriate standards for business courtesies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modest gifts and entertainment that comply with company policy</li>
              <li>No gifts or entertainment to government officials without approval</li>
              <li>Business entertainment must be reasonable and infrequent</li>
              <li>Proper documentation and approval of all business entertainment</li>
              <li>Never accept or offer cash, cash equivalents, or personal favors</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Political Activities and Lobbying</h3>
            <p>We comply with political activity and lobbying regulations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>No corporate political contributions without legal approval</li>
              <li>Comply with lobbying registration and disclosure requirements</li>
              <li>Separate personal political activities from company business</li>
              <li>Respect employee rights to personal political participation</li>
              <li>Maintain transparency in government relations activities</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Privacy and Information Security</h2>
            
            <h3 className="text-xl font-semibold mb-3">Data Privacy Compliance</h3>
            <p>We protect personal data and comply with privacy laws:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with applicable state privacy laws including California Consumer Privacy Act (CCPA)</li>
              <li>Implement privacy by design principles in business processes</li>
              <li>Provide individuals with rights to access, correct, and delete personal data</li>
              <li>Obtain appropriate consent for data collection and processing</li>
              <li>Implement data breach notification procedures</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Information Security</h3>
            <p>We protect sensitive information and maintain cybersecurity:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Implement robust cybersecurity measures and controls</li>
              <li>Protect confidential business information and trade secrets</li>
              <li>Use company IT systems only for authorized business purposes</li>
              <li>Report security incidents and data breaches immediately</li>
              <li>Comply with industry-specific data security requirements</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Intellectual Property Protection</h3>
            <p>We respect and protect intellectual property rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Protect company trade secrets, patents, and proprietary information</li>
              <li>Respect third-party intellectual property rights</li>
              <li>Obtain proper licenses for use of third-party software and content</li>
              <li>Report potential intellectual property infringement</li>
              <li>Maintain confidentiality of proprietary information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Antitrust and Competition Laws</h2>
            
            <h3 className="text-xl font-semibold mb-3">Fair Competition</h3>
            <p>We compete fairly and comply with antitrust laws:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Sherman Act, Clayton Act, and Federal Trade Commission Act</li>
              <li>Prohibit price fixing, market allocation, or bid rigging agreements</li>
              <li>Avoid anti-competitive practices or monopolistic behavior</li>
              <li>Compete based on merit, quality, and customer service</li>
              <li>Respect competitor confidential information</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Trade Associations and Competitor Interactions</h3>
            <p>We participate appropriately in industry activities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Limit discussions with competitors to appropriate topics</li>
              <li>Avoid agreements that restrict competition</li>
              <li>Document legitimate business reasons for competitor interactions</li>
              <li>Seek legal guidance for sensitive competitive situations</li>
              <li>Report potential antitrust violations immediately</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. International Trade and Export Controls</h2>
            
            <h3 className="text-xl font-semibold mb-3">Export Administration Regulations</h3>
            <p>We comply with U.S. export control laws:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Export Administration Regulations (EAR)</li>
              <li>Obtain required export licenses for controlled technologies</li>
              <li>Screen customers and transactions against restricted party lists</li>
              <li>Maintain accurate export records and documentation</li>
              <li>Provide export compliance training to relevant personnel</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Economic Sanctions Compliance</h3>
            <p>We comply with U.S. economic sanctions programs:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Office of Foreign Assets Control (OFAC) sanctions</li>
              <li>Screen all business partners against sanctions lists</li>
              <li>Prohibit transactions with sanctioned individuals or entities</li>
              <li>Report potential sanctions violations to authorities</li>
              <li>Maintain robust sanctions compliance procedures</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Environmental Compliance and Sustainability</h2>
            
            <h3 className="text-xl font-semibold mb-3">Environmental Laws</h3>
            <p>We comply with environmental regulations and promote sustainability:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with Environmental Protection Agency (EPA) regulations</li>
              <li>Obtain required environmental permits and licenses</li>
              <li>Properly manage waste disposal and emissions</li>
              <li>Report environmental incidents and violations</li>
              <li>Implement environmental management systems</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Climate and Sustainability</h3>
            <p>We are committed to environmental stewardship:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reduce greenhouse gas emissions and environmental impact</li>
              <li>Promote energy efficiency and renewable energy use</li>
              <li>Support sustainable business practices and supply chains</li>
              <li>Consider environmental factors in business decisions</li>
              <li>Engage in climate risk assessment and disclosure</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Conflicts of Interest</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Conflicts</h3>
            <p>We avoid situations that compromise our professional judgment:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Disclose all potential conflicts of interest</li>
              <li>Avoid financial interests that conflict with company duties</li>
              <li>Do not use company position for personal gain</li>
              <li>Separate personal investments from company business</li>
              <li>Seek approval for outside employment or board positions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Corporate Opportunities</h3>
            <p>We protect company business opportunities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Offer business opportunities to the company first</li>
              <li>Do not compete with the company for business opportunities</li>
              <li>Avoid using company resources for personal benefit</li>
              <li>Maintain confidentiality of business opportunities</li>
              <li>Obtain approval before pursuing related business ventures</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Compliance and Reporting</h2>
            
            <h3 className="text-xl font-semibold mb-3">Legal and Regulatory Compliance</h3>
            <p>We maintain comprehensive compliance programs:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Understand and comply with all applicable laws and regulations</li>
              <li>Maintain effective compliance monitoring and reporting systems</li>
              <li>Conduct regular compliance training and awareness programs</li>
              <li>Cooperate with regulatory examinations and investigations</li>
              <li>Update policies and procedures based on regulatory changes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Whistleblower Protection</h3>
            <p>We protect employees who report violations in good faith:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with federal whistleblower protection laws</li>
              <li>Prohibit retaliation against employees who report violations</li>
              <li>Provide multiple channels for reporting concerns</li>
              <li>Maintain confidentiality of reports to the extent possible</li>
              <li>Investigate all reports promptly and thoroughly</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Reporting Channels</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Direct Supervisor:</strong> Immediate manager or department head</li>
                <li><strong>Human Resources:</strong> hr@steedoogroup.com</li>
                <li><strong>Compliance Officer:</strong> compliance@steedoogroup.com</li>
                <li><strong>Ethics Hotline:</strong> 1-800-ETHICS-1 (1-800-384-4271)</li>
                <li><strong>Online Portal:</strong> https://steedoo.group/ethics-reporting</li>
                <li><strong>Anonymous Reporting:</strong> Available through all channels</li>
                <li><strong>SEC Whistleblower:</strong> https://www.sec.gov/whistleblower</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Implementation and Governance</h2>
            
            <h3 className="text-xl font-semibold mb-3">Board Oversight</h3>
            <p>Our Board of Directors provides governance and oversight:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Approve and oversee implementation of this Code</li>
              <li>Ensure adequate compliance resources and support</li>
              <li>Review compliance performance and effectiveness</li>
              <li>Hold management accountable for ethical conduct</li>
              <li>Maintain independence and objectivity in oversight</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Management Responsibility</h3>
            <p>Senior management demonstrates ethical leadership:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Model ethical behavior and set the tone at the top</li>
              <li>Implement effective compliance programs and controls</li>
              <li>Provide necessary resources for compliance activities</li>
              <li>Address compliance issues promptly and effectively</li>
              <li>Communicate compliance expectations clearly</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Employee Responsibilities</h3>
            <p>All employees contribute to our ethical culture:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Read, understand, and follow this Code of Conduct</li>
              <li>Complete required compliance training and certifications</li>
              <li>Report violations and seek guidance when needed</li>
              <li>Cooperate with investigations and compliance activities</li>
              <li>Support colleagues in making ethical decisions</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information and Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Ethics and Compliance</h3>
                <p>
                  Email: compliance@steedoogroup.com<br />
                  Phone: 1-800-ETHICS-1 (1-800-384-4271)<br />
                  Available: 24/7 for urgent matters
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Human Resources</h3>
                <p>
                  Email: hr@steedoogroup.com<br />
                  Phone: +1 (307) 200-0000<br />
                  Available: Business hours (9 AM - 5 PM MST)
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Regulatory Resources</h3>
              <ul className="list-disc pl-6 text-sm">
                <li><strong>SEC:</strong> Securities and Exchange Commission - www.sec.gov</li>
                <li><strong>OSHA:</strong> Occupational Safety and Health Administration - www.osha.gov</li>
                <li><strong>EEOC:</strong> Equal Employment Opportunity Commission - www.eeoc.gov</li>
                <li><strong>FTC:</strong> Federal Trade Commission - www.ftc.gov</li>
                <li><strong>DOJ:</strong> Department of Justice - www.justice.gov</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Document Control and Acknowledgment</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Document ID:</strong> SGI-COC-001</p>
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
            
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>MANDATORY ACKNOWLEDGMENT:</strong> All directors, officers, and employees must read, 
                understand, and acknowledge receipt of this Code of Conduct. Annual recertification is required. 
                Failure to comply with this Code may result in disciplinary action, up to and including termination 
                of employment and potential legal action. Updates to this Code will be communicated through official 
                channels and require new acknowledgment within 30 days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}