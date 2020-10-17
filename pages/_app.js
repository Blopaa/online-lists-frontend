import { useState } from 'react'
import LoadingContext from '../src/components/contexts/LoadingContext'
import '../styles/styles.scss'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
       <Component {...pageProps} />
    </LoadingContext.Provider>
  )
}

export default MyApp
