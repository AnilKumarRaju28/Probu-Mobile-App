import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const host = "http://157.245.110.240:8080/ProBuServices";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const login = async (userName, password) => {
        const urlString = `${host}/oauth/token`;
        const params = new URLSearchParams({
            username: userName,
            password: password,
            grant_type: 'password'
        });
        const headers = {
            Authorization: 'Basic ' + btoa('iamclient:system38567'),
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        try {
            const response = await axios.post(urlString, params.toString(), { headers });
            console.log('Login response:', response.data);  // Log the entire response
            const user = response.data;
            const token = response.data.access_token;

            if (user && token) {
                await AsyncStorage.setItem('currentUser', JSON.stringify(user));
                await AsyncStorage.setItem('loggedUser', userName);
                await AsyncStorage.setItem('token', token);
                return user;
            } else {
                throw new Error('Invalid login response format');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        try {
            console.log('Attempting login...');
            const data = await login(email, password);
            console.log('Login response:', data);

            if (data !== 'Bad credentials') {
                await AsyncStorage.setItem('loggedUser', email);
                const token = data.access_token;

                if (token) {
                    navigation.navigate('Dashboard');
                } else {
                    Alert.alert('Invalid Credentials');
                }
            } else {
                Alert.alert('Invalid Credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Invalid Credentials');
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtnWrapper}>
                <Ionicons name={"arrow-back-outline"} color={colors.Primary} size={25} onPress={handleGoBack} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Welcome Back!</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Fontisto name={"email"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={colors.Primary}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor={colors.Primary}
                        secureTextEntry={secureEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                        <FontAwesome5 name={"eye"} size={20} color={colors.Secondary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Your Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtnWrp} onPress={handleSubmit}>
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signUpTxt}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 15
    },
    backBtnWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.Gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 20
    },
    headingText: {
        fontSize: 32,
        color: colors.Primary,
        fontFamily: fonts.SemiBold,
        paddingLeft: 50,
        marginTop: 30
    },
    formContainer: {
        marginBottom: 200,
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.Primary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light
    },
    forgotText: {
        color: colors.Primary,
        textAlign: 'right',
        fontFamily: fonts.SemiBold,
        marginVertical: 10
    },
    loginBtnWrp: {
        backgroundColor: colors.Primary,
        borderRadius: 100,
        marginTop: 10,
    },
    loginTxt: {
        color: colors.White,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        padding: 10
    },
    footerContainer: {
        flexDirection: 'row',
        color: colors.Primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        gap: 5
    },
    accText: {
        color: colors.Primary,
        fontFamily: fonts.Regular,
    },
    signUpTxt: {
        color: colors.Primary,
        fontFamily: fonts.Bold,
        gap: 5
    }
});
