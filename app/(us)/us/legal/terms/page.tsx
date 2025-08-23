import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Steedoo Group Inc. terms of service, user agreements, and legal conditions for our investment and business services.',
};

export default function USTermsOfServicePage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">US-Specific Terms of Service</h2>
            <p className="text-sm">
              These Terms of Service apply specifically to services provided by Steedoo Group Inc. 
              to US persons and US-based activities. For international services provided by other 
              Steedoo Group entities, please refer to our 
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-800 underline">
                Global Terms of Service
              </Link>.
            </p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally 
              binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and 
              the applicable Steedoo Group entity (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
              based on your jurisdiction and the services you access, regarding your use of our 
              website, services, and investment platforms (collectively, the &quot;Services&quot;).
            </p>
            <p className="mt-4">
              By accessing or using our Services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and our Privacy Policy. 
              If you do not agree to these Terms, you must not access or use our Services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Applicable Entity and Jurisdiction</h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2">IMPORTANT: Your Contracting Entity</p>
              <p className="text-sm">
                The Steedoo Group entity with which you contract depends on your location 
                and the services you access. Please review the applicable entity and 
                governing law for your jurisdiction below.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United States and Rest of World</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p>
                <strong>Entity:</strong> Steedoo Group Inc.<br />
                <strong>Incorporation:</strong> Wyoming Corporation<br />
                <strong>Address:</strong> c/o Registered Agents Inc., 30 N Gould St Ste R, Sheridan, WY 82801, USA<br />
                <strong>Governing Law:</strong> Wyoming State Law, United States<br />
                <strong>Regulatory Authority:</strong> SEC, FINRA, CFTC, Wyoming Secretary of State
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">European Union and EEA</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p>
                <strong>Entity:</strong> Steedoo Group Europe Ltd. (where applicable)<br />
                <strong>Services:</strong> EU/EEA clients may contract with our authorized EU entity<br />
                <strong>Governing Law:</strong> Laws of the EU Member State of incorporation<br />
                <strong>Regulatory Authority:</strong> Local competent authorities, ESMA<br />
                <strong>Regulatory Framework:</strong> MiFID II, GDPR, AIFMD (where applicable)
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p>
                <strong>Entity:</strong> Steedoo Group UK Ltd. (where applicable)<br />
                <strong>Services:</strong> UK clients may contract with our FCA-authorized entity<br />
                <strong>Governing Law:</strong> English Law<br />
                <strong>Regulatory Authority:</strong> Financial Conduct Authority (FCA)<br />
                <strong>Regulatory Framework:</strong> UK MiFID, FCA Handbook, UK GDPR
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canada</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p>
                <strong>Entity:</strong> Steedoo Group Canada Inc. (where applicable)<br />
                <strong>Services:</strong> Canadian clients may contract with our registered Canadian entity<br />
                <strong>Governing Law:</strong> Laws of the Province of incorporation<br />
                <strong>Regulatory Authority:</strong> IIROC, Provincial Securities Commissions<br />
                <strong>Regulatory Framework:</strong> National Instrument 31-103, PIPEDA
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Australia</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p>
                <strong>Entity:</strong> Steedoo Group Australia Pty Ltd. (where applicable)<br />
                <strong>Services:</strong> Australian clients may contract with our AFSL holder<br />
                <strong>Governing Law:</strong> Australian Law<br />
                <strong>Regulatory Authority:</strong> Australian Securities and Investments Commission (ASIC)<br />
                <strong>Regulatory Framework:</strong> Corporations Act 2001, Privacy Act 1988
              </p>
            </div>
            
            <p className="mt-4">
              <strong>Note:</strong> Where local entities are not established, services may be 
              provided by Steedoo Group Inc. subject to applicable cross-border regulations 
              and exemptions in your jurisdiction.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Eligibility and Account Requirements</h2>
            
            <h3 className="text-xl font-semibold mb-3">Age and Capacity Requirements</h3>
            <p>You must meet the following requirements to use our Services:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Be at least 18 years of age (or the age of majority in your jurisdiction)</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Not be prohibited from using our Services under applicable laws</li>
              <li>Comply with all local, state, federal, and international laws</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Investment Services Eligibility</h3>
            <p>
              For investment-related services, additional requirements may apply,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accredited investor status verification (where required)</li>
              <li>Qualified institutional buyer (QIB) status (for certain offerings)</li>
              <li>Compliance with applicable securities regulations in your jurisdiction</li>
              <li>Completion of know-your-customer (KYC) and anti-money laundering (AML) procedures</li>
              <li>Provision of required financial and tax documentation</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Account Registration</h3>
            <p>
              When creating an account, you agree to provide accurate, current, and
              complete information. You are responsible for maintaining the security
              of your account credentials and for all activities under your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Investment Services and Risks</h2>
            
            <h3 className="text-xl font-semibold mb-3">Nature of Investment Services</h3>
            <p>
              Steedoo Group Inc. provides investment advisory services, portfolio management,
              and facilitates investment opportunities. Our services may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Investment advisory and consultation services</li>
              <li>Portfolio management and asset allocation</li>
              <li>Due diligence and investment research</li>
              <li>Access to private investment opportunities</li>
              <li>Alternative investment strategies</li>
              <li>Corporate finance and M&amp;A advisory</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Investment Risks and Disclaimers</h3>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                IMPORTANT INVESTMENT RISK DISCLOSURE
              </p>
              <p className="text-sm">
                All investments involve risk, including the potential loss of principal.
                Past performance does not guarantee future results. Investment outcomes
                may vary significantly based on market conditions, economic factors,
                and individual circumstances.
              </p>
            </div>
            
            <p>You acknowledge and understand that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Investment values may fluctuate and you may lose money</li>
              <li>No investment strategy can guarantee profits or protect against losses</li>
              <li>Alternative investments may be illiquid and subject to additional risks</li>
              <li>Tax implications may vary based on your specific circumstances</li>
              <li>Regulatory changes may affect investment outcomes</li>
              <li>We do not provide tax, legal, or accounting advice</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Suitability and Fiduciary Responsibility</h3>
            <p>
              We will make reasonable efforts to ensure investment recommendations are
              suitable based on your disclosed financial situation, investment objectives,
              and risk tolerance. However, you are ultimately responsible for making
              investment decisions and should consult with independent advisors as needed.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use and Prohibited Activities</h2>
            
            <h3 className="text-xl font-semibold mb-3">Permitted Uses</h3>
            <p>You may use our Services solely for legitimate business and investment purposes in compliance with these Terms and applicable laws.</p>
            
            <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Engage in fraudulent, deceptive, or manipulative activities</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to circumvent security measures or access restrictions</li>
              <li>Use our Services for money laundering or terrorist financing</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
              <li>Use automated systems to access our Services without permission</li>
              <li>Share confidential information obtained through our Services</li>
              <li>Engage in market manipulation or insider trading</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fees and Payment Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3">Service Fees</h3>
            <p>
              Fees for our Services will be disclosed to you before you engage our services.
              Fee structures may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Management fees based on assets under management</li>
              <li>Performance fees based on investment returns</li>
              <li>Transaction fees for specific services</li>
              <li>Advisory fees for consultation services</li>
              <li>Administrative fees for account maintenance</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
            <p>
              Fees are generally charged quarterly in advance or as otherwise specified
              in your service agreement. You authorize us to deduct fees from your
              account or investment proceeds as applicable.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Fee Changes</h3>
            <p>
              We may modify our fee structure with 30 days&apos; prior written notice.
              Continued use of our Services after such notice constitutes acceptance
              of the revised fees.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">Our Intellectual Property</h3>
            <p>
              All content, features, and functionality of our Services, including but
              not limited to text, graphics, logos, software, and research materials,
              are owned by Steedoo Group Inc. or our licensors and are protected by
              copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access
              and use our Services for your personal or business investment activities
              in accordance with these Terms.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Restrictions</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copy, modify, or distribute our proprietary content</li>
              <li>Use our trademarks or logos without written permission</li>
              <li>Create derivative works based on our Services</li>
              <li>Remove or alter any proprietary notices</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection, use, and protection of
              your personal information is governed by our Privacy Policy, which is
              incorporated into these Terms by reference. By using our Services, you
              consent to the practices described in our Privacy Policy.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Regulatory Reporting</h3>
            <p>
              You acknowledge that we may be required to report certain information
              to regulatory authorities, tax agencies, or other governmental bodies
              as required by applicable laws and regulations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold mb-3">Service Disclaimers</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">DISCLAIMER OF WARRANTIES</p>
              <p className="text-sm">
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT 
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT 
                LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, STEEDOO GROUP INC. SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER
              INTANGIBLE LOSSES, REGARDLESS OF THE THEORY OF LIABILITY.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Steedoo Group Inc.,
              its officers, directors, employees, and agents from any claims, damages,
              or expenses arising from your use of our Services or violation of these Terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3">Termination by You</h3>
            <p>
              You may terminate your use of our Services at any time by providing
              written notice. Termination of investment services may be subject to
              specific notice periods and settlement procedures.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Termination by Us</h3>
            <p>
              We may terminate or suspend your access to our Services immediately,
              without prior notice, for any reason, including if you breach these Terms
              or engage in prohibited activities.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Effect of Termination</h3>
            <p>
              Upon termination, your right to use our Services ceases immediately.
              Provisions regarding intellectual property, limitations of liability,
              indemnification, and dispute resolution shall survive termination.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution and Governing Law by Jurisdiction</h2>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
              <p className="font-semibold text-red-800 dark:text-red-200 mb-2">
                IMPORTANT: Jurisdiction-Specific Terms
              </p>
              <p className="text-sm">
                The governing law, dispute resolution mechanisms, and legal remedies 
                available to you depend on which Steedoo Group entity you contract with 
                and your location. Please review the applicable terms below.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United States - Steedoo Group Inc.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Governing Law and Jurisdiction</h4>
              <p className="mb-3">
                <strong>Governing Law:</strong> Laws of the State of Wyoming, United States<br />
                <strong>Federal Law:</strong> Federal securities laws and regulations apply<br />
                <strong>Jurisdiction:</strong> Federal and state courts in Wyoming<br />
                <strong>Venue:</strong> Sheridan County, Wyoming or appropriate federal district
              </p>
              
              <h4 className="font-semibold mb-2">Dispute Resolution</h4>
              <p className="mb-2">Mandatory arbitration under American Arbitration Association (AAA) rules, except:</p>
              <ul className="list-disc pl-6 text-sm mb-3">
                <li>Claims seeking equitable relief or injunctive remedies</li>
                <li>Disputes involving regulatory violations (subject to agency jurisdiction)</li>
                <li>Small claims court matters (under jurisdictional limits)</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Regulatory Dispute Resolution</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>SEC: Investor complaints and regulatory matters</li>
                <li>FINRA: Securities-related disputes and arbitration</li>
                <li>CFTC: Commodity and derivatives disputes</li>
                <li>State regulators: State securities law violations</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">European Union - Steedoo Group Europe Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Governing Law and Jurisdiction</h4>
              <p className="mb-3">
                <strong>Governing Law:</strong> Laws of the EU Member State of incorporation<br />
                <strong>EU Law:</strong> EU directives and regulations apply<br />
                <strong>Jurisdiction:</strong> Courts of the Member State of incorporation<br />
                <strong>Cross-Border:</strong> Brussels Ia Regulation for jurisdictional matters
              </p>
              
              <h4 className="font-semibold mb-2">Alternative Dispute Resolution</h4>
              <ul className="list-disc pl-6 text-sm mb-3">
                <li>European Commission Online Dispute Resolution (ODR) platform</li>
                <li>National Financial Ombudsman services</li>
                <li>ESMA alternative dispute resolution mechanisms</li>
                <li>Member State specific investor compensation schemes</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Consumer Rights</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Consumer Rights Directive protections</li>
                <li>Distance selling and cooling-off periods</li>
                <li>Unfair contract terms protections</li>
                <li>Access to local consumer protection authorities</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom - Steedoo Group UK Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Governing Law and Jurisdiction</h4>
              <p className="mb-3">
                <strong>Governing Law:</strong> English and Welsh Law<br />
                <strong>Jurisdiction:</strong> Courts of England and Wales<br />
                <strong>Alternative:</strong> Scottish or Northern Irish law where client domiciled<br />
                <strong>Regulatory:</strong> FCA jurisdiction for authorized activities
              </p>
              
              <h4 className="font-semibold mb-2">Financial Ombudsman Service (FOS)</h4>
              <ul className="list-disc pl-6 text-sm mb-3">
                <li>Free dispute resolution for eligible complainants</li>
                <li>Binding decisions on firms (up to compensation limits)</li>
                <li>Alternative to court proceedings for most disputes</li>
                <li>Six-year time limit for most complaints</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Financial Services Compensation Scheme (FSCS)</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Investment compensation up to £85,000 per person per firm</li>
                <li>Deposit protection for qualifying deposits</li>
                <li>Insurance mediation compensation schemes</li>
                <li>Automatic coverage for eligible clients</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canada - Steedoo Group Canada Inc.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Governing Law and Jurisdiction</h4>
              <p className="mb-3">
                <strong>Governing Law:</strong> Laws of the province of incorporation<br />
                <strong>Federal Law:</strong> Federal statutes and regulations apply<br />
                <strong>Jurisdiction:</strong> Provincial superior courts<br />
                <strong>Alternative:</strong> Federal Court for federal regulatory matters
              </p>
              
              <h4 className="font-semibold mb-2">Investment Industry Dispute Resolution</h4>
              <ul className="list-disc pl-6 text-sm mb-3">
                <li>IIROC arbitration and mediation programs</li>
                <li>Ombudsman for Banking Services and Investments (OBSI)</li>
                <li>Provincial securities commission complaint processes</li>
                <li>Canadian Investor Protection Fund (CIPF) coverage</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Provincial Variations</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Quebec: Civil law system and Consumer Protection Act</li>
                <li>Common law provinces: Provincial consumer protection legislation</li>
                <li>Class action legislation varies by province</li>
                <li>Provincial limitation periods for legal actions</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Australia - Steedoo Group Australia Pty Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Governing Law and Jurisdiction</h4>
              <p className="mb-3">
                <strong>Governing Law:</strong> Australian Commonwealth and State/Territory law<br />
                <strong>Jurisdiction:</strong> Federal Court or State Supreme Courts<br />
                <strong>Consumer Law:</strong> Australian Consumer Law applies nationally<br />
                <strong>Regulatory:</strong> ASIC enforcement and civil penalty proceedings
              </p>
              
              <h4 className="font-semibold mb-2">Australian Financial Complaints Authority (AFCA)</h4>
              <ul className="list-disc pl-6 text-sm mb-3">
                <li>Free external dispute resolution service</li>
                <li>Binding determinations up to $500,000 compensation</li>
                <li>Covers most financial services disputes</li>
                <li>Time limits: 6 years from occurrence, 2 years from awareness</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Compensation and Protection</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Financial Services Compensation Scheme of Last Resort</li>
                <li>Professional indemnity insurance coverage</li>
                <li>Client money trust account protections</li>
                <li>ASIC regulatory action and banning powers</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Class Action and Collective Proceedings</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Jurisdiction-Specific Class Action Rules</p>
              <ul className="list-disc pl-6 text-sm">
                <li><strong>US:</strong> Class action waiver applies (individual arbitration only)</li>
                <li><strong>EU:</strong> Collective action rights under national laws may apply</li>
                <li><strong>UK:</strong> Group litigation orders and representative actions available</li>
                <li><strong>Canada:</strong> Provincial class action legislation may apply</li>
                <li><strong>Australia:</strong> Federal Court class action regime available</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">International Arbitration</h3>
            <p>
              For cross-border disputes involving multiple jurisdictions, parties may
              agree to arbitration under:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>London Court of International Arbitration (LCIA)</li>
              <li>International Chamber of Commerce (ICC) Arbitration</li>
              <li>Singapore International Arbitration Centre (SIAC)</li>
              <li>UNCITRAL Arbitration Rules</li>
              <li>New York Convention enforcement of arbitral awards</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance by Jurisdiction</h2>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6">
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                REGULATORY NOTICE
              </p>
              <p className="text-sm">
                Each Steedoo Group entity operates under the regulatory framework applicable
                to its jurisdiction. The following outlines the key regulatory requirements
                and compliance obligations for each entity.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United States - Steedoo Group Inc.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Federal Securities Laws</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Securities Act of 1933 - Registration and disclosure of securities offerings</li>
                <li>Securities Exchange Act of 1934 - Regulation of securities markets and broker-dealers</li>
                <li>Investment Advisers Act of 1940 - Registration and regulation of investment advisers</li>
                <li>Investment Company Act of 1940 - Regulation of investment companies</li>
                <li>Commodity Exchange Act - Regulation of commodity and derivatives markets</li>
              </ul>
              
              <h4 className="font-semibold mb-2">State Regulations</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Wyoming corporate laws and fiduciary duties</li>
                <li>State securities laws (&quot;Blue Sky Laws&quot;) in jurisdictions where we operate</li>
                <li>State investment adviser registration requirements where applicable</li>
              </ul>
              
              <h4 className="font-semibold mb-2">AML/BSA Compliance</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Bank Secrecy Act (BSA) reporting requirements</li>
                <li>Customer Identification Program (CIP)</li>
                <li>Suspicious Activity Report (SAR) filing</li>
                <li>OFAC sanctions screening and compliance</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">European Union - Steedoo Group Europe Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">MiFID II Framework</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Investment firm authorization and ongoing compliance</li>
                <li>Client categorization (retail, professional, eligible counterparty)</li>
                <li>Conduct of business rules and best execution</li>
                <li>Product governance and target market identification</li>
                <li>Transaction reporting and market transparency</li>
              </ul>
              
              <h4 className="font-semibold mb-2">AIFMD Compliance (where applicable)</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Alternative Investment Fund Manager (AIFM) authorization</li>
                <li>Risk management and organizational requirements</li>
                <li>Depositary arrangements and asset safekeeping</li>
                <li>Reporting to competent authorities and investors</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Data Protection and AML</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>General Data Protection Regulation (GDPR) compliance</li>
                <li>Fourth and Fifth Anti-Money Laundering Directives (4AMLD/5AMLD)</li>
                <li>Customer due diligence and enhanced due diligence procedures</li>
                <li>Market Abuse Regulation (MAR) compliance</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom - Steedoo Group UK Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">FCA Authorization and Regulation</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Financial Conduct Authority (FCA) permissions and regulatory gateway</li>
                <li>UK MiFID investment firm prudential requirements</li>
                <li>Senior Managers and Certification Regime (SMCR) compliance</li>
                <li>Consumer Duty obligations and fair value assessments</li>
              </ul>
              
              <h4 className="font-semibold mb-2">UK-Specific Requirements</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>UK Market Abuse Regulation compliance</li>
                <li>UK GDPR and Data Protection Act 2018</li>
                <li>Financial Services Compensation Scheme (FSCS) contributions</li>
                <li>FCA Handbook conduct of business sourcebook (COBS)</li>
              </ul>
              
              <h4 className="font-semibold mb-2">AML and Financial Crime</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017</li>
                <li>Proceeds of Crime Act 2002 compliance</li>
                <li>Economic Crime (Transparency and Enforcement) Act 2022</li>
                <li>HM Treasury sanctions regimes</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canada - Steedoo Group Canada Inc.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Securities Regulation</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>National Instrument 31-103 (NI 31-103) registration requirements</li>
                <li>Provincial securities commission oversight and compliance</li>
                <li>Investment Dealer and Partial Services Rules (IIROC)</li>
                <li>Mutual Fund Dealers Association (MFDA) requirements where applicable</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Federal Requirements</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                <li>Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA)</li>
                <li>Canada Business Corporations Act compliance</li>
                <li>Income Tax Act reporting and withholding obligations</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Provincial Variations</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Quebec: Personal Information Protection Act (PIPA) and Civil Code</li>
                <li>British Columbia: Personal Information Protection Act (PIPA BC)</li>
                <li>Alberta: Personal Information Protection Act (PIPA AB)</li>
                <li>Other provinces: Applicable provincial privacy and securities legislation</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Australia - Steedoo Group Australia Pty Ltd.</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">AFSL Requirements</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Australian Financial Services Licence (AFSL) authorization</li>
                <li>Corporations Act 2001 compliance and fiduciary duties</li>
                <li>ASIC regulatory guides and class orders</li>
                <li>Professional indemnity insurance requirements</li>
              </ul>
              
              <h4 className="font-semibold mb-2">Client Protection</h4>
              <ul className="list-disc pl-6 mb-3 text-sm">
                <li>Australian Consumer Law and consumer guarantees</li>
                <li>Privacy Act 1988 and Australian Privacy Principles (APPs)</li>
                <li>Financial Services Compensation Scheme of Last Resort</li>
                <li>Australian Financial Complaints Authority (AFCA) membership</li>
              </ul>
              
              <h4 className="font-semibold mb-2">AML/CTF Compliance</h4>
              <ul className="list-disc pl-6 text-sm">
                <li>Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act)</li>
                <li>AUSTRAC registration and reporting obligations</li>
                <li>Customer identification and verification procedures</li>
                <li>Ongoing customer due diligence and transaction monitoring</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Cross-Border Services</h3>
            <p>
              Where services are provided across jurisdictions, we comply with applicable
              cross-border regulations including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reverse solicitation rules and client-initiated transactions</li>
              <li>Third country regime equivalence and recognition frameworks</li>
              <li>Regulatory cooperation and information sharing agreements</li>
              <li>Qualified Foreign Institutional Investor (QFII) regimes where applicable</li>
              <li>Treaty-based exemptions and regulatory carve-outs</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay in performance under
              these Terms due to circumstances beyond our reasonable control, including
              but not limited to acts of God, natural disasters, war, terrorism,
              government actions, pandemics, market disruptions, or technological failures.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability and Entire Agreement</h2>
            
            <h3 className="text-xl font-semibold mb-3">Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid,
              the remaining provisions shall remain in full force and effect, and the
              unenforceable provision shall be modified to the minimum extent necessary
              to make it enforceable.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and any additional service
              agreements, constitute the entire agreement between you and Steedoo Group Inc.
              regarding your use of our Services.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Modifications</h3>
            <p>
              We may modify these Terms at any time by posting the revised Terms on
              our website. Material changes will be notified to you via email or
              prominent notice on our website at least 30 days before the effective date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information by Entity</h2>
            <p>
              If you have questions about these Terms of Service or need to provide
              notices under this Agreement, please contact the appropriate Steedoo Group entity:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">United States - Steedoo Group Inc.</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Registered Office</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Inc.</strong><br />
                  c/o Registered Agents Inc.<br />
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Legal &amp; Compliance</h4>
                <p className="text-sm">
                  Email: legal.us@steedoogroup.com<br />
                  Client Services: support.us@steedoogroup.com<br />
                  Business Hours: 9:00 AM - 6:00 PM EST<br />
                  Response Time: Within 10 business days
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">European Union - Steedoo Group Europe Ltd.</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EU Registered Office</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Europe Ltd.</strong><br />
                  [EU Registered Address]<br />
                  [City, Postal Code]<br />
                  [EU Member State]<br />
                  European Union
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EU Legal &amp; Compliance</h4>
                <p className="text-sm">
                  Email: legal.eu@steedoogroup.com<br />
                  Client Services: support.eu@steedoogroup.com<br />
                  Business Hours: 9:00 AM - 5:00 PM CET<br />
                  Response Time: Within 15 business days
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom - Steedoo Group UK Ltd.</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">UK Registered Office</h4>
                <p className="text-sm">
                  <strong>Steedoo Group UK Ltd.</strong><br />
                  [UK Registered Address]<br />
                  [City, Postal Code]<br />
                  United Kingdom<br />
                  FCA Firm Reference Number: [FRN]
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">UK Legal &amp; Compliance</h4>
                <p className="text-sm">
                  Email: legal.uk@steedoogroup.com<br />
                  Client Services: support.uk@steedoogroup.com<br />
                  Business Hours: 9:00 AM - 5:00 PM GMT<br />
                  Response Time: Within 15 business days
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canada - Steedoo Group Canada Inc.</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Canadian Registered Office</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Canada Inc.</strong><br />
                  [Canadian Registered Address]<br />
                  [City, Province, Postal Code]<br />
                  Canada<br />
                  IIROC Registration: [Number]
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Canadian Legal &amp; Compliance</h4>
                <p className="text-sm">
                  Email: legal.ca@steedoogroup.com<br />
                  Client Services: support.ca@steedoogroup.com<br />
                  Business Hours: 9:00 AM - 5:00 PM EST/PST<br />
                  Response Time: Within 10 business days
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Australia - Steedoo Group Australia Pty Ltd.</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Australian Registered Office</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Australia Pty Ltd.</strong><br />
                  [Australian Registered Address]<br />
                  [City, State, Postal Code]<br />
                  Australia<br />
                  AFSL Number: [Number]<br />
                  ACN: [Australian Company Number]
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Australian Legal &amp; Compliance</h4>
                <p className="text-sm">
                  Email: legal.au@steedoogroup.com<br />
                  Client Services: support.au@steedoogroup.com<br />
                  Business Hours: 9:00 AM - 5:00 PM AEST<br />
                  Response Time: Within 10 business days
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">US Regulatory Authority Contacts</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Federal Regulators:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>SEC: www.sec.gov | Investor.gov</li>
                    <li>FINRA: www.finra.org | BrokerCheck</li>
                    <li>CFTC: www.cftc.gov | SmartCheck.gov</li>
                    <li>Treasury/OFAC: www.treasury.gov/ofac</li>
                  </ul>
                  
                  <p><strong>State Regulators:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Wyoming Secretary of State: sos.wyo.gov</li>
                    <li>NASAA (State Securities): www.nasaa.org</li>
                    <li>State Investment Adviser Search: www.adviserinfo.sec.gov</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Dispute Resolution:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>FINRA Dispute Resolution: www.finra.org/arbitration-mediation</li>
                    <li>American Arbitration Association: www.adr.org</li>
                    <li>SEC Investor Complaints: www.sec.gov/complaint</li>
                  </ul>
                  
                  <p><strong>International Coordination:</strong></p>
                  <ul className="list-disc pl-4">
                    <li>For global services: See our <Link href="/legal/terms" className="text-blue-600 underline">Global Terms</Link></li>
                    <li>Cross-border complaints: Contact relevant entity directly</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Global Steedoo Group Network</h3>
              <p className="text-sm">
                Steedoo Group Inc. is part of a global network of regulated entities. 
                For services provided by our international affiliates, different terms, 
                regulations, and protections may apply. Please review our 
                <Link href="/legal/terms" className="text-purple-600 hover:text-purple-800 underline">
                  Global Terms of Service
                </Link> for comprehensive information about our worldwide operations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}