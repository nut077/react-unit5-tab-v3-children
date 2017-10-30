import React from 'react'
import {Tabs, TabPane} from '../components'

const App = () => (
  <div className='container mt-2'>
    <Tabs activeTab={0}>
      <TabPane title='title1'>
        content1
      </TabPane>
      <TabPane title='title2'>
        content2
      </TabPane>
      <TabPane title='title3'>
        content3
      </TabPane>
    </Tabs>
  </div>
);

export default App;
