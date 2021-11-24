import React, { useState } from 'react'
import cx from 'classnames'
import './Practice.css'
import { CSSTransition } from 'react-transition-group'

const Practice = () => {
  const [display, setDisplay] = useState(true)

  const toggle = () => {
    setDisplay((dis) => !dis)
  }

  return (
    <div className="wrapper">
      <button
        className={`${cx('toggler', {
          'toggler--active': display,
        })}`}
        onClick={toggle}
      >
        Show
      </button>
      <CSSTransition
        in={display}
        timeout={{ enter: 350, exit: 350 }}
        classNames="display"
        unmountOnExit
        appear
      >
        <div className="menu">
          <ul className="list">
            <li className="list-item">Rajat</li>
            <li className="list-item">Writes about React</li>
            <li className="list-item">Loves Pizza</li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Practice
