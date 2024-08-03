import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Organization = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Add search logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Organizations</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity style={styles.createButton}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText}>Create Organization</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tableContainer}>
                <ScrollView horizontal>
                    <ScrollView>
                        <View style={styles.tableHeader}>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderId]}>ID</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderName]}>Organization Name</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderRegistrationDate]}>Registration Date</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderLastPaymentDate]}>Last Payment Date</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderRenewalDate]}>Renewal Date</Text>
                            <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                        </View>
                        {/* Example table row. Repeat this block for each row. */}
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.tableCellId]}>1</Text>
                            <Text style={[styles.tableCell, styles.tableCellName]}>Org Alpha</Text>
                            <Text style={[styles.tableCell, styles.tableCellRegistrationDate]}>2023-01-01</Text>
                            <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                            <Text style={[styles.tableCell, styles.tableCellLastPaymentDate]}>2023-07-01</Text>
                            <Text style={[styles.tableCell, styles.tableCellRenewalDate]}>2024-01-01</Text>
                            <View style={[styles.tableCell, styles.tableCellAction]}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Icon name="eye" size={16} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    );
};

export default Organization;

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
        marginBottom: 50, // Increased spacing here
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
    tableHeaderId: {
        width: 60,
        textAlign: 'center',
    },
    tableHeaderName: {
        width: 150,
        textAlign: 'center',
    },
    tableHeaderRegistrationDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderLastPaymentDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderRenewalDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderAction: {
        width: 60,
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
    tableCellId: {
        width: 60,
    },
    tableCellName: {
        width: 150,
    },
    tableCellRegistrationDate: {
        width: 120,
    },
    tableCellStatus: {
        width: 100,
    },
    tableCellLastPaymentDate: {
        width: 120,
    },
    tableCellRenewalDate: {
        width: 120,
    },
    tableCellAction: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        padding: 4,
    },
});
