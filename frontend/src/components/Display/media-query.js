import { useMediaQuery } from "@react-hook/media-query";

// Define screen size breakpoints
const breakpoints = {
  xl: "(max-width: 1280px)",
  l: "(max-width: 1024px)",
  md: "(max-width: 750px)",
  sm: "(max-width: 500px)",
  xs: "(max-width: 375px)",
  smsLandscape: "(max-height: 400px)",
  mdLandscape: "(max-height: 500px)",
};

// Custom hook to determine screen size
export const useScreenSize = () => {
  const screenSizes = {
    xl: useMediaQuery(breakpoints.xl),
    l: useMediaQuery(breakpoints.l),
    md: useMediaQuery(breakpoints.md),
    sm: useMediaQuery(breakpoints.sm),
    xs: useMediaQuery(breakpoints.xs),
    smsLandscape: useMediaQuery(breakpoints.smsLandscape),
    mdLandscape: useMediaQuery(breakpoints.mdLandscape),
  };

  // Determine the size based on media queries
  if (screenSizes.xs) return "XS";
  if (screenSizes.sm) return "SM";
  if (screenSizes.md) return "MD";
  if (screenSizes.l) return "L";
  if (screenSizes.xl) return "XL";

  // Default to 'XL' if no media queries match
  return "XL";
};

// Export the size for use in components
export const Size = () => {
  const size = useScreenSize();
  return size;
};
