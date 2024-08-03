import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Project = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Projects</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate("ProjectCreate")}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText} >Create Project</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <ScrollView style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderName]}>Project Name</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderCode]}>Project Code</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderDescription]}>Description</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStartDate]}>Start Date</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderEndDate]}>End Date</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderManager]}>Manager</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                    </View>
                    {/* Example table row. Repeat this block for each row. */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellName]}>Project Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellCode]}>P001</Text>
                        <Text style={[styles.tableCell, styles.tableCellDescription]}>Description of Project Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellStartDate]}>2023-01-01</Text>
                        <Text style={[styles.tableCell, styles.tableCellEndDate]}>2023-12-31</Text>
                        <Text style={[styles.tableCell, styles.tableCellManager]}>Jane Doe</Text>
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
                        <Text style={[styles.tableCell, styles.tableCellName]}>Project Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellCode]}>P001</Text>
                        <Text style={[styles.tableCell, styles.tableCellDescription]}>Description of Project Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellStartDate]}>2023-01-01</Text>
                        <Text style={[styles.tableCell, styles.tableCellEndDate]}>2023-12-31</Text>
                        <Text style={[styles.tableCell, styles.tableCellManager]}>Jane Doe</Text>
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

export default Project;

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
    tableHeaderName: {
        width: 140,
        textAlign: 'center',
    },
    tableHeaderCode: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderDescription: {
        width: 200,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderStartDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderEndDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderManager: {
        width: 140,
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
    tableCellName: {
        width: 140,
    },
    tableCellCode: {
        width: 100,
    },
    tableCellDescription: {
        width: 200,
    },
    tableCellStatus: {
        width: 100,
    },
    tableCellStartDate: {
        width: 120,
    },
    tableCellEndDate: {
        width: 120,
    },
    tableCellManager: {
        width: 140,
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
