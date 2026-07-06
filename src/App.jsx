import { ShieldCheck, Menu, X, Phone, Mail, MapPin, CheckCircle2, Star, Send, BriefcaseBusiness, Camera, Car, Users, Lock, Award, GraduationCap, Building2 } from 'lucide-react';
import React, { useMemo, useState } from 'react';

const phone = '2348083790550';
const brand = {
  name: 'Speedmen Protection Limited',
  tagline: 'Swift Response. Strong Protection. Total Peace of Mind.',
  email: 'info@speedmenprotection.com',
  address: 'Head Office, Lagos, Nigeria',
};

const services = [
  ['Manned Guarding', 'Professional security officers for homes, offices, schools, hotels, warehouses and industrial sites.', Users],
  ['Estate Security', 'Gate control, resident verification, visitor clearance, patrol supervision and incident escalation.', Building2],
  ['Corporate Security', 'Reliable workplace protection, reception security, staff movement control and emergency support.', ShieldCheck],
  ['Event Security', 'Crowd control, entry screening, VIP movement, parking control and emergency coordination.', Users],
  ['VIP Protection', 'Discreet executive protection, route planning, escort support and confidential movement management.', Award],
  ['Access Control', 'Visitor registration, ID checks, contractor screening, gate pass and movement records.', Lock],
  ['CCTV Monitoring', 'On-site surveillance, suspicious movement reporting, incident recording and escalation support.', Camera],
  ['Patrol Services', 'Mobile and foot patrol for estates, construction sites, warehouses and business premises.', Car],
  ['Security Consulting', 'Security audit, staff training, emergency planning and security policy development.', BriefcaseBusiness],
  ['Risk Assessment', 'Vulnerability inspection, risk rating, manpower recommendation and response planning.', ShieldCheck],
];

const personnel = [
  ['Bronze Men', 'SSCE Certificate', 'Basic guarding, patrol duties, visitor screening, access control and disciplined presence.'],
  ['Silver Men', 'OND Certificate', 'Advanced guarding, incident reporting, reception security, client interaction and supervisor support.'],
  ['Gold Men', 'BSc / HND Certificate', 'Leadership support, risk assessment, emergency response, team coordination and corporate assignments.'],
  ['Platinum Officers', 'BSc / HND + Experience', 'Senior supervision, operations management, security planning, compliance monitoring and executive assignments.'],
];

const testimonials = [
  ['Estate Manager, Lekki, Lagos', 'Speedmen guards brought discipline and order to our estate. Their reporting and professionalism are unmatched.'],
  ['Event Planner, Abuja', 'Their event security team was outstanding. Everything went smoothly and safely.'],
  ['Executive Assistant, Lagos', 'We trust Speedmen with our VIP movements. Highly reliable and discreet.'],
];

function Logo() {
  return <div className="logo-wrap" aria-label="Speedmen logo">
    <div className="logo-shield"><span className="eye">◉</span><span className="logo-text">SPL</span></div>
    <div><strong>SPEEDMEN</strong><small>PROTECTION LIMITED</small></div>
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home','About Us','Security Services','Compliance','Projects','Careers','Management Team','Contact Us'];
  return <header className="site-header">
    <Logo />
    <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'open' : ''}>{links.map(l => <a key={l} href={'#'+l.toLowerCase().replaceAll(' ','-')}>{l}</a>)}<a className="nav-cta" href="#request">Request Service</a></nav>
  </header>;
}

function SecurityForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', org:'', service:'Manned Guarding', location:'', guards:'', start:'', duration:'', property:'', risk:'Not sure', message:'' });
  const msg = useMemo(() => encodeURIComponent(`Hello Speedmen Protection Limited, I want to request security service.\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nOrganisation/Estate/Company: ${form.org}\nService Needed: ${form.service}\nLocation: ${form.location}\nNumber of Guards: ${form.guards}\nPreferred Start Date: ${form.start}\nDuration: ${form.duration}\nProperty Type: ${form.property}\nRisk Level: ${form.risk}\nMessage: ${form.message}`), [form]);
  const update = e => setForm({...form, [e.target.name]: e.target.value});
  return <section id="request" className="form-section">
    <div><p className="eyebrow">Request Security Service</p><h2>Tell us what you need. We will respond promptly.</h2><p>Use this form for guards, patrol, CCTV monitoring, event security, VIP protection or a risk assessment.</p></div>
    <form onSubmit={(e)=>{e.preventDefault(); window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')}}>
      {['name','phone','email','org','location','guards','start','duration','property'].map(k => <input key={k} name={k} placeholder={k === 'org' ? 'Organisation / Estate / Company' : k[0].toUpperCase()+k.slice(1)} value={form[k]} onChange={update} />)}
      <select name="service" value={form.service} onChange={update}>{services.map(s => <option key={s[0]}>{s[0]}</option>)}</select>
      <select name="risk" value={form.risk} onChange={update}><option>Low</option><option>Medium</option><option>High</option><option>Not sure</option></select>
      <textarea name="message" placeholder="Message / Special Instruction" value={form.message} onChange={update}/>
      <button className="primary" type="submit"><Send size={18}/> Submit to WhatsApp</button>
    </form>
  </section>;
}

export default function App() {
  return <div>
    <Header />
    <main>
      <section id="home" className="hero">
        <div className="hero-copy"><p className="eyebrow">NSCDC Licensed • Fully Insured • Compliance Focused</p><h1>Swift Response.<br/><span>Strong Protection.</span><br/>Total Peace of Mind.</h1><p>Professional private security solutions backed by trained personnel, modern technology, strict supervision and a culture of discipline and integrity.</p><div className="hero-actions"><a className="primary" href="#request">Request Security Service</a><a className="secondary" href={`https://wa.me/${phone}`}>Chat on WhatsApp</a></div></div>
        <div className="guard-card"><div className="guard male"></div><div className="guard female"></div></div>
      </section>
      <section className="trustbar">{['24/7 Protection','Rapid Response','Trained Personnel','Advanced Technology','Trust & Integrity'].map(t => <div key={t}><ShieldCheck/><strong>{t}</strong><small>Always on guard</small></div>)}</section>
      <section id="security-services" className="section"><p className="eyebrow">Our Core Security Services</p><h2>Security solutions designed around your risk</h2><div className="grid services">{services.map(([title,text,Icon]) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p><a href="#request">Request this service</a></article>)}</div></section>
      <section id="about-us" className="split light"><div><p className="eyebrow">About Us</p><h2>Who We Are</h2><p>Speedmen Protection Limited was established to provide disciplined, reliable and professional private security services for individuals, estates, businesses, events and corporate institutions.</p><p>We combine trained personnel, strict supervision, modern security awareness and quick response to protect lives, property and peace of mind.</p></div><div className="mission-cards"><article><h3>Mission</h3><p>To protect people, property and business operations through trained personnel, modern systems and proactive risk management.</p></article><article><h3>Vision</h3><p>To become one of Nigeria’s most trusted private security companies, recognised for professionalism and excellent service.</p></article><article><h3>Core Values</h3><p>Discipline, integrity, vigilance, confidentiality, professionalism, loyalty and rapid response.</p></article></div></section>
      <section id="compliance" className="section compliance"><p className="eyebrow">Licenses, Insurance & Compliance</p><h2>Licensed. Insured. Trusted. Compliant.</h2><div className="grid badges">{['NSCDC Licensed','Fully Insured','PSA Compliant','ISO Aligned','Data Protection Conscious'].map(b => <article key={b}><Award/><h3>{b}</h3><p>Professional operations aligned with relevant laws, ethical standards, client confidentiality and documented security practice.</p></article>)}</div></section>
      <section className="section"><p className="eyebrow">Personnel Categories</p><h2>Choose the right security grade for your environment</h2><div className="grid personnel">{personnel.map(([a,b,c]) => <article key={a}><GraduationCap/><h3>{a}</h3><strong>{b}</strong><p>{c}</p></article>)}</div><p className="note">All personnel undergo recruitment screening, background checks, training, uniform discipline and continuous performance evaluation.</p></section>
      <SecurityForm />
      <section id="projects" className="section projects"><p className="eyebrow">Projects / Clients Served</p><h2>Trusted across different security environments</h2><div className="grid smallcards">{['Residential Estates','Corporate Offices','Construction Sites','Hotels & Hospitality','Schools','Events & Conferences','Warehouses','VIP Assignments'].map(x => <article key={x}>{x}</article>)}</div></section>
      <section className="section"><p className="eyebrow">Client Testimonials</p><h2>What our clients say</h2><div className="grid testimonials">{testimonials.map(([name,text]) => <article key={name}><div>{Array.from({length:5}).map((_,i)=><Star key={i} fill="currentColor" size={16}/>)}</div><p>“{text}”</p><strong>— {name}</strong></article>)}</div></section>
      <section id="careers" className="split careers"><div><p className="eyebrow">Careers</p><h2>Build a career in professional security</h2><p>We are looking for disciplined, honest, physically fit and responsible people who want to build a career in private security.</p><ul>{['Security Guard','Patrol Supervisor','CCTV Operator','Control Room Officer','Driver / Escort Officer','Operations Supervisor','Training Officer','Client Service Officer'].map(x => <li key={x}><CheckCircle2/> {x}</li>)}</ul><a className="primary" href="#request">Apply Now</a></div><div className="team-illustration"></div></section>
      <section id="management-team" className="section"><p className="eyebrow">Management Team</p><h2>Leadership built on discipline and trust</h2><div className="grid team">{['Managing Director / CEO','Head of Operations','Head of Training & Compliance','Head of Corporate Security','Head of Estate Security','Head of Finance & Administration'].map(x => <article key={x}><div className="avatar"></div><h3>{x}</h3><p>Experienced leadership focused on client protection, operational discipline and service excellence.</p></article>)}</div></section>
      <section id="contact-us" className="split contact"><div><p className="eyebrow">Contact Us</p><h2>Contact Speedmen Protection Limited</h2><p><MapPin/> {brand.address}</p><p><Phone/> +234 808 379 0550</p><p><Mail/> {brand.email}</p><a className="primary" href="#request">Request Security Service</a></div><div className="map">Speedmen Protection Limited<br/>Map Placeholder</div></section>
    </main>
    <footer><Logo/><p>{brand.tagline}</p><p>© 2026 Speedmen Protection Limited. All Rights Reserved.</p></footer>
  </div>;
}