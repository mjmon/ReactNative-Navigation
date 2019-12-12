import React from 'react';
import {
   Button, 
   View, 
   Text,
   StyleSheet
} from 'react-native';

class Profile extends React.Component {

   static navigationOptions = {
      title: 'Profile'
   };

   render() {
      return(
        <View style={mStyles.container}>
           <Text>Profile</Text>
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

export default Profile;