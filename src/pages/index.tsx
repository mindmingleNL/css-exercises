import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS Advanced Exercises</title>
        <meta name="description" content="CSS Advanced Exercises" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>CSS Layout Exercises</h1>
        <p>
          You will find exercises in the pages linked below. Every page will
          contain a small challenge to familiarise yourself with a layout mode.
          You can find the HTML in the{" "}
          <code>/pages/name-of-the-challenge-here</code> folder. They all come
          with pre-defined class names, so you should only need to write the
          CSS. You can write this CSS in the <code>/styles/exercise.css</code>{" "}
          file.
        </p>
        <h2>🕺🏻 Positioned Layout</h2>
        <ul>
          <li>
            <Link href="/position/1">Exercise 1</Link>
          </li>
          <li>
            <Link href="/position/2">Exercise 2</Link>
          </li>
          <li>
            <Link href="/position/3">Exercise 3</Link>
          </li>
          <li>
            <Link href="/position/4">Exercise 4</Link>
          </li>
        </ul>

        <h2>💪 The Flexible Box Layout</h2>
        <ul>
          <li>
            <Link href="/flex/1">Exercise 1</Link>
          </li>
          <li>
            <Link href="/flex/2">Exercise 2</Link>
          </li>
          <li>
            <Link href="/flex/3">Exercise 3</Link>
          </li>
          <li>
            <Link href="/flex/4">Exercise 4</Link>
          </li>
        </ul>

        <h2>📐 The Grid Layout</h2>
        <ul>
          <li>
            <Link href="/grid/1">Exercise 1</Link>
          </li>
          <li>
            <Link href="/grid/2">Exercise 2</Link>
          </li>
          <li>
            <Link href="/grid/3">Exercise 3</Link>
          </li>
          <li>
            <Link href="/grid/4">Exercise 4</Link>
          </li>
          <li>
            <Link href="/grid/5">Exercise 5</Link>
          </li>
        </ul>

        <h2 className="resources">⭐️ Resources</h2>

        <h3>💪 The Flexible Box Layout</h3>
        <ul>
          <li>
            <Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              A Great Guide and Reference to CSS Flexbox
            </Link>
          </li>
          <li>
            <Link href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/">
              Josh Cameau - An Interactive Guide to Flexbox
            </Link>
          </li>
          <li>
            <Link href="https://flexbox.io/">
              Wes Bos - Free Mini Course on Flexbox
            </Link>
          </li>
        </ul>
        <h3>📐 The Grid Layout</h3>
        <ul>
          <li>
            <Link href="https://css-tricks.com/snippets/css/complete-guide-grid/">
              A Great Guide and Reference to CSS Grid
            </Link>
          </li>
          <li>
            <Link href="https://cssgridgarden.com/">
              Learn CSS Grid by Growing a Garden
            </Link>
          </li>
          <li>
            <Link href="https://gridcritters.com/">
              An Interactive Course on CSS Grid (paid)
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
