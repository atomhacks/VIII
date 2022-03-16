import Image from "next/image";
import sponsorStyles from "@styles/sections/Sponsor.module.css";

const Sponsors = [
  {
    name: "digital ocean",
    path: "digital_ocean.svg",
    link: "https://www.digitalocean.com/",
  },
  {
    name: "wolfram language",
    path: "wolfram.png",
    link: "https://www.wolfram.com/language/",
  },
  {
    name: "sticker giant",
    path: "sticker_giant.png",
    link: "https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event",
  },
  {
    name: "sticker mule",
    path: "sticker_mule.png",
    link: "https://www.stickermule.com/",
  },
  {
    name: "vercel",
    path: "vercel.png",
    link: "https://vercel.com/",
  },
  {
    name: "echo3d",
    path: "echo3d.png",
    link: "https://www.echo3d.co/",
  },
  {
    name: "alumni foundation",
    path: "alumni_foundation.png",
    link: "",
  },
];

const Sponsor = () => {
  return (
    <div className={sponsorStyles.sponsorDiv} id="sponsors">
      <h1 className={sponsorStyles.title}>Sponsors</h1>
      <p className={sponsorStyles.sub}>
        Thanks to our wonderful sponsors for making AtomHacks possible!
      </p>

      <div className={sponsorStyles.logos}>
        <a
          href="https://smallplanet.com/"
          target="_blank"
          rel="noreferrer"
          className={sponsorStyles.logo}
        >
          <Image
            src="/images/sponsors/small_planet.png"
            alt="logo"
            width={250}
            height={300}
          />
        </a>
        {Sponsors.map((spons, i) => (
          <a href={spons.link} key={i} target="_blank" rel="noreferrer">
            <img
              src={`/images/sponsors/${spons.path}`}
              alt={spons.name}
              className={sponsorStyles.logo}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
