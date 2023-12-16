import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Employee} from '../types/employee';
import {useState} from 'react';
import DropMenu from '../components/DropMenu';
import {Button} from 'react-native-paper';


export default function UpdateScreen({navigation, route}) {
    const [lastName, setLastName] = useState(route.params.item.lastName);
    const [post, setPost] = useState(route.params.item.post);
    const [dateOfEmployment, setDateOfEmployment] = useState(route.params.item.dateOfEmployment);
    const [dateOfFire, setDateOfFire] = useState(route.params.item.dateOfFire);
    const [salary, setSalary] = useState(route.params.item.salary);

    return (
        <View style={styles.container}>
            <Text>Введите фамилию:</Text>
            <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setLastName(text)}
                value={lastName}
                style={{padding: 10}}
            />
            <Text>Введите должность:</Text>
            <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setPost(text)}
                value={post}
                style={{padding: 10}}
            />
            <Text>Введите дату когда приняли на работу:</Text>
            <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setDateOfEmployment(text)}
                value={dateOfEmployment}
                style={{padding: 10}}
            />
            <Text>Введите дату увольнения (не обязательно):</Text>
            <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setDateOfFire(text)}
                value={dateOfFire}
                style={{padding: 10}}
            />
            <Text>Введите зарплату:</Text>
            <TextInput
                editable
                multiline
                keyboardType="numeric"
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setSalary(text)}
                value={salary}
                style={{padding: 10}}
            />

            <Button
                onPress={()=> {
                    route.params.update(new Employee(
                        Math.floor(Math.random() * 11),
                        lastName,
                        post,
                        dateOfEmployment,
                        dateOfFire,
                        salary
                    ))
                    navigation.goBack()
                }
            }
                title="Добавить"
                style={styles.button}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menu: {
        flex: 1, // Занимать всю доступную высоту
        justifyContent: 'flex-start', // Выравнивание по верхнему краю
        alignItems: 'flex-start', // Выравнивание по левому краю
    },
    button:{
        backgroundColor: 'gray'
    }
});
