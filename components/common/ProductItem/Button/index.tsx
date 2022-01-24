import cx from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  Icon: FC<{ className: string }>;
}

const Button = ({ text, Icon }: IButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHover, setIsHover] = useState<boolean>();

  function onMouseEnter(): void {
    setIsHover(true);
  }

  function onMouseLeave(): void {
    setIsHover(false);
  }

  useEffect(() => {
    if (!ref.current) return;
    ref.current?.addEventListener("mouseenter", onMouseEnter);
    ref.current?.addEventListener("mouseleave", onMouseLeave);

    const myRef: React.RefObject<HTMLButtonElement> = ref;

    return () => {
      myRef.current?.removeEventListener("mouseenter", onMouseEnter);
      myRef.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      className={cx(
        "py-3 px-8 rounded-full bg-white text-sm w-fit relative font-medium hover:bg-gray-800 text-center overflow-hidden",
        isHover && styles.hover
      )}
    >
      <div className={cx("duration-200", styles.text)}>{text}</div>
      <div
        className={cx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-full text-white duration-200",
          styles.icon
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
    </button>
  );
};

export default Button;
