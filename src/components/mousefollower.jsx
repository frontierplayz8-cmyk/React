import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react';

const MouseFollower = () => {
  const xTo = useRef(null);
  const yTo = useRef(null);

  useGSAP(() => {
    xTo.current = gsap.quickTo(".circle", "x", { duration: 0.2, ease: "power4.out" });
    yTo.current = gsap.quickTo(".circle", "y", { duration: 0.2, ease: "power4.out" });

    const handleMove = (e) => {
      xTo.current(e.pageX);
      yTo.current(e.pageY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  });

  return (
    <div className="circle"></div>
  );
};

export default MouseFollower;