import Home from "@/app/components/Home";
import React from "react";
import Link from "next/link";
import styles from "./home.module.css";

<main className={styles.mainContainer}>
  <h1 className="text-zinc-900 font-medium px-2 text-center">
    Welcome to the homepage!
  </h1>
  <Link legacyBehavior href="/home">
    <a>Go to the home route</a>
  </Link>
</main>;
