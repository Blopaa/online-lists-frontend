import React from 'react'

const EntrieCard = ({name}) => {
    return (
        <div className="entrie__container">
            <div className="entrie__listname">{name}</div>
        </div>
    )
}

export default EntrieCard
