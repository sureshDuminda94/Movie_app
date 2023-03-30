import {View, Text, StyleSheet, SectionList} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
//import Color from '../Constant/Color';
import GenreCard from '../Genare/GenreCard';
import ItemSeparator from '../component/ItemSeprator';

const Genares = ['All', 'Action', 'comedy', 'Romance', 'Horror', 'Sci-Fi'];

const HomeScreen = () => {
  return (
    <View>
     
        
          <FlatList
            data={Genares}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View>
                  <GenreCard name={item} />
                </View>
              );
            }}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          />
       
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Color.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default HomeScreen;
