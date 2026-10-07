import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { trackEvent } from '../utils/telemetry';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const links = [
    { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', value: PERSONAL_INFO.email, icon: <Mail size={18} className="text-sky-400" />, event: 'click_email', external: false },
    { href: PERSONAL_INFO.github, label: 'GitHub', value: PERSONAL_INFO.githubLabel, icon: <Github size={18} className="text-sky-400" />, event: 'click_github', external: true },
    { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', value: PERSONAL_INFO.linkedinLabel, icon: <Linkedin size={18} className="text-sky-400" />, event: 'click_linkedin', external: true }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="contact">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Contact</h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl">Based in {PERSONAL_INFO.location}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => trackEvent(link.event, { context: 'contact_section' })}
              className="neural-card rounded-2xl p-5 flex items-center gap-4 group"
            >
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl shrink-0">{link.icon}</div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{link.label}</p>
                <p className="text-white font-medium text-sm truncate group-hover:text-sky-400 transition-colors">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
