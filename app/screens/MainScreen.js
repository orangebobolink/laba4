import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {Employee} from '../types/employee';

export default function MainScreen({navigation}) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fileUri = FileSystem.documentDirectory + 'yourfile.json';
                const jsonData = await FileSystem.readAsStringAsync(fileUri);
                const parsedData = JSON.parse(jsonData);
                const employees = parsedData.map(item => new Employee(item.id,
                    item.lastName,
                    item.post,
                    item.dateOfEmployment,
                    item.dateOfFire,
                    item.salary
                    ));
                setData(employees);
            } catch (error) {
                console.error('Error reading JSON file:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const showHomePage = () => {
        navigation.navigate("Home", {
            employee: data
        })
    }

    return (
        <View>
        {
            isLoading
            ? ( <Text>Loading...</Text>)
            : (showHomePage())
        }
        </View>
    );
};
