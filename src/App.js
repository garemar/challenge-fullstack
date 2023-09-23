import { useState, useEffect } from 'react';
import './App.css';
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import RestaurantsListWithPagination from './components/RestaurantsListWithPagination/RestaurantsListWithPagination';

function App() {
  const [listAllRestaurants, setListAllRestaurants] = useState(false)
  const handleListAllRestaurants = () => {
    setListAllRestaurants(!listAllRestaurants)
  }

  useEffect(() => {

  },[listAllRestaurants])

  return(
    <>
    <button className='button' onClick={handleListAllRestaurants}>{listAllRestaurants === true ? "Lista En Paginas" : "Todos los Restaurantes"}</button>

   {
    listAllRestaurants === true ? <RestaurantsList/> : <RestaurantsListWithPagination />
   }

   </>
  )
}

export default App;
