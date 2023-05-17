import logo from "../../../assets/logoDE.svg";
import styles from "./component.module.scss";

const Footer = () => {

	return (
		<footer className={styles.footer}>
			<img className={styles.logoFooter} src={logo} />
			<div></div>
			<div className={styles.socialMedia}>
				<i className="lab la-facebook"></i>
				<i className="lab la-instagram"></i>
				<i className="lab la-twitter"></i>
				<i className="lab la-youtube"></i>
			</div>
		</footer>
	)
}

export default Footer