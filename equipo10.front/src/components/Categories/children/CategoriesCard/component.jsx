import imgTest from "../../../../assets/images/image3.jpg";
import styles from "./component.module.scss";
import PropTypes from 'prop-types';

const CategoriesCard = (props) => {

  const { title, quantity } = props

  return (

    <article className={styles.experienceCard}>
      <div className={styles.imgCard}>
        <img className={styles.imgToRender} src={imgTest} />
      </div>

      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <div>
          <span className={styles.quantity}>{quantity}</span>
          {' '}
          <span>Experiencias</span>
        </div>
      </div>
    </article>
  )
}

CategoriesCard.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
}

export default CategoriesCard;