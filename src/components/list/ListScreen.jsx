import React from 'react'
import { useEffect } from "react";
import Router from 'next/router'
import Navbar from './navbar';
import Sidebar from './Sidebar';
import { GetDataUser } from '../../services/auth.services';

const ListScreen = () => {
    useEffect(() => { 
        if(!document.cookie){
          Router.push('/signup')
        }  
        GetDataUser()
      }
      , []);
    return (
        <div  className="list__screen">
            <Navbar/>
            <Sidebar/>
        </div>
    )
}

export default ListScreen
