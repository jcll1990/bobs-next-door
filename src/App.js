import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

import { useState, useEffect } from "react";

function App() {

  const [stores, setStores] = useState ([])
  const [search, setSearch] = useState ("")


  const filteredStores = stores.filter(store => {
    return store.name.toLowerCase().includes(
      search.toLowerCase()
    ) 
  })


  useEffect(() => {
   
    fetch("http://localhost:8085/stores")
      .then(resp => resp.json())
      .then(data => {
        setStores(data);
      })            
  }, []);



  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search 
      setSearch={setSearch}
      />
      <NewStoreForm />
      setStores ={setStores}
      <StoreList
      stores = {filteredStores}
      setStores ={setStores}
      />
    </div>
  );
}

export default App;
