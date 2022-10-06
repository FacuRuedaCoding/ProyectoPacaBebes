import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import LogoPaca from './assets/LogoPaca.jpg'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className='headerNav'>
            <nav className='nav'>
                <div className='divContainer'>
                    <div className='logoNav'>
                        <img src={LogoPaca} alt='logo' className='logoImg' />
                        <Link to='/'>
                            <h3 className='navLogo'>PacaBebebes</h3>
                        </Link>
                        
                    </div>
                    
                    <CartWidget />
                    <div className='navMenu'>
                       
                        <Link to='/category/tejidos' className='navItems'>Tejidos</Link>
                        <Link to='/category/packs' className='navItems'>Packs bebe</Link>
                        <Link to='/category/amigrumis' className='navItems'>Amigrumis</Link>

           
                    </div>
                    
                </div>
               
            </nav>
        </header>
       

        )
        
}

export default NavBar