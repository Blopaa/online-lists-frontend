import React from 'react'
import Entries from './Entries'
import {IoMdAddCircle} from 'react-icons/io'

const Sidebar = ({active}) => {
    return (
        <aside className="sidebar__container">
            <p >Your lists</p>
            <div className="sidebar__newEntrie pointer" onClick={() => active()}><IoMdAddCircle style={{fontSize:"30px"}}/></div>
            <Entries/>
        </aside>
    )
}

export default Sidebar
