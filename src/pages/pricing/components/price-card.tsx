import type React from "react";
import { formatCurrency } from "../../../utils";
import { FaCheck } from "react-icons/fa6";
import Button from "../../../components/button";
import { twMerge } from "tailwind-merge";

interface PlanCardProps {
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

const featuresList = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assets",
  "Liabilities",
  "Income",
];

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  description,
  price,
  features,
}) => {
  console.log("features: ", features);

  return (
    <div className="flex flex-col items-center gap-6 max-w-[350px] lg:items-start">
      <div className="flex flex-col items-center lg:items-start">
        <h4 className="text-dark-pink h4 font-dm-serif-display">{name}</h4>
        <p className="body mt-[17px] text-light-san-juan-blue text-center lg:text-start">
          {description}
        </p>
        <p className="text-san-juan-blue h1-small mt-2 leading-[72px]">
          {formatCurrency(price)}
        </p>
      </div>
      <hr className="w-full bg-san-juan-blue/25 text-san-juan-blue/25" />
      <ul className="flex flex-col gap-2 list-none">
        {featuresList.map((feature) => {
          const hasFeature =
            features[feature.toLowerCase() as keyof typeof features];

          return (
            <li className="flex gap-6 items-center" key={feature}>
              <div className="w-3">
                {hasFeature && <FaCheck color="#ba4270" />}
              </div>
              <p
                className={twMerge(
                  "font-public-sans text-[16px] leading-[28px] text-san-juan-blue",
                  !hasFeature && "opacity-50"
                )}
              >
                {feature}
              </p>
            </li>
          );
        })}
      </ul>
      <hr className="w-full bg-san-juan-blue/25 text-san-juan-blue/25" />
      <Button variant="secondary-dark">Request Access</Button>
    </div>
  );
};

export default PlanCard;
