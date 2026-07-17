export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-8 border-t border-line mt-auto">
      <p className="font-mono text-[12px] text-muted">
        built with next.js, deployed on vercel · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
