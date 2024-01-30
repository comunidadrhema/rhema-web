import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Rhema Comunidad Cristiana",
  description:
    "Somos una comunidad evangélica y cristocéntrica, dedicada a la proclamación del mensaje de salvación",
  metadataBase: new URL("https://scontent.fsyq2-1.fna.fbcdn.net"),
  openGraph: {
    title: "Rhema Comunidad Cristiana ",
    description:
      "Somos una comunidad evangélica y cristocéntrica, dedicada a la proclamación del mensaje de salvación",
    url: "https://www.comunidadrhema.com",
    siteName: "Rhema Comunidad Cristiana",
    images: [
      {
        url: "/v/t39.30808-6/309423626_396566679340429_7676795309459105015_n.png?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JoSWU3Qd_yEAX_LvSs_&_nc_ht=scontent.fsyq2-1.fna&oh=00_AfCMenAi_DsgDfZJJ4sOuT6MM3s2n9DB_eGi_YJz_Tyg5A&oe=65BD3B43",
        width: 769,
        height: 769,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Rhema Comunidad Cristiana ",
    site: "https://www.comunidadrhema.com/",
    creator: "Rhema Comunidad Cristiana",
    description:
      "Somos una comunidad evangélica y cristocéntrica, dedicada a la proclamación del mensaje de salvación",
    images: [
      {
        url: "/v/t39.30808-6/309423626_396566679340429_7676795309459105015_n.png?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JoSWU3Qd_yEAX_LvSs_&_nc_ht=scontent.fsyq2-1.fna&oh=00_AfCMenAi_DsgDfZJJ4sOuT6MM3s2n9DB_eGi_YJz_Tyg5A&oe=65BD3B43",
        width: 769,
        height: 769,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export const idJsonObject = {
  "@context": "https://schema.org",
  "@type": "Church",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalupe, Costa Rica",
    postalCode: "40602",
    streetAddress: "Montelimar",
    addressCountry: "CR",
  },
  email: "cbrhema@hotmail.com",
  faxNumber: "(506) 2240 1601",
  member: [
    {
      "@type": "Church",
      name: "Rhema Comunidad Cristiana",
    },
  ],
  alumni: [
    {
      "@type": "Person",
      name: "Comunidad Rhe,a",
    },
  ],
  name: "Rhema Comunidad Cristiana",
  telephone: "(506) 2240 1601",
  url: "https://www.comunidadrhema.com/",
  logo: "https://scontent.fsyq2-1.fna.fbcdn.net/v/t39.30808-6/309423626_396566679340429_7676795309459105015_n.png?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JoSWU3Qd_yEAX_LvSs_&_nc_ht=scontent.fsyq2-1.fna&oh=00_AfCMenAi_DsgDfZJJ4sOuT6MM3s2n9DB_eGi_YJz_Tyg5A&oe=65BD3B43",
  sameAs: [
    "https://www.facebook.com/comunidadrhemacr",
    "https://www.youtube.com/@rhemacomunidadcristiana",
    "https://www.instagram.com/comunidadrhema/?hl=en",
    "https://www.waze.com/es/live-map/directions/rhema-comunidad-cristiana-calle-blancos,-goicoechea?to=place.w.180813924.1808401379.4126613",
    "https://soundcloud.com/comunidadrhema"
  ],
};
