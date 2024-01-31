import React from 'react'
import Crudcreate from './Crudcreate'
import './Crudcss.css'
import Crudread from './Crudread'

function Curd() {
  return (
    <div className='curd-full'>
      <h2>curd operations</h2>
      <div> <Crudcreate /></div>
      <Crudread />
      {/* <div> <Crudread /> </div> */}
    </div>
  )
}

export default Curd
