import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Eclipse Exhibit',
        default: "Ferruccio's 'Stargazing' to Headline the Louvre's Modern Masters Collection | Eclipse Exhibit"
    },
    description:
        "The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new work, Stargazing, a piece already being hailed as a generation-defining masterpiece.",
    metadataBase: new URL('https://eclipseexhibit.netlify.app'),
    openGraph: {
        title: "Ferruccio's 'Stargazing' to Headline the Louvre's Modern Masters Collection",
        description:
            "The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new work, Stargazing, a piece already being hailed as a generation-defining masterpiece.",
        type: 'website',
        images: ['/images/eclipse-logo.jpg']
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'black-translucent',
        title: 'Eclipse Exhibit'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ferruccio's 'Stargazing' to Headline the Louvre's Modern Masters Collection",
        description:
            "The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new work, Stargazing, a piece already being hailed as a generation-defining masterpiece.",
        images: ['/images/eclipse-logo.jpg']
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta property="og:title" content="Ferruccio's 'Stargazing' to Headline the Louvre's Modern Masters Collection" />
                <meta
                    property="og:description"
                    content="The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new work, Stargazing, a piece already being hailed as a generation-defining masterpiece."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Eclipse Exhibit" />
                <meta property="og:url" content="https://eclipseexhibit.netlify.app" />
                <meta property="og:image" content="/images/eclipse-logo.jpg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Ferruccio's 'Stargazing' to Headline the Louvre's Modern Masters Collection" />
                <meta
                    property="twitter:description"
                    content="The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new work, Stargazing, a piece already being hailed as a generation-defining masterpiece."
                />
                <meta property="twitter:image" content="/images/eclipse-logo.jpg" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Eclipse Exhibit" />
            </head>
            <body className="min-h-screen antialiased bg-paper text-ink">
                <div className="min-h-screen px-5 sm:px-10">
                    <main className="mx-auto w-full max-w-5xl pb-16 pt-10 sm:pt-14">{children}</main>
                </div>
            </body>
        </html>
    );
}
