import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, PanResponder, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../utils/colors';

const Sidebar = ({ closeSidebar }) => {
    const navigation = useNavigation();
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return Math.abs(gestureState.dx) > 20;
            },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    closeSidebar();
                }
            },
        })
    ).current;

    const navigateTo = (screen) => {
        closeSidebar();
        navigation.navigate(screen);
    };

    const handleLogout = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'No',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        closeSidebar();
                        navigation.navigate('Home');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.sidebarContainer} {...panResponder.panHandlers}>
            <View style={styles.header}>
                <Image source={require("../assets/logo.png")} style={styles.logo} />
                <TouchableOpacity style={styles.closeButton} onPress={closeSidebar}>
                    <Ionicons name="close" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.sidebar}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Organization')}>
                    <FontAwesome5 name="building" size={25} color="white" />
                    <Text style={styles.menuText}>Organization</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Projects')}>
                    <FontAwesome5 name="project-diagram" size={25} color="white" />
                    <Text style={styles.menuText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Clients')}>
                    <Entypo name="users" size={25} color="white" />
                    <Text style={styles.menuText}>Clients</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Employee')}>
                    <FontAwesome6 name="people-group" size={25} color="white" />
                    <Text style={styles.menuText}>Employees</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Teams')}>
                    <FontAwesome name="users" size={25} color="white" />
                    <Text style={styles.menuText}>Teams</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Tasks')}>
                    <FontAwesome5 name="tasks" size={25} color="white" />
                    <Text style={styles.menuText}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Users')}>
                    <Entypo name="users" size={25} color="white" />
                    <Text style={styles.menuText}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Vendors')}>
                    <FontAwesome6 name="building-user" size={25} color="white" />
                    <Text style={styles.menuText}>Vendors</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out" size={25} color="white" />
                <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Sidebar;

const styles = StyleSheet.create({
    sidebarContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',
        width: Dimensions.get('window').width * 0.75,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        width: 100,
        height: 40,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    sidebar: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    menuText: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    },
});
