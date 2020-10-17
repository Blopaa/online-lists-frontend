import React, { useEffect, useState } from 'react'
import EntrieCard from './EntrieCard'

const Entries = () => {
  const [data, setData] = useState(undefined)
    useEffect(() => {
      const saved = localStorage.getItem("User")
      const userData = JSON.parse(saved)
      console.log(userData);
      setData(userData)
    }, [])
    return (
        <div className="entries__container">
            {data && data.listsAsAuthor.map(m => (
                <EntrieCard key={m._id} name={m.name}/>
            ))}
        </div>
    )
}

export default Entries
