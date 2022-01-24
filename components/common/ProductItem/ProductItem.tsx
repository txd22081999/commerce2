import { TRENDING_PRODUCTS } from "components/constants/treding-products";
import { formatPrice, getUrl } from "components/utils";
import { getSizeString } from "components/utils/get-size-string";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import Button from "./Button";

const ProductItem = () => {
  const { name, price, pictures, discount, isNew, hoverPicture, sizes } =
    TRENDING_PRODUCTS[0];

  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  function onMouseEnter(): void {
    setIsHover(true);
  }

  function onMouseLeave(): void {
    setIsHover(false);
  }

  useEffect(() => {
    ref.current?.addEventListener("mouseenter", onMouseEnter);
    ref.current?.addEventListener("mouseleave", onMouseLeave);

    const myRef: React.RefObject<HTMLDivElement> = ref;

    return () => {
      myRef.current?.removeEventListener("mouseenter", onMouseEnter);
      myRef.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col h-[400px] max-w-[300px]" ref={ref}>
      <div className="flex-1 relative">
        {isHover ? (
          <div className="relative w-full h-full group">
            <Image
              src={getUrl(hoverPicture)}
              alt={name}
              layout="fill"
              className="group-hover:scale-110 duration-[3000ms]"
            />
            <div className="bg-black opacity-10 w-full h-full absolute"></div>
            <div className="w-full h-full absolute flex flex-col space-y-2 items-center justify-center">
              <Button text="Quick View" Icon={AiOutlineEye} />
              <Button text="Quick Shop" Icon={BsCart2} />
            </div>
            <p className="text-white text-sm absolute bottom-2 text-center w-full">
              {sizes && getSizeString(sizes)}
            </p>
            <AiOutlineHeart
              data-for="test"
              data-tip="Add to Wishlist"
              className="absolute left-2 top-3 w-6 h-6 text-white cursor-pointer hover:text-red-300 transition-colors duration-200"
            />
            <ReactTooltip id="test" effect="solid" place="right" />
          </div>
        ) : (
          <Image src={getUrl(pictures[0].url)} alt={name} layout="fill" />
        )}
        {isNew && (
          <div className="table absolute top-3 right-2 text-sm text-white h-14 w-14 rounded-full bg-green-new text-center">
            <span className="table-cell align-middle">New</span>
          </div>
        )}
      </div>
      <span className="mt-2 font-medium text-sm">{name}</span>
      <span className="mt-1 text-sm font-normal text-[#696969]">
        {formatPrice(price)}
      </span>
    </div>
  );
};

export default ProductItem;
