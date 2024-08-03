import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Vendors = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Vendors</Text>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.createButton}>
                    <Icon name="plus" size={16} color="#fff" style={styles.createButtonIcon} />
                    <Text style={styles.createButtonText}>Create Vendor</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <ScrollView style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderImage]}>Image</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderVendorName]}>Vendor Name</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderVendorCode]}>Vendor Code</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderGSTNumber]}>GST Number</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderPANNumber]}>PAN Number</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderStatus]}>Status</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderCity]}>City</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderDistrict]}>District</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderState]}>State</Text>
                        <Text style={[styles.tableHeaderText, styles.tableHeaderAction]}>Action</Text>
                    </View>
                    {/* Example table row. Repeat this block for each row. */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellImage]}>-</Text>
                        <Text style={[styles.tableCell, styles.tableCellVendorName]}>Vendor A</Text>
                        <Text style={[styles.tableCell, styles.tableCellVendorCode]}>V001</Text>
                        <Text style={[styles.tableCell, styles.tableCellGSTNumber]}>1234567890</Text>
                        <Text style={[styles.tableCell, styles.tableCellPANNumber]}>ABCDE1234F</Text>
                        <Text style={[styles.tableCell, styles.tableCellStatus]}>Active</Text>
                        <Text style={[styles.tableCell, styles.tableCellCity]}>City A</Text>
                        <Text style={[styles.tableCell, styles.tableCellDistrict]}>District A</Text>
                        <Text style={[styles.tableCell, styles.tableCellState]}>State A</Text>
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

export default Vendors;

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
    tableHeaderVendorName: {
        width: 140,
        textAlign: 'center',
    },
    tableHeaderVendorCode: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderGSTNumber: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderPANNumber: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderStatus: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderCity: {
        width: 100,
        textAlign: 'center',
    },
    tableHeaderDistrict: {
        width: 120,
        textAlign: 'center',
    },
    tableHeaderState: {
        width: 100,
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
    tableCellVendorName: {
        width: 140,
    },
    tableCellVendorCode: {
        width: 100,
    },
    tableCellGSTNumber: {
        width: 120,
    },
    tableCellPANNumber: {
        width: 120,
    },
    tableCellStatus: {
        width: 100,
    },
    tableCellCity: {
        width: 100,
    },
    tableCellDistrict: {
        width: 120,
    },
    tableCellState: {
        width: 100,
    },
    tableCellAction: {
        width: 80,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        padding: 4,
        justifyContent: 'center',
    },
});
