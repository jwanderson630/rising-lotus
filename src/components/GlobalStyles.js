import { createGlobalStyle } from "styled-components"
import { normalize, lighten } from "polished"
import { fontFamilies, colors } from "../utilities/styleHelpers"

const GlobalStyles = createGlobalStyle`
    ${normalize()}

    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,600|Raleway&display=swap');

    html {
        box-sizing: border-box;
        font-family: ${fontFamilies.sansSerif};
        sans-serif;
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
`

export default GlobalStyles
