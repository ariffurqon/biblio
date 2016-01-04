var React = require('react-native');
 
var {
    StyleSheet,
    Text,
    View,
    Component,
    Image
   } = React;
  
class BookDetail extends Component {
    render() {
        var book = this.props.book;
        var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imageURI}} />
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    }
}
 
var styles = StyleSheet.create({
    container: {
         marginTop: 65,
         alignItems: 'center',
         backgroundColor: '#C5CAE9',
         flex: 1
    },
    image: {
         width: 107,
         height: 165,
         padding: 10
    },
    description: {
         padding: 10,
         fontSize: 15,
         color: '#656565'
    }
});

module.exports = BookDetail;