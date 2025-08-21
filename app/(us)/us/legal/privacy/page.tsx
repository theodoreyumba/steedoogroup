import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Steedoo Group Inc. privacy policy and data protection practices.',
};

export default function USPrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Steedoo Group Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy and personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
            <p className="mt-4">
              This policy applies to all users worldwide and incorporates provisions
              to comply with major data protection regulations including the EU General
              Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA),
              Canadian Personal Information Protection and Electronic Documents Act (PIPEDA),
              and other applicable local and international privacy laws.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company and business information</li>
              <li>Investment preferences and objectives</li>
              <li>Communication preferences</li>
              <li>Government-issued identification numbers (when required for compliance)</li>
              <li>Financial information for investment services</li>
              <li>Professional qualifications and accreditation details</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p>We may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Sensitive Personal Information</h3>
            <p>
              We may collect sensitive personal information only when necessary for
              regulatory compliance, including financial data, background check information,
              and other details required for investment services verification.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6">
              <li>Provide investment and business services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Conduct due diligence and compliance checks</li>
              <li>Send you updates and communications</li>
              <li>Comply with regulatory requirements</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our website. These may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings.
              However, disabling certain cookies may affect website functionality.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security and Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures
              to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Retention and Deletion</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill
              the purposes outlined in this policy or as required by law:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Client Records:</strong> 7 years after relationship termination (regulatory requirement)</li>
              <li><strong>Marketing Data:</strong> Until consent is withdrawn or 3 years of inactivity</li>
              <li><strong>Website Analytics:</strong> 26 months from collection date</li>
              <li><strong>Communication Logs:</strong> 3 years for business correspondence</li>
            </ul>
            <p>
              You may request deletion of your personal information subject to
              applicable legal and regulatory retention requirements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services and Data Sharing</h2>
            <p>
              We may share your information with trusted third parties in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Technology and professional service providers
                  who assist in our operations under strict confidentiality agreements</li>
              <li><strong>Regulatory Bodies:</strong> When required by law or regulation</li>
              <li><strong>Legal Proceedings:</strong> In response to valid legal process</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions,
                  or asset sales (with notice to affected individuals)</li>
            </ul>
            <p>
              We do not sell, rent, or trade personal information to third parties
              for marketing purposes without explicit consent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p>
              As a global organization, we may transfer personal information across
              international borders. We ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions for transfers to countries with adequate protection</li>
              <li>Binding Corporate Rules for intra-group transfers</li>
              <li>Specific safeguards and security measures for all international transfers</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have the following rights regarding
              your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Restriction:</strong> Limit how we process your information</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided in the Contact section below.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance</h2>
            
            <h3 className="text-xl font-semibold mb-3">United States Compliance</h3>
            <p>
              As a Wyoming corporation, we comply with applicable federal and state
              regulations regarding data protection and financial services, including
              the Gramm-Leach-Bliley Act and applicable state privacy laws.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">GDPR Compliance (European Union)</h3>
            <p>
              For individuals in the European Economic Area (EEA), we comply with
              the General Data Protection Regulation (GDPR). Our lawful bases for
              processing include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consent:</strong> Where you have given clear consent</li>
              <li><strong>Contract:</strong> Processing necessary for contract performance</li>
              <li><strong>Legal Obligation:</strong> Compliance with legal requirements</li>
              <li><strong>Legitimate Interests:</strong> For our business operations (where not
                  overridden by your interests)</li>
            </ul>
            <p>
              You have the right to lodge a complaint with your local supervisory
              authority if you believe we have not complied with GDPR requirements.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">CCPA Compliance (California)</h3>
            <p>
              California residents have specific rights under the California Consumer
              Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to know what personal information is collected and how it&apos;s used</li>
              <li>Right to delete personal information (subject to exceptions)</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
            <p>
              We do not sell personal information as defined by the CCPA. To exercise
              your rights, please use our contact information below.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">PIPEDA Compliance (Canada)</h3>
            <p>
              For Canadian residents, we comply with the Personal Information Protection
              and Electronic Documents Act (PIPEDA) and applicable provincial privacy
              legislation. We adhere to the following principles:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accountability for personal information in our possession</li>
              <li>Obtaining meaningful consent for collection and use</li>
              <li>Limiting collection to identified purposes</li>
              <li>Ensuring accuracy and safeguarding personal information</li>
              <li>Providing openness about our privacy practices</li>
              <li>Granting individual access to personal information</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Other Jurisdictions</h3>
            <p>
              We also comply with applicable data protection laws in other jurisdictions
              where we operate or provide services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>United Kingdom Data Protection Act 2018 and UK GDPR</li>
              <li>Australia Privacy Act 1988</li>
              <li>Brazil Lei Geral de Proteção de Dados (LGPD)</li>
              <li>Singapore Personal Data Protection Act (PDPA)</li>
              <li>Other applicable local and regional privacy laws</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Breach Notification</h2>
            <p>
              In the event of a data breach that affects your personal information,
              we will notify you and relevant authorities in accordance with applicable
              laws and regulations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>GDPR: Within 72 hours to supervisory authorities and without undue delay to individuals</li>
              <li>CCPA: Without unreasonable delay</li>
              <li>PIPEDA: As soon as feasible after discovery</li>
              <li>Other jurisdictions: According to local requirements</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under the age of 16 (or the
              applicable age of digital consent in your jurisdiction). We do not
              knowingly collect personal information from children under this age.
              If we learn that we have collected personal information from a child
              under the applicable age, we will delete such information promptly.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes
              in our practices, applicable laws, or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting the updated policy on our website with a new &quot;Last Updated&quot; date</li>
              <li>Sending email notification for significant changes (if you have provided an email address)</li>
              <li>Providing prominent notice on our website for material changes</li>
            </ul>
            <p>
              Your continued use of our services after the effective date of the
              revised Privacy Policy constitutes acceptance of the terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your
              privacy rights, or need to report a privacy concern, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p>
                  <strong>Steedoo Group Inc.</strong><br />
                  c/o Registered Agents Inc.<br />
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Data Protection Officer</h3>
                <p>
                  For privacy-related inquiries and exercising your rights:<br />
                  Email: privacy@steedoogroup.com<br />
                  Response Time: Within 30 days of receipt
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Supervisory Authority Contacts</h3>
              <p className="text-sm">
                <strong>EU/EEA Residents:</strong> You may contact your local data protection authority<br />
                <strong>UK Residents:</strong> Information Commissioner&apos;s Office (ICO) - ico.org.uk<br />
                <strong>Canadian Residents:</strong> Office of the Privacy Commissioner of Canada - priv.gc.ca<br />
                <strong>California Residents:</strong> California Attorney General - oag.ca.gov
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}