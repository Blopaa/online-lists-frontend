import {useRouter} from 'next/router'
import ListScreen from '../../src/components/list/ListScreen'
import Navbar from '../../src/components/list/Navbar'


export default function Test() {
  
  const {query:{id, name}} = useRouter() 

  return (
    <>
      <Navbar/>
      <ListScreen/>
    </>
  )
}


/*

Test.getInitalProps = (ctx) => {

  const {query:{id, name}} = ctx;

  return {id}

}

*/