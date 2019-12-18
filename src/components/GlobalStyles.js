import { createGlobalStyle } from "styled-components"
import { normalize, lighten } from "polished"
import {
  fontFamilies,
  colors,
  transitions,
  boxShadows,
} from "../utilities/styleHelpers"

const GlobalStyles = createGlobalStyle`
    ${normalize()}

    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:500,700|Raleway&display=swap');

    html {
        box-sizing: border-box;
        font-family: ${fontFamilies.sansSerif};
        font-size: 10px;
        color: ${lighten(0.1, colors.darkGrey)};
        background-color: ${colors.darkGrey};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff;
        overflow-x: hidden;
    }

    ::selection {
        color: #fff;
        background: #333;
    }

    p, ul, li, blockquote, span {
        color: rgba(26, 26, 26, 0.7);
        font-size: 2rem;
        line-height: 1.5;
        font-family: ${fontFamilies.serif};
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${fontFamilies.sansSerif};
        font-weight: normal;
    }

    h1 {
        font-size: 3.2rem;
        line-height: 1;
    }
    h2 {
        font-size: 2.8rem;
        line-height: 1.1;
    }
    h3 {
        font-size: 2.5rem;
        line-height: 1.2;
    }
    h4 {
        font-size: 2.2rem;
        line-height: 1.3;
    }
    h5 {
        font-size: 2rem;
        line-height: 1.5;
    }
    h6 {
        font-size: 1.6rem;
        line-height: 1.5;
    }

    img {
        width: 100%;
    }

    label {
        font-size: 1.4rem;
        margin-bottom: .5rem;
        display: block;
    }

    input, textarea, select {
        outline: none;
        border: 1px solid ${colors.darkGrey};
        font-size: 1.8rem;
        padding: 1rem;
        margin-bottom: 1.5rem;
        width: 100%;
        border-radius: 4px;
        &:focus {
            border: 1px solid ${colors.primary}
        }
    }

    button {
        background-color: ${colors.primary};
        display: inline-block;
        padding: 1.5rem 2.5rem;
        border: 0;
        border-radius: 4rem;
        color: white;
        text-decoration: none;
        font-size: 1.6rem;
        outline: none;
        cursor: pointer;
        transition: ${transitions(
          "box-shadow",
          "transform",
          "background-color"
        )};
        transform: translate3d(0, 0, 0);
        box-shadow: ${boxShadows.down};
        &:hover,
        &:active,
        &:focus {
            transform: translate3d(0, -0.25rem, 0);
            box-shadow: ${boxShadows.up};
            background-color: ${lighten(0.02, colors.primary)};
        }
    }
`

export default GlobalStyles
