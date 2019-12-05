import React from 'react'
import { StyleSheet, View } from 'react-native'

export default AppCard = (props) => {
    return (
        <View style={ {...styles.default, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    default: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 20,
        flexDirection: 'row'
    }
})