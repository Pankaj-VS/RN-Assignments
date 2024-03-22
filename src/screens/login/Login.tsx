import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';

import { virus } from '../../constants/splash-constants';

import { styles } from './login-styles';

const Login = () => {
    const [input, setInput] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleInputChange = (text: string) => {
        setInput(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleLogin = ({ navigation }) => {
        // Logic for handling login
    };

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={virus} style={styles.image} />
            </View>

            <Text style={styles.title}>COVSTATS</Text>

            <View style={styles.subContainer}>
                <Text style={styles.text}>Mobile Number</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={input}
                    placeholder="Enter your mobile number"
                />
            </View>

            <Text style={styles.errorMessage}>Invalid mobile number</Text>

            <View style={styles.subContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handlePasswordChange}
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
            </View>

            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Sign in with Google</Text>
            </Pressable>
        </View>
    );
};

export default Login;
