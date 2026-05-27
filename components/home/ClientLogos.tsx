import Image from "next/image";

export function ClientLogos() {
  const logos = ["lexsuite-logo.png", "logo-dark.svg", "logo-light.svg", "og-image.svg"];

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Our Clients</p>
        <h2 className="mt-3 text-3xl font-bold text-navy">Trusted by leading Nigerian digital businesses.</h2>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {logos.map((name) => (
          <div key={name} className="flex h-16 w-32 items-center justify-center transition hover:opacity-100">
            <Image
              src={`/${name}`}
              alt={name}
              width={120}
              height={40}
              className="max-h-10 w-auto object-contain opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
