import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function Test(props) {
    if (props.name === "test") {
        return (
            <View>
                <Text style={tailwind('text-4xl')}>
                    Ceci est un test
            </Text>
            </View>
        );
    }
    else 
    {
        return (<View />);
    }
}