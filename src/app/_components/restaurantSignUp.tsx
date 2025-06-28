const RestaurantSignUp = () =>{
    return(
        <>
        <h3>SignUp</h3>
        <div>
            <div className="input-warper">
                <input type="text" placeholder="Enter email" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="password" placeholder="Enter password" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="password" placeholder="Confirm password" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="text" placeholder="Enter restaurant name" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="text" placeholder="Enter city" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="text" placeholder="Enter full address" className="input-field"/>
            </div>
            <div className="input-warper">
                <input type="text" placeholder="Enter contact No." className="input-field"/>
            </div>
            <div className="input-warper">
                <button className="button">Login</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignUp;