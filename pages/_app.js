import { useState } from "react";
import ListsContext from "../src/components/contexts/ListsContext";
import LoadingContext from "../src/components/contexts/LoadingContext";
import "../styles/styles.scss";
import Head from "next/head";
import EntrieContext from "../src/components/contexts/EntrieContext";
import AlertsContext from "../src/components/contexts/AlertsContexts";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState({});
  const [entrie, setEntrie] = useState({});
  const [activeNewList, setActiveNewList] = useState(false);
  const [activeNewUser, setActiveNewUser] = useState(false)
  const [activeNewProduct, setActiveNewProduct] = useState(false)
  const [fields, setFields] = useState({})
  return (
    <>
      <Head>
        <title>Online lists</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <ListsContext.Provider value={{ lists, setLists }}>
          <EntrieContext.Provider value={{ entrie, setEntrie, fields, setFields }}>
            <AlertsContext.Provider value={{activeNewList, setActiveNewList, activeNewUser, setActiveNewUser, activeNewProduct, setActiveNewProduct}}>
              <Component {...pageProps} />
            </AlertsContext.Provider>
          </EntrieContext.Provider>
        </ListsContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default MyApp;
