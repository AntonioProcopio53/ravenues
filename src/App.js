import React from "react";
import styles from "./App.css";

import BusinessList from "./Component/BusinessList/BusinessList";
import SearchBar from "./Component/SearchBar/SearchBar";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
