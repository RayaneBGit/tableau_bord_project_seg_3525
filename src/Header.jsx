import { Link } from 'react-router-dom';
import './Header.css';
function Header() {


    return (
        <nav className="">
            <Link to="/"> Accueil</Link>
            <Link to="/tableau_prix_aliments"> Prix des aliments en tableau</Link>
            <Link to="/graphes_prix_aliments"> Prix des aliments en graphes</Link>
        </nav>
    );
}

export default Header;
