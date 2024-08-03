import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Employee = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Teams</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('TeamCreate')}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText}>Create Team</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <ScrollView style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderTeamName]}>Team Name</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderProjectName]}>Project Name</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderTeamLeads]}>Team Leads</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderProjManager]}>Proj Manager</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                    </View>
                    {/* Example table row. Repeat this block for each row. */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellTeamName]}>A</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellProjectName]}>Project X</Text>
                        <Text style={[styles.tableCell, styles.tableCellTeamLeads]}>John Doe, Jane Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellProjManager]}>Alex</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellTeamName]}>B</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Inactive</Text>
                        <Text style={[styles.tableCell, styles.tableCellProjectName]}>Project Y</Text>
                        <Text style={[styles.tableCell, styles.tableCellTeamLeads]}>Chris Evans</Text>
                        <Text style={[styles.tableCell, styles.tableCellProjManager]}>Robert Downey Jr.</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default Employee;

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
    tableHeaderTeamName: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 80,
        textAlign: 'center',
    },
    tableHeaderProjectName: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderTeamLeads: {
        width: 150,
        textAlign: 'center',
    },
    tableHeaderProjManager: {
        width: 120,
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
    tableCellTeamName: {
        width: 120,
    },
    tableCellStatus: {
        width: 80,
    },
    tableCellProjectName: {
        width: 120,
    },
    tableCellTeamLeads: {
        width: 150,
    },
    tableCellProjManager: {
        width: 120,
    },
    tableCellAction: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconButton: {
        padding: 4,
        justifyContent: 'center',
    },
});
