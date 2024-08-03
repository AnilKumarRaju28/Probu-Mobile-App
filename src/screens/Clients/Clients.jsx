import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Clients = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Clients</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('ClientCreate')}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText}>Create Client</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <ScrollView style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderImage]}>Image</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderPhone]}>Phone Number</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderName]}>Client Name</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderEmail]}>Email</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderCity]}>City</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderDistrict]}>District</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderState]}>State</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                    </View>
                    {/* Example table row. Repeat this block for each row. */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellImage]}>-</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellPhone]}>1234567890</Text>
                        <Text style={[styles.tableCell, styles.tableCellName]}>John Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellEmail]}>email@example.com</Text>
                        <Text style={[styles.tableCell, styles.tableCellCity]}>New York</Text>
                        <Text style={[styles.tableCell, styles.tableCellDistrict]}>Manhattan</Text>
                        <Text style={[styles.tableCell, styles.tableCellState]}>NY</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="pencil" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellImage]}>-</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellPhone]}>1234567890</Text>
                        <Text style={[styles.tableCell, styles.tableCellName]}>John Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellEmail]}>email@example.com</Text>
                        <Text style={[styles.tableCell, styles.tableCellCity]}>New York</Text>
                        <Text style={[styles.tableCell, styles.tableCellDistrict]}>Manhattan</Text>
                        <Text style={[styles.tableCell, styles.tableCellState]}>NY</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="pencil" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellImage]}>-</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellPhone]}>1234567890</Text>
                        <Text style={[styles.tableCell, styles.tableCellName]}>John Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellEmail]}>email@example.com</Text>
                        <Text style={[styles.tableCell, styles.tableCellCity]}>New York</Text>
                        <Text style={[styles.tableCell, styles.tableCellDistrict]}>Manhattan</Text>
                        <Text style={[styles.tableCell, styles.tableCellState]}>NY</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="pencil" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellImage]}>-</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellPhone]}>1234567890</Text>
                        <Text style={[styles.tableCell, styles.tableCellName]}>John Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellEmail]}>email@example.com</Text>
                        <Text style={[styles.tableCell, styles.tableCellCity]}>New York</Text>
                        <Text style={[styles.tableCell, styles.tableCellDistrict]}>Manhattan</Text>
                        <Text style={[styles.tableCell, styles.tableCellState]}>NY</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="pencil" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default Clients;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginRight: 8,
        color: '#000',
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    createButtonIcon: {
        marginRight: 8,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    tableContainer: {
        flex: 1,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5,
        backgroundColor: '#000',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        color: '#fff',
        paddingHorizontal: 5,
    },
    tableHeaderImage: {
        width: 60,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 80,
        textAlign: 'center',
    },
    tableHeaderPhone: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderName: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderEmail: {
        width: 180,
        textAlign: 'center',
    },
    tableHeaderCity: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderDistrict: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderState: {
        width: 80,
        textAlign: 'center',
    },
    tableHeaderAction: {
        width: 80,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    tableCell: {
        paddingHorizontal: 5,
        color: '#000',
        textAlign: 'center',
    },
    tableCellImage: {
        width: 60,
    },
    tableCellStatus: {
        width: 80,
    },
    tableCellPhone: {
        width: 120,
    },
    tableCellName: {
        width: 120,
    },
    tableCellEmail: {
        width: 180,
    },
    tableCellCity: {
        width: 120,
    },
    tableCellDistrict: {
        width: 120,
    },
    tableCellState: {
        width: 80,
    },
    tableCellAction: {
        width: 50,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        padding: 4,
        justifyContent: 'center',
    },
});
