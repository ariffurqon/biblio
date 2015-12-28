var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	View,
	Image
} = React;

var BOOKS_DATA = [
    {volumeInfo: {
    	title: 'The Google story', 
    	authors: "David A. Vise", 
    	imageLinks: {thumbnail: 'https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}}}
];

class BookList extends React.Component{
	render(){
		var book = BOOKS_DATA[0];
		return(
			<View style={styles.container}>
                <Image 
                	source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                    style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                </View>
            </View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
	        flex: 1,
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        backgroundColor: '#F5FCFF',
	        padding: 10
	    },
	    thumbnail: {
	        width: 53,
	        height: 81,
	        marginRight: 10
	    },
	    rightContainer: {
	        flex: 1,
	        // backgroundColor: '#e5f2ff'
	    },
	    title: {
	        fontSize: 20,
	        marginBottom: 8
	    },
	    author: {
	        color: '#656565'
	    }
	});

module.exports = BookList;