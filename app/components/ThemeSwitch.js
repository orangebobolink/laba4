import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useCustomColorScheme } from './ColorSchemeContext';

const ThemeSwitch = () => {
    const { colorScheme, setCustomColorScheme } = useCustomColorScheme();

    const toggleSwitch = () => {
        setCustomColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={colorScheme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={colorScheme === 'dark'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        marginRight: 10,
    },
});

export default ThemeSwitch;
