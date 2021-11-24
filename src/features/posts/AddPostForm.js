import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { postAdded } from './postsSlice'
import Button from '../../components/UI/Button'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (!title || !content) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [content, title])

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!isValid) return

    dispatch(postAdded({ id: uuidv4(), title, content }))

    setTitle('')
    setContent('')
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          placeholder="Type any post title."
          autoFocus
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          placeholder="Type post description."
          rows="5"
        />
        <Button disabled={!isValid} type="submit">
          Save Post
        </Button>
      </form>
    </section>
  )
}

export default AddPostForm
