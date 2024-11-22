import React, { useState, useEffect } from "react";
import { star, heart, hand, plane, lightning, note, drop } from "./paths";
import { getIndex, useFlubber } from "components/Animations/use-flubber";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  frame,
} from "framer-motion";

// Array of path strings and associated colors
const paths = [lightning, hand, plane, heart, note, star, drop, lightning];
const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
];

export const MorpComponent = () => {
  const [pathIndex, setPathIndex] = useState(0); // To track the current path index
  const progress = useMotionValue(pathIndex); // Motion value to track progress
  const fill = useTransform(progress, paths.map(getIndex), colors); // Transform progress to colors
  const path = useFlubber(progress, paths); // Get morphable path from progress

  useEffect(() => {
    // Animate path index change when the index changes
    const animation = animate(progress, pathIndex, {
      duration: 0.4,
      onComplete: () => {
        // Once animation is complete, update the path index
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1); // Reset path index if it exceeds available paths
        } else {
          setPathIndex(pathIndex + 1); // Increment path index
        }
      },
    });

    return () => animation.stop(); // Clean up animation when component unmounts or pathIndex changes
  }, [pathIndex]);

  return (
    <svg display={"block"} className="m-auto" width="400" height="500">
      <g transform="translate(10 10) scale(15 15)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
};
