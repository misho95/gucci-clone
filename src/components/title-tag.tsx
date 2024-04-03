type PropsType = {
  title: string;
};

const TitleTag = ({ title }: PropsType) => {
  return (
    <h2 className="backdrop-blur-[0.25rem] bg-white/10 text-white text-[0.75rem] font-bold py-[4pt] px-[8pt] rounded-[2pt] uppercase absolute top-[2rem] lg:top-[5rem] left-1/2 -translate-x-1/2 select-none z-20">
      {title}
    </h2>
  );
};

export default TitleTag;
