var React = require('react-native');
var BookList = require('./BookList');

var {
	StyleSheet,
	NavigatorIOS
} = React;

class Featured extends React.Component{
	render(){
		return(
			<NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title: 'Featured Books',
					component: BookList
				}} />
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

module.exports = Featured;