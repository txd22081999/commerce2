import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrRevert } from "react-icons/gr";
import { HiOutlineSupport } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";
import BenefitItem from "./components/BenefitItem";
import { IBenefit } from "./types";

const BENEFITS: IBenefit[] = [
  {
    title: "free shipping",
    desc: "Free shipping for all US order",
    Icon: <GiCommercialAirplane className="w-[40px] h-[40px]" />,
  },
  {
    title: "support 24/7",
    desc: "We support 24 hours a day",
    Icon: <HiOutlineSupport className="w-[40px] h-[40px]" />,
  },
  {
    title: "30 days return",
    desc: "Free shipping for all US order",
    Icon: <GrRevert className="w-[40px] h-[40px]" />,
  },
  {
    title: "100% payment secure",
    desc: "Payment 100% secured",
    Icon: <RiSecurePaymentLine className="w-[40px] h-[40px]" />,
  },
];

const Benefits = () => {
  return (
    <div className="w-full mt-12 mb-10 grid lg:grid-cols-4 xs:grid-cols-2 md:gap-8 xs:gap-8">
      {BENEFITS.map((benefit) => (
        <BenefitItem key={benefit.title} {...benefit} />
      ))}
    </div>
  );
};

export default Benefits;
