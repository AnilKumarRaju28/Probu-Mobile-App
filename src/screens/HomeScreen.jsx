import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require("../assets/logo.png")} style={styles.logo} />
                    <Image source={require("../assets/proj.png")} style={styles.bannerImage} />
                    <Text style={styles.title}>ProBu is the easiest way for teams to track project budget, track team's work from start to finish.</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.loginBtn, { backgroundColor: colors.Primary }]}
                            onPress={handleLogin} >
                            <Text style={styles.btnTextLogin}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.loginBtn]} onPress={handleSignUp} >
                            <Text style={styles.btnTextSignUp}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        alignItems: "center",
    },
    logo: {
        height: 80,
        width: 250,
        marginVertical: 10,
    },
    bannerImage: {
        marginVertical: 20,
        height: 250,
        width: 250,
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.Primary,
        marginTop: 30,
    },
    btnContainer: {
        marginTop: 100,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.Primary,
        width: "80%",
        height: 60,
        borderRadius: 100,
    },
    loginBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    btnTextLogin: {
        color: colors.White,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
    btnTextSignUp: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
});