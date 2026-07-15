import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="sakura-glow absolute inset-0" />
      <p className="relative text-xs tracking-[0.28em] text-accent uppercase">
        404
      </p>
      <h1 className="font-display relative mt-4 text-display-md">
        Path not found
      </h1>
      <p className="relative mt-4 max-w-md text-muted">
        This route faded into the garden. Return home to continue.
      </p>
      <div className="relative mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Back home
        </Button>
        <Link
          href="/roster"
          className="inline-flex items-center border border-white/20 px-7 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          View roster
        </Link>
      </div>
    </div>
  );
}
