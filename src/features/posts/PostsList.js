// import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'
import styled from 'styled-components'

const Section = styled.section`
  /* position: relative; */
  transition: all 0.5s ease;

  /* &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  } */
`

const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  return (
    <Section className="posts-list">
      <h2>Posts</h2>
      <TransitionGroup component={null}>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </TransitionGroup>
    </Section>
  )
}

export default PostsList
