type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

const links: LinkItem[] = [
  {
    label: "Weather Compare",
    href: "https://timely-florentine-3ec0a2.netlify.app",
    description: "A real-time weather dashboard built with React and OpenWeather API",
  },
  {
    label: "DJ FITZ",
    href: "https://djfitz.netlify.app",
    description: "Website for a client's DJ business. Built w/ Claude Code assistance. React, Tailwind, TypeScript",
  },
  {
    label: "Cape Cod Short Term Rentals",
    href: "https://cc-str.streamlit.app/",
    description: "End to end data pipeline to track short term rentals on Cape Cod. Uses Python ingestion for three sources: a CSRF-protected web scraper (about 20,900 certificates), the Census ACS API, and MassGIS shapefiles (about 160,000 parcels). Python, PostgreSQL, dbt, Prefect, Streamlit, Plotly, SQLAlchemy, rapidfuzz, Neon",
  },
  {
    label: "Drink Tracking Calendar",
    href: "https://drink-tracker-lv0i.onrender.com",
    description: "An application to track alcohol intake and journal. Python, Flask",
  },
    {
    label: "Github",
    href: "https://github.com/OiOfMidworld",
    description: "listed projects are all public and starred. See readme's for additional info"
  },
  {
    label: "Linkedin",
    href: "https://linkedin.com/in/cyruswickersham",
  },
];

function LinkCard({ label, href, description }: LinkItem) {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-200 flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-black/40 dark:focus-visible:ring-white/40 outline-none text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        {label}
      </a>

      {description && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-lg bg-black px-3 py-2 text-center text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:bg-white dark:text-black"
        >
          {description}
          {/* arrow */}
          <span className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-black dark:bg-white" />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Cyrus&apos; website :-) Hover over a link for a brief description
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}
