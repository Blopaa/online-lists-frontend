import React, { useContext } from 'react'
import {FaTrash} from 'react-icons/fa'
import { useDataUser } from '../../helpers/UseDataUser';
import { deleteList } from '../../services/lists.services';
import ListsContext from '../contexts/ListsContext';

const EntrieCard = ({data}) => {
    const {setLists} = useContext(ListsContext)
    const handleClick = () => {
        console.log(data._id);
    }

    const handleDeleteList = () => {
        deleteList(data._id)
        useDataUser(setLists)
    }
    return (
        <div onClick={handleClick} className="entrie__container">
            <div className="entrie__listname">{data.name}</div>
            <div className="entrie__trash" onClick={handleDeleteList}><FaTrash/></div>
        </div>
    )
}

export default EntrieCard
