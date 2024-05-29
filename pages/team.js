import styles from "@/styles/team.module.css";
import Link from "next/link";

function Team() {
  return (
    <div className={styles.root}>
      <h1>Our Team</h1>
      <p>
        We strive to do everything so that you can comfortably and productively
        work in our space and create amazing products and services.
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
          <hr/>
          <div className={styles.socialIconContainer}>
            <Link href={"https://www.instagram.com/_amaan_ansri/"} target="_blank">
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href={"https://www.linkedin.com/in/webgrasper/"} target="_blank">
              <img src="/linkedin.svg" alt="" />
            </Link>
            <Link href={"https://x.com/WebGrasper"} target="_blank">
              <img src="/twitter.svg" alt="" />
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
          <hr/>
          <div className={styles.socialIconContainer}>
            <Link href={"https://www.instagram.com/__mohammad_faraz__/"} target="_blank">
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href={"https://www.linkedin.com/in/androiabledroid/"} target="_blank">
              <img src="/linkedin.svg" alt="" />
            </Link>
            <Link href={"https://x.com/androiabledroid"} target="_blank">
              <img src="/twitter.svg" alt="" />
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
          <hr/>
          <div className={styles.socialIconContainer}>
            <Link href={"https://www.instagram.com/numanqurxshi/"} target="_blank">
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href={"https://www.linkedin.com/in/numaanqureshi/"} target="_blank">
              <img src="/linkedin.svg" alt="" />
            </Link>
            <Link href={"https://x.com/nomannaeem985"} target="_blank">
              <img src="/twitter.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
