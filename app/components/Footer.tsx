export default function Footer() {
  return (
    <footer 
      style={{ backgroundColor: "#0F172B !important", background: "#0F172B" }} 
      className="relative z-50 w-full border-t border-slate-800 py-8 text-center text-sm text-slate-400"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p>© {new Date().getFullYear()} Livaura. All rights reserved.</p>
      </div>
    </footer>
  );
}