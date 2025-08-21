import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Steedoo Group SAS privacy policy and data protection practices.',
};

export default function PrivacyPolicyPage() {
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
              STEEDOO GROUP SAS (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy and personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Company information</li>
              <li>Communication preferences</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mt-4">
              <p>
                <strong>STEEDOO GROUP SAS</strong><br />
                20, Avenue Mpolo, Q/Gambela<br />
                C/Lubumbashi, V/Lubumbashi, P/Haut-Katanga<br />
                Democratic Republic of Congo
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}