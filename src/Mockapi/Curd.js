import React from 'react'
import Crudcreate from './Crudcreate'
import './Crudcss.css'
import Crudread from './Crudread'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Crudupdate from './Crudupdate'
import Cruddelete from './Cruddelete'

function Curd() {
  return (
    <BrowserRouter>
    <Router>
     <div className='curd-full'>
      <h2>curd operations</h2>
      <Route path='/crudcreate' Component={Crudcreate} />
      {/* <div> <Crudcreate /></div> */}
      {/* <Crudread /> */}
      <div style={{margin:'50px'}}>
      <Route path='/crudread' element={<Crudread />} />
      {/* <Crudread />  */}
      </div>
      <Route path='/crudupdate' element={<Crudupdate />} />
      <Route path='/cruddelete' element={<Cruddelete />} />
    </div>
    </Router>
    </BrowserRouter>
  )
}

export default Curd
