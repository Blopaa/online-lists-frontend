import { useState } from "react";
import ListsContext from "../src/components/contexts/ListsContext";
import LoadingContext from "../src/components/contexts/LoadingContext";
import "../styles/styles.scss";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState({});
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <ListsContext.Provider value={{ lists, setLists }}>
        <Component {...pageProps} />
      </ListsContext.Provider>
    </LoadingContext.Provider>
  );
}

export default MyApp;
