import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Languages, MapPin, Network, Users2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- inline logo ---
const Logo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="#0F172A" strokeWidth="3" opacity="0.08" />
    <path d="M12 32c0-11.046 8.954-20 20-20" stroke="#14B8A6" strokeWidth="6" strokeLinecap="round" />
    <path d="M52 32c0 11.046-8.954 20-20 20" stroke="#FF6B6B" strokeWidth="6" strokeLinecap="round" />
    <path d="M22 28l20 20" stroke="#0F172A" strokeOpacity=".2" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <Logo className="h-9 w-9" />
        <div className="font-semibold tracking-tight text-slate-900">Nearshore Nexus</div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-slate-700">
        <a href="#why" className="hover:text-slate-900">Why Nearshore</a>
        <a href="#services" className="hover:text-slate-900">Capabilities</a>
        <a href="#founders" className="hover:text-slate-900">Founders</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">Start a Conversation</Button>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">
            <MapPin className="h-4 w-4" /> LATAM • U.S. Time Zones
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Your LATAM Nearshore Talent Partner
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Engineers, Project Managers, Business Analysts, and Quality professionals — vetted in LATAM, aligned to
            U.S. time zones, and fluent in English with strong cultural fit. Real-time collaboration without the offshore friction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Book an Intro Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="#why" className="inline-flex items-center text-slate-700 hover:text-slate-900">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[{ k: "35+", t: "Years Experience" }, { k: "LATAM", t: "Founder On-Site" }, { k: "US", t: "Cultural Fluency" }].map((i) => (
              <Card key={i.t} className="shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">{i.k}</div>
                  <div className="text-xs text-slate-600">{i.t}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-teal-100 to-sky-100 blur-3xl opacity-60 rounded-3xl" />
            <div className="relative rounded-3xl border bg-white shadow-xl p-6">
              <svg viewBox="0 0 600 380" className="w-full h-auto rounded-2xl">
                <defs>
                  <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#E6FFFB" />
                    <stop offset="100%" stopColor="#F0F9FF" />
                  </linearGradient>
                </defs>
                <rect width="600" height="380" fill="url(#sea)" rx="20" />
                <path d="M60,300 C120,260 160,260 210,290 C250,310 290,310 330,300" stroke="#bae6fd" strokeWidth="10" fill="none"/>
                <path d="M410,260 C460,230 520,220 540,260 C560,300 500,320 460,310" stroke="#99f6e4" strokeWidth="10" fill="none"/>
                <circle cx="150" cy="220" r="9" fill="#3B82F6" />
                <circle cx="450" cy="190" r="9" fill="#14B8A6" />
                <text x="165" y="225" fontSize="12" fill="#0F172A">US Teams</text>
                <text x="465" y="195" fontSize="12" fill="#0F172A">LATAM Talent</text>
                <path d="M160 220 C 260 120, 360 120, 450 190" stroke="#FF6B6B" strokeWidth="3" fill="none"/>
              </svg>
              <div className="mt-4 text-center text-sm text-slate-600">Proximity that speeds delivery — no overnight hand-offs.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-white border-y">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <p className="text-center text-sm uppercase tracking-widest text-slate-500">Experience at</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
        {["Airbnb","Salesforce","Gap","Caribou","Rootly","Harness"].map((b)=> (
          <div key={b} className="text-center text-slate-700 font-semibold bg-slate-50 py-3 rounded-xl border">{b}</div>
        ))}
      </div>
    </div>
  </section>
);

const Why = () => (
  <section id="why" className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Nearshore Nexus?</h2>
          <p className="mt-4 text-slate-600">
            We combine the cost advantages of Latin America with U.S.-aligned collaboration and culture.
            Our founder lives on the ground in LATAM, giving you immediate access to vetted talent and faster hiring cycles.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Clock className="h-5 w-5" />, title: "Time-zone aligned", desc: "Real-time collaboration; no overnight hand-offs." },
              { icon: <Languages className="h-5 w-5" />, title: "English proficiency", desc: "Clear communication and strong U.S. business context." },
              { icon: <Network className="h-5 w-5" />, title: "Founder in LATAM", desc: "Direct access to talent markets and networks." },
              { icon: <Users2 className="h-5 w-5" />, title: "Full-stack staffing", desc: "Engineers, PMs, BAs, QEs, and Contact Center QA." },
            ].map((f) => (
              <Card key={f.title} className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-slate-900 text-base font-semibold">
                    <span className="text-teal-600">{f.icon}</span>{f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-slate-600 text-sm">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <Card className="border-teal-100 shadow-sm">
            <CardHeader><CardTitle className="text-slate-900">From Offshore Headaches to Nearshore Harmony</CardTitle></CardHeader>
            <CardContent className="text-slate-600">
              <ul className="space-y-3">
                {[
                  "Reduce delays and miscommunications",
                  "Higher context and cultural alignment",
                  "Faster feedback loops and delivery",
                  "Seamless integration with your tools and rituals",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" /><span>{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Capabilities</h2>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Flexible, scalable staffing for project-based work or longer-term augmentation. Our professionals embed with your team and deliver quickly.
      </p>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Software Engineering", desc: "Frontend, backend, full-stack, and platform engineers." },
          { title: "Quality Engineering & QA", desc: "Automation (Playwright), manual testing, CI/CD quality gates." },
          { title: "Business Analysis", desc: "Requirements, process design, CX and contact center analytics." },
          { title: "Project / Program Management", desc: "Agile delivery, stakeholder management, risk & dependency tracking." },
          { title: "Contact Center QA", desc: "Coaching rubrics, calibration, tools admin (Five9, Observe AI)." },
          { title: "Data & Insights", desc: "Dashboards, Looker, BigQuery, and operational analytics." },
        ].map((s) => (
          <Card key={s.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2"><CardTitle className="text-base text-slate-900">{s.title}</CardTitle></CardHeader>
            <CardContent className="pt-0 text-slate-600 text-sm">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Founders = () => (
  <section id="founders" className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">35+ Years. Real-world Outcomes.</h2>
          <p className="mt-4 text-slate-600">
            Co-founders Clay Blanton and Steve Stecher bring decades of leadership across Airbnb, Salesforce, and Gap.
            We’ve built teams, shipped products, and run incident and release management at scale — and we apply those lessons to every engagement.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-teal-600"/> Quality & Reliability programs that stick</li>
            <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-teal-600"/> Contact Center operations and tooling expertise</li>
            <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-teal-600"/> Enablement for engineers to own E2E testing</li>
          </ul>
        </div>
        <div>
          <Card className="shadow-sm">
            <CardHeader><CardTitle className="text-slate-900">Where We Operate</CardTitle></CardHeader>
            <CardContent className="text-slate-600 text-sm">
              LATAM hubs with strong English proficiency and cultural alignment. Founder presence in-region accelerates sourcing, vetting, and onboarding.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="relative bg-gradient-to-tr from-teal-600 to-sky-500 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Ready to meet your next great teammate?</h2>
          <p className="mt-3 text-white/90">Tell us what you need. We’ll bring options — fast.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 grid gap-3">
          <input className="rounded-lg px-3 py-2 bg-white text-slate-900" placeholder="Your name" />
          <input className="rounded-lg px-3 py-2 bg-white text-slate-900" placeholder="Work email" />
          <input className="rounded-lg px-3 py-2 bg-white text-slate-900" placeholder="Company" />
          <textarea className="rounded-lg px-3 py-2 bg-white text-slate-900" rows={3} placeholder="What roles are you hiring for?" />
          <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white">Send Inquiry</Button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex items-center gap-3">
        <Logo className="h-7 w-7" />
        <div className="text-slate-700">© {new Date().getFullYear()} Nearshore Nexus</div>
      </div>
      <div className="text-slate-500 text-sm">Engineers • PMs • BAs • QE/QA • Contact Center QA</div>
    </div>
  </footer>
);

export default function NearshoreNexusSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <TrustBar />
      <Why />
      <Services />
      <Founders />
      <CTA />
      <Footer />
    </div>
  );
}
