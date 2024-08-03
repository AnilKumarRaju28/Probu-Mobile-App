import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tasks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Tasks</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.createButton}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText}>Create Task</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <ScrollView style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderTaskId]}>Task Id</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderTitle]}>Title</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderCreatedDate]}>Created Date</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderProject]}>Project</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderCreatedBy]}>Created by</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAssignedBy]}>Assigned by</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAssignedTo]}>Assigned to</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                    </View>
                    {/* Example table row. Repeat this block for each row. */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellTaskId]}>T001</Text>
                        <Text style={[styles.tableCell, styles.tableCellTitle]}>Task Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Pending</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedDate]}>2024-07-20</Text>
                        <Text style={[styles.tableCell, styles.tableCellProject]}>Project X</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedBy]}>Jane Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedBy]}>John Smith</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedTo]}>Alice Brown</Text>
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
                        <Text style={[styles.tableCell, styles.tableCellTaskId]}>T001</Text>
                        <Text style={[styles.tableCell, styles.tableCellTitle]}>Task Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Pending</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedDate]}>2024-07-20</Text>
                        <Text style={[styles.tableCell, styles.tableCellProject]}>Project X</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedBy]}>Jane Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedBy]}>John Smith</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedTo]}>Alice Brown</Text>
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
                        <Text style={[styles.tableCell, styles.tableCellTaskId]}>T001</Text>
                        <Text style={[styles.tableCell, styles.tableCellTitle]}>Task Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Pending</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedDate]}>2024-07-20</Text>
                        <Text style={[styles.tableCell, styles.tableCellProject]}>Project X</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedBy]}>Jane Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedBy]}>John Smith</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedTo]}>Alice Brown</Text>
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
                        <Text style={[styles.tableCell, styles.tableCellTaskId]}>T001</Text>
                        <Text style={[styles.tableCell, styles.tableCellTitle]}>Task Alpha</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Pending</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedDate]}>2024-07-20</Text>
                        <Text style={[styles.tableCell, styles.tableCellProject]}>Project X</Text>
                        <Text style={[styles.tableCell, styles.tableCellCreatedBy]}>Jane Doe</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedBy]}>John Smith</Text>
                        <Text style={[styles.tableCell, styles.tableCellAssignedTo]}>Alice Brown</Text>
                        <View style={[styles.tableCell, styles.tableCellAction]}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="eye" size={16} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="pencil" size={16} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Repeat above block for more rows */}
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default Tasks;

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
    tableHeaderTaskId: {
        width: 80,
        textAlign: 'center',
    },
    tableHeaderTitle: {
        width: 150,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderCreatedDate: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderProject: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderCreatedBy: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderAssignedBy: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderAssignedTo: {
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
    tableCellTaskId: {
        width: 80,
    },
    tableCellTitle: {
        width: 150,
    },
    tableCellStatus: {
        width: 100,
    },
    tableCellCreatedDate: {
        width: 120,
    },
    tableCellProject: {
        width: 120,
    },
    tableCellCreatedBy: {
        width: 120,
    },
    tableCellAssignedBy: {
        width: 120,
    },
    tableCellAssignedTo: {
        width: 120,
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
