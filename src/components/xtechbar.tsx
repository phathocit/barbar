"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Check,
  Pause,
  Play,
  ArrowUp,
} from "lucide-react";
import { cocktails, gallery, navigation, site } from "@/data/xtechbar";

function Modal({
  open,
  close,
  title,
  children,
  className = "",
  onArrow,
}: {
  open: boolean;
  close: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  onArrow?: (direction: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (open) {
      setMounted(true);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        if (dialog && !dialog.open) {
          dialog.showModal();
        }
        setIsOpen(true);
      }, 20);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = prevOverflow;
      };
    } else if (mounted) {
      setIsOpen(false);
      const timer = setTimeout(() => {
        if (dialog && dialog.open) {
          dialog.close();
        }
        setMounted(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open, mounted]);

  const handleRequestClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      close();
    }, 500);
  };

  if (!open && !mounted) return null;

  return (
    <dialog
      ref={ref}
      aria-label={title}
      className={`modal ${className} ${isOpen ? "modal-open" : "modal-closing"}`}
      onCancel={(e) => {
        e.preventDefault();
        handleRequestClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleRequestClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onArrow?.(1);
        if (e.key === "ArrowLeft") onArrow?.(-1);
      }}
    >
      <div className="modal-inner">
        <button
          type="button"
          className="icon-button modal-close"
          aria-label="Close"
          onClick={handleRequestClose}
        >
          <X size={23} />
        </button>
        {children}
      </div>
    </dialog>
  );
}

export function ChampagneSanctuaryToast() {
  return (
    <span className="toast-stage" aria-hidden="true">
      {/* Warm Ambient Backlight Aura */}
      <span className="toast-aura-glow" />

      {/* Floating Champagne Effervescent Micro-Stardust */}
      <span className="toast-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
        <span className="particle p6" />
        <span className="particle p7" />
        <span className="particle p8" />
      </span>

      {/* The Central Holographic Glass Pair */}
      <svg
        className="toast-duo-svg"
        viewBox="0 0 54 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sanctuary-gold-liquid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae4c3" />
            <stop offset="40%" stopColor="#e8b975" />
            <stop offset="100%" stopColor="#b88338" />
          </linearGradient>
          <linearGradient id="sanctuary-crystal-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#fae4c3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c7ac88" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="sanctuary-center-spark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffecc7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c7ac88" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Left Flute */}
        <g className="duo-flute duo-flute-left">
          <path
            className="duo-liquid"
            d="M16.5 7.5 C16.5 11.5, 17.8 15.5, 19.2 16.2 C20.6 15.5, 21.9 11.5, 21.9 7.5 Z"
            fill="url(#sanctuary-gold-liquid)"
          />
          <ellipse cx="19.2" cy="7.5" rx="2.7" ry="0.65" fill="#fff5e3" opacity="0.9" />
          <circle className="bubble bubble-1" cx="19.2" cy="13.5" r="0.5" fill="#ffffff" />
          <circle className="bubble bubble-2" cx="18.2" cy="10.5" r="0.4" fill="#fff8ec" />
          <circle className="bubble bubble-3" cx="20.2" cy="9" r="0.45" fill="#ffffff" />

          <path
            className="duo-stroke"
            d="M16 4.5 C16 11, 17.5 16.5, 19.2 16.8 C20.9 16.5, 22.4 11, 22.4 4.5"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <ellipse
            cx="19.2"
            cy="4.5"
            rx="3.2"
            ry="0.8"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            fill="none"
          />
          <path
            d="M19.2 16.8 V26.5 M14 26.5 H24.4"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <path
            d="M17 5.8 C17 9.5, 17.8 13, 18.6 14.8"
            stroke="#ffffff"
            strokeWidth="0.65"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Right Flute */}
        <g className="duo-flute duo-flute-right">
          <path
            className="duo-liquid"
            d="M32.1 7.5 C32.1 11.5, 33.4 15.5, 34.8 16.2 C36.2 15.5, 37.5 11.5, 37.5 7.5 Z"
            fill="url(#sanctuary-gold-liquid)"
          />
          <ellipse cx="34.8" cy="7.5" rx="2.7" ry="0.65" fill="#fff5e3" opacity="0.9" />
          <circle className="bubble bubble-1" cx="34.8" cy="13.5" r="0.5" fill="#ffffff" />
          <circle className="bubble bubble-2" cx="35.8" cy="10.5" r="0.4" fill="#fff8ec" />
          <circle className="bubble bubble-3" cx="33.8" cy="9" r="0.45" fill="#ffffff" />

          <path
            className="duo-stroke"
            d="M31.6 4.5 C31.6 11, 33.1 16.5, 34.8 16.8 C36.5 16.5, 38 11, 38 4.5"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <ellipse
            cx="34.8"
            cy="4.5"
            rx="3.2"
            ry="0.8"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            fill="none"
          />
          <path
            d="M34.8 16.8 V26.5 M29.6 26.5 H40"
            stroke="url(#sanctuary-crystal-sheen)"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <path
            d="M37 5.8 C37 9.5, 36.2 13, 35.4 14.8"
            stroke="#ffffff"
            strokeWidth="0.65"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Center Touch Point Sparkle */}
        <g className="duo-center-glint">
          <circle cx="27" cy="5.8" r="3.5" fill="url(#sanctuary-center-spark)" />
          <path
            d="M27 1.8 C27 4, 25 5.8, 22.5 5.8 C25 5.8, 27 7.6, 27 9.8 C27 7.6, 29 5.8, 31.5 5.8 C29 5.8, 27 4, 27 1.8 Z"
            fill="#ffffff"
          />
          <circle cx="27" cy="5.8" r="0.6" fill="#ffffff" />
        </g>
      </svg>
    </span>
  );
}

export function BrandWordmark({
  className = "",
  as = "a",
  ...props
}: {
  className?: string;
  as?: "a" | "span";
  [key: string]: any;
}) {
  const Comp = as as any;
  return (
    <Comp className={`wordmark ${className}`} {...props}>
      {/* Ambient Sanctuary Glow & Stardust */}
      <span className="wordmark-spotlight" aria-hidden="true">
        <span className="spotlight-pool" />
        <span className="spotlight-mote m1" />
        <span className="spotlight-mote m2" />
        <span className="spotlight-mote m3" />
      </span>

      {/* Origin Apex Prism Star */}
      <span className="wordmark-star" aria-hidden="true">✦</span>

      {/* Illuminated Primary Title */}
      <span className="wordmark-title">XTECHBAR</span>

      {/* Refined Philosophy Subtitle */}
      <span className="wordmark-sub">
        <span className="sub-sparkle left" aria-hidden="true">✦</span>
        <span className="sub-label">BAR & LOUNGE</span>
        <span className="sub-sparkle right" aria-hidden="true">✦</span>
      </span>

      {/* Illuminated Stage Horizon */}
      <span className="wordmark-horizon" aria-hidden="true" />
    </Comp>
  );
}

export function ToastButtonContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="toast-text-label">{children}</span>
      <ChampagneSanctuaryToast />
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner shell">
          <BrandWordmark
            href="#"
            aria-label="XTECHBAR — Return to top"
          />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-book" href="#reservations">
              <ToastButtonContent>RESERVE A TABLE</ToastButtonContent>
            </a>
            <button
              type="button"
              className="icon-button mobile-menu-trigger"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      <Modal
        open={open}
        close={() => setOpen(false)}
        title="Navigation Menu"
        className="menu-modal"
      >
        <BrandWordmark as="span" />
        <nav aria-label="Mobile navigation">
          {navigation.map((item, i) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a href="#reservations" onClick={() => setOpen(false)}>
            <span>05</span>Reserve A Table
          </a>
        </nav>
        <p className="menu-tagline">The art of a beautiful evening.</p>
      </Modal>
    </>
  );
}

export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.current?.pause();
      else video.current?.play().catch(() => undefined);
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  return (
    <>
      <Image
        src="/images/hero.webp"
        alt="XTECHBAR luxury sanctuary lounge concept with glowing amber onyx bar and velvet seating"
        fill
        sizes="100vw"
        priority
        className="hero-image"
      />
      {site.heroVideo && !failed && (
        <>
          <video
            ref={video}
            className="hero-video"
            poster="/images/hero.webp"
            src={site.heroVideo}
            loop
            muted
            playsInline
            preload="none"
            onError={() => setFailed(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <button
            type="button"
            className="video-control icon-button"
            aria-label={playing ? "Pause ambience film" : "Play ambience film"}
            onClick={() => {
              if (playing) video.current?.pause();
              else video.current?.play().catch(() => setFailed(true));
            }}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </>
      )}
    </>
  );
}

export function CocktailExplorer() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = cocktails[active];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  function selectTab(index: number) {
    setActive(index);
    tabRefs.current[index]?.focus();
  }
  return (
    <>
      <div className="cocktail-grid">
        <div className="cocktail-photo" data-reveal>
          <Image
            key={selected.image}
            src={selected.image}
            alt={`${selected.name} — artisanal cocktail concept photography`}
            fill
            sizes="(max-width: 760px) 92vw, 45vw"
            className="object-cover cocktail-enter"
          />
        </div>
        <div className="cocktail-copy" data-reveal>
          <p className="eyebrow">HAUTE MIXOLOGY · RARE SPIRITS</p>
          <h2>
            A little art.
            <br />
            <em>In every glass.</em>
          </h2>
          <div
            className="cocktail-tabs"
            role="tablist"
            aria-label="Select signature elixir"
          >
            {cocktails.map((item, i) => (
              <button
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`cocktail-tab-${i}`}
                key={item.name}
                role="tab"
                aria-selected={active === i}
                aria-controls="cocktail-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    selectTab((i + 1) % cocktails.length);
                  }
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    selectTab((i + cocktails.length - 1) % cocktails.length);
                  }
                  if (e.key === "Home") {
                    e.preventDefault();
                    selectTab(0);
                  }
                  if (e.key === "End") {
                    e.preventDefault();
                    selectTab(cocktails.length - 1);
                  }
                }}
              >
                0{i + 1}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id="cocktail-panel"
            aria-labelledby={`cocktail-tab-${active}`}
            className="cocktail-panel"
            tabIndex={0}
          >
            <h3>{selected.name}</h3>
            <p className="tasting-note">{selected.note}</p>
            <p>{selected.description}</p>
            <span className="ingredients">{selected.ingredients}</span>
          </div>
          <button
            type="button"
            className="text-link gold-link"
            onClick={() => setMenuOpen(true)}
          >
            EXPLORE COCKTAILS
          </button>
        </div>
      </div>
      <Modal
        open={menuOpen}
        close={() => setMenuOpen(false)}
        title="Curated Cocktail Collection"
        className="cocktail-modal"
      >
        <p className="eyebrow">XTECHBAR · CURATED ALCHEMY</p>
        <h2>
          Choose your <em>mood.</em>
        </h2>
        <p className="modal-subtitle">
          An illustrative preview — the definitive seasonal collection will be
          presented upon your arrival.
        </p>
        <div className="menu-drinks">
          {cocktails.map((drink) => (
            <article key={drink.name}>
              <div className="menu-drink-photo">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  sizes="(max-width: 600px) 75vw, 220px"
                  className="object-cover"
                />
              </div>
              <h3>{drink.name}</h3>
              <p>{drink.note}</p>
              <span>{drink.ingredients}</span>
            </article>
          ))}
        </div>
        <a
          className="button button-ivory"
          href="#reservations"
          onClick={() => setMenuOpen(false)}
        >
          <ToastButtonContent>RESERVE A TABLE</ToastButtonContent>
        </a>
      </Modal>
    </>
  );
}

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  function change(direction: number) {
    setSelected(
      (current) =>
        ((current ?? 0) + direction + gallery.length) % gallery.length,
    );
  }

  return (
    <>
      <div
        className="moments-editorial-flow"
        role="region"
        aria-label="Visual Sanctuary Exhibition"
      >
        {gallery.map((item, i) => (
          <article
            key={item.src}
            className={`editorial-card editorial-card-${i}`}
            data-reveal
          >
            <button
              type="button"
              className="editorial-card-btn"
              onClick={() => setSelected(i)}
              aria-label={`View photograph: ${item.title}`}
            >
              <div className="editorial-photo-container">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 92vw, (max-width: 1200px) 50vw, 720px"
                  className="editorial-img object-cover"
                />
                <div className="editorial-photo-shade" />
                <span className="editorial-num">0{i + 1}</span>
                <span className="editorial-expand-badge">
                  <span>✦</span>
                  <span>ENLARGE</span>
                </span>
              </div>
              <div className="editorial-meta">
                <span className="editorial-category">{item.category}</span>
                <h3 className="editorial-title">{item.title}</h3>
                <p className="editorial-desc">{item.alt}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      <Modal
        open={selected !== null}
        close={() => setSelected(null)}
        title="XTECHBAR Visual Sanctuary — Concept Preview"
        className="lightbox"
        onArrow={change}
      >
        {selected !== null && (
          <>
            <div className="lightbox-photo">
              <Image
                src={gallery[selected].src}
                alt={gallery[selected].alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>
            <div className="lightbox-toolbar">
              <button
                type="button"
                className="icon-button"
                aria-label="Previous photograph"
                onClick={() => change(-1)}
              >
                <ChevronLeft />
              </button>
              <p aria-live="polite">
                {selected + 1} / {gallery.length}{" "}
                <span>{gallery[selected].title}</span>
              </p>
              <button
                type="button"
                className="icon-button"
                aria-label="Next photograph"
                onClick={() => change(1)}
              >
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

type BookingValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  note: string;
};
type BookingErrors = Partial<Record<keyof BookingValues, string>>;
function todayInVietnam() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
export function Reservation() {
  const [errors, setErrors] = useState<BookingErrors>({});
  const [preview, setPreview] = useState<BookingValues | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(
      ["name", "phone", "date", "time", "guests", "note"].map((key) => [
        key,
        String(data.get(key) ?? "").trim(),
      ]),
    ) as BookingValues;
    const nextErrors: BookingErrors = {};
    if (values.name.length < 2)
      nextErrors.name = "Please provide your full name (minimum 2 characters).";
    if (
      !/^\+?[\d\s().-]{8,22}$/.test(values.phone) ||
      values.phone.replace(/\D/g, "").length < 8 ||
      values.phone.replace(/\D/g, "").length > 15
    )
      nextErrors.phone = "Please enter a valid telephone number.";
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(values.date) ||
      values.date < todayInVietnam()
    )
      nextErrors.date = "Please select today or a future date.";
    if (!values.time) nextErrors.time = "Please select a scheduled hour.";
    if (!values.guests) nextErrors.guests = "Please select the party size.";
    if (
      values.date &&
      values.time &&
      new Date(`${values.date}T${values.time}:00+07:00`).getTime() <= Date.now()
    )
      nextErrors.time =
        "The selected hour has passed. Please select a future time.";
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      requestAnimationFrame(() =>
        (form.elements.namedItem(firstError) as HTMLElement)?.focus(),
      );
      return;
    }
    setPreview(values);
  }
  const error = (name: keyof BookingValues) =>
    errors[name] ? (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    ) : null;
  return (
    <>
      <form
        className="reservation-form"
        data-reveal
        noValidate
        onSubmit={submit}
        aria-label="Table reservation request"
      >
        <div className="form-heading">
          <span>TABLE RESERVATION</span>
          {/* <span className="demo-badge">DEMO PREVIEW</span> */}
        </div>
        <p className="form-intro">Entrust us with the evening you envision.</p>
        <div className="form-grid">
          <label>
            Full Name{" "}
            <input
              name="name"
              autoComplete="name"
              placeholder="Your distinguished name"
              maxLength={100}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {error("name")}
          </label>
          <label>
            Telephone Number{" "}
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Contact telephone number"
              maxLength={25}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {error("phone")}
          </label>
          <label>
            Preferred Date{" "}
            <input
              name="date"
              type="date"
              required
              onFocus={(event) => {
                event.currentTarget.min = todayInVietnam();
              }}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {error("date")}
          </label>
          <label>
            Preferred Hour{" "}
            <select
              name="time"
              defaultValue=""
              required
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? "time-error" : undefined}
            >
              <option value="" disabled>
                Select preferred hour
              </option>
              {[
                "17:00",
                "17:30",
                "18:00",
                "18:30",
                "19:00",
                "19:30",
                "20:00",
                "20:30",
                "21:00",
                "21:30",
                "22:00",
                "22:30",
                "23:00",
              ].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            {error("time")}
          </label>
          <label className="full-field">
            Party Size{" "}
            <select
              name="guests"
              defaultValue=""
              required
              aria-invalid={!!errors.guests}
              aria-describedby={errors.guests ? "guests-error" : undefined}
            >
              <option value="" disabled>
                Select party size
              </option>
              {[
                "1 Guest",
                "2 Guests",
                "3 Guests",
                "4 Guests",
                "5 Guests",
                "6 Guests",
                "7–10 Guests",
                "Private Salon (10+ Guests)",
              ].map((count) => (
                <option key={count}>{count}</option>
              ))}
            </select>
            {error("guests")}
          </label>
          <label className="full-field">
            Special Requests <span className="optional">(Optional)</span>
            <textarea
              name="note"
              rows={2}
              maxLength={500}
              placeholder="An anniversary, bespoke seating preference, or dietary nuances..."
            />
          </label>
        </div>
        <div className="sr-only" aria-live="polite">
          {Object.keys(errors).length > 0
            ? `There are ${Object.keys(errors).length} fields that require attention.`
            : ""}
        </div>
        <button type="submit" className="button form-submit">
          <ToastButtonContent>PREVIEW RESERVATION</ToastButtonContent>
        </button>
        <p className="demo-note">
          Interactive concept demonstration. No data is stored or transmitted;
          your reservation is not yet finalized.
        </p>
      </form>
      <Modal
        open={preview !== null}
        close={() => setPreview(null)}
        title="Reservation Inquiry Preview"
        className="booking-modal"
      >
        {preview && (
          <>
            <div className="preview-check">
              <Check size={25} />
            </div>
            {/* <p className="eyebrow">DEMO · PREVIEW ONLY</p> */}
            <h2>
              Your evening,
              <br />
              <em>your way.</em>
            </h2>
            <p className="modal-subtitle">
              Details validated. This is an interactive concept preview; no
              reservation has been transmitted to XTECHBAR.
            </p>
            <dl className="booking-summary">
              <div>
                <dt>Guest</dt>
                <dd>{preview.name}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>{preview.phone}</dd>
              </div>
              <div>
                <dt>Date & Hour</dt>
                <dd>
                  {preview.date.split("-").reverse().join("/")} · {preview.time}
                </dd>
              </div>
              <div>
                <dt>Party Size</dt>
                <dd>{preview.guests}</dd>
              </div>
              {preview.note && (
                <div>
                  <dt>Special Requests</dt>
                  <dd>{preview.note}</dd>
                </div>
              )}
            </dl>
            <button
              type="button"
              className="button button-ivory"
              onClick={() => setPreview(null)}
            >
              RETURN TO EDIT
            </button>
          </>
        )}
      </Modal>
    </>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight - 30) {
        el.classList.add("reveal-waiting");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter(
            (e) =>
              e.isIntersecting &&
              e.target.classList.contains("reveal-waiting"),
          )
          .map((e) => e.target as HTMLElement);

        if (intersecting.length === 0) return;

        // Sort intersecting elements by DOM order for natural top-to-bottom / left-to-right cascade
        intersecting.sort((a, b) =>
          a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1,
        );

        intersecting.forEach((el, idx) => {
          const customDelay = el.getAttribute("data-reveal-delay");
          const staggerDelay =
            customDelay !== null ? `${customDelay}ms` : `${idx * 140}ms`;
          el.style.setProperty("--reveal-delay", staggerDelay);

          requestAnimationFrame(() => {
            el.classList.remove("reveal-waiting");
          });
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    elements.forEach((el) => {
      if (el.classList.contains("reveal-waiting")) {
        observer.observe(el);
      }
    });

    const reduce = () => {
      if (media.matches) {
        elements.forEach((el) => {
          el.classList.remove("reveal-waiting");
          el.style.removeProperty("--reveal-delay");
        });
      }
    };

    media.addEventListener("change", reduce);
    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove("reveal-waiting");
        el.style.removeProperty("--reveal-delay");
      });
      media.removeEventListener("change", reduce);
    };
  }, []);

  return null;
}

function BrandContent() {
  return (
    <div className="entrance-brand">
      <div className="brand-crest">
        <span className="crest-line" />
        <span className="crest-star">✦</span>
        <span className="crest-line" />
      </div>
      <span className="brand-eyebrow">LUXURY BAR & LOUNGE</span>
      <h1 className="brand-wordmark">XTECHBAR</h1>
      <p className="brand-tagline">
        The art of a <em>beautiful evening.</em>
      </p>
      <div className="brand-divider">
        <span className="brand-dot" />
      </div>
    </div>
  );
}

export function EntranceDoor() {
  const [mounted, setMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Respect reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsRemoved(true);
      return;
    }

    document.body.classList.add("entrance-active");

    // Auto open after serene hold duration on load (~1.8s)
    const openTimer = setTimeout(() => {
      setIsOpening(true);
      document.body.classList.add("entrance-revealing");
    }, 1800);

    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
      document.body.classList.remove("entrance-active", "entrance-revealing");
      document.body.classList.add("entrance-complete");
    }, 3550);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("entrance-active", "entrance-revealing");
    };
  }, []);

  useEffect(() => {
    const handleReplay = () => {
      setIsRemoved(false);
      setIsOpening(false);
      document.body.classList.remove("entrance-complete");
      document.body.classList.add("entrance-active");
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        setIsOpening(true);
        document.body.classList.add("entrance-revealing");
      }, 1800);

      setTimeout(() => {
        setIsRemoved(true);
        document.body.classList.remove("entrance-active", "entrance-revealing");
        document.body.classList.add("entrance-complete");
      }, 3550);
    };

    window.addEventListener("xtechbar:replay_entrance", handleReplay);
    return () => {
      window.removeEventListener("xtechbar:replay_entrance", handleReplay);
    };
  }, []);

  if (!mounted || isRemoved) return null;

  return (
    <div
      className={`entrance-curtain ${isOpening ? "is-opening" : ""}`}
      aria-hidden="true"
      onClick={() => setIsOpening(true)}
    >
      {/* Left Door carrying Left Half of Brand */}
      <div className="entrance-shutter shutter-left">
        <div className="shutter-inner shutter-inner-left">
          <BrandContent />
        </div>
      </div>

      {/* Right Door carrying Right Half of Brand */}
      <div className="entrance-shutter shutter-right">
        <div className="shutter-inner shutter-inner-right">
          <BrandContent />
        </div>
      </div>
    </div>
  );
}

export function ReplayEntranceButton() {
  return (
    <button
      type="button"
      className="footer-replay-btn"
      onClick={() => {
        window.dispatchEvent(new Event("xtechbar:replay_entrance"));
      }}
    >
      REOPEN PORTAL ✦
    </button>
  );
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      setVisible(scrollTop > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <button
      type="button"
      className={`floating-back-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Return to top of page"
    >
      <svg
        className="progress-ring"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="gold-progress-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fceddb" />
            <stop offset="70%" stopColor="#dfc299" />
            <stop offset="100%" stopColor="#a37944" />
          </linearGradient>
        </defs>
        <circle
          className="progress-ring-bg"
          cx="23"
          cy="23"
          r={radius}
          strokeWidth="1.2"
        />
        <circle
          className="progress-ring-fill"
          cx="23"
          cy="23"
          r={radius}
          strokeWidth="1.6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="top-arrow-icon">
        <ArrowUp size={15} strokeWidth={1.75} />
      </span>
      <span className="top-glow-aura" aria-hidden="true" />
    </button>
  );
}

export function FooterAscendLink() {
  return (
    <button
      type="button"
      className="footer-ascend-link"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Return to top of page"
    >
      <span>ASCEND TO TOP</span>
      <span className="footer-ascend-arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
