import React from "react"
import styled from "styled-components"

const StyledInputField = styled.div`
  input,
  textarea {
    width: 100%;
    border-radius: 4px;
    outline: none;
  }
`

const Contact = () => {
  return (
    <form>
      <StyledInputField>
        <label htmlFor="name"></label>
        <input type="text" id="name" />
      </StyledInputField>
      <StyledInputField>
        <label htmlFor="email"></label>
        <input type="email" id="email" />
      </StyledInputField>
      <StyledInputField>
        <label htmlFor="message"></label>
        <textarea id="message" />
      </StyledInputField>
      <div className="btnRow">
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default Contact
