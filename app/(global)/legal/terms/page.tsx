import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Global',
  description: 'Steedoo Group global terms of service covering international entities, jurisdictions, and regulatory compliance for investment and business services worldwide.',
};

export default function GlobalTermsOfServicePage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service - Global</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Global Steedoo Group Network</h2>
            <p className="text-sm">
              These Terms of Service apply to the global Steedoo Group network of entities 
              operating across multiple jurisdictions. For US-specific terms and services 
              provided by Steedoo Group Inc., please refer to our 
              <a href="/us/legal/terms" className="text-blue-600 hover:text-blue-800 underline">
                US Terms of Service
              </a>.
            </p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement and Applicable Entity</h2>
            <p>
              These Global Terms of Service (&quot;Global Terms&quot;, &quot;Agreement&quot;) constitute a 
              legally binding agreement between you (&quot;User&quot;, &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) 
              and the applicable Steedoo Group entity (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
              determined by your location, residency, and the services you access.
            </p>
            <p className="mt-4">
              The Steedoo Group operates a network of regulated entities across multiple 
              jurisdictions to serve clients globally while maintaining compliance with 
              local laws and regulations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Entity Structure</h2>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6">
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                JURISDICTION DETERMINATION
              </p>
              <p className="text-sm">
                Your contracting entity is determined by your country of residence, 
                tax jurisdiction, and the specific services you access. Multiple entities 
                may be involved in providing comprehensive services.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">European Union &amp; EEA Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Steedoo Group Europe S.à r.l. (Luxembourg)</h4>
              <p className="text-sm mb-3">
                <strong>Jurisdiction:</strong> Luxembourg Law<br />
                <strong>Registration:</strong> Luxembourg Register of Commerce and Companies<br />
                <strong>Regulatory Status:</strong> CSSF authorized Alternative Investment Fund Manager<br />
                <strong>EU Passport:</strong> Services available across EU/EEA under MiFID II<br />
                <strong>Address:</strong> [Luxembourg Registered Address]
              </p>
              
              <h4 className="font-semibold mb-2">Steedoo Group Europe (Ireland) Limited</h4>
              <p className="text-sm mb-3">
                <strong>Jurisdiction:</strong> Irish Law<br />
                <strong>Registration:</strong> Companies Registration Office, Ireland<br />
                <strong>Regulatory Status:</strong> Central Bank of Ireland authorized<br />
                <strong>EU Passport:</strong> Investment services under MiFID II<br />
                <strong>Address:</strong> [Dublin Registered Address]
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Steedoo Group UK Limited</h4>
              <p className="text-sm">
                <strong>Jurisdiction:</strong> English &amp; Welsh Law<br />
                <strong>Registration:</strong> Companies House, England and Wales<br />
                <strong>Company Number:</strong> [UK Company Number]<br />
                <strong>FCA Authorization:</strong> Firm Reference Number [FRN]<br />
                <strong>Permissions:</strong> Investment advisory, portfolio management, arranging deals<br />
                <strong>Address:</strong> [London Registered Address]
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Asia-Pacific Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Steedoo Group Australia Pty Limited</h4>
              <p className="text-sm mb-3">
                <strong>Jurisdiction:</strong> Australian Commonwealth Law<br />
                <strong>Registration:</strong> Australian Securities and Investments Commission (ASIC)<br />
                <strong>ACN:</strong> [Australian Company Number]<br />
                <strong>AFSL:</strong> [Australian Financial Services Licence Number]<br />
                <strong>Address:</strong> [Sydney Registered Address]
              </p>
              
              <h4 className="font-semibold mb-2">Steedoo Group Singapore Pte. Ltd.</h4>
              <p className="text-sm mb-3">
                <strong>Jurisdiction:</strong> Singapore Law<br />
                <strong>Registration:</strong> Accounting and Corporate Regulatory Authority (ACRA)<br />
                <strong>MAS License:</strong> [Monetary Authority of Singapore License]<br />
                <strong>Address:</strong> [Singapore Registered Address]
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canadian Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Steedoo Group Canada Inc.</h4>
              <p className="text-sm">
                <strong>Jurisdiction:</strong> Federal Canadian Law and Provincial Laws<br />
                <strong>Registration:</strong> Corporations Canada<br />
                <strong>IIROC Registration:</strong> [Investment Industry Regulatory Organization Number]<br />
                <strong>Provincial Registration:</strong> Multiple provincial securities commissions<br />
                <strong>Address:</strong> [Toronto Registered Address]
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Other International Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="text-sm">
                <strong>Switzerland:</strong> Steedoo Group (Switzerland) AG - FINMA regulated<br />
                <strong>Hong Kong:</strong> Steedoo Group (HK) Limited - SFC licensed<br />
                <strong>UAE:</strong> Steedoo Group DIFC Limited - DFSA authorized<br />
                <strong>Cayman Islands:</strong> Steedoo Group (Cayman) Ltd. - CIMA registered
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Jurisdiction-Specific Service Delivery</h2>
            
            <h3 className="text-xl font-semibold mb-3">European Union &amp; EEA Services</h3>
            <p>Services to EU/EEA residents are provided under the following framework:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>MiFID II Compliance:</strong> Investment services under EU passport</li>
              <li><strong>AIFMD Authorization:</strong> Alternative investment fund management</li>
              <li><strong>GDPR Compliance:</strong> Full data protection compliance</li>
              <li><strong>Consumer Protection:</strong> EU consumer rights and cooling-off periods</li>
              <li><strong>Compensation Schemes:</strong> National investor compensation schemes</li>
              <li><strong>Dispute Resolution:</strong> Access to national ombudsman services</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom Services</h3>
            <p>UK clients receive services under the FCA regulatory framework:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>FCA Authorization:</strong> Full investment services permissions</li>
              <li><strong>SMCR Compliance:</strong> Senior Managers &amp; Certification Regime</li>
              <li><strong>Consumer Duty:</strong> FCA Consumer Duty obligations</li>
              <li><strong>FSCS Protection:</strong> Up to £85,000 compensation per client</li>
              <li><strong>FOS Access:</strong> Financial Ombudsman Service dispute resolution</li>
              <li><strong>UK GDPR:</strong> Data protection under UK data protection laws</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Asia-Pacific Services</h3>
            <p>Asia-Pacific clients receive region-specific regulatory protections:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Australia:</strong> AFSL compliance, AFCA dispute resolution, AML/CTF compliance</li>
              <li><strong>Singapore:</strong> MAS licensing, SID compliance, privacy protection</li>
              <li><strong>Hong Kong:</strong> SFC authorization, SFO compliance, investor compensation</li>
              <li><strong>Switzerland:</strong> FINMA regulation, FIDLEG compliance, ombudsman access</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Canadian Services</h3>
            <p>Canadian clients benefit from comprehensive regulatory oversight:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>IIROC Oversight:</strong> Investment dealer regulation and oversight</li>
              <li><strong>Provincial Compliance:</strong> Registration with relevant provincial securities commissions</li>
              <li><strong>CIPF Protection:</strong> Canadian Investor Protection Fund coverage</li>
              <li><strong>OBSI Access:</strong> Ombudsman for Banking Services and Investments</li>
              <li><strong>PIPEDA Compliance:</strong> Federal privacy law compliance</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Investment Services and Risk Disclosures</h2>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
              <p className="font-semibold text-red-800 dark:text-red-200 mb-2">
                GLOBAL INVESTMENT RISK WARNING
              </p>
              <p className="text-sm">
                All investments carry risk, including potential loss of capital. Past performance 
                does not guarantee future results. Regulatory protections vary by jurisdiction. 
                The value of investments can go down as well as up.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Global Investment Services</h3>
            <p>The Steedoo Group network provides comprehensive investment services:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cross-border portfolio management and advisory services</li>
              <li>Alternative investment opportunities and fund management</li>
              <li>Institutional and high-net-worth individual services</li>
              <li>Multi-jurisdictional tax-efficient structuring</li>
              <li>ESG and sustainable investment strategies</li>
              <li>Private market and direct investment opportunities</li>
              <li>Currency hedging and international diversification</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Jurisdiction-Specific Investment Risks</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Cross-Border Investment Considerations</h4>
              <ul className="list-disc pl-6 text-sm">
                <li><strong>Currency Risk:</strong> Multi-currency exposure and exchange rate fluctuations</li>
                <li><strong>Regulatory Risk:</strong> Changes in international regulations and tax treaties</li>
                <li><strong>Political Risk:</strong> Geopolitical events affecting international markets</li>
                <li><strong>Liquidity Risk:</strong> Varying market liquidity across jurisdictions</li>
                <li><strong>Settlement Risk:</strong> Different settlement systems and timeframes</li>
                <li><strong>Tax Risk:</strong> Complex international tax implications and withholding</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Client Classification and Eligibility</h2>
            
            <h3 className="text-xl font-semibold mb-3">EU/EEA Client Categories (MiFID II)</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 text-sm">
                <li><strong>Retail Clients:</strong> Highest level of protection, cooling-off periods, compensation rights</li>
                <li><strong>Professional Clients:</strong> Reduced protections, institutional treatment</li>
                <li><strong>Eligible Counterparties:</strong> Minimal protections, wholesale treatment</li>
                <li><strong>Opt-Up/Opt-Down:</strong> Limited ability to change classification with appropriate tests</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">UK Client Categories (FCA Rules)</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 text-sm">
                <li><strong>Retail Clients:</strong> Full FCA protection including Consumer Duty obligations</li>
                <li><strong>Professional Clients:</strong> Sophisticated investor treatment with reduced protections</li>
                <li><strong>Eligible Counterparties:</strong> Wholesale market counterparty treatment</li>
                <li><strong>High Net Worth:</strong> Special provisions for certified high net worth individuals</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Other Jurisdictions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Australia:</strong> Retail vs. wholesale client distinction under Corporations Act</li>
              <li><strong>Canada:</strong> Accredited investor and permitted client categories</li>
              <li><strong>Singapore:</strong> Accredited and institutional investor classifications</li>
              <li><strong>Switzerland:</strong> Qualified and institutional investor categories under FIDLEG</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Regulatory Compliance</h2>
            
            <h3 className="text-xl font-semibold mb-3">Anti-Money Laundering (Global)</h3>
            <p>All Steedoo Group entities maintain comprehensive AML/CTF programs:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD)</li>
              <li>Sanctions screening against OFAC, EU, UN, and local sanctions lists</li>
              <li>Suspicious transaction monitoring and reporting</li>
              <li>Source of funds and source of wealth verification</li>
              <li>Politically Exposed Person (PEP) identification and monitoring</li>
              <li>Record keeping and regulatory reporting obligations</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Tax Compliance (International)</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Tax Information Exchange</h4>
              <ul className="list-disc pl-6 text-sm">
                <li><strong>CRS (Common Reporting Standard):</strong> OECD automatic exchange of information</li>
                <li><strong>FATCA:</strong> US Foreign Account Tax Compliance Act reporting</li>
                <li><strong>EU DAC:</strong> EU Directive on Administrative Cooperation</li>
                <li><strong>Local Reporting:</strong> Jurisdiction-specific tax reporting requirements</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Data Protection (Global Framework)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>GDPR (EU/EEA):</strong> Comprehensive data protection rights and obligations</li>
              <li><strong>UK GDPR:</strong> UK data protection framework post-Brexit</li>
              <li><strong>PIPEDA (Canada):</strong> Personal information protection and electronic documents</li>
              <li><strong>Privacy Act (Australia):</strong> Australian Privacy Principles (APPs)</li>
              <li><strong>PDPA (Singapore):</strong> Personal Data Protection Act compliance</li>
              <li><strong>Other Local Laws:</strong> Jurisdiction-specific privacy requirements</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution by Jurisdiction</h2>
            
            <h3 className="text-xl font-semibold mb-3">European Union &amp; EEA</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 text-sm">
                <li><strong>ODR Platform:</strong> European Commission Online Dispute Resolution platform</li>
                <li><strong>National Ombudsman:</strong> Local financial services ombudsman services</li>
                <li><strong>Court Jurisdiction:</strong> EU Member State courts under Brussels Ia Regulation</li>
                <li><strong>Investor Compensation:</strong> National investor compensation schemes</li>
                <li><strong>Class Actions:</strong> Collective redress under national laws</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 text-sm">
                <li><strong>Financial Ombudsman Service:</strong> Free dispute resolution service</li>
                <li><strong>FSCS:</strong> Financial Services Compensation Scheme protection</li>
                <li><strong>Courts:</strong> English &amp; Welsh courts for complex disputes</li>
                <li><strong>Arbitration:</strong> Commercial arbitration under English law</li>
                <li><strong>Group Litigation:</strong> Representative actions and group litigation orders</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Other Key Jurisdictions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Australia:</strong> AFCA external dispute resolution, Federal Court class actions</li>
              <li><strong>Canada:</strong> IIROC arbitration, OBSI ombudsman, provincial dispute mechanisms</li>
              <li><strong>Singapore:</strong> FIDReC financial industry disputes, SIAC arbitration</li>
              <li><strong>Switzerland:</strong> Banking Ombudsman, Swiss Arbitration Centre</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Contact Directory</h2>
            
            <h3 className="text-xl font-semibold mb-3">European Operations</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Luxembourg Entity</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Europe S.à r.l.</strong><br />
                  [Luxembourg Address]<br />
                  L-[Postal Code] Luxembourg<br />
                  Email: legal.luxembourg@steedoogroup.com<br />
                  CSSF Registration: [Number]
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Ireland Entity</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Europe (Ireland) Limited</strong><br />
                  [Dublin Address]<br />
                  Dublin [Postal Code], Ireland<br />
                  Email: legal.ireland@steedoogroup.com<br />
                  CBI Authorization: [Number]
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">United Kingdom</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">UK Operations</h4>
              <p className="text-sm">
                <strong>Steedoo Group UK Limited</strong><br />
                [London Address]<br />
                London [Postal Code], United Kingdom<br />
                Email: legal.uk@steedoogroup.com<br />
                Client Services: support.uk@steedoogroup.com<br />
                FCA Firm Reference: [FRN]<br />
                Companies House: [Company Number]
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Asia-Pacific Operations</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Australia</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Australia Pty Limited</strong><br />
                  [Sydney Address]<br />
                  NSW [Postal Code], Australia<br />
                  Email: legal.australia@steedoogroup.com<br />
                  AFSL: [Number]<br />
                  ACN: [Number]
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Singapore</h4>
                <p className="text-sm">
                  <strong>Steedoo Group Singapore Pte. Ltd.</strong><br />
                  [Singapore Address]<br />
                  Singapore [Postal Code]<br />
                  Email: legal.singapore@steedoogroup.com<br />
                  MAS License: [Number]<br />
                  UEN: [Unique Entity Number]
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Canadian Operations</h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Canada</h4>
              <p className="text-sm">
                <strong>Steedoo Group Canada Inc.</strong><br />
                [Toronto Address]<br />
                Ontario [Postal Code], Canada<br />
                Email: legal.canada@steedoogroup.com<br />
                Client Services: support.canada@steedoogroup.com<br />
                IIROC Registration: [Number]<br />
                Federal Corporation Number: [Number]
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Global Regulatory Directory</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p><strong>European Union:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>ESMA: www.esma.europa.eu</li>
                    <li>CSSF (Luxembourg): www.cssf.lu</li>
                    <li>Central Bank (Ireland): www.centralbank.ie</li>
                    <li>ODR Platform: ec.europa.eu/consumers/odr</li>
                  </ul>
                </div>
                <div>
                  <p><strong>United Kingdom:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>FCA: www.fca.org.uk</li>
                    <li>FOS: www.financial-ombudsman.org.uk</li>
                    <li>FSCS: www.fscs.org.uk</li>
                  </ul>
                  
                  <p><strong>Switzerland:</strong></p>
                  <ul className="list-disc pl-4">
                    <li>FINMA: www.finma.ch</li>
                    <li>Banking Ombudsman: www.bankingombudsman.ch</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Asia-Pacific:</strong></p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>ASIC (Australia): www.asic.gov.au</li>
                    <li>AFCA (Australia): www.afca.org.au</li>
                    <li>MAS (Singapore): www.mas.gov.sg</li>
                    <li>SFC (Hong Kong): www.sfc.hk</li>
                  </ul>
                  
                  <p><strong>Canada:</strong></p>
                  <ul className="list-disc pl-4">
                    <li>IIROC: www.iiroc.ca</li>
                    <li>OBSI: www.obsi.ca</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cross-Border Coordination</h2>
            <p>
              Where services involve multiple Steedoo Group entities across jurisdictions, 
              we maintain coordination protocols to ensure:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Consistent service delivery and client experience</li>
              <li>Compliance with all applicable regulatory requirements</li>
              <li>Appropriate risk management and oversight</li>
              <li>Clear allocation of responsibilities and accountability</li>
              <li>Seamless dispute resolution and client support</li>
            </ul>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-6">
              <p className="font-semibold mb-2">Important Notice - US Operations</p>
              <p className="text-sm">
                For services provided to US persons or involving US markets, separate terms 
                apply under US securities laws. Please refer to our dedicated 
                <a href="/us/legal/terms" className="text-purple-600 hover:text-purple-800 underline">
                  US Terms of Service
                </a> which are governed by Wyoming state law and US federal regulations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}