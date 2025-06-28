"use client"
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className="container">
                <h1>Restaurant Login/SingUp Page.</h1>
                <div>
                    {
                        login ? <RestaurantLogin /> : <RestaurantSignUp />
                    }
                </div>
                <div>
                    <p className="toggle" onClick={() => setLogin(!login)}>
                        {
                            login ? "Do not have an account? SignUp" : "Already have an account? Login"
                        }
                    </p>
                </div>
            </div>


        </>
    )
}

export default Restaurant;