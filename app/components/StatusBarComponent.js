// components/StatusBarComponent
import React, { useContext } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../providers/ThemeProvider';

const STATUS_BAR_HEIGHT = 50;

export const StatusBarComponent = () => {
    const { isDark, colors } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        statusBar: {
            backgroundColor: colors.layout,
            height: STATUS_BAR_HEIGHT,
        },
    });

    // задать высоту статус-бара
    StatusBar.currentHeight = STATUS_BAR_HEIGHT;

    return (
        <View style={styles.statusBar}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        </View>
    );
};