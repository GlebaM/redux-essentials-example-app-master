import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postRemoved } from './postsSlice'

import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const duration = 500
const transitionName = 'article-animation'

const Fade = ({ in: inProp, children }) => (
  <CSSTransition
    in={inProp}
    timeout={duration}
    classNames={transitionName}
    unmountOnExit
  >
    <Article>{children}</Article>
  </CSSTransition>
)

const Article = styled.article`
  padding: 0.75rem 1.5rem 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgb(177, 174, 174);
  border-radius: 7px;
  transition: all ${duration}ms ease-in-out;

  &.${transitionName}-enter {
    opacity: 0;
    transform: scale(0.4);
  }
  &.${transitionName}-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 200ms;
  }
  &.${transitionName}-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.${transitionName}-exit-active {
    opacity: 0;
    transform: scale(0.4);
    transition: all 200ms;
  }
`

const PostItem = ({ id, title, content }) => {
  const [inProp, setInprop] = useState(true)
  const dispatch = useDispatch()

  return (
    <Fade in={inProp} key={id}>
      <h3>{title}</h3>
      <p className="post-content">{content.substring(0, 100)}</p>
      <button
        onClick={() => {
          setInprop(() => false)
          dispatch(postRemoved({ id: id }))
        }}
      >
        Remove
      </button>
    </Fade>
  )
}

export default PostItem
