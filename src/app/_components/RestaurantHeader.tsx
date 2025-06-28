import Link from 'next/link'
import logo from '../public/logo.jpg'

const RestaurantHeader = ()=>{
    return(
        <div className='header-wrapper'>
            <div>
                <img style={{width:100}} src='/logo.jpg' alt="logo"/>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/SingUp</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
    )
}
export default RestaurantHeader;