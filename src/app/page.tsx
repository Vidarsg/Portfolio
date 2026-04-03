"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [lang, setLang] = useState<"no" | "en">("no");
  const t = (no: string, en: string) => (lang === "no" ? no : en);

  return (
    <main className={`${inter.className} bg-background text-text min-h-screen overflow-x-hidden relative`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient blob 1 - top left */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient blob 2 - bottom right */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient blob 3 - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 25, -25, 0],
            y: [0, 25, -25, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-20 bg-background bg-opacity-95 backdrop-blur-sm border-b border-subtext overflow-x-hidden">
          <div className="relative flex justify-between items-center py-5 px-4 lg:px-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#profile" className="hover:text-accent transition">{t("Profil", "Profile")}</a>
              <a href="#skills" className="hover:text-accent transition">{t("Kompetanse", "Skills")}</a>
              <a href="#education" className="hover:text-accent transition">{t("Utdanning", "Education")}</a>
              <a href="#roles" className="hover:text-accent transition">{t("Verv", "Roles")}</a>
              <a href="#projects" className="hover:text-accent transition">{t("Prosjekter", "Projects")}</a>
              <a href="#work" className="hover:text-accent transition">{t("Arbeid", "Work")}</a>
              <a href="#contact" className="hover:text-accent transition">{t("Kontakt", "Contact")}</a>
            </nav>

            {/* Mobile menu placeholder */}
            <div className="md:hidden flex-1" />

            {/* Right controls: language */}
            <div>
              <button
                type="button"
                onClick={() => setLang((p) => (p === "no" ? "en" : "no"))}
                className="text-sm border border-subtext px-3 py-1 rounded-md hover:text-accent hover:border-accent transition"
                aria-label={t("Bytt til engelsk", "Switch to Norwegian")}
                title={t("Bytt til engelsk", "Switch to Norwegian")}
              >
                {lang === "no" ? "EN" : "NO"}
              </button>
            </div>
          </div>
        </header>

        {/* PROFILE */}
        <section id="profile" className="w-full pt-28 pb-12 lg:pt-32 lg:pb-14">
          <div className="flex w-full items-center gap-8 px-4 lg:px-6">
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-3 text-accent">Vidar Strand Gladsø</h1>
              <p className="text-lg lg:text-xl text-subtext mb-4">
                {t("Informatikkstudent (NTNU Trondheim)", "Computer Science student (NTNU Trondheim)")}
              </p>

              <ul className="space-y-1 text-subtext">
                <li>
                  <span className="text-text">{t("E-post", "Email")}:</span>{" "}
                  <a className="hover:text-accent underline" href="mailto:vidar-s-g@hotmail.com">vidar-s-g@hotmail.com</a>
                </li>
                <li>
                  <span className="text-text">{t("Telefon", "Phone")}:</span>{" "}
                  <a className="hover:text-accent" href="tel:+4741295488">(+47) 412 95 488</a>
                </li>
                <li>
                  <span className="text-text">{t("Adresse", "Address")}:</span>{" "}
                  <a
                    className="hover:text-accent underline"
                    href="https://www.google.com/search?q=ulstadl%C3%B8kkveien+6&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Ulstadløkkveien 6, 7067 Trondheim", "Ulstadløkkveien 6, 7067 Trondheim")}
                  </a>
                </li>
              </ul>
            </motion.div>
            <div className="hidden lg:block lg:w-[40%]" />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="w-full py-12 lg:py-14">
          <div className="flex w-full items-start gap-8 px-4 lg:px-6">
            <div className="hidden lg:block lg:w-[40%]" />
            <motion.div
              className="w-full lg:w-[60%] lg:text-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-5 text-accent">{t("Faglig kompetanse", "Academic skills")}</h2>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {[
                  "Machine Learning/GenAI",
                  "Git/Version Control",
                  "Python",
                  "Java",
                  "HTML/CSS",
                  "JavaScript/TypeScript",
                  "React/Next.js",
                  "Figma",
                  "SQL/Firebase/PostgreSQL",
                  "Docker",
                  "Linux",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-md border border-subtext/60 text-subtext hover:border-accent hover:text-accent transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="w-full py-12 lg:py-14">
          <div className="flex w-full items-start gap-8 px-4 lg:px-6">
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-accent">{t("Utdanning", "Education")}</h2>

              <CVEntry
                title={t("Master i Informatikk", "Master's in Computer Science")}
                org={t(
                  "NTNU – Norges teknisk-naturvitenskapelige universitet",
                  "NTNU – Norwegian University of Science and Technology"
                )}
                period={t("08/2024 – d.d.", "08/2024 – present")}
                bullets={[
                  t(
                    "Valgbare emner: Informasjonssystemer, Visuell formidling, Design av grafiske brukergrensesnitt, Innovasjon ved Design Thinking, Digitale plattformer og tjenesteinnovasjon",
                    "Elective courses: Information Systems, Visual Communication, Design of Graphical User Interfaces, Innovation through Design Thinking, Digital Platforms and Service Innovation"
                  ),
                ]}
              />

              <CVEntry
                title={t("Bachelor i Informatikk", "Bachelor's in Computer Science")}
                org={t(
                  "NTNU – Norges teknisk-naturvitenskapelige universitet",
                  "NTNU – Norwegian University of Science and Technology"
                )}
                period="08/2021 – 06/2024"
                bullets={[
                  t(
                    "Valgbare emner: Ledelse, Digitalisering, Webutvikling, Big Data-arkitektur, Introduksjon til kunstig intelligens, Etisk hacking og penetrasjonstesting, STS: Digitalisering og samfunnsendring",
                    "Elective courses: Management, Digitalization, Web Development, Big Data Architecture, Introduction to Artificial Intelligence, Ethical Hacking and Penetration Testing, STS: Digitalization and Social Change"
                  ),
                ]}
              />

              <CVEntry
                title={t("Medier og kommunikasjon (VGS)", "Media and Communication (Upper secondary)")}
                org={t("Charlottenlund Videregående Skole, Trondheim", "Charlottenlund Upper Secondary School, Trondheim")}
                period="08/2016 – 06/2019"
                bullets={[t("Karaktersnitt: 3,3 (uten tilleggspoeng)", "GPA: 3.3 (without extra points)")]}
              />
            </motion.div>
            <div className="hidden lg:block lg:w-[40%]" />
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="w-full py-12 lg:py-14">
          <div className="flex w-full items-start gap-8 px-4 lg:px-6">
            <div className="hidden lg:block lg:w-[40%]" />
            <motion.div
              className="w-full lg:w-[60%] lg:text-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-accent">{t("Verv under utdanning", "Positions during studies")}</h2>
              <div className="inline-block text-left lg:text-right">
                <h3 className="font-semibold">
                  {t(
                    "Dugnads-ansvarlig, Ekskursjonskomiteen – Linjeforeningen Online",
                    "Volunteer Coordinator, Excursion Committee – Online Student Association"
                  )}
                </h3>
                <p className="text-subtext">05/2023 – 06/2024</p>
                <ul className="mt-2 list-disc pl-5 text-subtext lg:list-none lg:pl-0 lg:[&_li]:pl-4 lg:[&_li]:relative lg:[&_li]:before:absolute lg:[&_li]:before:left-0 lg:[&_li]:before:top-0 lg:[&_li]:before:text-accent lg:[&_li]:before:content-['•']">
                  <li>
                    {t(
                      "Planlegging og organisering av dugnadsarbeid til Online ekskursjonen 2024",
                      "Planning and organizing volunteer work for the 2024 Online excursion"
                    )}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="w-full py-12 lg:py-14">
          <div className="flex w-full items-start gap-8 px-4 lg:px-6">
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-6 text-accent">{t("Tidligere utviklingsprosjekter", "Previous Development Projects")}</h2>
                <h3 className="font-semibold">
                  {t(
                    "Utvikling av internt arkivsystem – Trondheim Kommune",
                    "Development of Internal Archive System – Trondheim Municipality"
                  )}
                </h3>
                <p className="text-subtext">01/2024 – 06/2024</p>
                <ul className="mt-2 list-disc pl-5 text-subtext lg:list-none lg:pl-0 lg:[&_li]:pl-4 lg:[&_li]:relative lg:[&_li]:before:absolute lg:[&_li]:before:left-0 lg:[&_li]:before:top-0 lg:[&_li]:before:text-accent lg:[&_li]:before:content-['•']">
                  <li>
                    {t(
                      "Utviklet et digitalt arkivsystem for håndtering og lagring av dokumenter i samarbeid med Trondheim Kommune. Arbeidet inkluderte design, implementasjon av backend/frontend, og testing",
                      "Developed a digital archive system for managing and storing documents in collaboration with Trondheim Municipality. The work included design, implementation of backend/frontend, and testing"
                    )}
                  </li>
                </ul>
                <h3 className="font-semibold mt-6">
                  {t(
                    "Se ",
                    "See "
                  )}
                  <a href="https://github.com/Vidarsg" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {t("GitHub", "GitHub")}
                  </a>
                  {t(
                    " for full oversikt over personlige utviklingsprosjekter",
                    " for a full overview of personal development projects"
                  )}
                </h3>
              </div>
            </motion.div>
            <div className="hidden lg:block lg:w-[40%]" />
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="w-full py-12 lg:py-14">
          <div className="flex w-full items-start gap-8 px-4 lg:px-6">
            <div className="hidden lg:block lg:w-[40%]" />
            <motion.div
              className="w-full lg:w-[60%] lg:text-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="max-w-3xl lg:ml-auto">
                <h2 className="text-3xl font-bold mb-6 text-accent">{t("Tidligere arbeidserfaring", "Previous work experience")}</h2>
                <h3 className="font-semibold">
                  {t(
                    "(Uten relevans for studieretning)",
                    "(Without relevance to field of study)"
                  )}
                </h3>

                <SimpleRow align="right" org="NTNU" year="2015" desc={t("Pakking av konferansemateriell", "Packing conference materials")} />
                <SimpleRow
                  align="right"
                  org={t("Trondheim Kammermusikkfestival", "Trondheim Chamber Music Festival")}
                  year="2017"
                  desc={t("Foto, reportasje og livestream", "Photography, reporting and livestream")}
                />
                <SimpleRow
                  align="right"
                  org={t("Trondheim kommune", "Trondheim Municipality")}
                  year="2018"
                  desc={t("Deltakelse i design av Trøndelags nye fylkesvåpen", "Participation in the design of Trøndelag’s new coat of arms")}
                />
                <SimpleRow align="right" org="Fretex" year="2018" desc={t("Produksjon av produktbilder og kampanje", "Product photography and campaign production")} />
                <SimpleRow align="right" org="Femundløpet 2019" year="2019" desc={t("Arbeid med PR og medier", "PR and media work")} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full py-14 lg:py-16">
          <div className="flex w-full items-center gap-8 px-4 lg:px-6">
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4 text-accent">{t("Kontakt", "Contact")}</h2>
                <p className="text-lg text-subtext mb-6">
                  {t("Referanser oppgis ved etterspørsel.", "References available upon request.")}
                </p>

                <div className="flex flex-col gap-3">
                  <a href="mailto:vidar-s-g@hotmail.com" className="underline hover:text-accent">vidar-s-g@hotmail.com</a>
                  <a href="tel:+4741295488" className="hover:text-accent">(+47) 412 95 488</a>
                  <a href="https://www.linkedin.com/in/vidar-strand-glads%C3%B8-a9402b38b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
                  <a href="https://github.com/Vidarsg" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Github</a>
                </div>
              </div>
            </motion.div>
            <div className="hidden lg:block lg:w-[40%]" />
          </div>
        </section>

        <footer className="text-center py-6 px-4 lg:px-6 text-subtext text-sm w-full">
          © {new Date().getFullYear()} Vidar. Built with Next.js & Tailwind. Deployed on Vercel.
        </footer>
      </div>
    </main>
  );
}

/* ------- Helpers ------- */

function CVEntry({
  title,
  org,
  period,
  bullets,
}: {
  title: string;
  org: string;
  period: string;
  bullets?: string[];
}) {
  return (
    <div className="mb-6 border border-subtext/40 rounded-lg p-5">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h3 className="font-semibold text-text">{title}</h3>
        <span className="text-subtext">• {org}</span>
        <span className="ml-auto text-subtext">{period}</span>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 list-disc pl-5 text-subtext space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SimpleRow({
  org,
  year,
  desc,
  align = "left",
}: {
  org: string;
  year: string;
  desc: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div
      className={`flex flex-wrap gap-2 items-baseline border-b border-subtext/20 py-3 ${isRight ? "lg:justify-end lg:text-right" : ""
        }`}
    >
      <span className="font-medium">{org}</span>
      <span className="text-subtext">• {year}</span>
      <span className={`text-subtext w-full lg:w-auto ${isRight ? "lg:mr-2" : "lg:ml-2"}`}>{desc}</span>
    </div>
  );
}
