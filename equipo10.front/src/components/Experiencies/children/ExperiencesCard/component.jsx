import { Link } from "react-router-dom";
import imgTest from "../../../../assets/images/image2.jpg";
import styles from "./component.module.scss";
import PropTypes from 'prop-types';


const ExperienceCard = (props) => {

	const { title, slug, price, location, description } = props

	return (
		<article className={styles.experienceCard}>
			<div className={styles.imgCard}>
				<img className={styles.imgToRender} src={imgTest} />
			</div>

			<div className={styles.description}>
				<div className={styles.title}>
					<h2>{title}</h2>
					<div>
						<p>Precio</p>
						<p className={styles.price}>{price}</p>
					</div>
				</div>

				<p className={styles.location}>
					<i className="las la-map-marker-alt"></i>
					{location}
				</p>

				<div>
					<p className={styles.textDescription}>
						{description}
					</p>
				</div>
				<Link to={`/detail/${slug}`} className={styles.seeMore}>		
					Ver mas
				</Link>
			</div>
		</article>
	)
}

ExperienceCard.propTypes = {
	title: PropTypes.string,
	slug: PropTypes.string,
	price: PropTypes.number,
	location: PropTypes.string,
	description: PropTypes.string,
}

export default ExperienceCard