import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";

const Header = ({
  accessibilitySettings,
  setAccessibilitySettings,
  showAccessibilityBox,
  setShowAccessibilityBox,
  accessibilityBoxRef,
}) => {
  const { language, changeLanguage, t } = useLanguage();

  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), path: "/" },
    {
      label: t("aboutUs"),
      path: "/AboutUs",
      subItems: [
        { label: t("introduction"), anchor: "#introduction"},
        { label: t("overview"), anchor: "#overview"},
        { label: t("officerDetails"), anchor: "#services"},
      ],
    },
    {
      label: t("download"),
      path: "/Download",
      subItems: [
        { label: t("circulars"), anchor: "#Circulars" },
        { label: t("guidelines"), anchor: "#Guidelines" },
        { label: t("formats"), anchor: "#Formats"},
      ],
    },
    { label: t("news"), path: "/News" },
    {
      label: t("services"),
      mainCategories: [
        {
          label: t("agriculture"),
          icon: "🌾",
          subItems: [
            { label: t("coconutRelatedProduct"), path: "/services/agriculture/coconut"},
            { label: t("kithulRelatedProduct"), path: "/services/agriculture/kithul", icon: "🌴" },
            { label: t("palmRelatedProduct"), path: "/services/agriculture/palm", icon: "🌴" },
            { label: t("spicesRelatedProduct"), path: "/services/agriculture/spices", icon: "🌶️" },
            { label: t("flowersOrnamentalPlants"), path: "/services/agriculture/flowers", icon: "🌺" },
            { label: t("seedProduct"), path: "/services/agriculture/seed", icon: "🌱" },
            { label: t("fruitRelatedProduct"), path: "/services/agriculture/fruits", icon: "🍎" },
            { label: t("vegetableValueAddition"), path: "/services/agriculture/vegetable", icon: "🥕" },
            { label: t("mushroomProduct"), path: "/services/agriculture/mushroom", icon: "🍄" },
            { label: t("teaProduct"), path: "/services/agriculture/tea", icon: "🍵" },
            { label: t("bulathProduct"), path: "/services/agriculture/bulath", icon: "🌿" },
            { label: t("cinnamonProduct"), path: "/services/agriculture/cinnamon", icon: "🌰" },
          ],
        },
        {
          label: t("industries"),
          icon: "🏭",
          subItems: [
            { label: t("clothRelatedProduct"), path: "/services/industries/cloth", icon: "👕" },
            { label: t("clayRelatedProduct"), path: "/services/industries/clay", icon: "🏺" },
            { label: t("woodenItems"), path: "/services/industries/wooden", icon: "🪵" },
            { label: t("sweetOrganicFoods"), path: "/services/industries/sweet&foods", icon: "🍯" },
            { label: t("ironGoldProduct"), path: "/services/industries/iron&gold", icon: "⚙️" },
          ],
        },
        {
          label: t("fisheries"),
          icon: "🐟",
          subItems: [
            { label: t("umbalakadaDriedFish"), path: "/services/fisheries/umbalakada&driesfish", icon: "🐠" },
            { label: t("ornamentalFish"), path: "/services/fisheries/ornamentalfish", icon: "🐡" },
          ],
        },
        {
          label: t("animalHusbandry"),
          icon: "🐄",
          subItems: [
            { label: t("dairyProduct"), path: "/services/AnimalHusbandry/dairyproduct", icon: "🥛" },
            { label: t("egg"), path: "/services/AnimalHusbandry/eggs", icon: "🥚" },
            { label: t("beeHoney"), path: "/services/AnimalHusbandry/beehoney", icon: "🍯" },
          ],
        },
        {
          label: t("infrastructure"),
          icon: "🏗️",
          subItems: [
            { label: t("roadDevelopments"), path: "/services/village/roaddevelopment", icon: "🛣️" },
            { label: t("sanitaryFacilities"), path: "/services/village/sanitaryfacilities", icon: "🚿" },
            { label: t("tourismIndustry"), path: "/services/village/tourism", icon: "🏖️" },
          ],
        },
      ],
    },
    { label: t("gallery"), path: "/Gallery" },
    { label: "RTI", href: "/#rti" },
    { label: t("FAQ"), path: "/FAQ" },
    { label: t("contactUs"), path: "/ContactUs" },
  ];

  // One shared style for all top-level menu buttons
  const navBtn =
    "flex items-center gap-2 px-4 py-3 bg-surface text-ink text-sm font-medium rounded-lg border border-line shadow-sm transition-all duration-300 hover:bg-primary hover:text-surface hover:shadow-md";

  const subLink =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-ink transition-all duration-300 hover:bg-soft hover:text-primary";

  return (
    <header className="relative z-50 w-full shadow-lg">
      {/* ===== TOP BAR ===== */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#6b4528] via-[#8b5e3c] to-[#b98a5e] py-4 text-white dark:from-[#1c1612] dark:via-[#2a2119] dark:to-[#4a3524] sm:py-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-32 w-32 -translate-x-16 -translate-y-16 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-20 translate-y-20 rounded-full bg-white"></div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo and title */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={logo}
              alt="Ministry Logo"
              className="h-16 w-16 rounded-full border-4 border-white bg-white object-contain shadow-xl sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            />
            <h1
              className="text-xl font-bold leading-tight sm:text-3xl"
              style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.4)" }}
            >
              <span className="block">ග්‍රාමීය සංවර්ධන කාර්යංශය</span>
              <span className="block font-semibold">கிராமிய அபிவிருத்தி பணியகம்</span>
              <span className="block font-semibold">Rural Development Bureau</span>
            </h1>
          </div>

                    {/* Right side: language + theme in ONE box */}
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-white/20 p-3 backdrop-blur-sm sm:gap-4 sm:p-4">
            {[
              { code: "si", label: "සිංහල", short: "සිං" },
              { code: "ta", label: "தமிழ்", short: "த" },
              { code: "en", label: "English", short: "EN" },
            ].map(({ code, label, short }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 sm:px-5 sm:text-sm ${
                  language === code
                    ? "bg-white text-[#6b4528] shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{short}</span>
              </button>
            ))}

            <span className="hidden h-8 w-px bg-white/40 sm:block"></span>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION BAR ===== */}
      <nav className="w-full border-t border-line bg-soft shadow-md">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
          {/* Desktop */}
          <ul className="hidden items-center gap-2 lg:ml-auto lg:flex">
            {navItems.map((item) => {
              const isAboutUs = item.label === t("aboutUs");
              const isDownload = item.label === t("download");
              const isServices = item.label === t("services");

              /* Projects / Services mega menu */
              if (isServices && item.mainCategories) {
                return (
                  <li
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => {
                      setIsServicesHovered(false);
                      setHoveredCategory(null);
                    }}
                  >
                    <span className={`${navBtn} cursor-pointer`}>
                      {item.label}
                      <i className="bi bi-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                    </span>

                    {isServicesHovered && (
                      <div className="absolute left-0 z-50 mt-3 flex w-[600px] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
                        {/* Categories */}
                        <div className="w-2/5 border-r border-line bg-soft">
                          <div className="bg-primary p-4 text-surface">
                            <h4 className="text-sm font-bold">Service Categories</h4>
                          </div>
                          <ul className="p-2">
                            {item.mainCategories.map((category, i) => (
                              <li
                                key={i}
                                onMouseEnter={() => setHoveredCategory(category)}
                                className="mb-1"
                              >
                                <div
                                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                                    hoveredCategory === category
                                      ? "bg-primary text-surface shadow-md"
                                      : "text-ink hover:bg-surface"
                                  }`}
                                >
                                  <span className="text-xl">{category.icon}</span>
                                  <span className="text-sm font-medium">{category.label}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sub items */}
                        <div className="max-h-96 w-3/5 overflow-y-auto">
                          {hoveredCategory ? (
                            <div>
                              <div className="bg-primary p-4 text-surface">
                                <h4 className="flex items-center gap-2 text-sm font-bold">
                                  <span className="text-lg">{hoveredCategory.icon}</span>
                                  {hoveredCategory.label}
                                </h4>
                              </div>
                              <ul className="p-2">
                                {hoveredCategory.subItems.map((sub, i) => (
                                  <li key={i} className="mb-1">
                                    <Link to={sub.path} className={`${subLink} text-xs`}>
                                      <span className="text-sm">{sub.icon}</span>
                                      <span>{sub.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="p-8 text-center text-muted">
                              <div className="mb-4 text-4xl">👆</div>
                              <p className="text-sm">Hover over a category to see available services</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              /* About Us and Download dropdowns */
              if ((isAboutUs || isDownload) && item.subItems) {
                return (
                  <li
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => {
                      if (isAboutUs) setIsAboutUsHovered(true);
                      if (isDownload) setIsDownloadHovered(true);
                    }}
                    onMouseLeave={() => {
                      if (isAboutUs) setIsAboutUsHovered(false);
                      if (isDownload) setIsDownloadHovered(false);
                    }}
                  >
                    <Link to={item.path} className={navBtn}>
                      {item.label}
                      <i className="bi bi-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                    </Link>

                    {((isAboutUs && isAboutUsHovered) || (isDownload && isDownloadHovered)) && (
                      <ul className="absolute left-0 z-50 mt-3 w-64 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
                        <div className="bg-primary p-3 text-surface">
                          <h4 className="text-sm font-bold">{item.label}</h4>
                        </div>
                        <div className="p-2">
                          {item.subItems.map((sub, i) => (
                            <li key={i} className="mb-1">
                              <a href={`${item.path}${sub.anchor}`} className={`${subLink} text-sm`}>
                                <span className="text-lg">{sub.icon}</span>
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                );
              }

              /* RTI (scrolls to the RTI section on the home page) */
              if (item.href) {
                return (
                  <li key={item.label}>
                    <a href={item.href} className={navBtn}>
                      {item.label}
                    </a>
                  </li>
                );
              }

              /* Normal items */
              return (
                <li key={item.label}>
                  <Link to={item.path} className={navBtn}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto flex flex-col gap-1 rounded-lg border border-line bg-surface p-3 shadow-md lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMobileMenuOpen && (
          <div className="border-t border-line bg-surface shadow-2xl lg:hidden">
            <ul className="flex max-h-[70vh] flex-col overflow-y-auto">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-line last:border-b-0">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-ink hover:bg-soft"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-ink hover:bg-soft"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-muted">
                      {item.label}
                    </span>
                  )}

                  {item.subItems && (
                    <ul className="bg-soft">
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={`${item.path}${sub.anchor}`}
                            className="flex items-center gap-3 border-l-4 border-transparent px-12 py-3 text-sm text-ink hover:border-primary hover:bg-surface"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-sm">{sub.icon}</span>
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.mainCategories && (
                    <ul className="bg-soft">
                      {item.mainCategories.map((category, i) => (
                        <li key={i}>
                          <div className="flex items-center gap-3 bg-primary px-10 py-3 text-sm font-medium text-surface">
                            <span className="text-lg">{category.icon}</span>
                            {category.label}
                          </div>
                          <ul>
                            {category.subItems.map((sub, j) => (
                              <li key={j}>
                                <Link
                                  to={sub.path}
                                  className="flex items-center gap-3 border-l-4 border-transparent px-16 py-2 text-xs text-ink hover:border-primary hover:bg-surface"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="text-sm">{sub.icon}</span>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;