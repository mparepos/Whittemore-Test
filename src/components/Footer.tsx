import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const certOmri = "/assets/cert-omri.png";
const certPerliteInstitute = "/assets/cert-perlite-institute.png";
const certVermiculiteAssociation = "/assets/cert-vermiculite-association.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 md:py-16 relative overflow-hidden" role="contentinfo">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="font-display font-extrabold text-secondary-foreground text-xl tracking-tight">
              Whittemore Company, Inc.
            </Link>
            <p className="text-secondary-foreground/50 text-sm mt-4 max-w-sm font-body leading-relaxed">
              Expanded perlite and vermiculite for commercial and industrial applications. Expanded perlite and vermiculite for commercial and industrial applications. U.S. manufacturing since 1919.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-secondary-foreground/60 font-body">
              <p>
                <a href="tel:978-681-8833" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-secondary-foreground" fill="currentColor" strokeWidth={0} />
                  978-681-8833
                </a>
              </p>
              <p>
                <a href="mailto:sales@whittemoreco.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-secondary-foreground" />
                  Sales: sales@whittemoreco.com
                </a>
              </p>
              <p>
                <a href="mailto:technical@whittemoreco.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-secondary-foreground" />
                  Technical: technical@whittemoreco.com
                </a>
              </p>
              <p className="text-secondary-foreground/60 text-sm mt-1.5">
                30 Glenn Street, Lawrence, Mass. 01843 USA
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li><Link href="/perlite" className="hover:text-accent transition-colors">Perlite</Link></li>
              <li><Link href="/vermiculite" className="hover:text-accent transition-colors">Vermiculite</Link></li>
              <li><Link href="/custom-solutions" className="hover:text-accent transition-colors">Custom Solutions</Link></li>
            </ul>
            <Link href="/blog" className="font-display font-bold text-accent text-xs uppercase tracking-[0.2em] mt-6 block hover:text-accent/80 transition-colors">
              Blog
            </Link>
            <div className="mt-5 flex items-start gap-3">
              <div className="flex flex-col items-center">
                <img
                  src={certOmri}
                  alt="OMRI Listed — For Organic Use"
                  title="OMRI Listed — For Organic Use"
                  loading="lazy"
                  width={120}
                  height={80}
                  className="w-16 h-auto grayscale opacity-60 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={certPerliteInstitute}
                  alt="Perlite Institute Member"
                  title="Perlite Institute Member"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="w-12 h-auto grayscale opacity-60 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={certVermiculiteAssociation}
                  alt="The Vermiculite Association Member"
                  title="The Vermiculite Association Member"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="w-12 h-auto grayscale opacity-60 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-bold text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Industries
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li><a href="#industries" className="hover:text-accent transition-colors">Horticulture</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Construction</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Industrial</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Environmental</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Pool Installs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/30 font-body">
          © {new Date().getFullYear()} Whittemore Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
