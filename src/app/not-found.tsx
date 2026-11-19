import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-[#5E655F]">
        404 — Not found
      </span>
      <h1 className="mt-4 font-display text-4xl font-normal text-[#1E201E] sm:text-5xl">
        This path leads into the trees.
      </h1>
      <p className="mt-4 max-w-md text-sm text-[#5E655F]">
        The page you are looking for does not exist or has been moved back to the main house.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex rounded-full bg-[#1E201E] px-6 py-2.5 text-xs font-medium text-white transition hover:bg-black"
        >
          Return to Skandic
        </Link>
      </div>
    </div>
  );
}

