import { useSelector } from 'react-redux'
import PostItem from './PostItem'
import { TransitionGroup } from 'react-transition-group'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  console.log(posts)

  return (
    <TransitionGroup>
      <section className="posts-list">
        <h2>Posts</h2>
        {posts.map((post) => (
          <PostItem {...post} />
        ))}
      </section>
    </TransitionGroup>
  )
}

export default PostsList
