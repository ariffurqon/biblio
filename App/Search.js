var React = require('react-native');
var SearchBooks = require('./SearchBooks');

var {
	StyleSheet,
	NavigatorIOS
} = React;

class Search extends React.Component{
	render(){
		return(
			<NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title: 'Search Books',
					component: SearchBooks
				}} />
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

module.exports = Search;