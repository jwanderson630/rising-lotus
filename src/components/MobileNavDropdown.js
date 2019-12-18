import React from "react"
import { animated, useSpring } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components"
import useMeasure from "../hooks/useMeasure"
import { fontFamilies } from "../utilities/styleHelpers"

const StyledDropdown = styled(animated.div)`
  ${({ floating }) =>
    floating
      ? `position: absolute;
    left: -1.5rem;
    overflow: hidden;`
      : ``}
  pointer-events: inherit;

  .sub-link {
    display: block;
    pointer-events: inherit;
  }
  a {
    text-decoration: none;
    color: white;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    padding: 10px 10px;
    margin: 0 auto;
    display: block;
    width: calc(100% - 50px);
    border-radius: 4px;
    pointer-events: inherit;
    transition: background-color 0.2s ease-in-out;
    &.active {
      background-color: rgba(255, 255, 255, 0.08);
    }
    &:focus,
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
  .dropdown-contents {
    list-style: none;
    font-size: inherit;
    margin: 0;
    padding: 0;
    background-color: rgb(26, 26, 26);
    padding: 1rem 1.5rem;
    border-radius: 0.2rem;
    .sub-link {
      font-family: ${fontFamilies.sansSerif};
      font-size: inherit;
      white-space: nowrap;
      padding: 0.5rem 0;
    }
  }
`

const DropdownLink = props => {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: "active" } : null
  return (
    <Link getProps={isActive} {...props}>
      {props.name}
    </Link>
  )
}

const Dropdown = ({ dropdownItems, open, floating, closeMenu }) => {
  const [ref, { height, top }] = useMeasure()
  const props = useSpring({
    from: { opacity: 0, height: 0 },
    overflow: "hidden",
    opacity: open ? 1 : 0,
    height: open ? height + top * 2 : 0,
  })
  return (
    <StyledDropdown className="dropdown" style={props} floating={floating}>
      <ul {...ref} className="dropdown-contents">
        {dropdownItems.map(item => (
          <li className="sub-link" key={item.slug}>
            <DropdownLink
              name={item.name}
              slug={item.parentPage.slug + item.slug}
              key={item.slug}
              to={`/services/${item.slug}`}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              open={open}
            />
          </li>
        ))}
      </ul>
    </StyledDropdown>
  )
}

export default Dropdown
