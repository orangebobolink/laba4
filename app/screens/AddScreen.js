import { StyleSheet, TextInput,Text, View} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native-paper';
import {Employee} from '../types/employee';

export default function AddScreen({navigation, route }) {
    const [lastName, setLastName] = useState("");
    const [post, setPost] = useState("");
    const [dateOfEmployment, setDateOfEmployment] = useState("");
    const [dateOfFire, setDateOfFire] = useState(null);
    const [salary, setSalary] = useState(0);

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
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => setSalary(text)}
                value={salary}
                style={{padding: 10}}
            />

            <Button
                onPress={()=>{
                    route.params.add(new Employee(
                        Math.floor(Math.random() * 11),
                        lastName,
                        post,
                        dateOfEmployment,
                        dateOfFire,
                        salary
                        )
                    )
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

    },
    button:{
        backgroundColor: 'gray'
    }
});
