import { css } from "styled-components"

export const fontFamilies = {
  serif: `'Cormorant Garamond', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  sansSerif: `'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
}

export const colors = {
  primary: "#27aa9f",
  darkGrey: "#1a1a1a",
}

export const boxShadows = {
  down: `rgba(46, 41, 51, 0.08) 0px 1px 2px,
  rgba(71, 63, 79, 0.08) 0px 2px 4px`,
  up: `rgba(46, 41, 51, 0.08) 0px 4px 8px,
  rgba(71, 63, 79, 0.16) 0px 8px 16px;`,
}

export const transitions = (...properties) => {
  return properties
    .map(property => `${property} 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s`)
    .join(", ")
}

const size = {
  small: 600,
  medium: 960,
  large: 1140,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export { above, below }
