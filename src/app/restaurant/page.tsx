"use client"
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import './style.css'
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className="container">
                <RestaurantHeader/>
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
                <RestaurantFooter/>
            </div>


        </>
    )
}

export default Restaurant;