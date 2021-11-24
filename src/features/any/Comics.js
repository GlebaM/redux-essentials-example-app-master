import React, { useState } from 'react'
import { uuid } from 'uuidv4'
import './Comics.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const heroes = [
  {
    name: 'Batman',
    id: uuid(),
  },
  {
    name: 'Wonder Woman',
    id: uuid(),
  },
  {
    name: 'Titans',
    id: uuid(),
  },
  {
    name: 'Supergirl',
    id: uuid(),
  },
  {
    name: 'The Flash',
    id: uuid(),
  },
]

const Comics = () => {
  const [favComics, setFavComics] = useState([])

  console.log(favComics)

  const toggleInFavComics = (id) => {
    const isItemFavorite =
      favComics.find((favorite) => favorite.id === id) && true
    if (isItemFavorite) {
      const newFavs = favComics.filter((favorite) => favorite.id !== id)
      setFavComics(() => [...newFavs])
    } else {
      setFavComics([...favComics, heroes.find((item) => id === item.id)])
    }
    // this.setState({ favComics })
  }

  return (
    <div className="wrapper">
      <p>Click any comic title to add to favourites down below:</p>
      <ul className="comics">
        {heroes.map(({ id, name }) => (
          <li
            key={id}
            className="comic"
            onClick={toggleInFavComics.bind(null, id)}
          >
            {name}
            <span className="star">
              {favComics.find((favorite) => favorite.id === id) ? '★' : '☆'}
            </span>
          </li>
        ))}
      </ul>
      <div className="favorites">
        <p>Favorites:</p>
        <TransitionGroup>
          {favComics.map(({ id, name }) => (
            <CSSTransition timeout={350} classNames="favorite" key={id} append>
              <li className="favorite">{name}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Comics
