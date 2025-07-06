import ImageSlideshow from "@/components/images/image-slideshow";
import cssClasses from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={cssClasses.header}>
        <div className={cssClasses.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={cssClasses.title}>
            <h1>Upscale Food for Upscale Foodies</h1>
            <p>Taste and share food with fellow foodies. </p>
          </div>
          <div className={cssClasses.participate}>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Join the community</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={cssClasses.section}>
          <h2>How it works</h2>
          <p>
            Upscale Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Upscale Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={cssClasses.section}>
          <h2>Why Upscale Food?</h2>
          <p>
            Upscale Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Upscale Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
