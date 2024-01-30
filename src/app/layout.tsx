import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import { homeMetadata, idJsonObject } from "@/config";

import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata = {
  ...homeMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-QJK95WY6QY" />
      <Script
        id="idJsonObject"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }}
      />
    </html>
  );
}
