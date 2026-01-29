import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Eclipse Exhibit',
        default: 'Eclipse Exhibit'
    },
    description: 'Prestigious art news and contemporary culture coverage.',
    metadataBase: new URL('https://eclipse-exhibit.netlify.app'),
    openGraph: {
        title: "Eclipse Exhibit",
        description: 'Prestigious art news and contemporary culture coverage.',
        type: 'website',
        images: ['/images/eclipse-logo.jpg']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eclipse Exhibit',
        description: 'Prestigious art news and contemporary culture coverage.',
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
            </head>
            <body className="min-h-screen antialiased bg-paper text-ink">
                <div className="min-h-screen px-5 sm:px-10">
                    <main className="mx-auto w-full max-w-5xl pb-16 pt-10 sm:pt-14">{children}</main>
                </div>
            </body>
        </html>
    );
}
