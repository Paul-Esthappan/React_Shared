import React from 'react'

function ListTask() {
  return (
    <div>
      <div style={{padding:'40px'}}>
      <ol>
        <li>Category A</li>
        <ul>
          <li>Sub category A.1</li>
          <ol>
            <li>Item A 1.1</li>
            <li>Item A 1.2</li>
          </ol>
          <li>Sub category A.2</li>
          <ul>
            <li>Sub-Sub category A.2.1</li>
            <ul>
              <li>Item A.2.1.1</li>
              <li>Item A.2.1.2</li>
            </ul>
            <li>Sub-Sub category A.2.2</li>
            <ol>
              <li>Item A.2.2.1</li>
              <li>Item A.2.2.2</li>
            </ol>
          </ul>
        </ul>
        <li>Category B</li>
        <ul>
          <li>Item B.1</li>
          <li>Item B.2</li>
          <li>Item B.3</li>
        </ul>
        <li>Category C</li>
      </ol>
       
    </div>
    </div>
  )
}

export default ListTask