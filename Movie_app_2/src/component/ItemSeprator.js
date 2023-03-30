
import {View, Text, StyleSheet, StatusBar} from 'react-native';


  
   ItemSeparator = ({width,height}) => {
    return (
      <View
        style={{
          height,
          width,
          
        }}
      />
    );
  }

   ItemSeparator.defaultProps={

        width:0,
        height:0,

  }

  export default ItemSeparator;