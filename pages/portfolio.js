import styles from "@/styles/portfolio.module.css";
import Link from "next/link";

function Portfolio() {
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <h1>Our Latest <span>Work</span></h1>
        <div className={styles.projectContainer}>
          <h2>Pitch Black Recovery Project</h2>
          <div className={styles.techNameContainer}>
            <p>Wordpress</p>
            <p>HTML</p>
            <p>SQL</p>
            <p>GitHub</p>
          </div>
          <p>
            The Perfect Android Recovery for your device! PBRP provides the most
            advanced Open Source Android Recovery to troubleshoot your device on
            the GO!
          </p>
          <Link href={'https://pitchblackrecovery.com/'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/PB-desktop.PNG?updatedAt=1717067452742"
              alt="PBRP-desktop"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/PB-mobile.PNG?updatedAt=1717067450990"
              alt="PBRP-mobile"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>Delta Line</h2>
          <div className={styles.techNameContainer}>
            <p>Next</p>
            <p>Vercel</p>
          </div>
          <p>
            Get your stabilizers, power transformers and E Panels from us at
            Delta Line. Where quality and performance meet in our top notch
            products.
          </p>
          <Link href={'https://delta-line.in/'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/DL-desktop.PNG?updatedAt=1717078594639"
              alt="DL-desktop"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/DL-mobile.PNG?updatedAt=1717078594515"
              alt="DL-mobile"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>WebGrasper</h2>
          <div className={styles.techNameContainer}>
            <p>Next</p>
            <p>Vercel</p>
          </div>
          <p>
            Explore trending tech insights, programming tips, and top gadgets.
            Stay informed on comparisons, details, and discover the latest in
            technology.
          </p>
          <Link href={'https://webgrasper.vercel.app/'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/WG-desktop.PNG?updatedAt=1717078833976"
              alt="WG-desktop"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/WG-mobile.PNG?updatedAt=1717078833678"
              alt="WG-mobile"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>Burger App UI Design</h2>
          <div className={styles.techNameContainer}>
            <p>Figma</p>
          </div>
          <p>
            Locate and customize the most delicious burgers in town. Browse
            local restaurants, read reviews, and track your order.
          </p>
          <Link href={'https://www.figma.com/design/jzs11Xi2WEoeRdTkXE5KQw/Burger-application-design?node-id=0-1&t=W2vl2jqk06PfuWoX-0'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/BA-figma.png?updatedAt=1717079590390"
              alt="BA-figma"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>Sarte Living</h2>
          <div className={styles.techNameContainer}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
          <p>
            Sarte Living is Leading Manufacturer, Supplier and Exporter of metal
            coffee, console, and side tables in India. We Supply Coffee table
            all across Globe.
          </p>
          <Link href={'https://sarteliving.com/'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/SL-desktop.PNG?updatedAt=1717080192220"
              alt="SL-desktop"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/SL-mobile.PNG?updatedAt=1717080191803"
              alt="SL-mobile"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>Eduminati UI Design</h2>
          <div className={styles.techNameContainer}>
            <p>Figma</p>
          </div>
          <p>
            Find top-rated institutions based on feedback from students and
            ratings. Compare and select the best option for your goals.
          </p>
          <Link href={'https://www.figma.com/design/Y4EJUCzBOvxUhGFvwiIRWQ/Educational-platform?node-id=0-1&t=TQqAjgXtOrQrSE94-0'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/EM-figma.png?updatedAt=1717080749572"
              alt="EM-figma"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>Sports App Design</h2>
          <div className={styles.techNameContainer}>
            <p>Figma</p>
          </div>
          <p>
            Get live sports scores, news, and information. Follow your personal
            teams for real-time game updates.
          </p>
          <Link href={'https://www.figma.com/design/urSNJE6Jis7eusbeWwNQpT/Traininig-app-ui?node-id=0-1&t=QEibp35DBfyD8L0i-0'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/SA-figma.png?updatedAt=1717080985874"
              alt="SA-figma"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={styles.projectContainer}>
          <h2>VlsiMaster</h2>
          <div className={styles.techNameContainer}>
            <p>Wordpress</p>
            <p>SQL</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <p>
            Do you face difficulty in understanding each topic of the subject
            you love ? With verification masters, get 360 degrees control on
            every topic you want to the conqueror. Enhance your professional
            acumen with Verification Master’s exclusive quiz.
          </p>
          <Link href={'https://vlsimaster.com/'} className={styles.imagesContainer}>
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/VM-desktop.PNG?updatedAt=1717081256892"
              alt="VM-desktop"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/94nzrpaat/Hawkflit/VM-moble.PNG?updatedAt=1717081256816"
              alt="VM-mobile"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
