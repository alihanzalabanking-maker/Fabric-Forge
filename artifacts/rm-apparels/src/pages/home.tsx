import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Layers,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { openWhatsApp } from "@/lib/whatsapp";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { value: "30", label: "Pieces MOQ" },
  { value: "14+", label: "Years of craft" },
  { value: "120+", label: "Brand partners" },
  { value: "20", label: "Day lead time" },
];

const featured = [
  {
    name: "Polo Shirts",
    slug: "polo-shirt",
    img: `${BASE}polo-shirt.png`,
    backImg: `${BASE}polo-shirt-worn.png`,
    tag: "Summer Essentials",
  },
  {
    name: "Heavyweight Hoodies",
    slug: "hoodie",
    img: `${BASE}hoodie.png`,
    backImg: `${BASE}hoodie-worn.png`,
    tag: "Winter Drop",
  },
  {
    name: "Dry Fit Performance Tee",
    slug: "dry-fit-tshirt",
    img: `${BASE}dry-fit-tshirt.png`,
    backImg: `${BASE}dry-fit-tshirt-worn.png`,
    tag: "Sports",
  },
  {
    name: "Varsity Jackets",
    slug: "varsity-jacket",
    img: `${BASE}varsity-jacket.png`,
    backImg: `${BASE}varsity-jacket-worn.png`,
    tag: "Outerwear",
  },
];

const collections = [
  {
    id: "summer",
    name: "Summer",
    img: `${BASE}terry-shorts.png`,
    desc: "Breathable cottons, lightweight terry, casual silhouettes.",
  },
  {
    id: "winter",
    name: "Winter",
    img: `${BASE}hoodie.png`,
    desc: "Heavyweight fleece, puffers, layered warmth.",
  },
  {
    id: "sports",
    name: "Sports",
    img: `${BASE}sports-tracksuit.png`,
    desc: "Technical fabrics, dry-fit mesh, high mobility.",
  },
];

const valueProps = [
  {
    icon: PackageCheck,
    title: "Low MOQ — 30 pieces",
    desc: "Built for emerging brands. Start with a capsule, scale into a season.",
  },
  {
    icon: Layers,
    title: "Imported & local fabrics",
    desc: "Premium Chinese mills for finish, durable Pakistani textiles for value.",
  },
  {
    icon: Award,
    title: "Custom branding",
    desc: "Custom labels, woven tags, embroidery, screen and DTG print.",
  },
  {
    icon: Truck,
    title: "Worldwide shipping",
    desc: "DDP and FOB shipping to the EU, UK, US, GCC and beyond.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero zoom-out + parallax effect — pronounced cinematic scale-down on both
  // image AND text as the user scrolls past the hero.
  const heroProgress = Math.min(scrollY / 600, 1);
  const heroScale = 1.25 - heroProgress * 0.4; // 1.25 -> 0.85
  const heroTranslate = heroProgress * -120;
  const heroFade = 1 - heroProgress * 0.55;
  const textScale = 1 - heroProgress * 0.45; // text shrinks to 55%
  const textTranslate = heroProgress * -80;
  const textFade = 1 - heroProgress * 0.7;

  return (
    <Layout>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden bg-secondary text-white min-h-[88vh] md:min-h-[92vh] flex flex-col"
      >
        <div className="absolute inset-0 will-change-transform">
          <img
            src={`${BASE}hero.png`}
            alt="RM Apparels editorial"
            className="w-full h-full object-cover object-[center_15%] transition-none"
            style={{
              transform: `translate3d(0, ${heroTranslate}px, 0) scale(${heroScale})`,
              opacity: heroFade,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/55 to-secondary/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent" />
        </div>

        <div
          className="container relative z-10 mx-auto px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-36 lg:pb-28 flex-1 flex flex-col justify-center will-change-transform"
          style={{
            transform: `translate3d(0, ${textTranslate}px, 0) scale(${textScale})`,
            transformOrigin: "left center",
            opacity: textFade,
          }}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70 mb-6 sm:mb-8">
              <span className="h-px w-8 sm:w-10 bg-primary" />
              <span>Est. Pakistan — Worldwide Manufacturing</span>
            </div>
            <h1 className="font-display font-semibold text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.95] tracking-tight mb-6 sm:mb-8">
              Apparel made for
              <br />
              <span className="italic font-light text-white/80">the brands</span>
              <br />
              that get noticed.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-8 sm:mb-10">
              RM Apparels is a full-service clothing manufacturer producing
              private-label sportswear, streetwear and basics for labels around
              the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/collections">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-medium tracking-wide bg-white text-secondary hover:bg-white/90 group"
                >
                  Explore the Lookbook
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
                </Button>
              </Link>
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-medium tracking-wide border-white/30 text-white bg-transparent hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-white/10 bg-secondary/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-3 md:px-6 py-6 md:py-8">
                <div className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/60 break-words leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY — client/partner logos. Replace these with your real client names/logos. */}
      <section aria-label="Trusted by" className="bg-background border-b">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 md:mb-8">
            Trusted by brands worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-14 lg:gap-x-20 opacity-80">
            <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-secondary">
              ATELIER 21
            </span>
            <span className="font-display text-xl md:text-2xl italic font-light tracking-wider text-secondary">
              Northwind &amp; Co.
            </span>
            <span className="font-display text-xl md:text-2xl font-semibold uppercase tracking-[0.25em] text-secondary">
              Maison&nbsp;Lyon
            </span>
            <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-secondary">
              KAIROS / SPORT
            </span>
            <span className="font-display text-xl md:text-2xl italic font-light text-secondary">
              Hemingway Goods
            </span>
            <span className="font-display text-xl md:text-2xl font-semibold uppercase tracking-[0.2em] text-secondary">
              Studio&nbsp;NORD
            </span>
          </div>
        </div>
      </section>

      {/* INTRO / EDITORIAL */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              The House of RM
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-secondary">
              A quiet,
              <br />
              precision-built
              <br />
              factory floor.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We started by stitching small runs for friends with brands. A
              decade later, we run a fully vertical line — knitting, dyeing,
              cutting, sewing, printing, and finishing — under one roof in
              Pakistan, with imported tooling and trained operators.
            </p>
            <p>
              Today we manufacture private-label collections for streetwear
              labels, performance brands and corporate clients across four
              continents. Same factory, same standards, every order.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-secondary font-medium border-b border-secondary/30 pb-1 hover:border-secondary transition-colors"
            >
              Inside our process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED LOOKBOOK */}
      <section id="collections" className="pb-24 md:pb-32 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Featured Pieces
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-secondary">
                Selected from the catalog.
              </h2>
            </div>
            <Link
              href="/collections"
              className="hidden md:inline-flex items-center text-secondary font-medium group"
            >
              View full catalog
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  {/* Front image */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
                  />
                  {/* Back image revealed on hover */}
                  <img
                    src={p.backImg}
                    alt={`${p.name} — back view`}
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                  />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-white/90 text-secondary px-2 py-1 z-10">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] bg-secondary/80 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    On Model
                  </div>
                </div>
                <div className="pt-4 flex items-start justify-between gap-2">
                  <h3 className="font-medium text-secondary text-sm md:text-base leading-snug">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-secondary shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link href="/collections">
              <Button variant="outline" className="w-full">
                View full catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24 md:py-32 bg-muted/40 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Three Seasons
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-secondary">
              Built for every season your brand sells in.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {collections.map((c) => (
              <Link
                key={c.id}
                href={`/collections/${c.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-secondary"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-3">
                    Collection
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                    {c.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-5">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/40 pb-1">
                    Open the collection
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Why Brands Choose Us
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-secondary leading-[1.05]">
                Manufacturing without the friction.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
              Most factories are built for volume. We are built for brands —
              short runs, custom branding, fast samples, and direct
              communication from sampling through shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="border-r border-b p-8 group hover:bg-muted/40 transition-colors"
              >
                <v.icon className="h-7 w-7 text-primary mb-6" />
                <h3 className="font-display text-xl font-semibold text-secondary mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section id="process" className="py-24 md:py-32 bg-secondary text-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/90 mb-4 text-white/60">
                From sketch to shipment
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                A four-step
                <br />
                bulk-order process.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg text-white/70 leading-relaxed self-end">
              Whether you arrive with a tech pack or a Pinterest board, we
              guide you from concept to a stocked warehouse — usually in under
              30 days.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Select Product", d: "Pick from our catalog or send your own designs." },
              { n: "02", t: "Choose Fabric", d: "Imported or local, with fabric samples on request." },
              { n: "03", t: "Customize", d: "Logos, labels, colors, packaging — fully white-label." },
              { n: "04", t: "Submit Inquiry", d: "Approve sample, confirm PO, and we get into production." },
            ].map((step) => (
              <li
                key={step.n}
                className="border-t border-white/15 pt-6"
              >
                <div className="font-display text-5xl font-semibold text-primary mb-4">
                  {step.n}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {step.t}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FABRIC TEASER */}
      <section id="fabrics" className="py-24 md:py-32 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Fabric Library
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-secondary leading-[1.05] mb-6">
              Imported finish, local value.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We stock and source over 40 active fabrics — from premium
              imported Chinese knits with a smooth retail-grade hand feel, to
              durable, cost-effective Pakistani textiles available with shorter
              lead times.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-primary pl-4">
                <Ruler className="h-5 w-5 text-primary mb-3" />
                <div className="font-display text-lg font-semibold text-secondary mb-1">
                  Imported (China)
                </div>
                <p className="text-sm text-muted-foreground">
                  Smooth finish, premium hand feel, retail-grade.
                </p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <ShieldCheck className="h-5 w-5 text-secondary mb-3" />
                <div className="font-display text-lg font-semibold text-secondary mb-1">
                  Local (Pakistan)
                </div>
                <p className="text-sm text-muted-foreground">
                  Durable, cost-effective, faster availability.
                </p>
              </div>
            </div>
            <Link href="/fabrics">
              <Button
                variant="outline"
                className="h-12 px-6 font-medium tracking-wide"
              >
                View Fabric Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={`${BASE}cotton-tracksuit.png`}
                alt="Fabric — cotton"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-muted overflow-hidden mt-8">
              <img
                src={`${BASE}sports-tracksuit.png`}
                alt="Fabric — performance knit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 bg-secondary text-white scroll-mt-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Start your line
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight mb-8">
            Tell us what you want to build.
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto">
            Send a tech pack, a sketch, or just a reference image. We reply
            with a quote and lead time within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base font-medium tracking-wide bg-white text-secondary hover:bg-white/90"
              >
                Request a Quote
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base font-medium tracking-wide border-white/30 text-white bg-transparent hover:bg-white/10"
              onClick={() =>
                openWhatsApp("Hi, I want to start a production run with RM Apparels.")
              }
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
