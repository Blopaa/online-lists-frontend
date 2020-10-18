import React from 'react'

const EntrieCard = ({data}) => {
    const handleClick = () => {
        console.log(data._id);
    }
    return (
        <div onClick={handleClick} className="entrie__container">
            <div className="entrie__listname">{data.name}</div>
        </div>
    )
}

export default EntrieCard
