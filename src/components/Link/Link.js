import React from 'react';

// import './colors';
const primaryColor = '#900';

const styles = {
	color: primaryColor,
	backgroundColor: 'white'
};

function Link() {
	return(
		<a href="/" style={styles}>Name</a>
	);
}

export default Link;
