import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const RestaurantsList = () => {

    const [restaurants, setRestaurants] = useState([])
    const [retries, setRetries] = useState(1)

    useEffect(() => {
        axios.get('http://localhost:8090/v2/api/restaurants').then((response) => {
            setRestaurants(response.data)
            setRetries(1)
        }).catch((error) => {
            setRetries(retries +1)
            console.log("Hubo un error con Axios Request",error)
        }).finally(() =>{
            if (retries > 3) {
                return (
                    <div>ERROR</div>
                )
              }
        })
    }, [retries])
    return(
        <div className='all-cards-container'>
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
                )

            })
            }
        </div>
    )
}

export default RestaurantsList