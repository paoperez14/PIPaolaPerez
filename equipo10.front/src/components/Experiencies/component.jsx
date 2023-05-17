import { useEffect } from "react";
import ExperienceCard from "./children/ExperiencesCard/component";
import ExperiencesRepository from "../../repositories/experiences.repository";
import styles from "./component.module.scss";

const DUMMY_DATA = [
	{
		id: 1,
		title: "Maya",
		slug: 'experiencia-maya',
		price: 50,
		location: "Mexico",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 2,
		title: "Inca",
		slug: 'experiencia-inca',
		price: 70,
		location: "Peru",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 3,
		title: "Inglesa",
		slug: 'experiencia-inglesa',
		price: 100,
		location: "Londres",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 4,
		title: "Asiatica",
		slug: 'experiencia-asiatica',
		price: 250,
		location: "China",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 5,
		title: "Latina",
		slug: 'experiencia-latina',
		price: 1000,
		location: "Colombia",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

const Experiences = () => {

	useEffect(() => {
		const experiences = async () =>{
			const experiencesResponse = await ExperiencesRepository.search();
			//TODO: load data in context!
			console.log(experiencesResponse)
		}
		experiences();
	}, [])
	

	return (
		<section className={styles.experiencesSection}>
			<h2 className={styles.sectionTitle}>Recomendaciones</h2>
			<div className={styles.experiencesList}>
				{DUMMY_DATA.map((element) => (
					<ExperienceCard
						key={`experience_${element.id}`}
						title={element.title}
						slug={element.slug}
						price={element.price}
						location={element.location}
						description={element.description}
					/>
				))}
			</div>
		</section>
	)
}

export default Experiences