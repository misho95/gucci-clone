import Image1 from "../assets/Gucci_HP_Mobile_9-16_Gucci-SS24-TierII-Feb24-1602-GUC-019B-0336-R-v4.avif";
import Image2 from "../assets/Gucci_HP_Portrait_Routing2UP_ValigeriaWave1-RE-WEB.webp";
import AnimatedPostCover from "./animated-post-cover";
import TitleTag from "./title-tag";

const SecondPost = () => {
  return (
    <section className="gap-[1rem] p-[1rem] flex flex-row">
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"women"} />
        <img src={Image1} className="w-full h-full object-cover" />
        <AnimatedPostCover
          title={{ h3: "handbags", button: "explore the collection" }}
          upperCase={true}
        />
      </figure>
      <figure className="aspect-[0.75] w-full h-fit relative">
        <TitleTag title={"women"} />
        <img src={Image2} className="w-full h-full object-cover" />
        <AnimatedPostCover
          title={{ h3: "gucci re-web", button: "explore the collection" }}
          upperCase={true}
        />
      </figure>
    </section>
  );
};

export default SecondPost;
