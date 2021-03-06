var React = require('react-native');
var BookDetail = require('./BookDetail');

var {
	StyleSheet,
	View,
	Text,
	View,
	Image,
	ListView,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

var URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction'
class BookList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		};
	}
	componentDidMount(){
		this.fetchData();
		}
		fetchData(){
			fetch(URL)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.items),
					isLoading: false
				});
			})
			.done();
		}
	render(){
		if (this.state.isLoading){
				return this.renderLoadingView();
			}
			return (
				<ListView 
					dataSource={this.state.dataSource}
					renderRow={this.renderBook.bind(this)}
					style={styles.ListView}	/>
		);
	}
	renderLoadingView(){
		return(
			<View style={styles.loading}>
				<ActivityIndicatorIOS
					size='large' />
					<Text>Loading...</Text>
			</View>
		);
	}
	renderBook(book){
		return(
			<TouchableHighlight onPress={() => this.showBookDetail(book)}  underlayColor='purple'>
				<View>
					<View style={styles.container}>
		                <Image 
		                	source={{uri: book.volumeInfo.imageLinks.thumbnail}}
		                    style={styles.thumbnail} />
		                <View style={styles.rightContainer}>
		                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
		                    <Text style={styles.author}>{book.volumeInfo.authors}</Text>
		                </View>
		            </View>
		        </View>
		    </TouchableHighlight>
		);
	}
	showBookDetail(book) {
	       this.props.navigator.push({
	           title: book.volumeInfo.title,
	           component: BookDetail,
	           passProps: {book}
	       });
	   }

}

var styles = StyleSheet.create({
	container: {
	        flex: 1,
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        backgroundColor: '#C5CAE9',
	        padding: 10
	    },
	    thumbnail: {
	        width: 53,
	        height: 81,
	        marginRight: 10
	    },
	    rightContainer: {
	        flex: 1
	    },
	    title: {
	        fontSize: 20,
	        marginBottom: 8
	    },
	    author: {
	        color: '#303F9F' //blue
	    },
	    separator: {
	    	height: 1,
	    	backgroundColor: '#F50057'
	    },
	    ListView: {
	    	backgroundColor: '#F50057' // red hot pink
	    },
	    loading: {
	    	flex: 1,
	    	alignItems: 'center',
	    	justifyContent: 'center'
	    }
	});

module.exports = BookList;