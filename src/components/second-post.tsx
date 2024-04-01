import Image1 from "../assets/Gucci_HP_Mobile_9-16_Gucci-SS24-TierII-Feb24-1602-GUC-019B-0336-R-v4.avif";
import Image2 from "../assets/Gucci_HP_Portrait_Routing2UP_ValigeriaWave1-RE-WEB.webp";
import Image3 from "../assets/HP_Gucci-SS24-Jan24-1602-GUC-012-0579-R-v4-ME-300dpi-sRGB_001_Default.jpg";
import Image4 from "../assets/Gucci_HP_Portrait_Gucci-SS24-Gucci-Eyewear-SS24-Dec23-1598-GUC-001-1088-R-v5-300dpi.avif";

import PostComponent from "./post-component";

const posts = [
  {
    id: 1,
    cat: "women",
    img: Image1,
    title: "handbags",
    button: "explore the collection",
  },
  {
    id: 2,
    cat: "women",
    img: Image2,
    title: "gucci re-web",
    button: "explore the collection",
  },
  {
    id: 3,
    cat: "women",
    img: Image3,
    title: "spring summer 2024",
    button: "explore new in",
  },
  {
    id: 4,
    cat: "accessories",
    img: Image4,
    title: "women's eyewear",
    button: "explore the styles",
  },
];

const SecondPost = () => {
  return (
    <section className="gap-[1rem] p-[1rem] grid grid-cols-1 sm:grid-cols-2">
      {posts.map((post) => {
        return (
          <PostComponent
            key={post.id}
            cat={post.cat}
            img={post.img}
            title={post.title}
            button={post.button}
          />
        );
      })}
    </section>
  );
};

export default SecondPost;
