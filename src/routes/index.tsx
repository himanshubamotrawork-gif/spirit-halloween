import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/spirit-halloween-logo.png";

const steps = [
  "Click the “Get Now” button",
  "Enter your basic info",
  "Complete 5 simple deals",
  "Get a chance to receive your reward",
];

const answers = [
  {
    question: "How long does it take?",
    answer: "It should take around 20–40 minutes.",
  },
  {
    question: "What are the deals?",
    answer: "Quick tasks — fill out a form, answer a survey, try an app, or start a trial.",
  },
  {
    question: "When do I get the reward?",
    answer: "Digitally within 24 hours after you complete the deals.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Spirit Halloween Reward" },
      {
        name: "description",
        content: "Complete a few simple steps for a chance to receive a $500 Spirit Halloween reward.",
      },
      { property: "og:title", content: "$500 Spirit Halloween Reward" },
      {
        property: "og:description",
        content: "Complete a few simple steps for a chance to receive a $500 Spirit Halloween reward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-page px-4 py-6 font-body text-foreground sm:px-6 sm:py-12">
      <section className="offer-shell mx-auto w-full max-w-[440px] overflow-hidden border-t-[6px] border-primary bg-background shadow-page">
        <header className="relative overflow-hidden px-6 pb-6 pt-8 text-center sm:px-8 sm:pt-10">
          <div className="cobweb" aria-hidden="true" />
          <img
            src={logo}
            alt="Spirit Halloween"
            className="relative mx-auto mb-5 h-32 w-48 object-cover object-top sm:h-36 sm:w-52"
          />
          <h1 className="font-display text-[4.25rem] leading-none text-foreground drop-shadow-sm">
            $500
          </h1>
          <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
            Spirit Halloween reward
          </p>
          <div className="mx-auto mt-4 w-fit rounded-sm bg-foreground px-8 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-primary">
            $500 reward
          </div>
        </header>

        <div className="px-5 pb-2 sm:px-7">
          <section className="rounded-lg bg-card px-5 py-4 shadow-card sm:px-6" aria-label="How it works">
            <ol>
              {steps.map((step, index) => (
                <li key={step} className="flex min-h-[58px] items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-base font-black text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-card-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <a
            href="https://giftclick.org/aff_c?offer_id=3280&aff_id=17763"
            className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-black uppercase tracking-wide text-primary-foreground shadow-button transition-transform active:scale-[0.98]"
          >
            Get now <span aria-hidden="true">→</span>
          </a>

          <p className="px-3 py-4 text-center text-[0.65rem] leading-relaxed text-muted-foreground">
            Disclosure: This is an independent affiliate promotion. I may receive a commission if you participate in this offer at no extra cost to you.
          </p>

          <section className="mb-6 mt-3 rounded-lg bg-card px-5 pb-3 pt-5 shadow-card sm:px-6" aria-labelledby="quick-answers">
            <h2 id="quick-answers" className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
              Quick answers
            </h2>
            <div>
              {answers.map((item, index) => (
                <div key={item.question} className={index < answers.length - 1 ? "border-b border-border py-4" : "py-4"}>
                  <h3 className="text-sm font-extrabold text-card-foreground">{item.question}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
