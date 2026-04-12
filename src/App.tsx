import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, CheckCircle2, 
  Briefcase, ShieldCheck, Clock, Globe, 
  ArrowRight, Users, Zap, Award, MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Branches', href: '#branches' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="group">
          <span className="text-xl font-black tracking-tighter text-white">
            WORKWAVE TECHNOLOGIES
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest transition-colors text-white/80 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-3! px-6! text-sm!">
            Get Started
          </a>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg text-white bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      <Navbar />
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-600/20 to-transparent" />
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" 
      />
      
      <div className="section-container grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            New Era of HR Consultancy
          </div>
          <h1 className="heading-xl text-white mb-8">
            Scale Your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Potential</span> with Workwave.
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
            Work Wave Technologies delivers premium hiring services and project-based opportunities. We bridge the gap between talent and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-3 group">
              Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-secondary bg-white/5! text-white! border border-white/10 hover:bg-white/10! flex items-center justify-center">
              Our Solutions
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  className="w-12 h-12 rounded-full border-4 border-brand-dark" 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="text-white font-bold">500+ Professionals</div>
              <div className="text-slate-500 text-sm">Onboarded since Feb 2026</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Collaboration" 
              className="shadow-2xl h-96 rounded-2xl object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl border border-slate-200 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900">Verified</span>
              </div>
              <div className="text-xs text-slate-500">All opportunities are 100% background checked.</div>
            </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-slate-100 rounded-2xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-[120px] -z-20" />
          </div>

          <div>
            <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Pioneering HR Solutions Since <span className="text-brand-primary">Feb 2026</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Work Wave Technologies isn't just a consultancy; we're a career catalyst. Founded on the principles of transparency and excellence, we provide a platform where talent meets purpose.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Expert Hiring</h4>
                  <p className="text-sm text-slate-500">Curated talent acquisition for modern projects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Fast Growth</h4>
                  <p className="text-sm text-slate-500">Accelerating careers through project-based work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Work From Home",
      tag: "Data Entry Jobs",
      desc: "High-flexibility data entry roles designed for modern lifestyles. Perfect for those seeking balance without compromising on career growth.",
      icon: <Briefcase className="w-8 h-8" />,
      bg: "bg-blue-600",
      light: "bg-blue-50",
      text: "text-blue-600"
    },
    {
      title: "Vsafetag Project",
      tag: "Vehicle Safety",
      desc: "Innovative field project focused on vehicle safety and identification systems. Be part of a mission-critical safety initiative.",
      icon: <ShieldCheck className="w-8 h-8" />,
      bg: "bg-slate-900",
      light: "bg-slate-100",
      text: "text-slate-900"
    }
  ];

  return (
    <section id="services" className="bg-brand-surface">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Strategic Career Solutions</h2>
          <p className="text-slate-500 text-lg">We offer specialized services tailored to meet the evolving needs of the global workforce.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white p-12 rounded-2xl border border-slate-200 hover:border-brand-primary transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`w-20 h-20 ${s.light} ${s.text} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${s.bg}`}>
                  {s.tag}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{s.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">{s.desc}</p>
              <a href="#contact" className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                Apply for this project <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const features = [
    { title: "Verified Jobs", desc: "Every listing is manually vetted for authenticity.", icon: <CheckCircle2 /> },
    { title: "Fast Onboarding", desc: "Get started on your project within 48 hours.", icon: <Clock /> },
    { title: "Global Support", desc: "Multi-location assistance for all candidates.", icon: <Globe /> },
    { title: "Growth Focused", desc: "We prioritize your long-term career trajectory.", icon: <Award /> },
  ];

  return (
    <section id="solutions" className="bg-white">
      <div className="section-container">
        <div className="bg-brand-dark rounded-2xl p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Why Professionals Choose Workwave.</h2>
              <p className="text-xl text-slate-400">We've built a reputation on trust, speed, and quality. Our ecosystem is designed to support your ambitions.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Branches = () => {
  const branches = [
    {
      city: "Gulbarga",
      title: "Main Branch",
      address: "1st Floor, Azizia Hussain Complex, Opp. PWD Quarters, Old Jewargi Road, Kalaburagi - 585102",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      city: "Mysore",
      title: "Head Office",
      address: "504/3 f 72/3, N Madhav Rao Circle, Thyagaraja Main Road, Agrahara Circle, Mysore - 570004",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="branches" className="bg-brand-surface">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Network</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Strategic Locations</h2>
          </div>
          <p className="text-slate-500 max-w-xs">Visit our physical offices for personalized consultancy and support.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {branches.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={b.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={b.city} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-12">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                  {b.title}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{b.city}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{b.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10">Let's Build Your Future.</h2>
            <p className="text-xl text-slate-500 mb-16 leading-relaxed">
              Ready to take the next step? Our team is standing by to help you navigate your career path.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</div>
                  <div className="text-2xl font-bold text-slate-900">+91 9187112530</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                  <div className="text-xl font-bold text-slate-900 break-all">workwavetechnologies2026@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 md:p-16 rounded-2xl border border-slate-200"
          >
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
                <p className="text-slate-500">We'll reach out to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-10 text-brand-primary font-bold">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone</label>
                    <input required type="tel" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="Tell us about your goals..." />
                </div>
                <button disabled={status === 'sending'} className="w-full btn-primary py-6! text-lg! shadow-2xl shadow-blue-500/30 disabled:opacity-50">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
          <p className="text-lg text-slate-600">Find us at our headquarters in Kalaburagi, Karnataka</p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
          <iframe 
            src="https://www.google.com/maps?q=Work+Wave+Technologies,+Shop+No+16,+1st+Floor,+Azizia+Hussain+Complex,+Old+Jewargi+Rd,+Shastri+Nagar,+Kalaburagi,+Karnataka+585102&output=embed"
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Work Wave Technologies Office Location"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-black tracking-tighter">WORKWAVE TECHNOLOGIES</span>
            </div>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Redefining the HR consultancy landscape with verified opportunities and strategic career growth since 2026.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://g.page/r/CVqpeKQ4Zgq6EAE/review" 
                alt="Google Review QR Code" 
                className="w-24 h-24 border border-white/20 rounded-lg"
              />
              <div>
                <p className="text-white text-sm font-medium mb-1">Leave us a Google Review</p>
                <a 
                  href="https://g.page/r/CVqpeKQ4Zgq6EAE/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary text-xs hover:underline"
                >
                  Scan or click to review
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h5>
            <ul className="space-y-4 font-bold">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#branches" className="hover:text-brand-primary transition-colors">Branches</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Work Wave Technologies. All Rights Reserved.</p>
          <p>Developed by <a href="https://www.cheersdigitalmarketing.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.cheersdigitalmarketing.com</a></p>
        </div>
      </div>
    </footer>
  );
};

const FloatingAction = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919187112530" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Branches />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
}
