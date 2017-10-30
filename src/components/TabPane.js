import React from 'react'
import PropTypes from 'prop-types'

const TabPane = ({children}) => (
  <div className='tab-pane active'>
    {children}
  </div>
);

TabPane.propTypes = {
  children: PropTypes.string.isRequired
};

export default TabPane