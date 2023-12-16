import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import {useCustomColorScheme} from './ColorSchemeContext';

const DropMenu = ({add, remove, update,
                      getEngineers, getUnfired,
                  saveDate}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const { colorScheme, setCustomColorScheme } = useCustomColorScheme();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        },
        menu: {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
            marginTop:-50
        },
        text: {
            color: colorScheme === 'dark' ? 'white' : 'black',
        },
        button: {
            backgroundColor: colorScheme === 'dark' ? 'dark' : 'lightgray',
            color: colorScheme === 'dark' ? 'white' : 'black',
        },
        buttonText: {
            color: colorScheme === 'dark' ? 'white' : 'black',
        },
        flexcontainer: {
            flex: 1,
            marginBottom:-100
        },

    });

    return (
        <PaperProvider style={styles.container}>
            <View
                style={styles.container}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    style={styles.menu}
                    anchor={<Button style={styles.button} onPress={openMenu}>Show menu</Button>}
                >
                    <Menu.Item onPress={getEngineers}
                               title="Вывести по должности"/>
                    <Menu.Item onPress={getUnfired}
                               title="Вывести по срокам" />
                    <Menu.Item onPress={add}
                               title="Добавить" />
                    <Menu.Item onPress={update}
                               title="Редактировать" />
                    <Menu.Item onPress={remove}
                               title="Удалить" />
                    <Menu.Item onPress={saveDate}
                               title="Сохранить" />
                </Menu>
            </View>
        </PaperProvider>
    );
};

export default DropMenu;