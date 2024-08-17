"use client";
import React, { useEffect } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import gsap from "gsap";
import HamBtn from "./HamBtn/Btn";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const bulbs = document.querySelectorAll(".bulb");

    for (let i = 0; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
    }
    for (let i = 1; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
    }
  }, []);

  return (
    <>
      <div className={styles.header}>
        {/* <Image
                    src="/hammenu.png"
                    alt=""
                    width={99}
                    height={99}
                    className={styles.hamburger}
                /> */}
        <HamBtn />
        <Link href="/Registration">
          <div className={styles.btnwrapper}>
            <div className={styles.btnborder}>
              <div className={`${styles.circlewrapper} ${styles.top}`}>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
              </div>
              <div className={`${styles.circlewrapper} ${styles.bottom}`}>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
              </div>
              <div className={`${styles.circlewrapper} ${styles.curve}`}>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
              </div>
              <div
                className={`${styles.circlewrapper} ${styles.curve} ${styles.left}`}
              >
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
                <div className={`${styles.circle} bulb`}></div>
              </div>
              <div className={styles.register}>register</div>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.logo}>
        <Image
          src="/oasislogo.png"
          alt="oasis logo landing"
          width={560}
          height={205}
        />
      </div>
    </>
  );
}