import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const navigation = useNavigation();

    const [secureEntry, setSecureEntry] = useState(true);
    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtnWrapper}>
                <Ionicons name={"arrow-back-outline"} color={colors.Primary} size={25} onPress={handleGoBack} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Let's get started</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name={"account"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your name: "
                        placeholderTextColor={colors.Primary}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Fontisto name={"email"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={colors.Primary}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name={"mobile"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Mobile Number"
                        placeholderTextColor={colors.Primary}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={25} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor={colors.Primary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev);
                    }}>
                        <FontAwesome5 name={"eye"} size={25} color={colors.Secondary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={20} color={colors.Primary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Re-Enter your password"
                        placeholderTextColor={colors.Primary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev);
                    }}>
                        <FontAwesome5 name={"eye"} size={20} color={colors.Secondary} />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Your Password?</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.loginBtnWrp}>
                    <Text style={styles.loginTxt}>SignUp</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accText}>Already have an account!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.signUpTxt}>Login</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default SignUpScreen

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
        marginTop: 20
    },
    formContainer: {
        marginBottom: 60,
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
        marginTop: 30,
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
})