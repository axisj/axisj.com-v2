"use client";

import { useAppStore } from "@/store/useAppStore";
import { getLayoutHeaderEl } from "@/utils/dom/getContainer";
import { useCallback, useEffect, useState } from "react";

interface Props {}
export function OnScrollHeader({}: Props) {
  const [scroll, setScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const visualHeight = useAppStore((state) => state.visualHeight);

  const handleScroll = useCallback(() => {
    const headerWarpHeight = getLayoutHeaderEl()?.clientHeight ?? 0;
    const heightGap = visualHeight - headerWarpHeight;

    setScroll(window.scrollY > heightGap);
    setScrollPercent((window.scrollY / (window.document.body.clientHeight - window.innerHeight)) * 100);
  }, [visualHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scroll) {
      getLayoutHeaderEl()?.classList.add("scroll");
    } else {
      getLayoutHeaderEl()?.classList.remove("scroll");
    }
  }, [scroll]);

  return (
    <div>
      <div className={"bar"} style={{ width: `${scrollPercent}%` }} />

      <style jsx>{`
        div {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;

          .bar {
            transition: all 0.2s ease-in;
            height: 3px;
            background: var(--ax_space_blue);
          }
        }
      `}</style>
    </div>
  );
}
