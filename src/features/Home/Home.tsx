import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

import { inter } from "@/config";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.center}>
      <h2 className={inter.className}>Sitio en Costruccion</h2>
    </div>
    <div className="flex justify-center gap-3">
      <Link href="https://www.instagram.com/comunidadrhema/?hl=en" aria-label="Instagram link" target="_blank" rel="external">
        <span aria-hidden className="hidden">Instagram</span>
        <BsInstagram size={40}/>
      </Link>
      <Link href="https://www.facebook.com/comunidadrhemacr" aria-label="Facebook link" target="_blank" rel="external">
        <span aria-hidden className="hidden">Facebook</span>
        <BsFacebook size={40}/>
      </Link>
      <Link href="https://www.youtube.com/@rhemacomunidadcristiana" aria-label="Youtube Link" target="_blank" rel="external">
        <span aria-hidden className="hidden">Youtube</span>
        <BsYoutube size={40}/>
      </Link>
    </div>
  </main>
  );
}
