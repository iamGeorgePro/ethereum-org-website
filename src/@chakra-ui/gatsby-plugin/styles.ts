import { mode } from "@chakra-ui/theme-tools"

import { lightTheme as oldTheme } from "../../theme"

const styles = {
  global: (props) => ({
    /**
     * THESE ARE OLD GLOBAL STYLES - carried over from old css files
     *
     * They are needed just to keep style consistency as we transition out of
     * the old styled components to Chakra.
     *
     * TODO: remove these overrides as we adopt the new Design System and we
     * don't need the global styles anymore
     */
    body: {
      // TODO: when we have Chakra v2, this should be done by overriding the
      // native Chakra semantic tokens
      bg: mode("white", "gray.700")(props),
      lineHeight: "1.6rem",
    },
    // should be replace with https://chakra-ui.com/docs/components/text
    p: {
      margin: "0px 0px 1.45rem",
    },
    // should be replace with https://chakra-ui.com/docs/components/list
    "ul, ol": {
      margin: "0px 0px 1.45rem 1.45rem",
      padding: 0,
    },
    // YouTube embeds
    iframe: {
      display: "block",
      maxWidth: "560px",
      margin: "32px 0",
    },
    // should be replace by the usage of https://chakra-ui.com/docs/components/heading
    // also, the media queries defined on each of these heading tags are bearly used
    "h1,h2,h3,h4,h5,h6": {
      margin: "2rem 0",
      lineHeight: 1.4,
      scrollMarginTop: "navHeight",
      scrollSnapMargin: "navHeight",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      [`@media (max-width: ${oldTheme.breakpoints.m})`]: {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2rem",
      marginTop: "3rem",
      fontWeight: 600,
      [`@media (max-width: ${oldTheme.breakpoints.m})`]: {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      marginTop: "2.5rem",
      fontWeight: 600,
      [`@media (max-width: ${oldTheme.breakpoints.m})`]: {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      [`@media (max-width: ${oldTheme.breakpoints.m})`]: {
        fontSize: "1rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 450,
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    // Anchor tag styles
    // Selected specifically for mdx rendered side icon link
    ".header-anchor": {
      position: "relative !important",
      display: "initial",
      marginLeft: "-1.5em",
      paddingRight: "0.5rem !important",
      fontSize: "1rem",
      verticalAlign: "middle",

      svg: {
        display: "inline",
        fill: "primary",
        visibility: "hidden",
      },
    },
    "h1:hover,h2:hover,h3:hover,h4:hover,h5:hover,h6:hover": {
      ".header-anchor svg": {
        visibility: "visible",
      },
    },
    ".header-anchor:focus svg": {
      visibility: "visible",
    },
  }),
}

export default styles
