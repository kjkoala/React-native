import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Navbar = (props) => {
    return (
        <View style={styles.header}>
            <Text>NavBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        alignItems: 'center',
        height: 70
    }
})
