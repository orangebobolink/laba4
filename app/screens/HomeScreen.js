import {FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View} from 'react-native';
import {useEffect, useState} from 'react';
import DropMenu from '../components/DropMenu';
import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import DialogPost from '../components/dialog/DialogPost';
import DialogWork from '../components/dialog/DialogWork';
import DialogDelete from '../components/dialog/DialogDelete';
import * as FileSystem from 'expo-file-system';
import {useCustomColorScheme} from '../components/ColorSchemeContext';
import ThemeSwitch from '../components/ThemeSwitch';


export default function HomeScreen({navigation, route}) {
    const [selectedEmployee, setSelectedEmployee] = useState({})
    const [employees, setEmployees] = useState(route.params.employee)
    const [viewEmployees, setViewEmployees] = useState(employees)
    const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false)
    const [visiblePostDialog, setVisiblePostDialog] = useState(false)
    const [visibleWorkDialog, setVisibleWorkDialog] = useState(false)
    const [post, setPost] = useState('')
    const [dayNumber, setDayNumber] = useState(1)
    const { colorScheme, setCustomColorScheme } = useCustomColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,

            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        },
        text: {
            color: colorScheme === 'dark' ? 'white' : 'black',
        },
        button: {
            backgroundColor: colorScheme === 'dark' ? 'gray' : 'lightgray',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
        },
        buttonText: {
            color: colorScheme === 'dark' ? 'white' : 'black',
        },
        flexcontainer: {
            flex: 1,
            marginBottom:-100
        },
        menu: {

        },
    });

    useEffect(() => {
        setViewEmployees(employees);
    }, [employees]);

    const showAddView = () => {
        navigation.navigate("Add", {
            add: add
        })
    }

    const showUpdateView = () => {
        navigation.navigate("Update", {
            item:selectedEmployee,
            update: update
        })
    }

    const add = (employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, employee]);
        setViewEmployees(employees);
    }

    const update = (employee) => {
        setEmployees((prevEmployees) => prevEmployees.filter(item => item.id !== selectedEmployee.id));
        setEmployees((prevEmployees) => [...prevEmployees, employee]);
        setViewEmployees(employees);
    }

    const remove = () => {
        setEmployees(employees.filter(item => item.id !== selectedEmployee.id))
        setViewEmployees(employees)
        setVisibleDeleteDialog(false)
    }

    const showWorkDialog = () => {
        setVisibleWorkDialog(!visibleWorkDialog)
    }

    const showPostDialog = () => {
        setVisiblePostDialog(!visiblePostDialog)
    }

    const showDeleteDialog = () => {
        setVisibleDeleteDialog(!visibleDeleteDialog)
    }

    const getEngineers = () => {
        const engineers = employees.filter(item => item.post === post)
        setViewEmployees(engineers)
        setVisiblePostDialog(false)
    }

    const writeToJsonFile = async (fileName) => {
        try {
            // Convert null values to a default value or an empty string
            const sanitizedData = employees.map(employee => ({
                ...employee,
                dateOfFire: employee.dateOfFire || '',
            }));

            const path =  FileSystem.documentDirectory + 'yourfile.json';
            await FileSystem.writeAsStringAsync(path, JSON.stringify(sanitizedData));
            console.log(`Data has been written to ${path}`);
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    };

    const getUnfired = () => {
        const unfired = employees.filter(item => {
            const parseDate = dateString => {
                const [day, month, year] = dateString.split('.');
                return new Date(`${year}-${month}-${day}`);
            };

            const dateOfEmployment = parseDate(item.dateOfEmployment);
            const dateOfFire = item.dateOfFire ? parseDate(item.dateOfFire) : null;

            console.log(dateOfEmployment);
            console.log(dateOfFire);

            if (dateOfFire === null) {
                return (new Date() - dateOfEmployment) / (24 * 60 * 60 * 1000) > dayNumber;
            }

            return (dateOfFire - dateOfEmployment) / (24 * 60 * 60 * 1000) > dayNumber;
        });

        setViewEmployees(unfired)
        setVisibleWorkDialog(false)
    }

    return (
        <Swiper showsButtons={false}>
            <View style={styles.container}>

                <DialogPost visible={visiblePostDialog}
                            handleShow={getEngineers}
                            handleCancel={showPostDialog}
                            post={post}
                            setPost={setPost}/>
                <DialogWork visible={visibleWorkDialog}
                            handleShow={getUnfired}
                            handleCancel={showWorkDialog}
                            dayNumber={dayNumber}
                            setDayNumber={setDayNumber}/>
                <DialogDelete visible={visibleDeleteDialog}
                           handleDelete={remove}
                           handleCancel={showDeleteDialog}/>
                <DropMenu add={showAddView}
                          getEngineers={showPostDialog}
                          remove={showDeleteDialog}
                          update={showUpdateView}
                          getUnfired={showWorkDialog}
                          style={styles.menu}
                          saveDate={writeToJsonFile}/>
                <ThemeSwitch/>
                <FlatList
                    data={viewEmployees}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => setSelectedEmployee(item)}>
                            <Text style={styles.buttonText}>{item.lastName} {item.post}</Text>
                        </TouchableOpacity>
                    )}
                    style={styles.flexcontainer}
                />

            </View>
            <View style={styles.container}>
                <Text style={styles.buttonText}>{selectedEmployee.firstName} {selectedEmployee.lastName}</Text>
                <Text style={styles.buttonText}>Position: {selectedEmployee.post}</Text>
                <Text style={styles.buttonText}>Position: {selectedEmployee.dateOfEmployment}</Text>
                <Text style={styles.buttonText}>Position: {selectedEmployee.dateOfFire}</Text>
            </View>
        </Swiper>
    );
}


