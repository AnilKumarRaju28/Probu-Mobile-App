import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for icons
import { useNavigation } from '@react-navigation/native';

const EmployeeCreate = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(null);
    const [joiningDate, setJoiningDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [project, setProject] = useState('');
    const [team, setTeam] = useState('');
    const [manager, setManager] = useState('');
    const [isManager, setIsManager] = useState(false);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const [openProject, setOpenProject] = useState(false);
    const [openTeam, setOpenTeam] = useState(false);
    const [showDobPicker, setShowDobPicker] = useState(false);
    const [showJoiningDatePicker, setShowJoiningDatePicker] = useState(false);

    const dropdownItems = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ];

    const handleChooseFile = async () => {
        try {
            let result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            if (result) {
                setFile(result[0]);
                setError(null);
            } else {
                setError('File selection was canceled');
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                setError('File selection was canceled');
            } else {
                setError('An error occurred while selecting the file');
            }
        }
    };

    const handleClearFile = () => {
        setFile(null);
    };

    const handleSave = () => {
        // Add your save logic here
    };

    const handleCancel = () => {
        navigation.navigate('Employee')
    };

    const onChangeDob = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDobPicker(Platform.OS === 'ios');
        setDob(currentDate);
    };

    const onChangeJoiningDate = (event, selectedDate) => {
        const currentDate = selectedDate || joiningDate;
        setShowJoiningDatePicker(Platform.OS === 'ios');
        setJoiningDate(currentDate);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.headingText}>Create Employee</Text>

                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                />

                <Text style={styles.label}>Date of Birth</Text>
                <View style={styles.dateRow}>
                    <Pressable onPress={() => setShowDobPicker(true)} style={styles.datePicker}>
                        <Text style={styles.dateText}>
                            {dob ? dob.toDateString() : 'Select Date of Birth'}
                        </Text>
                        <Icon name="calendar" size={20} style={styles.icon} />
                    </Pressable>
                    {showDobPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dob || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeDob}
                        />
                    )}
                </View>

                <Text style={styles.label}>Date of Joining</Text>
                <View style={styles.dateRow}>
                    <Pressable onPress={() => setShowJoiningDatePicker(true)} style={styles.datePicker}>
                        <Text style={styles.dateText}>
                            {joiningDate ? joiningDate.toDateString() : 'Select Date of Joining'}
                        </Text>
                        <Icon name="calendar" size={20} style={styles.icon} />
                    </Pressable>
                    {showJoiningDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={joiningDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeJoiningDate}
                        />
                    )}
                </View>

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Email ID</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Designation</Text>
                <TextInput
                    style={styles.input}
                    value={designation}
                    onChangeText={setDesignation}
                />

                <Text style={styles.label}>Project</Text>
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openProject}
                        value={project}
                        items={dropdownItems}
                        setOpen={setOpenProject}
                        setValue={setProject}
                        setItems={() => dropdownItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                    />
                </View>

                <Text style={styles.label}>Team</Text>
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openTeam}
                        value={team}
                        items={dropdownItems}
                        setOpen={setOpenTeam}
                        setValue={setTeam}
                        setItems={() => dropdownItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                    />
                </View>

                <Text style={styles.label}>Manager</Text>
                <TextInput
                    style={styles.input}
                    value={manager}
                    onChangeText={setManager}
                />

                <View style={styles.checkboxRow}>
                    <CheckBox
                        value={isManager}
                        onValueChange={setIsManager}
                    />
                    <Text style={styles.checkboxLabel}>Is Manager</Text>
                </View>

                <TouchableOpacity style={styles.fileButton} onPress={handleChooseFile}>
                    <Text style={styles.buttonText}>Choose File</Text>
                </TouchableOpacity>

                {file && (
                    <View style={styles.fileInfoContainer}>
                        <Text style={styles.fileInfoText}>File Name: {file.name}</Text>
                        <Text style={styles.fileInfoText}>File Type: {file.type}</Text>
                        <Text style={styles.fileInfoText}>File Size: {file.size} bytes</Text>
                        <TouchableOpacity style={styles.clearFileButton} onPress={handleClearFile}>
                            <Text style={styles.buttonText}>Clear File</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {error && (
                    <Text style={styles.errorText}>{error}</Text>
                )}

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
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
        padding: 20,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    datePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1,
    },
    dateText: {
        flex: 1,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
        color: '#333',
    },
    dropdownContainer: {
        marginBottom: 15,
        height: 40,
    },
    dropdown: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
        color: '#333',
    },
    fileButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    fileInfoContainer: {
        marginBottom: 15,
    },
    fileInfoText: {
        fontSize: 16,
    },
    clearFileButton: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    errorText: {
        color: '#dc3545',
        fontSize: 16,
        marginBottom: 15,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    saveButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        flex: 1,
    },
});

export default EmployeeCreate;
