import { useState, useEffect } from "react";
import styles from "@/styles/contact-us.module.css";
import Head from "next/head";

function ContactUs() {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "95598027-ba4d-458f-958d-a09acf001cae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setMessage("Thanks for contacting us! We'll be in touch shortly.");
        setMessageColor("green");
      } else {
        setMessage("Failed to submit form. Please try again.");
        setMessageColor("red");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageColor("red");
    }
  }

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Submit your queries through form, one of our team member will get in touch with you soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Home - Hawkflit" />
        <meta
          property="og:description"
          content="Submit your queries through form, one of our team member will get in touch with you soon."
        />
        <link rel="canonical" href="https://hawkflit.com/contact-us" />

        <meta property="og:image" content="https://hawkflit.com/el.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/el.png" sizes="any" />
      </Head>
      <div className={styles.root}>
        <section className={styles.mainContainer}>
          <div className={styles.addressContainer}>
            <h2>Address</h2>
            <p>Hawkflit</p>
            <p>Ram Ganga Vihar, Moradabad - 244001, U.P., India</p>
            <p>info@hawkflit.com</p>
            <p>+91 9927191468</p>
          </div>
          <div className={styles.formMainContainer}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <h2>Contact form</h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                minLength="3"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              />
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
                required
                minLength="3"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                required
                minLength="3"
              ></textarea>
              <button type="submit">Submit</button>
              {message && (
                <p
                  style={{
                    color: messageColor,
                    marginTop: "10px",
                    paddingLeft: "4px",
                  }}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
        <section className={styles.mapContainer}>
          <h2>
            Find us on <span>Google map</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nihil inventore fuga, suscipit veritatis quaerat soluta dolorem qui?
          </p>
          <div className={styles.mapBind}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7048.813940854446!2d78.74944428777721!3d28.868551168634138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af94bad5c919b%3A0x2dec4ee24587cb29!2sMIT%20College%20of%20Management!5e0!3m2!1sen!2sin!4v1716982697551!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
