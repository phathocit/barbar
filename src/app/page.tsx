import Image from "next/image";
import { site } from "@/data/xtechbar";
import {
  Header,
  HeroMedia,
  CocktailExplorer,
  Gallery,
  Reservation,
  RevealObserver,
  EntranceDoor,
  BackToTopButton,
  FooterAscendLink,
  ToastButtonContent,
  BrandWordmark,
} from "@/components/xtechbar";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <EntranceDoor />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <HeroMedia />
          <div className="hero-shade" />
          <div className="hero-vertical" aria-hidden="true">
            A PLACE. A MOOD. A MOMENT.
          </div>
          <div className="hero-copy shell">
            <h1 id="hero-title">
              Where the night
              <br />
              becomes <em>unforgettable.</em>
            </h1>
            <p className="hero-description">
              An intimate retreat where time gently slows,
              <br className="hidden sm:block" /> and every moment is composed
              solely for you.
            </p>
            <div className="hero-actions flex flex-wrap items-center gap-7">
              <a className="button" href="#reservations">
                <ToastButtonContent>RESERVE A TABLE</ToastButtonContent>
              </a>
            </div>
          </div>
          <div className="hero-bottom shell flex items-center justify-center!">
            <p className="">
              Good company. Great cocktails. <i>Beautiful nights.</i>
            </p>
          </div>
        </section>

        <section id="experience" className="intro-section section-pad">
          <div className="shell">
            <div className="intro-grid">
              <h2 data-reveal>
                A sanctuary to slow down.
                <br />
                An evening to <em>savour.</em>
              </h2>
              <div className="intro-body" data-reveal>
                <p>
                  Gentle amber light. Perfectly composed elixirs. Evocative
                  melodies that effortlessly cradle timeless conversations.
                </p>
                <p>
                  XTECHBAR curates an intimate refuge for the pleasures that
                  define a truly beautiful evening. Leave the cadence of the
                  world at the door, and dedicate this hour to yourself.
                </p>
              </div>
            </div>
            <div
              className="experience-tags"
              data-reveal
              aria-label="Three core pillars"
            >
              <span>Considered cocktails</span>
              <i>✦</i>
              <span>Intimate spaces</span>
              <i>✦</i>
              <span>Unforgettable moments</span>
            </div>
          </div>
        </section>

        <section id="space" className="space-section section-pad">
          <div className="shell space-grid">
            <div className="space-photo-wrap" data-reveal>
              <div className="space-photo">
                <Image
                  src="/images/alcove.webp"
                  alt="Velvet seating alcove and stone table under candlelight"
                  fill
                  sizes="(max-width: 760px) 92vw, 52vw"
                  className="object-cover"
                />
              </div>
              <span className="photo-line" aria-hidden="true" />
            </div>
            <div className="space-copy" data-reveal>
              <h2>
                Find your
                <br />
                <em>corner.</em>
              </h2>
              <p>
                Amid deep shadows, sumptuous velvets, and warm candlelight,
                there is always a secluded corner where you belong.
              </p>
              <p>
                An intimate rendezvous. An elegant gathering. Or simply a night
                devoted to your own contemplation.
              </p>
              <div className="space-detail">
                <Image
                  src="/images/hero.webp"
                  alt="Backlit amber onyx bar details"
                  fill
                  sizes="(max-width: 760px) 80vw, 28vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cocktails" className="cocktail-section section-pad">
          <div className="shell">
            <CocktailExplorer />
          </div>
        </section>

        <section
          className="atmosphere-section"
          aria-labelledby="atmosphere-title"
        >
          <Image
            src="/images/hero.webp"
            alt="Warm ambient luxury lounge atmosphere at XTECHBAR"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="atmosphere-shade" />
          <div className="atmosphere-content" data-reveal>
            <p className="eyebrow">THE NIGHT IS STILL YOUNG</p>
            <h2 id="atmosphere-title">
              Stay for
              <br />
              <em>another song.</em>
            </h2>
            <span className="fine-rule" />
            <p>There are evenings you simply never wish to end.</p>
          </div>
        </section>

        <section id="moments" className="moments-section section-pad">
          <div className="shell">
            <div className="moments-heading" data-reveal>
              <div>
                <h2>
                  Captured moments.
                  <br />
                  <em>A singular emotion.</em>
                </h2>
              </div>
            </div>
            <Gallery />
          </div>
        </section>

        <section id="reservations" className="reservation-section section-pad">
          <div className="shell reservation-grid">
            <div className="reservation-copy" data-reveal>
              <h2>
                Make the
                <br />
                night <em>yours.</em>
              </h2>
              <p>
                A secluded table curated for you.
                <br />
                An evening tailored to your desires.
              </p>
              <span className="reservation-detail">
                WE LOOK FORWARD TO WELCOMING YOU.
              </span>
            </div>
            <Reservation />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell">
          <div className="footer-top" data-reveal>
            <BrandWordmark href="#" aria-label="XTECHBAR — Return to top" />
            <p>
              The art of a <em>beautiful evening.</em>
            </p>
            <a href="#reservations" className="footer-reserve">
              <ToastButtonContent>RESERVE A TABLE</ToastButtonContent>
            </a>
          </div>
          {(site.address ||
            site.phone ||
            site.email ||
            site.hours ||
            site.instagramUrl) && (
            <div className="contact-details" data-reveal>
              {site.address && <p>{site.address}</p>}
              {site.hours && <p>{site.hours}</p>}
              {site.phone && (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              )}
              {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
              {site.instagramUrl && (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              )}
            </div>
          )}
          <div className="footer-bottom" data-reveal>
            <span>© {new Date().getFullYear()} XTECHBAR</span>
            <p>
              CONCEPT PREVIEW · ART DIRECTION & AI CONCEPT VISUALS · DEMO
              RESERVATION
            </p>
            <FooterAscendLink />
          </div>
        </div>
      </footer>
      <BackToTopButton />
      <RevealObserver />
    </>
  );
}
