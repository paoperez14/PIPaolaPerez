import CategoriesCard from "./children/CategoriesCard/component";
import styles from "./component.module.scss"

const DUMMY_DATA = [
	{
		id: 1,
		title: "Playas",
		quantity: 20,
	},
	{
		id: 2,
		title: "Ciudades",
    quantity: 10,
	},
	{
		id: 3,
		title: "Montanas",
    quantity: 15,
	},
	{
		id: 4,
		title: "Campestres",
		quantity: 32,
	},
]

const Categories = () =>{

  return(
    <section className={styles.categoriesSection} >
      <h2 className={styles.sectionTitle}>Categorias</h2>
      <div className={styles.categoriesList}>
      {DUMMY_DATA.map((element) => (
          <CategoriesCard 
            key={`category_${element.id}`}
            title={element.title}
            quantity={element.quantity}
          />
				))}
      </div>
    </section>
  )

}

export default Categories;