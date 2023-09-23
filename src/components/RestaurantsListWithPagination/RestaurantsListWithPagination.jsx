import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import './RestaurantsListWithPagination.css'

const RestaurantsListWithPagination = () => {
    const [restaurants, setRestaurants] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [retries, setRetries] = useState(1)

    const handlePagination = (increment) => {
        if (increment) {
            setPage(page + 1)
        } else {
            if (page > 1) {
                setPage(page - 1)
            }
        }
    }

      
      useEffect(() => {
       
        axios.get(`http://localhost:8090/api/restaurants?p=${page}`)
          .then((response) => {
            setTotalPages(response.data.totalPages);
            setRestaurants(response.data.data);
            setRetries(1)
          })
          .catch((error) => {
            setRetries(retries +1)
            console.log("Error occurred in Axios request:", error);
          })
          .finally(() => {
            if (retries === 1) {
              setPage(page);
            }
          });
      }, [page, retries]);
      return (
        <>
          {retries > 3 ? (
            <div>ERROR</div>
          ) : (
            <>
              <button className={`button ${page === 1 ? 'disabled' : ''}`} disabled={page === 1} onClick={() => handlePagination(false)}>
                Anterior
              </button>
              <button
                className={`button ${page === totalPages ? 'disabled' : ''}`}
                disabled={page === totalPages}
                onClick={() => handlePagination(true)}
              >
                Siguiente
              </button>
              <div className="all-cards-container">
                <h2 className="title">Restaurants</h2>
                {restaurants.map((restaurant) => {
                  return (
                    <Card
                      key={restaurant.id}
                      name={restaurant.name}
                      logo={restaurant.logo}
                      shippingAmount={restaurant.shippingAmount}
                      deliveryTime={restaurant.deliveryTime}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      );
      
}
export default RestaurantsListWithPagination;