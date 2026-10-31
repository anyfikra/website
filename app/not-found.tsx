import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap pb-32 pt-8 md:pt-12">
        <p className="font-mono text-[13px] text-mute">404</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.98] tracking-[-0.035em]">
          This fikra
          <br />
          <em className="marker">doesn’t exist</em> yet.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">
          The page you’re looking for has moved, or was never built.
        </p>
        <a href="/" className="link mt-10 inline-block text-lg">
          Back to the fikras →
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
