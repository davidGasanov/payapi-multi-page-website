const AboutImageSection = () => {
  return (
    <div className="w-full relative mt-[76px] md:mt-[92px] lg:mt-[100px]">
      {/* Mobile image */}
      <img
        src="assets/about/mobile/image-team-members.jpg"
        alt="Team members"
        className="w-full md:hidden"
      />
      {/* Tablet image */}
      <img
        src="assets/about/tablet/image-team-members.jpg"
        alt="Team members"
        className="w-full hidden md:block lg:hidden"
      />
      {/* Desktop image */}
      <img
        src="assets/about/desktop/image-team-members.jpg"
        alt="Team members"
        className="w-full hidden lg:block"
      />

      {/* Bg image */}
      <div className="hidden lg:block absolute w-[780px] h-[780px] bg-san-juan-blue/15 rounded-full -left-[520px] top-1/2 -translate-y-1/2 -z-10" />
    </div>
  );
};

export default AboutImageSection;
