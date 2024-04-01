import Image from "../assets/Book_an_Appointment_poster_11.avif";
import AnimatedLinks from "./animated-links";

const Services = () => {
  return (
    <section className=" max-w-[1440px] m-auto mx-[1rem] sm:mx-[4rem]">
      <div className="max-w-[432px] text-center">
        <h1 className="text-[3rem] leading-[3rem] font-light sm:pt-[80px] pb-[32px]">
          GUCCI SERVICES
        </h1>
        <div className="flex flex-col gap-5 py-[48px] items-center">
          <img src={Image} />
          <h4 className="text-[1rem] leading-[1.5] font-bold">
            BOOK AN APPOINTMENT
          </h4>
          <p className="text-[1rem] font-extralight leading-[1.5]">
            Enjoy priority access to the boutique of your choice at the time and
            date that suits you. When you arrive, your Client Advisor will guide
            you through a hand-picked selection of pieces for you to try-on and
            style.
          </p>
          <AnimatedLinks title="Book an In Store Appointment" color="black" />
        </div>
      </div>
    </section>
  );
};

export default Services;
