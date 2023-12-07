/* eslint-disable react/no-unescaped-entities */

export const Footer = () => {
  return (
    <section
      id="footer"
      className="relative z-50 mx-[100px] mt-[100px]  justify-center flex  items-center  py-[40px]   border-t-2 border-[#D9D9D9]"
    >
      <p className="text-base text-center">
        Copyright © {new Date().getFullYear()} SekOps. All rights reserved.
      </p>
    </section>
  );
};
