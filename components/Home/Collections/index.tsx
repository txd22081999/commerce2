import cx from "classnames";
import { CATEGORY_BANNERS } from "components/constants";
import { getUrl } from "components/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collections = () => {
  const imageStyle: string = "object-cover group-hover:scale-110 duration-500";
  const buttonStyle: string =
    "capitalize px-10 py-3 font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] text-sm";
  const containerStyle: string = "relative cursor-pointer group";

  return (
    <section className="flex sm:space-x-7 flex-col sm:flex-row h-[150vw] sm:h-fit xs:space-y-3">
      <Link href="/collection/women" passHref>
        <div
          className={cx(
            containerStyle,
            "flex-1 lg:h-[630px] md:h-[70vw] sm:h-[630px] xs:h-[600px]"
          )}
        >
          <Image
            src={getUrl(CATEGORY_BANNERS[0])}
            alt="women"
            layout="fill"
            className={imageStyle}
          />
          <button className={buttonStyle}>women</button>
        </div>
      </Link>

      <div className="flex-1 flex flex-col space-y-7 xs:space-y-3">
        <Link href="/collection/accessories" passHref>
          <div className={cx(containerStyle, "flex-[0.9]")}>
            <Image
              src={getUrl(CATEGORY_BANNERS[1])}
              alt="accessories"
              layout="fill"
              className={imageStyle}
            />
            <button className={buttonStyle}>accessories</button>
          </div>
        </Link>

        <Link href="/collection/trending" passHref>
          <div className={cx(containerStyle, "flex-[1.1]")}>
            <Image
              src={getUrl(CATEGORY_BANNERS[2])}
              alt="spring outfit"
              layout="fill"
              className={imageStyle}
            />
            <button className={buttonStyle}>spring outfit</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Collections;
