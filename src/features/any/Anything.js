import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
    background-color: #d8a
  }

  to {
    transform: rotate(720deg) scale(0.6);
    background-color: #fc5;
  }
`
const move = keyframes`
  from {
    transform: translate(0px, 200px)  scale(0.6);
  }

  to {
    transform: translate(0, 0)  scale(1);
  }
`

const moveOut = keyframes`
  from {
    transform: translate(0, 0)   scale(1);
  }

  to {
    transform:  translate(0px, 200px)  scale(0.5);
  }
`

const Rotate = styled.div`
  display: inline-block;
  height: min-content;
  animation: ${rotate} 2s alternate-reverse 3 both;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 1.2rem;
  background-color: #aff;
`

const DivTrans = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 20px black;
  text-align: center;
  border-radius: 50%;
  transform: translate(0px, 0px);
  transition: all 800ms;

  p {
    margin: auto;
  }

  &.my-node-enter {
    background-color: #a1d;
    opacity: 0;
  }
  &.my-node-enter-active {
    opacity: 1;
    animation: ${move} 1s ease-in-out both alternate;
    background-color: #f55;
    /* transition: all 1000ms; */
  }
  &.my-node-enter-done {
    background-color: #a55;
  }
  &.my-node-enter-done {
    background-color: #a55;
  }
  &.my-node-exit {
    opacity: 1;
    background-color: #fc5;
  }
  &.my-node-exit-active {
    opacity: 0;
    background-color: #2f5;
    animation: ${moveOut} 1s ease-in-out both alternate;
    /* transition: all 1000ms; */
  }
`

const Wrapper = styled.div`
  height: max-content;
  width: 90%;
  margin: 3rem auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 1;

  [type='button'] {
    height: fit-content;
  }
`

const Anything = () => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => setInProp(true), [])

  return (
    <Wrapper>
      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames="my-node"
        mountOnEnter
        unmountOnExit
      >
        <DivTrans>
          <p>I'll receive classes</p>
        </DivTrans>
      </CSSTransition>
      <button type="button" onClick={() => setInProp((a) => !a)}>
        Click to Enter
      </button>
      <Rotate>I am rotating </Rotate>
    </Wrapper>
  )
}

export default Anything
