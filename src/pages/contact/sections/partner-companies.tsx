const companiesImageUrlList = [
  "/assets/shared/desktop/tesla-dark.svg",
  "/assets/shared/desktop/microsoft-dark.svg",
  "/assets/shared/desktop/hewlett-packard-dark.svg",
  "/assets/shared/desktop/oracle-dark.svg",
  "/assets/shared/desktop/google-dark.svg",
  "/assets/shared/desktop/nvidia-dark.svg",
];

const PartnerCompanies = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center md:gap-[40px]">
      <h2 className="h4 text-san-juan-blue/75 text-center max-w-[445px] lg:text-start">
        Join the thousands of innovators already building with us
      </h2>
      {/* Company list */}
      <div className="flex flex-wrap justify-between gap-y-10 gap-x-12 w-full max-w-[300px] mx-auto md:grid md:grid-cols-3 md:max-w-[536px] md:place-items-center shrink-0 lg:mx-0 lg:justify-items-start lg:items-center">
        {companiesImageUrlList.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} className="object-contain" />
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanies;
