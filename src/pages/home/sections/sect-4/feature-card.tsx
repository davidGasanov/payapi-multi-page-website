interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureCard = ({ title, description, imageUrl }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-[33px] items-center max-w-[328px] lg:max-w-[350px]">
      <img className="w-[106px] h-[106px] object-contain" src={imageUrl} />
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-public-sans text-san-juan-blue text-[18px] leading-[25px] font-bold">
          {title}
        </h3>
        <p className="font-public-sans text-light-san-juan-blue text-[15px] leading-[25px] tracking-[-0.12px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
