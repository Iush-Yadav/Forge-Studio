"use client";
import { useState } from "react";
import { Cursor, Loader, WABtn } from "./shared";
import Nav from "./Nav";
import Hero from "./Hero";
import { MarqueeBand, Why, Services, Capabilities, Process } from "./Content";
import { ReviewForm, Pricing, FAQ, Contact, Footer } from "./Engage";

export default function Site() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <div id="cur-dot" />
      <div id="cur-ring" />
      <Cursor />
      {!ready && <Loader onDone={() => setReady(true)} />}
      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.55s ease 0.1s" }}>
        <Nav />
        <main>
          <Hero />
          <MarqueeBand />
          <Why />
          <Services />
          <Capabilities />
          <Process />
          <ReviewForm />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WABtn />
      </div>
    </>
  );
}
