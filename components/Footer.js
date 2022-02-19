import Image from "next/image";
import footerStyles from "@styles/components/Footer.module.css";

const socials = [
  {
    image: "/images/footer-icons/envelope.svg",
    link: "",
    alt: "email",
  },
  {
    image: "/images/footer-icons/github.svg",
    link: "",
    alt: "github",
  },
  {
    image: "/images/footer-icons/instagram.svg",
    link: "",
    alt: "insta",
  },
];

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <h1 className={footerStyles.title}>atomhacks</h1>
      <div className={footerStyles.social}></div>

      <a
        href="https://vercel.com/dashboard?utm_source=atomhacks-website&utm_campaign=oss"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/footer-icons/powered-by-vercel.svg"
          width={200}
          height={100}
          alt="Powered by vercel"
        />
      </a>

      <p>© Copyright 2022, Bronx High School of Science AtomHacks.</p>
    </div>
  );
};

export default Footer;
