"use client"
import Image from "next/image";
import ThreeJSLogo from "../../components/ThreeJSLogo.client";
//@ts-ignore
import styles from "./default.module.css"

export default function Home() {
    return (
        <div >
            {/* <video className={styles.video} autoPlay loop playsInline muted src="/Logo3d.mp4"> </video> */}
            <ThreeJSLogo />
        </div>
    );
}
