import { Link } from 'react-router-dom';
import logoHeader from "../../../assets/images/Logoheader.png";
import styles from "./component.module.scss";

const Header = () => {
	return (
		<header className={styles.nav}>
			<Link to='/'><img src={logoHeader} alt="Digital_Escapes_Logo" className={styles.logoHeader} /></Link>
			<div className={styles.actionsButtons}>
				<Link to='/login' className={styles['link-nav-login']}>Crear Cuenta</Link>
				<Link to='/signup' className={styles['link-nav-signup']}>Iniciar Sesión</Link>
				<i className="las la-bars"></i>
			</div>
	
		</header>
	);
}

export default Header