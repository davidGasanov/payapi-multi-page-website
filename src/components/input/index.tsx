import type React from "react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
    helperText?: string;
    multiline?: boolean;
  };

const Input: React.FC<InputProps> = ({ error, multiline, ...props }) => {
  ////////////////////////// [Setup] /////////////////////////
  const Tag = multiline ? "textarea" : "input";

  ////////////////////////// [Setup] /////////////////////////
  const InputVars = tv({
    base: "peer outline-none font-public-sans text-san-juan-blue placeholder-san-juan-blue opacity-50 transition-all duration-200 ease-in-out [&:not(:placeholder-shown)]:opacity-100 resize-none w-full",
    variants: {
      isFocused: {
        false: "",
        true: "opacity-100",
      },
      error: {
        false: "",
        true: "text-error placeholder-error",
      },
    },
    compoundVariants: [
      {
        isFocused: true,
        error: true,
        class: "text-error placeholder-error",
      },
    ],
  });

  const InputContainerVars = tv({
    base: "px-[20px] pb-4 border-b-[1px] border-b-san-juan-blue/50 transition-all duration-200 ease-in-out",
    variants: {
      isFocused: {
        false: "",
        true: "border-b-san-juan-blue",
      },
      error: {
        false: "",
        true: "border-b-error",
      },
      isEmpty: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        error: true,
        isFocused: true,
        class: "border-b-error",
      },
      {
        error: true,
        isFocused: false,
        isEmpty: false,
        class: "border-b-error",
      },
      {
        error: false,
        isFocused: false,
        isEmpty: false,
        class: "border-b-san-juan-blue",
      },
    ],
  });

  ////////////////////////// [State] /////////////////////////
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  ////////////////////////// [Functional logic] /////////////////////////
  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(true);
    props.onFocus?.(e as any); // optional, see note below
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    props.onBlur?.(e as any);
  };

  return (
    <div className="flex flex-col max-w-[284px]">
      <div
        className={twMerge(
          InputContainerVars({ isFocused, error: Boolean(error), isEmpty })
        )}
      >
        <Tag
          rows={multiline ? 3 : 1}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={(e) => setIsEmpty(e.currentTarget.value === "")}
          type="text"
          {...props}
          className={InputVars({ isFocused, error: Boolean(error) })}
        />
      </div>
      <p
        className={twMerge(
          "pl-[20px] text-[11px] mt-2 text-error font-medium",
          isFocused ? "opacity-100" : "opacity-50"
        )}
      >
        {error}
      </p>
    </div>
  );
};

export default Input;
