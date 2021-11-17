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
    appear
    mountOnEnter
    unmountOnExit
  >
    <Article>{children}</Article>
  </CSSTransition>
)

const docWidth = document.body.clientWidth > 1240 ? true : false

const Article = styled.article`
  padding: 0.75rem 1.5rem 1.5rem;
  margin-bottom: 1.5rem;
  background: var(--redux-color-pale);
  box-shadow: 0 2px 5px rgb(177, 174, 174);
  border-radius: 7px;
  transition: all ${duration}ms ease-in-out, box-shadow 200ms ease;

  &:hover {
    box-shadow: 0 4px 10px rgb(177, 174, 174);
  }

  &.${transitionName}-enter {
    opacity: 0.2;
    ${docWidth && 'transform: scale(0.3) translateX(-100%);'}
    ${!docWidth && 'transform: scale(0.3);'}
  }
  &.${transitionName}-enter-active {
    opacity: 1;
    ${docWidth && 'transform: scale(1) translateX(0);'}
    ${!docWidth && 'transform: scale(1);'}
  }
  &.${transitionName}-exit {
    opacity: 1;
    ${docWidth && 'transform: scale(1) translateX(0);'}
    ${!docWidth && 'transform: scale(1);'}
  }

  &.${transitionName}-exit-active {
    opacity: 0.15;
    ${docWidth && 'transform: scale(0.3) translateX(100%);'}
    ${!docWidth && 'transform: scale(0.3);'}
  }
`

const PostItem = ({ id, title, content }) => {
  const [inProp, setInprop] = useState(true)
  const dispatch = useDispatch()
  console.log(document.body.clientWidth)
  return (
    <Fade in={inProp}>
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
