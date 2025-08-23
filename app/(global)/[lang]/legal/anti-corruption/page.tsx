import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anti-Corruption and Anti-Bribery Policy',
  description: 'Steedoo Group SAS anti-corruption and anti-bribery policy and compliance framework.',
};

export default function AntiCorruptionPolicyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Anti-Corruption and Anti-Bribery Policy</h1>
        
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
            <h2 className="text-2xl font-semibold mb-4">1. Policy Statement and Commitment</h2>
            
            <h3 className="text-xl font-semibold mb-3">Zero Tolerance Commitment</h3>
            <p>
              Steedoo Group SAS (&quot;Company&quot;) maintains absolute zero tolerance for corruption and
              bribery in any form. We are committed to conducting business with the highest standards
              of integrity, transparency, and ethical behavior in all our operations across the Democratic
              Republic of Congo and internationally.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Core Principles</h3>
            <p>Our anti-corruption commitment is built on these fundamental principles:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>INTEGRITY:</strong> We conduct all business activities honestly and transparently, without
                compromising our values for short-term gains.</li>
              <li><strong>ACCOUNTABILITY:</strong> We take personal responsibility for our actions and ensure compliance
                with all applicable anti-corruption laws and regulations.</li>
              <li><strong>TRANSPARENCY:</strong> We maintain open and honest communications with all stakeholders,
                ensuring full disclosure of potential conflicts of interest.</li>
              <li><strong>COMPLIANCE:</strong> We strictly comply with all applicable anti-corruption laws, including those
                of the Democratic Republic of Congo, United States, United Kingdom, and other
                jurisdictions where we operate.</li>
              <li><strong>CONTINUOUS IMPROVEMENT:</strong> We regularly review and enhance our anti-corruption
                controls to address emerging risks and regulatory developments.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Scope and Application</h2>
            
            <h3 className="text-xl font-semibold mb-3">Geographic Scope</h3>
            <p>This policy applies to all business activities conducted by or on behalf of Steedoo Group
            SAS, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Operations within the Democratic Republic of Congo</li>
              <li>International business activities and partnerships</li>
              <li>Cross-border transactions and investments</li>
              <li>Joint ventures and collaborative arrangements</li>
              <li>Subsidiary and affiliate operations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Covered Individuals</h3>
            <p>This policy applies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All employees, including full-time, part-time, temporary, and contract workers</li>
              <li>Members of the Board of Directors</li>
              <li>All officers and executives at every level</li>
              <li>Third-party representatives, agents, and intermediaries</li>
              <li>Joint venture partners and business associates</li>
              <li>Contractors, consultants, and service providers</li>
              <li>Anyone acting on behalf of or representing the Company</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Legal and Regulatory Framework</h2>
            
            <h3 className="text-xl font-semibold mb-3">International Legal Framework</h3>
            
            <h4 className="text-lg font-medium mb-2">United Nations Convention against Corruption (UNCAC)</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Comprehensive global framework against corruption</li>
              <li>Prevention, criminalization, and law enforcement measures</li>
              <li>Asset recovery and international cooperation</li>
              <li>Technical assistance and information exchange</li>
            </ul>
            
            <h4 className="text-lg font-medium mb-2">OECD Anti-Bribery Convention</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Prohibition of bribery of foreign public officials</li>
              <li>Accounting and record-keeping requirements</li>
              <li>Effective enforcement and sanctions</li>
              <li>Regular monitoring and evaluation</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Regional and National Laws</h3>
            
            <h4 className="text-lg font-medium mb-2">Democratic Republic of Congo</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Law No. 04/016 of July 19, 2004 on the fight against money laundering and the
                financing of terrorism</li>
              <li>Law No. 06/006 of February 9, 2006 on the general organization of national
                defense and armed forces</li>
              <li>Penal Code provisions on corruption and bribery</li>
              <li>Public Procurement Code on transparency and competition</li>
              <li>Investment Code on ethical business practices</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Definitions</h2>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Corruption</h4>
                <p>Any abuse of entrusted power for private gain, including bribery, embezzlement, fraud,
                extortion, favoritism, nepotism, and other forms of dishonest or unethical conduct.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Bribery</h4>
                <p>The offering, promising, giving, accepting, or soliciting of money, gifts, favors, or anything
                of value to influence the actions or decisions of an individual in a position of trust or
                authority.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Public Official</h4>
                <p>Any person holding a legislative, administrative, or judicial office, whether appointed or
                elected, permanent or temporary, paid or unpaid, including:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Government employees at all levels (federal, provincial, local)</li>
                  <li>Employees of state-owned or state-controlled enterprises</li>
                  <li>Political party officials and candidates</li>
                  <li>Officials of public international organizations</li>
                  <li>Anyone acting in an official capacity for or on behalf of government</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Facilitation Payments</h4>
                <p>Small payments made to secure or expedite the performance of routine, non-discretionary
                government actions, such as processing permits, providing utilities, or other administrative
                services.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
            
            <h3 className="text-xl font-semibold mb-3">Direct Bribery</h3>
            <p><strong>Strictly Prohibited Actions:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Offering, promising, or giving bribes to any person</li>
              <li>Accepting, soliciting, or receiving bribes from any person</li>
              <li>Facilitating bribery by third parties</li>
              <li>Concealing or disguising bribery payments</li>
              <li>Using intermediaries to pay bribes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Public Sector Bribery</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Payments to government officials to obtain licenses or permits</li>
              <li>Gifts to public officials to influence regulatory decisions</li>
              <li>Entertainment for customs officials to expedite clearances</li>
              <li>Campaign contributions to influence government contracts</li>
              <li>Charitable donations to organizations controlled by public officials</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Private Sector Bribery</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Kickbacks to customers&apos; employees to secure contracts</li>
              <li>Payments to suppliers&apos; representatives for favorable terms</li>
              <li>Gifts to competitors&apos; employees for confidential information</li>
              <li>Entertainment for auditors to influence audit findings</li>
              <li>Commissions to distributors&apos; personnel for exclusive arrangements</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Facilitation Payments</h2>
            
            <h3 className="text-xl font-semibold mb-3">Zero Tolerance Policy</h3>
            <p>Steedoo Group SAS prohibits all facilitation payments, regardless of:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Local customs or business practices</li>
              <li>Small amounts or minimal value</li>
              <li>Urgent business needs or time pressures</li>
              <li>Requests or demands by government officials</li>
              <li>Common practices in specific industries or regions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Alternative Approaches</h3>
            <p>When faced with demands for facilitation payments:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Politely Decline:</strong> Explain company policy prohibiting such payments</li>
              <li><strong>Seek Alternatives:</strong> Request alternative procedures or timelines</li>
              <li><strong>Escalate Internally:</strong> Contact supervisor or compliance officer immediately</li>
              <li><strong>Document Incident:</strong> Record details of the request and response</li>
              <li><strong>Report Externally:</strong> Consider reporting to appropriate authorities</li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Gifts, Entertainment, and Hospitality</h2>
            
            <h3 className="text-xl font-semibold mb-3">General Principles</h3>
            <p>Gifts, entertainment, and hospitality must:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Serve legitimate business relationship purposes</li>
              <li>Be reasonable, appropriate, and proportionate</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Be properly documented and transparent</li>
              <li>Not influence or appear to influence business decisions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Acceptable Gifts and Entertainment</h3>
            <p>Employees may accept:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nominal promotional items with company logos (under USD 25)</li>
              <li>Reasonable business meals in connection with business discussions</li>
              <li>Modest entertainment directly related to business relationships</li>
              <li>Cultural or ceremonial gifts of minimal value</li>
              <li>Industry conference materials and samples</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Prohibited Gifts and Entertainment</h3>
            <p>Employees must never accept:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cash, cash equivalents, or financial instruments</li>
              <li>Gifts of significant value (over USD 100)</li>
              <li>Personal services or favors</li>
              <li>Lavish entertainment or luxury experiences</li>
              <li>Gifts from potential suppliers during competitive bidding</li>
              <li>Anything that could influence or appear to influence business decisions</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Due Diligence</h2>
            
            <h3 className="text-xl font-semibold mb-3">Risk-Based Approach</h3>
            <p>Assess third-party corruption risk based on:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Geographic location and country corruption levels</li>
              <li>Government interaction requirements and frequency</li>
              <li>Business sector and industry corruption risks</li>
              <li>Transaction size and complexity</li>
              <li>Proposed third-party role and responsibilities</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Due Diligence Procedures</h3>
            
            <h4 className="text-lg font-medium mb-2">Standard Due Diligence (Low Risk)</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Basic background checks and business verification</li>
              <li>Screening against sanctions and watch lists</li>
              <li>Review of standard compliance policies</li>
              <li>Reference checks with previous business partners</li>
              <li>Standard contractual anti-corruption provisions</li>
            </ul>
            
            <h4 className="text-lg font-medium mb-2">Enhanced Due Diligence (Medium Risk)</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Detailed background investigations on key personnel</li>
              <li>Financial stability and capability assessments</li>
              <li>Review of compliance programs and training</li>
              <li>Site visits or virtual verification meetings</li>
              <li>Enhanced contractual terms and monitoring</li>
            </ul>
            
            <h4 className="text-lg font-medium mb-2">Comprehensive Due Diligence (High Risk)</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Professional background investigations and reports</li>
              <li>Detailed financial and operational assessments</li>
              <li>Compliance program audits and evaluations</li>
              <li>Management interviews and reference checks</li>
              <li>Ongoing monitoring and periodic re-evaluation</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Training and Communication</h2>
            
            <h3 className="text-xl font-semibold mb-3">Training Requirements</h3>
            <p>All covered individuals must complete:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Initial anti-corruption training within 30 days of hire</li>
              <li>Annual comprehensive training updates</li>
              <li>Role-specific specialized training based on risk exposure</li>
              <li>Training on policy updates and regulatory changes</li>
              <li>Certification of understanding and compliance commitment</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Training Content</h3>
            <p>Training programs cover:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Overview of corruption risks and legal requirements</li>
              <li>Company policies and procedures</li>
              <li>Practical guidance and real-world scenarios</li>
              <li>Reporting procedures and resources</li>
              <li>Consequences of violations and enforcement</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Reporting and Investigation</h2>
            
            <h3 className="text-xl font-semibold mb-3">Reporting Obligations</h3>
            <p>All covered individuals must report:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Known or suspected violations of anti-corruption laws</li>
              <li>Requests for improper payments or benefits</li>
              <li>Offers of bribes or corrupt inducements</li>
              <li>Conflicts of interest or ethical concerns</li>
              <li>Retaliatory actions against whistleblowers</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Reporting Channels</h3>
            <p>Multiple reporting options available:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Direct supervisor or management chain</li>
              <li>Compliance Officer or Legal Department</li>
              <li>Anonymous ethics hotline: +243 818-884-686</li>
              <li>Secure online reporting portal: https://steedoo.group</li>
              <li>External ombudsman or independent service</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Non-Retaliation Protection</h3>
            <p>Strictly prohibited retaliation includes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Termination, demotion, or suspension</li>
              <li>Harassment, intimidation, or threats</li>
              <li>Exclusion from business opportunities</li>
              <li>Changes in working conditions or assignments</li>
              <li>Any adverse employment actions</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Disciplinary Actions</h2>
            
            <h3 className="text-xl font-semibold mb-3">Progressive Discipline Framework</h3>
            <p>Disciplinary decisions consider:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Severity and impact of the violation</li>
              <li>Intent and level of responsibility</li>
              <li>Previous disciplinary history</li>
              <li>Cooperation with investigation</li>
              <li>Position and authority level</li>
              <li>Remedial actions taken</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Zero Tolerance Violations</h3>
            <p>Certain violations result in immediate termination:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Paying or receiving bribes</li>
              <li>Facilitating corruption by others</li>
              <li>Falsifying records to conceal misconduct</li>
              <li>Retaliating against whistleblowers</li>
              <li>Refusing to cooperate with investigations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Roles and Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-3">Board of Directors</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Set ethical tone and compliance expectations</li>
              <li>Approve anti-corruption policies and procedures</li>
              <li>Oversee compliance program effectiveness</li>
              <li>Review significant compliance issues and investigations</li>
              <li>Ensure adequate resources for compliance activities</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chief Executive Officer</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Demonstrate personal commitment to ethical conduct</li>
              <li>Communicate compliance expectations throughout organization</li>
              <li>Ensure adequate compliance resources and support</li>
              <li>Oversee response to significant compliance issues</li>
              <li>Report compliance performance to Board of Directors</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chief Compliance Officer</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Develop and maintain anti-corruption policies and procedures</li>
              <li>Oversee compliance training and awareness programs</li>
              <li>Manage third-party due diligence and monitoring</li>
              <li>Coordinate compliance auditing and monitoring</li>
              <li>Serve as primary contact with regulatory authorities</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">All Employees</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Understand and comply with all applicable policies</li>
              <li>Complete required training and certifications</li>
              <li>Report suspected violations and compliance concerns</li>
              <li>Cooperate with compliance audits and investigations</li>
              <li>Maintain accurate records and documentation</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Chief Compliance Officer</h3>
                <p>
                  Email: compliance@steedoogroup.com<br />
                  Phone: +243 818-884-686<br />
                  Online Portal: https://steedoo.group
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">General Counsel</h3>
                <p>
                  Email: legal@steedoogroup.com<br />
                  Phone: +243 818-884-686<br />
                  Response Time: Within 48 hours
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Document Control Information</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Document ID:</strong> SG-ACB-001</p>
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
                <strong>Note:</strong> This Anti-Corruption and Anti-Bribery Policy is a controlled document. 
                Any printed copies are considered uncontrolled and may not reflect the most current version. 
                Please refer to the official electronic version for the most up-to-date policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}