import Image1 from "../assets/Gucci_HP_Mobile_9-16_Gucci-SS24-TierII-Feb24-1602-GUC-019B-0336-R-v4.avif";
import Image2 from "../assets/Gucci_HP_Portrait_Routing2UP_ValigeriaWave1-RE-WEB.webp";
import Image3 from "../assets/HP_Gucci-SS24-Jan24-1602-GUC-012-0579-R-v4-ME-300dpi-sRGB_001_Default.jpg";
import Image4 from "../assets/Gucci_HP_Portrait_Gucci-SS24-Gucci-Eyewear-SS24-Dec23-1598-GUC-001-1088-R-v5-300dpi.avif";
import AnimatedPostCover from "./animated-post-cover";
import TitleTag from "./title-tag";

const SecondPost = () => {
  return (
    <section className="gap-[1rem] p-[1rem] grid grid-cols-2">
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"women"} />
        <img
          src={Image1}
          className="w-full h-full object-cover brightness-[0.90]"
        />
        <AnimatedPostCover
          title={{ h3: "handbags", button: "explore the collection" }}
          upperCase={true}
        />
      </figure>
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"women"} />
        <img
          src={Image2}
          className="w-full h-full object-cover brightness-[0.90]"
        />
        <AnimatedPostCover
          title={{ h3: "gucci re-web", button: "explore the collection" }}
          upperCase={true}
        />
      </figure>
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"women"} />
        <img
          src={Image3}
          className="w-full h-full object-cover brightness-[0.90]"
        />
        <AnimatedPostCover
          title={{ h3: "spring summer 2024", button: "explore new in" }}
          upperCase={true}
        />
      </figure>
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"accessories"} />
        <img
          src={Image4}
          className="w-full h-full object-cover brightness-[0.90]"
        />
        <AnimatedPostCover
          title={{ h3: "women's eyewear", button: "explore the styles" }}
          upperCase={true}
        />
      </figure>
    </section>
  );
};

export default SecondPost;
