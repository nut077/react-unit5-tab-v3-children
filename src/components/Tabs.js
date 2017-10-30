import React from 'react'
import classNames from 'classname'
import PropTypes from 'prop-types'
import {compose, withStateHandlers, setPropTypes} from 'recompose'

const linkTabClasses = (index, activeTab) => (
  classNames('nav-link', {active: index === activeTab})
);

const cursorPointer = {
  cursor: 'pointer'
};

const Tabs = ({children, activeTab, onClickTab}) => (
  <div>
    <ul className='nav nav-tabs'>
      {
        children.map(({props: {title, content}}, index) => (
          <li key={index} className='nav-item'>
            <a
              className={linkTabClasses(index, activeTab)}
              onClick={() => onClickTab(index)}
              style={cursorPointer}>
              {title}
            </a>
          </li>
        ))
      }
    </ul>
    <div className='tab-content'>
      {children[activeTab]}
    </div>
  </div>

);

export default compose(
  setPropTypes({
    activeTab: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.element
    )
  }),
  withStateHandlers(
    {
      activeTab: 0
    },
    {
      onClickTab: _ => (index) => ({
        activeTab: index,
      })
    }
  )
)(Tabs)