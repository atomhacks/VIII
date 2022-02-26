import Image from "next/image";
import footerStyles from "@styles/components/Footer.module.css";

const socials = [
  {
    image: "/images/footer-icons/envelope.svg",
    link: "mailto:atomhacks@bxscience.edu",
    alt: "email",
  },
  {
    image: "/images/footer-icons/github.svg",
    link: "https://github.com/atomhacks",
    alt: "github",
  },
  {
    image: "/images/footer-icons/instagram.svg",
    link: "https://www.instagram.com/bxsciatomhacks/",
    alt: "insta",
  },
  {
    image: "/images/footer-icons/facebook.svg",
    link: "https://www.facebook.com/BxSciHackathoners",
    alt: "facebook",
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

      <div className={footerStyles.iconDiv}>
        {socials.map((social, i) => (
          <div key={i} className={footerStyles.icon}>
            <a href={social.link}>
              <Image
                src={social.image}
                alt={social.alt}
                width={30}
                height={30}
              />
            </a>
          </div>
        ))}
      </div>

      <p>© Copyright 2022, Bronx High School of Science AtomHacks.</p>
    </div>
  );
};

export default Footer;
