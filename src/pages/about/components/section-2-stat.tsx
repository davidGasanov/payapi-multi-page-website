interface Section2StatProps {
  title: string;
  value: string;
}

const Section2Stat = ({ title, value }: Section2StatProps) => {
  return (
    <div className="flex flex-col items-center w-full md:py-4 md:border-y-[1px] md:border-san-juan-blue/25 md:items-start">
      <h3 className="body text-san-juan-blue/70 !text-[16px]">{title}</h3>
      <p className="h1-small leading-[72px] text-dark-pink ">{value}</p>
    </div>
  );
};

export default Section2Stat;
