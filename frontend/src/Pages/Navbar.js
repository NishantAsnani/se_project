import '../Styles/index.css'
import {BsFillCartFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar=()=>{
    const navigate=useNavigate()
return(
    <>
<article>

<div className='nav_container'>
<span>
    <img onClick={()=>navigate('/')} src="https://media.istockphoto.com/photos/milk-picture-id453601119?b=1&k=20&m=453601119&s=170667a&w=0&h=oji7TIqcgk1dnuqlQKKduwQv9a9C95T4mk3nt-yw4rc=" alt="carton"  className='nav_image'/>
</span>

<ul className="list">
    <li className="list_items">Order now</li>
    <li className="list_items" id='list_item_2'>About us</li>
    
    <Link to='/products' className="list_items" id='list_item_3'>Our Products</Link>
    <Link to='/cart'    className="list_items" id='list_item_3'><BsFillCartFill className="cart-icon"/></Link>
    <Link to='/Login'  className="list_items" id='list_item_4'>Login</Link>
    <Link to='/Register' className="list_items" id='list_item_5'>Register</Link>
</ul>
</div>
</article>
</>
)
}


export default Navbar