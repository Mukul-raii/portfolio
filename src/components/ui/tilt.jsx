"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function Tilt({
  children,
  className,
  style,
  rotationFactor = 15,
  isRevese = false,
  springOptions,
}) {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [isScrollBasedUpdate, setIsScrollBasedUpdate] = useState(false);

  const { scrollY } = useScroll();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const tiltScale = isScrollBasedUpdate ? 0.3 : 1;
  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isRevese
      ? [rotationFactor * tiltScale, -rotationFactor * tiltScale]
      : [-rotationFactor * tiltScale, rotationFactor * tiltScale]
  );

  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isRevese
      ? [-rotationFactor * tiltScale, rotationFactor * tiltScale]
      : [rotationFactor * tiltScale, -rotationFactor * tiltScale]
  );

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;

    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  // When scrolling and hovering, update tilt using last mouse position
  useEffect(() => {
    const updateMouse = (e) => {
      setLastMouse({ x: e.clientX, y: e.clientY });
    };

    const updateOnScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inside =
        lastMouse.x >= rect.left &&
        lastMouse.x <= rect.right &&
        lastMouse.y >= rect.top &&
        lastMouse.y <= rect.bottom;

      if (inside) {
        if (!isHovering) setIsHovering(true);
        setIsScrollBasedUpdate(true);
        const xPos = (lastMouse.x - rect.left) / rect.width - 0.5;
        const yPos = (lastMouse.y - rect.top) / rect.height - 0.5;
        x.set(xPos);
        y.set(yPos);
      } else {
        setIsScrollBasedUpdate(false);
        if (isHovering) {
          setIsHovering(false);
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("scroll", updateOnScroll);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("scroll", updateOnScroll);
    };
  }, [isHovering, lastMouse, x, y]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        ...style,
        transform,
      }}
      onso
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
