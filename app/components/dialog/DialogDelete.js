import React, {useState} from 'react';
import {View} from 'react-native';
import Dialog from "react-native-dialog";

export default function DialogDelete({visible, handleCancel, handleDelete}) {
    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>Account delete</Dialog.Title>
            <Dialog.Description>
                Do you want to delete this account? You cannot undo this action.
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={handleCancel } />
            <Dialog.Button label="Delete" onPress={handleDelete } />
        </Dialog.Container>
    );
};