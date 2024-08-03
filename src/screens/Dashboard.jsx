import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Alert, BackHandler } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import Sidebar from '../components/Sidebar';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleSwipe = useCallback(({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
            // Detect right swipe to show the sidebar
            if (nativeEvent.translationX > 50) {
                setSidebarVisible(true);
            }
            // Detect left swipe to close the sidebar if it's open
            else if (nativeEvent.translationX < -50 && sidebarVisible) {
                setSidebarVisible(false);
            }
            // Detect left swipe to show exit confirmation if sidebar is not visible
            else if (nativeEvent.translationX < -50 && !sidebarVisible) {
                showExitConfirmation();
            }
        }
    }, [sidebarVisible]);

    const showExitConfirmation = () => {
        Alert.alert(
            'Exit App',
            'Are you sure you want to exit?',
            [
                {
                    text: 'No',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => BackHandler.exitApp(),
                },
            ],
            { cancelable: false }
        );
    };

    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    useFocusEffect(
        useCallback(() => {
            const backAction = () => {
                if (sidebarVisible) {
                    closeSidebar();
                    return true; // Prevent default back action if sidebar is visible
                }
                showExitConfirmation();
                return true; // Prevent default back action and show exit confirmation
            };

            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

            return () => backHandler.remove();
        }, [sidebarVisible])
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onHandlerStateChange={handleSwipe}>
                <View style={styles.container}>
                    <Text style={styles.headingText}>Dashboard</Text>
                    {sidebarVisible && <Sidebar closeSidebar={closeSidebar} />}
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 15
    },
    headingText: {
        fontSize: 32,
        color: colors.Primary,
        fontFamily: fonts.SemiBold,
        textAlign: 'center',
        marginTop: 30
    }
});