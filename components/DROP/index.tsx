import React, { useEffect, useState, useRef } from 'react'
import listenForOutsideClick from './list'
import listen from './list'


//function MyDropDown() {
  // Get selected item from dropdown
  // Set active class on list item
//  const [chosenVal, initChosenVal] = useState('')
//  const getSelectedEl = (val:any) => {
//    return initChosenVal(val)
//  }
  // Hide and show dropdown
//  const [isOpen, setIsOpen] = useState(false)
//  const toggle = (isOpen:any) => {
//    return setIsOpen(!isOpen)
//  }
  // Hide Dropdown on Outside Click
//  const menuRef = useRef(null)
//  const [listening, setListening] = useState(false)
//  useEffect(listen(listening, setListening, menuRef, setIsOpen))
  // List items
//  const optList = [
//    {
//      id: 1,
//      course: 'React',
//    },
//    {
//      id: 2,
//      course: 'Vue',
//    },
//    {
//      id: 3,
//      course: 'Ionic',
//    },
//    {
//      id: 4,
//      course: 'Laravel',
//    },
//    {
//      id: 5,
//      course: 'Python',
//    },
//  ]
//  return (
//    <div>
//      <h2></h2>
//      <div className="dropdownBlock" ref={menuRef}>
//        <button
//          className="dropdownActive"
//          onClick={() => {
//            toggle(isOpen)
//          }}
//        >
//          {chosenVal === '' ? 'Choose course' : `Chosen course : ${chosenVal}`}
//        </button>
//        {isOpen ? (
//          <ul className="dropdownElBlock">
//            {optList.map((item) => {
//              return (
//                <li
//                  key={item.id}
//                  onClick={() => {
//                    getSelectedEl(item.course)
//                  }}
//                  className={
//                    chosenVal === item.course
//                      ? 'dropdownEle active'
//                      : 'dropdownEle'
//                  }
//                >
//                  {item.course}
//                </li>
//              )
//            })}
//          </ul>
//        ) : (
//          ''
//        )}
//      </div>
//    </div>
//  )
//}
//export default MyDropDown;
