import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiFileText } from "react-icons/fi";

import "../index.css";
import { useLanguage } from "../contexts/LanguageContext";
import FeaturedNewsSection from "../components/FeaturedNewsSection";
import ServicesSection from "../components/ServicesSection";

import image2 from "../assets/homepage/imageai2.jpeg";
import image3 from "../assets/homepage/imageai3.jpeg";
import image4 from "../assets/homepage/imageai4.jpeg";
import image5 from "../assets/homepage/image 1.jpeg";
import image7 from "../assets/homepage/imageai7.jpeg";
import image8 from "../assets/homepage/image1.jpeg";
import image9 from "../assets/homepage/image3.jpeg";
import image10 from "../assets/homepage/image4.jpeg";

const images = [image7, image8, image5, image3, image10, image4, image9, image2];

/* ---------- Reusable pieces ---------- */

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <Reveal>
    <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-ink md:text-3xl">
      {children}
    </h2>
    <div className="mx-auto mb-10 mt-3 h-1 w-16 rounded-full bg-primary" />
  </Reveal>
);

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const officers = (t) => [
  {
    title: t("minister"),
    name: t("ministerName"),
    image: require("../assets/officers/minister.jpg"),
  },
  {
    title: t("deputyMinister"),
    name: t("deputyMinisterName"),
    image: require("../assets/officers/deputyminister.jpeg"),
  },
  {
    title: t("secretary"),
    name: t("secretaryName"),
    image: require("../assets/officers/secetry.jpg"),
  },
  {
    title: t("directorGeneral"),
    name: t("directorGeneralName"),
    image: require("../assets/officers/H.M.M.U.B.herath.jpeg"),
  },
];

const govLogo = require("../assets/gov_logo.jpeg");

/* ---------- Page ---------- */

const Home = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const servicesData = {
    [t("agriculture")]: [
      { label: t("coconutRelatedProduct"), path: "/services/agriculture/coconut" },
      { label: t("kithulRelatedProduct"), path: "/services/agriculture/kithul" },
      { label: t("palmRelatedProduct"), path: "/services/agriculture/palm" },
      { label: t("spicesRelatedProduct"), path: "/services/agriculture/spices" },
      { label: t("flowersOrnamentalPlants"), path: "/services/agriculture/flowers" },
      { label: t("seedProduct"), path: "/services/agriculture/seed" },
      { label: t("fruitRelatedProduct"), path: "/services/agriculture/fruits" },
      { label: t("vegetableValueAddition"), path: "/services/agriculture/vegetable" },
      { label: t("mushroomProduct"), path: "/services/agriculture/mushroom" },
      { label: t("teaProduct"), path: "/services/agriculture/tea" },
      { label: t("bulathProduct"), path: "/services/agriculture/bulath" },
      { label: t("cinnamonProduct"), path: "/services/agriculture/cinnamon" },
    ],
    [t("industries")]: [
      { label: t("clothRelatedProduct"), path: "/services/industries/cloth" },
      { label: t("clayRelatedProduct"), path: "/services/industries/clay" },
      { label: t("woodenItems"), path: "/services/industries/wooden" },
      { label: t("sweetOrganicFoods"), path: "/services/industries/sweet&foods" },
      { label: t("ironGoldProduct"), path: "/services/industries/iron&gold" },
    ],
    [t("fisheries")]: [
      { label: t("umbalakadaDriedFish"), path: "/services/fisheries/umbalakada&driesfish" },
      { label: t("ornamentalFish"), path: "/services/fisheries/ornamentalfish" },
    ],
    [t("animalHusbandry")]: [
      { label: t("dairyProduct"), path: "/services/AnimalHusbandry/dairyproduct" },
      { label: t("egg"), path: "/services/AnimalHusbandry/eggs" },
      { label: t("beeHoney"), path: "/services/AnimalHusbandry/beehoney" },
    ],
    [t("infrastructure")]: [
      { label: t("roadDevelopments"), path: "/services/village/roaddevelopment" },
      { label: t("sanitaryFacilities"), path: "/services/village/sanitaryfacilities" },
      { label: t("tourismIndustry"), path: "/services/village/tourism" },
    ],
  };

  const downloads = [
    {
      title: t("latestCirculars"),
      files: [
        { name: "Prajashakthi Circular-Sinhala", path: "/downloads/circular/Prajashakthi Circular-Sinhala.pdf" },
        { name: "Prajashakthi Circular-Tamil", path: "/downloads/circular/Prajashakthi Circular-Tamil.pdf" },
        { name: "Budget Circular 2025-Sinhala", path: "/downloads/circular/Budget Circular No 08_2025 S.pdf" },
      ],
      link: "/Download#Circulars",
    },
    {
      title: t("latestGuidelines"),
      files: [
        { name: "Prajashakthi Guidline - Sinhala", path: "/downloads/guidline/Prajashakthi Guidline - Sinhala.pdf" },
        { name: "Prajashakthi Guidline - Tamil", path: "/downloads/guidline/Prajashakthi Guidline  - Tamil.pdf" },
      ],
      link: "/Download#Guidelines",
    },
    {
      title: t("latestFormats"),
      files: [
        { name: "Livelihood Project Proposal Format - English", path: "/downloads/Livelihood Project Proposal Format_En.pdf" },
        { name: "Livelihood Project Proposal Format - Sinhala", path: "/downloads/Livelihood Project Proposal Format_Si.pdf" },
      ],
      link: "/Download#Formats",
    },
  ];

  const organizations = [
    { name: t("ministryOfRuralDevelopment"), link: "https://www.srilankabusiness.com/" },
    { name: t("samurdi"), link: "http://www.samurdhi.gov.lk/" },
    { name: t("ruralDevResearchInstitute"), link: "https://stateminsamurdhi.gov.lk/web/index.php?option=com_content&view=article&id=48&Itemid=184&lang=en" },
    { name: t("ministryPublicAdmin"), link: "https://pubad.gov.lk/" },
    { name: t("ministryHomeAffairs"), link: "https://www.moha.gov.lk/" },
    { name: t("ministryFinance"), link: "https://www.treasury.gov.lk/" },
    { name: t("exportDevBoard"), link: "https://www.srilankabusiness.com/" },
    { name: t("nationalSecretariat"), link: "https://www.nspd.gov.lk/" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-page text-ink">
      {/* ===== HERO SLIDER ===== */}
      <main className="group relative h-[300px] w-full sm:h-[420px] md:h-[520px]">
        <div className="absolute inset-0 overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white opacity-0 backdrop-blur-md transition hover:bg-white/40 group-hover:opacity-100"
        >
          <FiChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white opacity-0 backdrop-blur-md transition hover:bg-white/40 group-hover:opacity-100"
        >
          <FiChevronRight size={28} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </main>

      {/* ===== ABOUT: VISION & MISSION ===== */}
      <section className="bg-page px-4 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{t("aboutMinistry")}</SectionTitle>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal delay={150}>
              <div className="h-full rounded-2xl border border-line border-t-4 border-t-primary bg-surface p-8 text-center shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-primary">{t("vision")}</h3>
                <p className="text-lg leading-relaxed text-muted">{t("visionText")}</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-line border-t-4 border-t-primary bg-surface p-8 text-center shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-primary">{t("mission")}</h3>
                <p className="text-lg leading-relaxed text-muted">{t("missionText")}</p>
                <a
                  href="/AboutUs"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  {t("readMore")} →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Officers */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {officers(t).map((officer, index) => (
              <Reveal key={index} delay={index * 120}>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={officer.image}
                    alt={officer.title}
                    className="h-72 w-full object-cover object-top"
                  />
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {officer.title}
                    </p>
                    <p className="mt-2 text-lg font-bold text-ink">{officer.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Reveal delay={400}>
              <a
                href="/AboutUs#services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-surface transition hover:bg-primary-dark"
              >
                {t("officerDetail")} <span>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DOWNLOADS ===== */}
      <section className="bg-surface px-6 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{t("downloadTitle")}</SectionTitle>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {downloads.map((item, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="group relative min-h-[250px] rounded-2xl border border-line bg-soft p-8 shadow-sm transition hover:shadow-lg">
                  <h3 className="mb-4 border-b-2 border-primary pb-2 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.files.map((file, i) => (
                      <li key={i}>
                        <a
                          href={file.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-primary hover:underline"
                        >
                          <FiFileText className="mt-1 shrink-0" />
                          <span>{file.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={item.link}
                    className="absolute bottom-4 right-4 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100"
                  >
                    {t("viewAll")} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS & SERVICES (your existing components) ===== */}
      <FeaturedNewsSection />
      <ServicesSection />

      {/* ===== PROJECTS ===== */}
      <section className="bg-page px-6 py-16 md:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
          <div className="text-left md:w-1/2">
            <Reveal>
              <h2 className="mb-4 text-4xl font-bold uppercase text-ink">{t("projects")}</h2>
              <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
              <p className="text-lg leading-relaxed text-muted">{t("projectsDescription")}</p>
            </Reveal>
          </div>

          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {Object.keys(servicesData).map((service, index) => (
                <Reveal key={service} delay={index * 80}>
                  <button
                    onClick={() =>
                      setActiveService(activeService === service ? null : service)
                    }
                    className={`flex w-full items-center justify-between rounded-xl border px-5 py-3 font-semibold shadow-sm transition ${
                      activeService === service
                        ? "border-primary bg-soft text-ink"
                        : "border-line bg-surface text-ink hover:border-primary hover:bg-soft"
                    }`}
                  >
                    <span>{service}</span>
                    <span className="text-lg text-primary">
                      {activeService === service ? "↑" : "↓"}
                    </span>
                  </button>

                  {activeService === service && (
                    <div className="mt-2 grid grid-cols-1 gap-2 rounded-xl border border-primary bg-surface p-4 sm:grid-cols-2">
                      {servicesData[service].map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => navigate(subItem.path)}
                          className="rounded-lg bg-soft px-3 py-2 text-sm font-medium text-ink transition hover:bg-primary hover:text-surface"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RTI ===== */}
      <section id="rti" className="bg-surface px-6 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>{t("rti.title")}</SectionTitle>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-line border-t-4 border-t-primary bg-page p-6 shadow-sm transition hover:shadow-md"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {t("rti.designatedOfficer")}
              </h3>
              <p className="font-medium text-ink">{t("rti.secretaryTitle")}</p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.addressLine1")}
                <br />
                {t("rti.addressLine2")}
              </p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.phone")} +94 112877122 | +94 112887831
              </p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.email")}{" "}
                <a href="mailto:sisiku75@gmail.com" className="text-primary hover:underline">
                  sisiku75@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-line border-t-4 border-t-primary bg-page p-6 shadow-sm transition hover:shadow-md"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {t("rti.informationOfficer")}
              </h3>
              <p className="font-medium text-ink">{t("rti.officerName")}</p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.addressLine1")}
                <br />
                {t("rti.addressLine2")}
              </p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.phone")} +94 1128887831 | +94 112887831
              </p>
              <p className="mt-2 text-sm text-muted">
                {t("rti.email")}{" "}
                <a
                  href="mailto:dir.rdb.mrsc@sltnet.lk"
                  className="break-all text-primary hover:underline"
                >
                  dir.rdb.mrsc@sltnet.lk
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RELATED ORGANIZATIONS ===== */}
      <section className="bg-soft px-6 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{t("relatedOrganizations")}</SectionTitle>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {organizations.map((org, index) => (
              <Reveal key={index} delay={index * 80}>
                <a
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-center rounded-2xl border border-line border-b-4 border-b-primary bg-surface p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src={govLogo}
                    alt={org.name}
                    className="mb-4 h-20 w-20 object-contain transition group-hover:scale-105"
                  />
                  <h3 className="text-sm font-semibold text-ink group-hover:text-primary">
                    {org.name}
                  </h3>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;