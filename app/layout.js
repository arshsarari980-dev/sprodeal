
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sprodeall.com"),

  title: {
    default: "Spro Deal – Official Website",
    template: "%s | Spro Deal",
  },

  description:
    "Welcome to Spro Deal – Official Website. Login to your account, manage and update your profile, access your personal dashboard, check your account information, explore platform features, stay updated with the latest announcements and enjoy a simple and user-friendly experience. Visit Spro Deal to get started.",

  applicationName: "Spro Deal",

  keywords: [
    "Spro Deal",
    "Spro Deal Official Website",
    "Sprodeal",
    "Spro Deal Login",
    "Spro Deal Account",
    "Spro Deal Dashboard",
    "Spro Deal Profile Update",
    "Spro Deal Website",
    "Spro Deal Online",
    "Spro Deal Official",
    "Spro Deal Home",
    "Spro Deal Sign In",
    "Spro Deal Sign Up",
    "Spro Deal User Login",
    "Spro Deal Member Login",
    "Spro Deal Account Login",
    "Spro Deal Password",
    "Spro Deal Phone Login",
    "Spro Deal User Account",
    "Spro Deal Account Update",
    "Spro Deal Profile",
    "Spro Deal User Profile",
    "Spro Deal Personal Dashboard",
    "Spro Deal Account Management",
    "Spro Deal User Portal",
    "Spro Deal Member Portal",
    "Spro Deal Login Page",
    "Spro Deal Homepage",
    "Spro Deal Web Portal",
    "Spro Deal Platform",
    "Spro Deal Services",
    "Spro Deal Features",
    "Spro Deal Latest Updates",
    "Spro Deal Announcements",
    "Spro Deal Information",
    "Spro Deal Customer Support",
    "Spro Deal Help",
    "Spro Deal Contact",
    "Spro Deal Privacy Policy",
    "Spro Deal Terms",
    "Spro Deal Secure Login",
    "Spro Deal Account Access",
    "Spro Deal Account Settings",
    "Spro Deal Profile Management",
    "Spro Deal User Information",
    "Spro Deal Mobile Website",
    "Spro Deal Desktop Website",
    "Spro Deal Web Application",
    "Spro Deal Online Portal",
    "Spro Deal Official Portal",
    "Spro Deal Account Portal",
    "Spro Deal Member Account",
    "Spro Deal Registration",
    "Spro Deal New Account",
    "Spro Deal Login Online",
    "Spro Deal Website Login",
    "Spro Deal Direct Login",
    "Spro Deal User Dashboard",
    "Spro Deal Account Details",
    "Spro Deal Profile Details",
    "Spro Deal Update Account",
    "Spro Deal Update Profile",
    "Spro Deal Account Information",
    "Spro Deal Login Website",
    "Spro Deal Official Login",
    "Spro Deal Web Login",
    "Spro Deal Access Account",
    "Spro Deal User Access",
    "Spro Deal Online Account",
    "Spro Deal Member Access",
    "Spro Deal Latest News",
    "Spro Deal Platform Updates",
    "Spro Deal Website Updates",
    "Spro Deal Account Services",
    "Spro Deal Online Services",
    "Spro Deal Digital Platform",
    "Spro Deal User Services",
    "Spro Deal Account Dashboard",
    "Spro Deal Personal Account",
    "Spro Deal Profile Settings",
    "Spro Deal Login Portal",
    "Spro Deal Main Website",
    "Spro Deal Official Site",
    "Spro Deal Website Official",
    "Spro Deal User Portal Login",
    "Spro Deal Member Website",
    "Spro Deal Online Platform",
    "Spro Deal Account Portal Login",
    "Spro Deal Website Information",
    "Spro Deal Platform Information",
    "Spro Deal Official Information",
    "Spro Deal Account Access Online",
    "Spro Deal User Login Page",
    "Spro Deal Member Login Page",
    "Spro Deal Website Account",
    "Spro Deal Profile Account",
    "Spro Deal Account Profile",
    "Spro Deal Login Account Online",
    "Spro Deal Official Website India",
    "Spro Deal India",
    "Spro Deal Online India",
    "Spro Deal Web Services",
    "Spro Deal Digital Services",
    "Spro Deal User Platform",
    "Spro Deal Account Portal India",
    "Spro Deal Website India",
  ],

  authors: [{ name: "Spro Deal" }],
  creator: "Spro Deal",
  publisher: "Spro Deal",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sprodeal.in/",
    siteName: "Spro Deal",
    title: "Spro Deal – Official Website",
    description:
      "Welcome to Spro Deal. Login to your account, manage your profile, update your account information, access your dashboard and explore our platform.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Spro Deal Official Website",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Spro Deal – Official Website",
    description:
      "Login to Spro Deal, manage your account, update your profile and explore our platform.",
    images: ["/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
