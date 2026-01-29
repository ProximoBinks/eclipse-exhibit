import Image from 'next/image';

export default function Page() {
    return (
        <div className="space-y-12 pb-10 sm:space-y-16">
            <header className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.35em] text-muted">
                    <span>August 12, 2026</span>
                    <span>Paris • Culture</span>
                    <span>Issue No. 118</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_0_30px_rgba(30,76,255,0.2)]">
                            <Image src="/images/eclipse-logo-icon.png" alt="Eclipse Exhibit icon" width={48} height={48} />
                        </div>
                        <div className="space-y-2">
                            <Image
                                src="/images/eclipse-logo-text.png"
                                alt="Eclipse Exhibit"
                                width={240}
                                height={64}
                                className="h-6 w-auto sm:h-7"
                                priority
                            />
                            <p className="text-xs uppercase tracking-[0.35em] text-muted">Art News & Modern Culture</p>
                        </div>
                    </div>
                    <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted md:flex">
                        <a href="#" className="hover:text-accent">
                            News
                        </a>
                        <a href="#" className="hover:text-accent">
                            Collections
                        </a>
                        <a href="#" className="hover:text-accent">
                            Profiles
                        </a>
                        <a href="#" className="hover:text-accent">
                            Exhibitions
                        </a>
                        <a href="#" className="hover:text-accent">
                            About
                        </a>
                    </nav>
                </div>
                <div className="waterline opacity-60" />
            </header>

            <section className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                    <span className="rounded-full border border-white/15 px-3 py-1">Modern Masters</span>
                    <span>Feature</span>
                </div>
                <div className="space-y-4">
                    <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                        Ferruccio&apos;s &apos;Stargazing&apos; to Headline the Louvre&apos;s Modern Masters Collection
                    </h2>
                    <p className="max-w-3xl text-lg text-muted sm:text-xl">
                        The art world is once again ablaze with admiration as Ferruccio unveils his breathtaking new
                        work, Stargazing, a piece already being hailed as a generation-defining masterpiece.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
                    <div className="flex items-center gap-3">
                        <span className="text-white">Thien Ong</span>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span>Paris Bureau</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent">
                            Share
                        </button>
                        <button className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent">
                            Tweet
                        </button>
                        <button className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent">
                            Copy Link
                        </button>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <figure className="space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
                        <Image
                            src="/images/eclipse-cover-1.jpg"
                            alt="Ferruccio's painting Stargazing"
                            width={1400}
                            height={900}
                            className="h-[320px] w-full object-cover sm:h-[420px]"
                            priority
                        />
                    </div>
                    <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                        Ferruccio&apos;s Newest Painting: Stargazing
                    </figcaption>
                </figure>

                <article className="space-y-6 text-base leading-relaxed text-white/90 sm:text-lg">
                    <p>
                        <span className="float-left mr-3 mt-2 font-display text-5xl text-white">T</span>
                        his extraordinary painting, a celestial dreamscape infused with an array of midnight blues and
                        ethereal light, promises to captivate audiences and critics alike. It is set to headline the
                        Louvre&apos;s prestigious Modern Masters collection, which serves as a grand celebration of the
                        greatest living artists of our time, showcasing works that not only push the boundaries of
                        creativity but also resonate deeply with the human experience.
                    </p>
                    <p>
                        The anticipation surrounding Stargazing has reached a fever pitch, with critics and collectors
                        already circling like hawks, eager to get a glimpse of this monumental work. Early estimates
                        value the piece in the eight-figure range, a staggering figure that reflects its potential
                        impact on the art market. Yet, as we all know, true art is priceless; its value extends far
                        beyond mere monetary figures, touching the hearts and minds of those fortunate enough to
                        experience it.
                    </p>
                    <p>Ferruccio himself, known for his humility and introspective nature, remained grounded when asked about the inspiration behind Stargazing.</p>
                    <blockquote className="border-l-2 border-accent pl-4 text-xl italic text-white sm:text-2xl">
                        “I simply paint what I see.”
                    </blockquote>
                    <p>
                        This modest assertion belies the deep well of creativity and insight that informs his artistic
                        practice, suggesting that his works are not merely products of imagination, but reflections of
                        a reality that he perceives with exceptional clarity.
                    </p>
                    <p>
                        For those who have followed Ferruccio&apos;s meteoric rise through the art world, this latest
                        triumph feels almost inevitable. His artistic voice has long been recognized as singular — one
                        that whispers where others shout, that moves where others stagnate. His ability to convey
                        complex emotions and ideas through his art has garnered him a dedicated following and a place
                        among the pantheon of contemporary masters.
                    </p>
                </article>
            </section>

            <section className="space-y-6">
                <figure className="space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
                        <Image
                            src="/images/eclipse-cover-2.jpg"
                            alt="Ferruccio at the Shooting Star awards ceremony"
                            width={1200}
                            height={800}
                            className="h-[260px] w-full object-cover sm:h-[360px]"
                        />
                    </div>
                    <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                        Ferruccio (right) with fellow artist Benzo (left) at the 2024 Shooting Star awards ceremony
                    </figcaption>
                </figure>
                <article className="space-y-6 text-base leading-relaxed text-white/90 sm:text-lg">
                    <p>
                        As Stargazing cements his place in art history, we take a moment to look back at another
                        luminous moment in his career: the Shooting Star awards ceremony, an event that celebrated
                        emerging talents and established artists alike. The atmosphere was electric, filled with a
                        sense of camaraderie and shared passion for the arts.
                    </p>
                    <p>
                        Some say the stars choose who will shine the brightest. If so, Ferruccio&apos;s place among them
                        was decided long ago. His journey through the cosmos of art continues to inspire and ignite the
                        imaginations of all who encounter his work, leaving an indelible mark on the cultural landscape
                        of our time.
                    </p>
                    <p>
                        As we look forward to the unveiling of Stargazing, we are reminded that true artistry has the
                        power to connect us to something greater than ourselves, inviting us to explore the infinite
                        possibilities that lie within and beyond.
                    </p>
                </article>
            </section>

            <section className="space-y-6 border-t border-white/10 pt-10">
                <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-white">Related Stories</h3>
                    <button className="text-xs uppercase tracking-[0.2em] text-muted hover:text-accent">
                        View All
                    </button>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    {[
                        {
                            title: 'Inside the Louvre’s Modern Masters wing',
                            category: 'Exhibitions',
                            tag: 'Paris'
                        },
                        {
                            title: 'How collectors are redefining legacy art',
                            category: 'Markets',
                            tag: 'Analysis'
                        },
                        {
                            title: 'The new wave of celestial abstraction',
                            category: 'Critics',
                            tag: 'Essay'
                        }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-muted">
                                {item.category} • {item.tag}
                            </p>
                            <h4 className="mt-3 font-display text-lg text-white">{item.title}</h4>
                            <button className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Read</button>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="space-y-6 border-t border-white/10 pt-10 text-sm text-muted">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em]">Eclipse Exhibit</p>
                        <p className="font-display text-2xl text-white">Where art meets the infinite.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent">
                            Subscribe
                        </button>
                        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent">
                            Newsletter
                        </button>
                        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2026 Eclipse Exhibit</span>
                    <span>Designed for screen • Optimized for mobile</span>
                </div>
            </footer>
        </div>
    );
}
