var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

class Search extends React.Component{
	render({
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					Search Tab
				</Text>
			</View>
		)
	})
}

var styles = StyleSheet.create({
	description: {
		fontsize: 20,
		backgroundColor: 'white'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

module.exports = Search;