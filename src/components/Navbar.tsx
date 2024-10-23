import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="nav-bar flex gap-4">
      <Link href="/home" className={"page-link" + (router.pathname === "/home" ? " text-slate-400" : "")}>Home</Link>
      <Link href="/following" className={"page-link" + (router.pathname === "/following" ? " text-slate-400"  : "")}>Following</Link>
      <Link href="/contact-us" className={"page-link" + (router.pathname === "/contact-us" ? " text-slate-400"  : "")}>Contact-us</Link>
    </div>
  );
}

