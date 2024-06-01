import styles from "@/styles/team.module.css";
import Head from "next/head";
import Link from "next/link";

function Team() {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta
          name="description"
          content="Small team with the great dreams is always available when needed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Home - Hawkflit" />
        <meta
          property="og:description"
          content="Small team with the great dreams is always available when needed."
        />
        <link rel="canonical" href="https://hawkflit.com/team" />

        <meta property="og:image" content="https://hawkflit.com/el.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/el.png" sizes="any" />
      </Head>
      <div className={styles.root}>
        <h1>
          Our <span>Team</span>
        </h1>
        <p>
          We strive to do everything so that you can comfortably and
          productively work in our space and create amazing products and
          services.
        </p>
        <div className={styles.mainContainer}>
          <div className={styles.teamMemberDetails}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/amaan.JPG?updatedAt=1716993517802"
              alt="Amaan image"
              loading="lazy"
            />
            <p className={styles.name}>Mohammad Amaan</p>
            <p className={styles.designation}>Co-Founder and CFO</p>
            <hr />
            <div className={styles.socialIconContainer}>
              <Link
                href={"https://www.instagram.com/_amaan_ansri/"}
                target="_blank"
              >
                <img src="/instagram.svg" alt="instagram icon" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/webgrasper/"}
                target="_blank"
              >
                <img src="/linkedin.svg" alt="linkedin icon" />
              </Link>
              <Link href={"https://x.com/WebGrasper"} target="_blank">
                <img src="/twitter.svg" alt="twitter icon" />
              </Link>
            </div>
          </div>
          <div className={styles.teamMemberDetails}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/WhatsApp%20Image%202024-05-29%20at%2021.32.17_20a17324.jpg?updatedAt=1716998676592"
              alt="Faraz image"
              loading="lazy"
            />
            <p className={styles.name}>Mohd Faraz</p>
            <p className={styles.designation}>Co-Founder and CTO</p>
            <hr />
            <div className={styles.socialIconContainer}>
              <Link
                href={"https://www.instagram.com/__mohammad_faraz__/"}
                target="_blank"
              >
                <img src="/instagram.svg" alt="instagram icon" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/androiabledroid/"}
                target="_blank"
              >
                <img src="/linkedin.svg" alt="linkedin icon" />
              </Link>
              <Link href={"https://x.com/androiabledroid"} target="_blank">
                <img src="/twitter.svg" alt="twitter icon" />
              </Link>
            </div>
          </div>
          <div className={styles.teamMemberDetails}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/IMG_20230707_143813_914.jpg?updatedAt=1716998823314"
              alt="Numan image"
              loading="lazy"
            />
            <p className={styles.name}>Numan Naeem</p>
            <p className={styles.designation}>Co-Founder and CMO</p>
            <hr />
            <div className={styles.socialIconContainer}>
              <Link
                href={"https://www.instagram.com/numanqurxshi/"}
                target="_blank"
              >
                <img src="/instagram.svg" alt="instagram icon" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/numaanqureshi/"}
                target="_blank"
              >
                <img src="/linkedin.svg" alt="linkedin icon" />
              </Link>
              <Link href={"https://x.com/nomannaeem985"} target="_blank">
                <img src="/twitter.svg" alt="twitter icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
