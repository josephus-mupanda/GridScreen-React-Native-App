import React from 'react';
import { View, FlatList, Dimensions, StyleSheet ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GridItem = ({ item }) => (
    <View style={[styles.gridItem, { backgroundColor: "#f5f5f5" }]}>
        <View style={styles.iconContainer}>
            <Ionicons name={item.iconName} size={20} color="#ffffff" />
        </View>
        <View style={styles.itemInfo}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
     
    </View>
);

// const GridItem = ({ item }) => (
//     <View style={styles.gridItem}>
//         <Text style={styles.itemText}>{item.title}</Text>
//     </View>
// );

const GridScreen = () => {
    // const data = [
    //     { id: 1, title: 'Item 1' },
    //     { id: 2, title: 'Item 2' },
    //     { id: 3, title: 'Item 3' },
    //     { id: 4, title: 'Item 4' },
    // ];
    const data = [
        { id: 1, title: 'Item 1', description: 'Description 1', color: '#ff0000', iconName: 'md-star' },
        { id: 2, title: 'Item 2', description: 'Description 2', color: '#00ff00', iconName: 'md-heart' },
        { id: 3, title: 'Item 3', description: 'Description 3', color: '#0000ff', iconName: 'md-star' },
        { id: 4, title: 'Item 4', description: 'Description 4', color: '#ffff00', iconName: 'md-square' },
        { id: 5, title: 'Item 5', description: 'Description 5', color: '#ff0000', iconName: 'md-star' },
        { id: 6, title: 'Item 6', description: 'Description 6', color: '#00ff00', iconName: 'md-heart' },
        { id: 7, title: 'Item 7', description: 'Description 7', color: '#0000ff', iconName: 'md-star' },
        { id: 8, title: 'Item 8', description: 'Description 8', color: '#ffff00', iconName: 'md-square' },
        { id: 9, title: 'Item 9', description: 'Description 9', color: '#ff0000', iconName: 'md-star' },
        { id: 10, title: 'Item 10', description: 'Description 10', color: '#ff0000', iconName: 'md-heart' },
        { id: 11, title: 'Item 11', description: 'Description 11', color: '#ff0000', iconName: 'md-star' },
        { id: 12, title: 'Item 12', description: 'Description 12', color: '#ff0000', iconName: 'md-square' },
        { id: 13, title: 'Item 13', description: 'Description 13', color: '#ff0000', iconName: 'md-star' },
        { id: 14, title: 'Item 14', description: 'Description 14', color: '#ff0000', iconName: 'md-heart' },
        { id: 15, title: 'Item 15', description: 'Description 15', color: '#ff0000', iconName: 'md-star' },
        { id: 16, title: 'Item 16', description: 'Description 16', color: '#ff0000', iconName: 'md-square' },
        { id: 17, title: 'Item 17', description: 'Description 17', color: '#ff0000', iconName: 'md-star' },
        { id: 18, title: 'Item 18', description: 'Description 18', color: '#ff0000', iconName: 'md-heart' },
        { id: 19, title: 'Item 19', description: 'Description 19', color: '#ff0000', iconName: 'md-star' },
        { id: 20, title: 'Item 20', description: 'Description 20', color: '#ff0000', iconName: 'md-square' }
    ];


    const { width } = Dimensions.get('window');
    let numColumns = 2;

    // Adjust the number of columns based on screen width
    if (width >= 768) {
        numColumns = 3;
    }
    if (width >= 1024) {
        numColumns = 4;
    }

    const columnWrapperStyle = numColumns > 2 ? styles.gridContainer : null;

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={GridItem}
            numColumns={numColumns}
            contentContainerStyle={columnWrapperStyle}
        />
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5', 
        marginTop:10,// Adjust the horizontal padding as needed
        marginBottom: 10, // Adjust the margin bottom as needed
    },
    gridItem: {
        flex: 1,
        backgroundColor: '#f5ffff',
        borderRadius: 10, // Adjust the border radius as needed
        padding: 10, // Adjust the padding as needed
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconContainer: {
        backgroundColor: '#ff5e3a',
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemInfo: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    descriptionText: {
        fontSize: 14,
        color: '#888888',
    },
    // itemText: {
    //     color: '#ffffff',
    //     marginLeft: 10, // Add spacing between icon and text
    // },
    // descriptionText: {
    //     color: '#ffffff',
    //     marginTop: 5, // Add spacing between title and description
    // },
});


export default GridScreen;
