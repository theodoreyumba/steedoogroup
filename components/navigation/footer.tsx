import Link from 'next/link';
import { BrandMark } from '@/components/brand/brand-mark';
import { useRegion } from '@/lib/context/region-context';
import { company, formatAddress } from '@/data/company';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  const { isUS } = useRegion();
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
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${baseUrl}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/industries`} className="text-muted-foreground hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/portfolio`} className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              {!isUS && (
                <li>
                  <Link href="/research-processing" className="text-muted-foreground hover:text-primary transition-colors">
                    Research & Processing
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${baseUrl}/legal/privacy`} className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/legal/terms`} className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/legal/code-of-conduct`} className="text-muted-foreground hover:text-primary transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/legal/anti-corruption`} className="text-muted-foreground hover:text-primary transition-colors">
                  Anti-Corruption Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
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
                  <p className="font-medium">Headquarters:</p>
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
            <p>© {new Date().getFullYear()} {entity.legalName}. All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  );
}