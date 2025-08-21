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
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company and business information</li>
              <li>Investment preferences and objectives</li>
              <li>Communication preferences</li>
            </ul>
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
            <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance</h2>
            <p>
              As a Wyoming corporation, we comply with applicable federal and state
              regulations regarding data protection and financial services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us through
              our contact form or at our registered agent address:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mt-4">
              <p>
                <strong>Steedoo Group Inc.</strong><br />
                c/o Registered Agents Inc.<br />
                30 N Gould St Ste R<br />
                Sheridan, WY 82801<br />
                United States
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}