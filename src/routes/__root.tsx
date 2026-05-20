import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sakthi Renganathan K — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sakthi Renganathan K — Full Stack & Frontend Developer based in Madurai, building interactive web experiences with React, Three.js, and modern UI/UX.",
      },
      { name: "author", content: "Sakthi Renganathan" },
      {
        property: "og:title",
        content: "Sakthi Renganathan K — Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Interactive portfolio: React, Three.js, AI-powered apps and modern web experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://sakthirenganathan7.netlify.app/og-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sakthirenganathan7.netlify.app/og-preview.png" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0f172a" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://sakthirenganathan7.netlify.app/",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sakthi Renganathan K",
    url: "https://sakthirenganathan7.netlify.app/",
    sameAs: [
      "https://www.linkedin.com/in/sakthi-renganathan-k/",
      "https://github.com/23CABSAKTHIRENGANATHANk",
    ],
    jobTitle: "Full Stack Developer",
    description:
      "Portfolio of Sakthi Renganathan K — Full Stack & Frontend Developer based in Madurai, building interactive web experiences with React, Three.js, and modern UI/UX.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="cursor-none">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pageViews = Number(window.localStorage.getItem("portfolio_page_views") || 0) + 1;
    window.localStorage.setItem("portfolio_page_views", String(pageViews));

    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: "pageview",
      page: window.location.pathname,
      timestamp: Date.now(),
      views: pageViews,
    });
    (window as any).dataLayer = dataLayer;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <Outlet />
    </QueryClientProvider>
  );
}
