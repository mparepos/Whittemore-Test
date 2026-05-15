import Link from "next/link";

const FloatingOrderButton = () => {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 hidden lg:inline-flex flex-col items-start gap-0 px-5 py-3 rounded-full bg-accent text-accent-foreground font-display font-medium text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 shadow-lg uppercase tracking-wide"
    >
      <span>Questions, Quotes or Samples</span>
      <span className="text-[11px] normal-case tracking-normal opacity-90 font-light">sales@whittemoreco.com</span>
    </Link>
  );
};

export default FloatingOrderButton;
