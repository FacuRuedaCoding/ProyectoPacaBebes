import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import LogoPaca from './assets/LogoPaca.jpg'
const NavBar = () => {
    return (
        <header className='headerNav'>
            <nav className='nav'>
                <div className='divContainer'>
                    <div className='logoNav'>
                        <img src={LogoPaca} alt='logo' className='logoImg' />
                        <h1 className='navLogo'>PacaBebebes</h1>
                    </div>
                    
                    <CartWidget />
                    <div className='navMenu'>
                       
                        <button className='navItems'>Productos</button>
                        <button className='navItems'>Acerca de</button>
                        <button className='navItems'>Contacto</button>

                
                    </div>
                    
                </div>
               
            </nav>
        </header>
       

        )
        
}

export default NavBar