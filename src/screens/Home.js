import React from 'react'
import {
   Button, 
   View, 
   Text,
   StyleSheet
} from 'react-native'

class Home extends React.Component {
   
   static navigationOptions = {
      title: 'Home'
   };

   render() {
      return(
         <View style={mStyles.container}>
            <Button title='Go to Profile Screen'
               onPress={()=> this.props.navigation.navigate('MyProfile')}
            />
         </View>
      );
   }
}

const mStyles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   }
});

export default Home;