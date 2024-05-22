import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Hawkflit</title>
        <meta
          name="description"
          content="Hawkflit is a software development company that is planning to launch a cross-platform mobile application for all business sectors in the future. It also offers software solutions such as web and mobile development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Home - Hawkflit"
        />
        <meta
          property="og:description"
          content="Hawkflit is a software development company that is planning to launch a cross-platform mobile application for all business sectors in the future. It also offers software solutions such as web and mobile development."
        />
        <link rel="canonical" href="https://hawkflit.com/" />

        <meta
          property="og:image"
          content="https://webgrasper.vercel.app/el.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/el.png" sizes="any" />
      </Head>
      <main className={styles.root}>
        <section className={styles.section1}>
          <div className={styles.heroContainer1}>
            <h2>
              The <span>next generation</span> social interaction app for{" "}
              <span>businesses.</span>
            </h2>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className={styles.heroContainer2}>
            <img src="/Home.png" alt="" />
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.statsContainer}>
            <h3>3800+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.statsContainer}>
            <h3>230+</h3>
            <p>Trusted by company</p>
          </div>
          <div className={styles.statsContainer}>
            <h3>1000+</h3>
            <p>Positive feedback</p>
          </div>
        </section>
        <section className={styles.section3}>
          <div className={styles.section3Container1}>
            <img src="/Signin.png" alt="" />
          </div>
          <div className={styles.section3Container2}>
            <h2>
              You do the <span>business</span>, we'll handle the{" "}
              <span>privacy.</span>
            </h2>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.section4Container1}>
            <h2>
              <span>Connect</span>, <span>Share</span>, and <span>Grow</span>{" "}
              with Our Product <span>Newsfeed</span>.
            </h2>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className={styles.section4Container2}>
            <img src="/newsfeed.png" alt="" />
          </div>
        </section>
        <section className={styles.section5}>
          <div className={styles.section5Container1}>
            <h3>What people are saying about us</h3>
          </div>
          <div className={styles.section5Container2}>
            <div className={styles.reviewContainer}>
              <p>''</p>
              <p>
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className={styles.reviewerContainer}>
                <img src="/reviewer1.webp" alt="" />
                <div className={styles.reviewerProfileDetails}>
                  <p>Herman Jenson</p>
                  <p>Founder & Leader</p>
                </div>
              </div>
            </div>
            <div className={styles.reviewContainer}>
              <p>''</p>
              <p>
                Money makes your life easier. If you're lucky to have it, you're
                lucky.
              </p>
              <div className={styles.reviewerContainer}>
                <img src="/reviewer2.webp" alt="" />
                <div className={styles.reviewerProfileDetails}>
                  <p>Steve Mark</p>
                  <p>Founder & Leader</p>
                </div>
              </div>
            </div>
            <div className={styles.reviewContainer}>
              <p>''</p>
              <p>
                It is usually people in the money business, finance, and
                international trade that are really rich.
              </p>
              <div className={styles.reviewerContainer}>
                <img src="/reviewer3.webp" alt="" />
                <div className={styles.reviewerProfileDetails}>
                  <p>Kenn Gallagher</p>
                  <p>Founder & Leader</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section6}>
          <div className={styles.section6Container1}>
            <img src="/Chats.png" alt="" />
          </div>
          <div className={styles.section6Container2}>
            <h2>
              Chat <span>Securely,</span> Simply.
            </h2>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </section>
        <section className={styles.section7}>
          <div className={styles.section7Container1}>
            <div className={styles.section7SubContainer1}>
              <h3>Let's try our mobile app now!</h3>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <button type="button">Get Started</button>
          </div>
        </section>
      </main>
    </>
  );
}
