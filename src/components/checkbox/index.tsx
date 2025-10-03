import React from "react";
import { FaCheck } from "react-icons/fa6";
import { tv } from "tailwind-variants";

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  disabled,
  onChange,
  ...rest
}) => {
  const checkboxStyle = tv({
    base: "w-[24px] h-[24px] bg-san-juan-blue/25 cursor-pointer flex items-center justify-center",
    variants: {
      checked: {
        true: "bg-dark-pink",
        false: "",
      },
      disabled: {
        true: "bg-san-juan-blue/5",
        false: "",
      },
    },
  });

  return (
    <label className="inline-flex items-center cursor-pointer text-white">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="peer hidden"
        {...rest}
      />
      <div className={checkboxStyle({ checked, disabled })}>
        {checked && <FaCheck size={16} />}
      </div>
    </label>
  );
};

export default Checkbox;
