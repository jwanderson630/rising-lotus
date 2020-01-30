import React from "react"
import styled from "styled-components"

const StyledUnderline = styled.div`
  height: 1px;
  background-color: ${({ color }) => color};
  transform-origin: ${props => `${props.origin} center`};
  transform: ${props => (props.open ? "scaleX(1)" : "scaleX(0)")};
  transition: transform 0.2s ease;
  width: 100%;
`

const Underline = ({ open, origin = "center", color = "white" }) => {
  return <StyledUnderline origin={origin} open={open} color={color} />
}

export default Underline
