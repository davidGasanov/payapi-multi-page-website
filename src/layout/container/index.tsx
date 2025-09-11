// Primary container for page section widths

import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1100px] py-[24px] md:py-[40px] lg:my-auto">
      {children}
    </div>
  );
};

export default Container;
