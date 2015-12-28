var React = require('react-native');
var Featured = require('./App/Featured');
var Search = require('./App/Search');

var {
  AppRegistry,
  TabBarIOS
} = React;

class Biblio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        selectedTab: 'featured'
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
            selected={this.state.selectedTab === 'featured'}
            systemIcon="featured"
            onPress={ () => {
                this.setState({
                  selectedTab: 'featured'
                })
            }} >
            <Featured/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
            selected={this.state.selectedTab === 'search'}
            systemIcon="search"
            onPress={ () => {
                this.setState({
                  selectedTab: 'search'
                })
            }} >
            <Search/>
        </TabBarIOS.Item>
        
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('biblio', () => Biblio);
