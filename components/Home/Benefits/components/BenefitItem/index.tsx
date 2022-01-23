import { IBenefit } from "components/Home/Benefits/types";
import React from "react";

const BenefitItem = ({ title, desc, Icon }: IBenefit) => {
  return (
    <section className="flex space-x-3">
      {Icon}
      <div className="flex flex-col gap-1 sm:gap-2">
        <h2 className="uppercase text-sm font-[600] text-[14px] sm:text-[15px] text-primary-text">
          {title}
        </h2>
        <p className="text-[14px] sm:text-sm font-normal text-sub-text">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default BenefitItem;
