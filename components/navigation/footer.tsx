import Link from 'next/link';
import { BrandMark } from '@/components/brand/brand-mark';
import { useRegion } from '@/lib/context/region-context';
import { company } from '@/data/company';
import { ExternalLink } from 'lucide-react';
import { CookieSettingsLink } from '@/components/cookies/cookie-settings-link';

interface FooterProps {
  dictionary?: Record<string, unknown>;
}

export function Footer({ dictionary }: FooterProps) {
  const { isUS } = useRegion();

  const getValue = (path: string) => {
    if (!dictionary) return null;
    const keys = path.split('.');
    let value: unknown = dictionary;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return null;
      }
    }
    return typeof value === 'string' ? value : null;
  };
  const entity = isUS ? company.us : company.global;
  const baseUrl = isUS ? '/us' : '';
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <BrandMark size="lg" href={`${baseUrl}/`} />
            <p className="text-sm text-muted-foreground">
              {entity.legalName} is a diversified corporation operating across
              {isUS ? ' technology, finance, and investment sectors.' : ' technology, transportation, finance, investment, and industrial services.'}
            </p>
            {!isUS && (
              <div className="text-xs text-muted-foreground space-y-1">
                <p>RCCM: {entity.registrations?.rccm}</p>
                <p>Tax ID: {entity.registrations?.taxId}</p>
              </div>
            )}
            {isUS && (
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Wyoming ID: {entity.registrations?.wyomingId}</p>
                <p>Incorporated: {entity.registrations?.incorporationDate}</p>
              </div>
            )}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{getValue('Footer.quickLinks') || 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${baseUrl}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.about') || 'About Us'}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/industries`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.industries') || 'Industries'}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/portfolio`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.portfolio') || 'Portfolio'}
                </Link>
              </li>
              {!isUS && (
                <li>
                  <Link href="/research-processing" className="text-muted-foreground hover:text-primary transition-colors">
                    {getValue('Navigation.research') || 'Research & Processing'}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{getValue('Footer.legalInfo') || 'Legal Information'}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${baseUrl}/legal/privacy`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.privacy') || 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/legal/terms`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.terms') || 'Terms & Conditions'}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/legal/code-of-conduct`} className="text-muted-foreground hover:text-primary transition-colors">
                  {getValue('Navigation.codeOfConduct') || 'Code of Conduct'}
                </Link>
              </li>
              {!isUS && (
                <li>
                  <Link href={`${baseUrl}/legal/anti-corruption`} className="text-muted-foreground hover:text-primary transition-colors">
                    {getValue('Navigation.antiCorruption') || 'Anti-Corruption Policy'}
                  </Link>
                </li>
              )}
              <li>
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{getValue('Navigation.contact') || 'Contact'}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              {!isUS ? (
                <>
                  <address className="not-italic">
                    {entity.address.street}<br />
                    {entity.address.quarter && `Q/${entity.address.quarter}, `}
                    {entity.address.commune && `C/${entity.address.commune}`}<br />
                    {entity.address.city}, {entity.address.province}<br />
                    {entity.address.country}
                  </address>
                  <p>Principal: {company.global.principal}</p>
                </>
              ) : (
                <>
                  <p className="font-medium">{getValue('Contact.info.headquarters') || 'Headquarters'}:</p>
                  <address className="not-italic">
                    {entity.address.street}<br />
                    {entity.address.city}, {entity.address.state} {entity.address.postalCode}<br />
                    {entity.address.country}
                  </address>
                </>
              )}
              <div className="space-y-2">
                <a href={`mailto:${company.contact.email}`} className="block text-primary hover:underline">
                  {company.contact.email}
                </a>
                <Link href={`${baseUrl}/contact`} className="inline-flex items-center gap-1 text-primary hover:underline">
                  Contact Form <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{getValue('Footer.copyright')?.replace('{year}', new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} ${entity.legalName}. All rights reserved.`}</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.dnb.com/business-directory/company-profiles.steedoo_group_sas.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Listed on D&B <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-xs">
                {company.domains.primary} | {company.domains.secondary.join(' | ')}
              </span>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 pt-4 border-t border-border/50">
            <div className="text-xs text-muted-foreground/80 leading-relaxed space-y-2">
              <p className="text-center">
                <strong>IMPORTANT LEGAL DISCLAIMER:</strong> The information contained on this website is for general informational purposes only. 
                Some legal entities, subsidiaries, partnerships, joint ventures, acquisitions, investments, business relationships, or corporate structures mentioned on this website may not have been 
                formally established, incorporated, registered, completed, or legally constituted at the time of publication. Business plans, projections, statements 
                regarding future operations, anticipated transactions, planned expansions, and strategic initiatives are forward-looking and subject to change without notice.
              </p>
              <p className="text-center">
                <strong>NO WARRANTIES:</strong> While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, 
                about the completeness, accuracy, reliability, suitability, availability, timeliness, or validity of the information, products, services, financial data, performance metrics, or related graphics 
                contained on this website. Any reliance you place on such information is strictly at your own risk. The Company expressly disclaims all liability 
                for any direct, indirect, incidental, consequential, punitive, or special damages of any kind arising from the use of this website or reliance on its content.
              </p>
              <p className="text-center">
                <strong>THIRD-PARTY CONTENT:</strong> This website may contain links to external websites, references to third-party entities, news articles, press releases, or user-generated content. 
                These are provided for convenience only and do not constitute endorsement, verification, approval, or adoption of their content, opinions, or practices. 
                The Company is not responsible for the content, accuracy, legality, or practices of external websites, third-party entities, or any information obtained from such sources.
              </p>
              <p className="text-center">
                <strong>INVESTMENT & FINANCIAL DISCLAIMERS:</strong> Nothing on this website constitutes investment advice, financial recommendations, solicitation of investment, 
                or an offer to sell or buy securities. Past performance does not guarantee future results. All investments carry risk of loss. 
                Consult qualified professionals before making investment decisions. Financial projections and business valuations are estimates and may not reflect actual results.
              </p>
              <p className="text-center">
                <strong>REGULATORY & COMPLIANCE:</strong> Information presented may be subject to regulatory approval, licensing requirements, or compliance with local laws. 
                Business operations may require permits, licenses, or authorizations that are pending or in process. Regulatory environments and legal requirements 
                may vary by jurisdiction and are subject to change. The Company makes no guarantees regarding regulatory compliance or approval of proposed activities.
              </p>
              <p className="text-center">
                <strong>INTELLECTUAL PROPERTY:</strong> All content, including but not limited to text, graphics, logos, images, software, and design elements, 
                is protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited. 
                All trademarks, service marks, trade names, and logos are the property of their respective owners and are used for identification purposes only.
              </p>
              <p className="text-center">
                <strong>PRIVACY & DATA:</strong> Use of this website is subject to our Privacy Policy. By accessing this website, you consent to data collection and processing 
                as described in our privacy documentation. We are not responsible for privacy practices of linked websites or third-party services.
              </p>
              <p className="text-center">
                <strong>JURISDICTIONAL LIMITATIONS:</strong> This website is controlled and operated from the Democratic Republic of Congo and the United States. 
                We make no representation that materials on this website are appropriate or available for use in other locations. Access may be restricted in certain jurisdictions. 
                Users are responsible for compliance with local laws and regulations. Any disputes shall be governed by the laws of the jurisdiction where the applicable entity is incorporated.
              </p>
              <p className="text-center">
                <strong>UPDATES & MODIFICATIONS:</strong> The Company reserves the right to modify, update, suspend, or discontinue any part of this website at any time without notice. 
                Information may become outdated and the Company undertakes no obligation to update or correct such information. Terms and conditions may change without prior notification.
              </p>
              <p className="text-center">
                <strong>LIMITATION OF LIABILITY:</strong> In no event shall the Company, its officers, directors, employees, affiliates, agents, contractors, or licensors be liable for any 
                direct, indirect, incidental, consequential, special, punitive, or exemplary damages including but not limited to loss of profits, data, use, goodwill, 
                or other intangible losses resulting from your use of this website, even if advised of the possibility of such damages. Some jurisdictions do not allow 
                the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.
              </p>
              <p className="text-center">
                <strong>INDEMNIFICATION:</strong> By using this website, you agree to indemnify, defend, and hold harmless the Company and its affiliates from any claims, 
                damages, losses, liabilities, costs, and expenses arising from your use of the website, violation of these terms, or infringement of third-party rights.
              </p>
              <p className="text-center font-medium">
                <strong>ACCEPTANCE OF TERMS:</strong> Continued use of this website constitutes acceptance of all terms, conditions, and disclaimers stated herein. 
                If you do not agree with any part of this disclaimer, please discontinue use of this website immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}