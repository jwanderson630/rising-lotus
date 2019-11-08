import React from "react"
import styled from "styled-components"

const StyledUnderline = styled.div`
  height: 1px;
  background-color: white;
  transform-origin: ${props => `${props.origin} center`};
  transform: ${props => (props.open ? "scaleX(1)" : "scaleX(0)")};
  transition: transform 0.2s ease;
  width: 100%;
`

const Underline = ({ open, origin = "center" }) => {
  return <StyledUnderline origin={origin} open={open} />
}

export default Underline
