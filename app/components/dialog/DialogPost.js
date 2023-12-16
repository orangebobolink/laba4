import React, {useState} from 'react';
import {View} from 'react-native';
import Dialog from "react-native-dialog";

export default function DialogPost({visible,
                                       handleCancel,
                                       handleShow,
                                   post,
                                   setPost}) {

    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>Account delete</Dialog.Title>
            <Dialog.Input label="Post"
                          onChangeText={post => setPost(post)}
                          value={post}

            />
            <Dialog.Button onPress={handleCancel} label="Cancel" />
            <Dialog.Button onPress={handleShow} label="Find" />
        </Dialog.Container>
    );
};
