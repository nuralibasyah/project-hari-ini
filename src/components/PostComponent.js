import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const PostComponent = () => {
    const [userId, setUserId] = useState('');
    const [userTitle, setTitle] = useState('');
    const [userBody, setBody] = useState('');

    const handleAddPost = async () => {
        try { 
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            id: userId,
            title: userTitle,
            body: userBody
        });

        console.log('Post added:', response.data);
        } catch (error) {
    console.error('Error adding post:', error);
    }
    };

return (
    <View style={styles.container}>
    <Text style={styles.title}>Add Post</Text>
    <TextInput
    style={styles.input}
    placeholder="Enter id"
    value={userId}
    onChangeText={text => setUserId(text)}
    />
    <TextInput
    style={styles.input}
    placeholder="Enter Title"
    value={userTitle}
    onChangeText={text => setTitle(text)}
    />

    <TextInput
    style={styles.input}
    placeholder="Enter body"
    value={userTitle}
    onChangeText={text => setBody(text)}
    />

    <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
    <Text style={styles.buttonText}>Add Post</Text>
    </TouchableOpacity>
    </View>
    );

};

export default PostComponent;
