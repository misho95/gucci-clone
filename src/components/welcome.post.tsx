import image from "../assets/Orizzontale_NoLogo.avif";
import AnimatedPostCover from "./animated-post-cover";

const WelcomePost = () => {
  return (
    <div className="w-full h-fit relative select-none pointer-events-none">
      <img src={image} />

      <AnimatedPostCover
        title={{ button: "explore men's loafers", h3: "Horsebit 1953" }}
      />
    </div>
  );
};

export default WelcomePost;
