import FooterInput from "./footer.input";
import FooterLink from "./footer.link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[4rem] py-[5rem] w-full">
      <div className="max-w-[1440px] m-auto grid grid-cols-1 sm:grid-cols-4 gap-[50px_0]">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[0.75rem] leading-[1rem] text-white/50 uppercase mb-[1.5rem]">
            MAY WE HELP YOU?
          </h3>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Email Unsubscribe</FooterLink>
          <FooterLink>Sitemap</FooterLink>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[0.75rem] leading-[1rem] text-white/50 uppercase mb-[1.5rem]">
            THE COMPANY
          </h3>
          <FooterLink>About Gucci</FooterLink>
          <FooterLink>Gucci Equilibrium</FooterLink>
          <FooterLink>Code of Ethics</FooterLink>
          <FooterLink>Legal</FooterLink>
          <FooterLink>Privacy & Cookie Policy</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
        </div>
        <div className="sm:row-span-2 sm:col-span-2 flex flex-col gap-2">
          <h3 className="font-bold text-[0.75rem] leading-[1rem] text-white/50 uppercase mb-[1.5rem]">
            STORE LOCATOR
          </h3>
          <FooterInput placeHolder="Country/Region,City" />
          <h3 className="font-bold text-[0.75rem] leading-[1rem] text-white/50 uppercase my-[1.5rem]">
            SIGN UP FOR GUCCI UPDATES
          </h3>
          <p className="text-[0.75rem] leading-[1rem]">
            By entering your email address below, you consent to receiving our
            newsletter with access to our latest collections, events and
            initiatives. More details on this are provided in our Privacy Policy
          </p>
          <FooterInput placeHolder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[0.75rem] leading-[1rem] text-white/50 uppercase mb-[1.5rem]">
            GUCCI SERVICES
          </h3>
          <FooterLink>Discover our services</FooterLink>
          <FooterLink>Book an Appointment</FooterLink>
        </div>
        <div className="sm:col-span-4">
          © 2016 - 2022 Guccio Gucci S.p.A. - All rights reserved. SIAE LICENCE
          # 2294/I/1936 and 5647/I/1936
        </div>
      </div>
    </footer>
  );
};

export default Footer;
