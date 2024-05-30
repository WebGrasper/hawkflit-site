import styles from "@/styles/terms-and-conditions.module.css";
import Head from "next/head";

function TermsAndConditions() {
  return (
    <>
    <Head>
        <title>Terms & conditions</title>
        <meta
          name="description"
          content="The Hawkflit policies is mentioned, and we follow a transparent system to build a trust with people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Home - Hawkflit" />
        <meta
          property="og:description"
          content="The Hawkflit policies is mentioned, and we follow a transparent system to build a trust with people."
        />
        <link rel="canonical" href="https://hawkflit.com/terms-and-conditions" />

        <meta property="og:image" content="https://hawkflit.com/el.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/el.png" sizes="any" />
      </Head>
    <div className={styles.root}>
      <section className={styles.mainContainer}>
        <h1>Terms and conditions</h1>
        <p>
          Welcome to <span>Hawkflit Private Limited</span>. We are delighted to have you as a valued
          client. Before proceeding, we kindly request that you carefully review
          and understand the following terms and conditions governing the use of
          our services. Your use of our services signifies your acceptance and
          agreement to these terms.
        </p>
        <div className={styles.tncContainer}>
          <h2>1. Services</h2>
          <p>Hawkflit Private Limited offers a comprehensive suite of IT solutions, including <span>software development, web development, app development, cloud services, and user interface.</span> We are committed to delivering high-quality services tailored to meet your specific needs.</p>
          <h2>2. User Obligations</h2>
          <p>As a user, please provide accurate information, safeguard your login details, and refrain from illegal activities on our platform. These actions ensure a secure and positive experience for everyone.</p>
          <h2>3. Payment and Billing</h2>
          <p>Payment terms, pricing details, and billing information for our services are outlined in separate agreements or invoices. Failure to adhere to payment terms may result in the suspension or termination of services.</p>
          <h2>4. Intellectual Property</h2>
          <p>All intellectual property rights related to our services, including software, designs, logos, and content, are the property of Hawkflit Private Limited. You agree not to use, reproduce, or distribute our intellectual property without prior written consent.</p>
          <h2>5. Limitation of Liability</h2>
          <p>Hawkflit Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not guarantee the accuracy, completeness, or reliability of information provided through our services.</p>
          <h2>6. Privacy Policy</h2>
          <p>Our privacy policy outlines how we collect, use, and protect your personal information. By using our services, you agree to our privacy policy.</p>
          <h2>7. Termination</h2>
          <p>Hawkflit Private Limited reserves the right to terminate or suspend your access to our services at any time for violating these terms and conditions or engaging in improper conduct.</p>
          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the <span>Republic of India.</span> Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Moradabad, Uttar Pradesh, India.</p>
          <h2>9. Amendments</h2>
          <p>Hawkflit Private Limited reserves the right to amend these terms and conditions at any time without prior notice. Your continued use of our services after such amendments constitutes acceptance of the revised terms.</p>
          <hr/>
          <h2>Contact Us</h2>
          <p>If you have any questions, concerns, or feedback regarding these terms and conditions, please don't hesitate to contact us at <span>info@hawkflit.com</span>. We are here to assist you and ensure a positive experience with our services.</p>
        </div>
      </section>
    </div>
    </>
  );
}

export default TermsAndConditions;
