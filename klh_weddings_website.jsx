export default function KLHWeddingsWebsite() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const included = [
    "Initial consultation to get to know you and your plans",
    "Detailed wedding questionnaire to gather key information",
    "Coordination meeting at your venue or via video call",
    "Full supplier communication and final confirmations",
    "Creation of a detailed wedding day timeline",
    "Final checks and reassurance in the lead-up",
    "Up to 10 hours of calm, professional coordination on the day",
  ];

  const process = [
    {
      step: "01",
      title: "Enquire",
      text: "Get in touch to check availability and tell me a little about your wedding or event.",
    },
    {
      step: "02",
      title: "Book Your Date",
      text: "Once you're ready, your date is secured with a £150 non-refundable booking fee.",
    },
    {
      step: "03",
      title: "Final Weeks Coordination",
      text: "Around 4–6 weeks before the wedding, I step in fully to gather details, review plans, and liaise with suppliers.",
    },
    {
      step: "04",
      title: "Enjoy Your Day",
      text: "On the day itself, I manage the moving parts behind the scenes so you can be fully present with your people.",
    },
  ];

  const faqs = [
    {
      q: "When do you step in?",
      a: "I usually step in around 4–6 weeks before the wedding, once you have planned the main details and booked your suppliers.",
    },
    {
      q: "Do you offer full wedding planning?",
      a: "No — this service is focused on on-the-day wedding coordination, bringing together everything you have already planned.",
    },
    {
      q: "How far do you travel?",
      a: "Travel within 60 miles of Gloucestershire is included. Beyond that, mileage is charged at £0.45 per mile and accommodation may be required for extended travel.",
    },
    {
      q: "Do you cover other events as well?",
      a: "Yes — I also support parties, milestone celebrations, and other special events where calm coordination is needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-stone-700">
            KLH WEDDINGS & EVENTS
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-stone-600 transition hover:text-stone-900">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-stone-900 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white"
          >
            Check availability
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-stone-50 to-stone-50" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-stone-500">On-the-day wedding coordination</p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-stone-900 md:text-6xl">
                Calm, thoughtful coordination so you can enjoy every moment.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Planning your wedding is such a special and exciting time — and when the day arrives, you deserve to be fully present in it. I step in during the final weeks to bring everything together, coordinate suppliers, manage timings, and keep the day flowing beautifully.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Enquire now
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                >
                  View services
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <div className="text-2xl font-semibold">4–6</div>
                  <div className="mt-1 text-sm text-stone-600">weeks before I step in</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <div className="text-2xl font-semibold">10 hrs</div>
                  <div className="mt-1 text-sm text-stone-600">coordination included</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <div className="text-2xl font-semibold">£850</div>
                  <div className="mt-1 text-sm text-stone-600">simple, clear pricing</div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-stone-200">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f8e7e7,#efe8df,#f7f3ef)] p-8">
                  <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-8 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.24em] text-stone-500">KLH Weddings & Events</p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-900">
                      A calm presence behind the scenes.
                    </h2>
                    <p className="mt-4 leading-7 text-stone-600">
                      From supplier arrivals and setup to key moments and quiet problem-solving, I’m there to make sure the day feels smooth, supported, and stress-free.
                    </p>
                    <div className="mt-6 rounded-2xl bg-stone-900 px-5 py-4 text-stone-50">
                      <p className="text-sm text-stone-200">Ideal for couples who have planned their day themselves but want professional support when it matters most.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-3">
            {[
              "Highly organised and calm under pressure",
              "Warm, supportive and quietly confident approach",
              "Designed to let you relax and enjoy the day",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 p-5 text-center text-sm text-stone-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Wedding coordination, with room for other meaningful events too.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              I specialise in on-the-day wedding coordination, while also offering calm support for milestone celebrations and events that need thoughtful organisation and smooth delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-rose-500">Signature service</p>
                  <h3 className="mt-2 text-2xl font-semibold text-stone-900">On-the-Day Wedding Coordination</h3>
                </div>
                <div className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white">£850</div>
              </div>
              <p className="mt-6 leading-8 text-stone-600">
                For couples who have planned their wedding themselves but want a professional to ensure everything runs smoothly. I step in around 4–6 weeks before the wedding to bring everything together, organise the details, and take over communication in the lead-up.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-6 text-stone-700 ring-1 ring-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-stone-900 p-8 text-stone-50 shadow-sm">
                <h4 className="text-xl font-semibold">What’s included</h4>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-200">
                  <li>Up to 10 hours coverage on the wedding day</li>
                  <li>Travel included within 60 miles of Gloucestershire</li>
                  <li>Additional hours available at £85 per hour</li>
                  <li>Bespoke quotes available for destination weddings</li>
                </ul>
              </div>
              <div className="rounded-[2rem] bg-rose-50 p-8 shadow-sm ring-1 ring-rose-100">
                <h4 className="text-xl font-semibold text-stone-900">Also available</h4>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Event and party coordination, support with timelines and organisation, and calm professional management for other special occasions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#f5ede8,#f7f4ef)] p-8 shadow-sm ring-1 ring-stone-200">
              <div className="rounded-[1.5rem] bg-white p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">About</p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Hi, I’m Kirsty.</h2>
                <p className="mt-5 leading-8 text-stone-600">
                  I created KLH Weddings & Events to help couples enjoy their wedding day exactly as it should be — calm, organised, and completely stress-free.
                </p>
                <p className="mt-4 leading-8 text-stone-600">
                  With a background in long-haul aviation, I’m used to fast-paced environments where timing, communication, and attention to detail matter. That experience helps me stay calm under pressure and quietly keep everything moving.
                </p>
                <p className="mt-4 leading-8 text-stone-600">
                  After planning my own wedding in just five months — later featured in a wedding magazine — I understand just how much care goes into every detail, and how valuable it is to hand the responsibility over on the day.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Why couples choose KLH</p>
              <h3 className="mt-3 text-3xl font-semibold text-stone-900">Warm, organised support with a steady hand behind the scenes.</h3>
              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Calm under pressure",
                    text: "A reassuring presence when timings shift or unexpected issues appear.",
                  },
                  {
                    title: "Meticulous organisation",
                    text: "Clear timelines, supplier coordination, and thoughtful preparation in the final weeks.",
                  },
                  {
                    title: "People-focused approach",
                    text: "Supportive, warm communication so couples, families, and suppliers all feel looked after.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-stone-200 p-5 shadow-sm">
                    <h4 className="font-semibold text-stone-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">A clear, simple process from enquiry to wedding day.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <div className="text-sm font-medium tracking-[0.24em] text-rose-500">{item.step}</div>
                <h3 className="mt-3 text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-stone-900 text-stone-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Straightforward pricing, with clarity from the start.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                £850 for on-the-day coordination, including up to 10 hours of coverage. A £150 non-refundable booking fee secures your date, with the remaining balance due 4 weeks before the wedding.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-stone-800 shadow-xl">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Signature package</p>
                  <h3 className="mt-2 text-2xl font-semibold">On-the-Day Coordination</h3>
                </div>
                <div className="text-3xl font-semibold">£850</div>
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
                <p>£150 non-refundable booking fee to secure your date</p>
                <p>Travel included within 60 miles of Gloucestershire</p>
                <p>Additional hours charged at £85 per hour</p>
                <p>Beyond 60 miles charged at £0.45 per mile</p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Check my date
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">A few common questions.</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <summary className="cursor-pointer list-none text-lg font-medium text-stone-900">
                  {item.q}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-rose-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Let’s talk about your wedding.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                I’d love to hear about your plans and how I can support you. Get in touch to check availability and tell me more about your day.
              </p>
              <div className="mt-8 space-y-4 text-sm text-stone-700">
                <p><span className="font-semibold">Email:</span> hello@klhweddingsandevents.co.uk</p>
                <p><span className="font-semibold">Phone:</span> 07XXX XXXXXX</p>
                <p><span className="font-semibold">Instagram:</span> @klhweddingsandevents</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
              <h3 className="text-xl font-semibold text-stone-900">Enquiry form</h3>
              <div className="mt-6 grid gap-4">
                <input className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="Your name" />
                <input className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="Email address" />
                <input className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="Wedding or event date" />
                <textarea className="min-h-[140px] rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="Tell me a little about your plans" />
                <button className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                  Send enquiry
                </button>
              </div>
              <p className="mt-4 text-xs leading-6 text-stone-500">
                This demo form is ready for connection to Formspree, Netlify Forms, or your preferred website platform’s built-in form handling.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} KLH Weddings & Events. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-stone-900">Services</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#contact" className="hover:text-stone-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
