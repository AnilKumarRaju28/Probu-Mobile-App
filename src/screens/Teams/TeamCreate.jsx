import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TeamCreate = () => {
    const navigation = useNavigation();
    const [teamName, setTeamName] = useState('');
    const [status, setStatus] = useState(null);
    const [projects, setProjects] = useState(null);
    const [teamLeads, setTeamLeads] = useState(null);
    const [projectManagers, setProjectManagers] = useState(null);

    const [openTeamName, setOpenTeamName] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openTeamLeads, setOpenTeamLeads] = useState(false);
    const [openProjectManagers, setOpenProjectManagers] = useState(false);

    // Dropdown items
    const dropdownItems = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ];
    const statusItems = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ];

    const handleCreateTeam = () => {
        // Add your team creation logic here
    };

    const handleCancel = () => {
        navigation.navigate('Teams'); // Adjust to your actual navigation path
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.headingText}>Create Team</Text>

                <Text style={styles.label}>Team Name</Text>
                <TextInput
                    style={styles.input}
                    value={teamName}
                    onChangeText={setTeamName}
                />

                <Text style={styles.label}>Select Status</Text>
                <DropDownPicker
                    open={openStatus}
                    value={status}
                    items={statusItems}
                    setOpen={setOpenStatus}
                    setValue={setStatus}
                    setItems={() => statusItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Select Projects</Text>
                <DropDownPicker
                    open={openProjects}
                    value={projects}
                    items={dropdownItems}
                    setOpen={setOpenProjects}
                    setValue={setProjects}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Select Team Leads</Text>
                <DropDownPicker
                    open={openTeamLeads}
                    value={teamLeads}
                    items={dropdownItems}
                    setOpen={setOpenTeamLeads}
                    setValue={setTeamLeads}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Select Project Managers</Text>
                <DropDownPicker
                    open={openProjectManagers}
                    value={projectManagers}
                    items={dropdownItems}
                    setOpen={setOpenProjectManagers}
                    setValue={setProjectManagers}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateTeam}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
        color: '#000',
    },
    dropdownContainer: {
        marginBottom: 16,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    createButton: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 8,
        marginRight: 8,
        alignItems: 'center',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TeamCreate;
