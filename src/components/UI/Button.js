import React from 'react'
import styled from 'styled-components'

const ButtonRaw = styled.button`
  box-shadow: none;
  color: white;

  &:active,
  &:focus {
    box-shadow: inset 0px 0px 3px rgba(22, 21, 21, 0.925);
    text-shadow: none;
  }

  &:focus-visible {
    outline: 6px solid black, 3px solid black;
  }

  &:not(:disabled) {
    text-shadow: 0px 0px 1px white, 0px 0px 2px white,
      0px 0px 7px rgba(238, 238, 238, 0.97);
  }
`

const Button = (props) => {
  console.log('disabled')
  return (
    <ButtonRaw disabled={props.disabled} props={props}>
      {props.children}
    </ButtonRaw>
  )
}

export default React.memo(Button)
