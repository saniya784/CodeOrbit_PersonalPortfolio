import { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const EMAIL = 'saniabohre10@gmail.com';
const GITHUB_URL = 'https://github.com/saniya784';
const LINKEDIN_URL = 'https://www.linkedin.com/in/saniya-bohre-55307a2a1/';

const CONTACTS = [
  { icon: FiMail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiPhone, label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000' },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'saniya-bohre',
    href: LINKEDIN_URL,
  },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/saniya-bohre', href: GITHUB_URL },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter your message';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const subject = encodeURIComponent(
      form.subject || `Portfolio message from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const onChange = (field) => (ev) =>
    setForm((f) => ({ ...f, [field]: ev.target.value }));

  return (
    <section id="contact" className="section-padding reveal relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="Feel free to reach out for opportunities, collaboration, or just to say hello."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card card-hover group flex items-center gap-4 p-5 focus-ring"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 text-accent-blue ring-1 ring-accent-blue/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card relative overflow-hidden p-6 sm:p-8 lg:col-span-3"
          >
            {/* subtle gradient corner */}
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-blue/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" value={form.name} onChange={onChange('name')} error={errors.name} placeholder="Your name" />
                <Field label="Email" id="email" type="email" value={form.email} onChange={onChange('email')} error={errors.email} placeholder="you@example.com" />
              </div>
              <Field label="Subject" id="subject" value={form.subject} onChange={onChange('subject')} placeholder="What is this about?" />
              <Field label="Message" id="message" as="textarea" rows={5} value={form.message} onChange={onChange('message')} error={errors.message} placeholder="Write your message..." />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="btn-base bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple text-white shadow-glow hover:shadow-glow-lg"
                >
                  <FiSend className="h-4 w-4" />
                  Send Message
                </button>

                {sent && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                    <FiCheckCircle className="h-4 w-4" />
                    Opening your email client...
                  </span>
                )}
              </div>

              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                This form opens your email client with a prefilled message. No data
                is stored or sent automatically.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, as = 'input', error, ...rest }) {
  const Comp = as;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400"
      >
        {label}
      </label>
      <Comp
        id={id}
        {...rest}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all
          bg-white text-slate-800 placeholder-slate-400
          dark:bg-navy-900/60 dark:text-slate-100 dark:placeholder-slate-500
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-slate-300 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 dark:border-navy-600'
          }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}