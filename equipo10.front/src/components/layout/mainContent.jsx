import Header from "./Header/component"
import Footer from "./footer/component"
import PropTypes from 'prop-types';

const MainContent = (props) => {

	const {children} = props;

	return (
		<>
			<Header />
				{children}
			<Footer />
		</>
	)
}

MainContent.propTypes = {
	children: PropTypes.node
}



export default MainContent