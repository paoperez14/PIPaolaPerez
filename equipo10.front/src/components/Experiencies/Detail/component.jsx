import styles from "./component.module.scss";

const Detail = () =>{

  return(
    <section className={styles.detailSection}>
      <div>
        imagenes
      </div>
      <div>
        <h2>titulo</h2>
        <p>Descripcion</p>
      </div>
    </section>
  )
}

export default Detail;