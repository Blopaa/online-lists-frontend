import React from 'react'
import Entries from './Entries'

const Sidebar = () => {
    return (
        <aside className="sidebar__container">
            <p>Your Lists</p>
            <Entries/>
        </aside>
    )
}

export default Sidebar
