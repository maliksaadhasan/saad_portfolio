import { Link } from "react-router";
import { LINKS } from "@/app/data/site";
import { Linkedin, Mail, CalendarCheck, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent" aria-label="Saad Hasan - Home">
              Saad Hasan
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-xs">
              Performance marketer specializing in Meta Ads, Google Ads, and Klaviyo email marketing for e-commerce and lead-gen brands.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/case-studies" className="text-white/50 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/50 hover:text-white transition-colors text-sm">
                  Work Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/50 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href={LINKS.calendar} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">
                  Book a Call
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${LINKS.email}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm" aria-label="Email Saad Hasan">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{LINKS.email}</span>
                </a>
              </li>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm" aria-label="LinkedIn profile">
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm" aria-label="WhatsApp">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{LINKS.whatsappNumber}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Saad Hasan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-white/50" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 text-white/50" />
            </a>
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Book a call"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-white/50" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
