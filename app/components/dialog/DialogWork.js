import React from 'react';
import {View} from 'react-native';
import Dialog from 'react-native-dialog';

export default function DialogWork({visible,
                                       handleCancel,
                                       handleShow,
                                   dayNumber,
                                   setDayNumber}) {

    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>Account delete</Dialog.Title>
            <Dialog.Input label="Post"
                          onChangeText={day => setDayNumber(day)}
                          value={dayNumber}
                          keyboardType='numeric'
            />
            <Dialog.Button onPress={handleCancel} label="Cancel" />
            <Dialog.Button onPress={handleShow} label="Find" />
        </Dialog.Container>
    );
};
