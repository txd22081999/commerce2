import cx from "classnames";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import Quantity from "./components/Quantity";
import { IMenuTag } from "./types";

const MENU_ITEMS: IMenuTag[] = [
  { title: "shop", tag: "new", tagColor: "bg-[#01bad4]" },
  { title: "product" },
  { title: "sale", tag: "hot", tagColor: "bg-[#ffa800]" },
  { title: "portfolio" },
  { title: "lookbook" },
  { title: "blog" },
];

const iconStyle: string = "text-2xl relative hover:text-hover cursor-pointer";

const Header = () => {
  const [y, setY] = useState<number>(0);
  const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (e: any): void => {
      const window = e.currentTarget;
      setY(window.scrollY);
      if (y < window.scrollY) {
        setIsScrollUp(false);
      } else if (y > window.scrollY) {
        setIsScrollUp(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [y]);

  return (
    <>
      <header
        className={cx(
          "flex bg-white justify-between align-middle h-[70px] px-4 w-full transition-transform duration-300 sticky z-50",
          !isScrollUp ? "top-[-70px]" : "top-0",
          y > 4 && "shadow-[1px_1px_3px_0_rgba(0,0,0,0.1)]"
        )}
      >
        <span className="font-bold text-4xl py-4 tracking-tighter">kalles</span>

        <ul className="capitalize flex text-sm text-gray-800 h-full">
          {MENU_ITEMS.map(({ title, tag, tagColor }) => (
            <li
              key={title}
              className="px-[17.5px] hover:text-hover transition-colors duration-200 h-full flex items-center"
            >
              <a href="#" className="relative">
                {title}
                {tag && (
                  <span
                    className={cx(
                      "absolute top-[-60%] left-[70%] text-[9px] px-[7px] py-[1px] text-white rounded-lg leading-4",
                      tagColor
                    )}
                  >
                    {tag}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-[12px] items-center">
          <div className={iconStyle}>
            <BiSearch />
          </div>
          <div className={iconStyle}>
            <AiOutlineUser />
          </div>
          <div className={iconStyle}>
            <AiOutlineHeart className="font-light " />
            <Quantity amount={1} />
          </div>
          <div className={iconStyle}>
            <BsCart2 />
            <Quantity amount={2} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
