import styles from "@/styles/team.module.css";

function Team() {
  return (
    <div className={styles.root}>
        <h1>Our Team</h1>
        <p>We strive to do everything so that you can comfortably and productively work in our space and create amazing products and services.</p>
      <div className={styles.mainContainer}>
        <div className={styles.teamMemberDetails}>
          <img
            src="https://ik.imagekit.io/94nzrpaat/Hawkflit/amaan.JPG?updatedAt=1716993517802"
            alt="Amaan image"
            loading="lazy"
          />
          <p className={styles.name}>Mohammad Amaan</p>
          <p className={styles.designation}>Co-Founder and CFO</p>
        </div>
        <div className={styles.teamMemberDetails}>
          <img
            src="https://ik.imagekit.io/94nzrpaat/Hawkflit/amaan.JPG?updatedAt=1716993517802"
            alt="Faraz image"
            loading="lazy"
          />
          <p className={styles.name}>Mohd Faraz</p>
          <p className={styles.designation}>Co-Founder and CTO</p>
        </div>
        <div className={styles.teamMemberDetails}>
          <img
            src="https://ik.imagekit.io/94nzrpaat/Hawkflit/amaan.JPG?updatedAt=1716993517802"
            alt="Numan image"
            loading="lazy"
          />
          <p className={styles.name}>Numan Naeem</p>
          <p className={styles.designation}>Co-Founder and CMO</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
