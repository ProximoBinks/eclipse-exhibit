import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Eclipse Exhibit',
        default: 'Eclipse Exhibit'
    },
    description: 'Prestigious art news and contemporary culture coverage.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="min-h-screen antialiased bg-paper text-ink">
                <div className="min-h-screen px-5 sm:px-10">
                    <main className="mx-auto w-full max-w-5xl pb-16 pt-10 sm:pt-14">{children}</main>
                </div>
            </body>
        </html>
    );
}
