import type React from "react";

interface PriceCardProps {
  name: string;
  description: string;
  price: number;
  features: {
    transactions: boolean;
    auth: boolean;
    identity: boolean;
    investments: boolean;
    assets: boolean;
    liabilities: boolean;
    income: boolean;
  };
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  description,
  price,
  features,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center">
        <h4 className="text-dark-pink h4 font-dm-serif-display">{name}</h4>
        <p className="body mt-[17px] text-light-san-juan-blue">{description}</p>
        <p className="text-san-juan-blue h1-small mt-2">{price}</p>
      </div>
      <hr className="w-full bg-san-juan-blue/25 text-san-juan-blue/25" />
    </div>
  );
};

export default PriceCard;
