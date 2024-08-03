import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProjectCreate = () => {
    const navigation = useNavigation();
    const [projectName, setProjectName] = useState(null);
    const [vertical, setVertical] = useState(null);
    const [status, setStatus] = useState(null);
    const [description, setDescription] = useState('');
    const [leadCreator, setLeadCreator] = useState(null);
    const [client, setClient] = useState(null);
    const [projectManager, setProjectManager] = useState(null);
    const [projectCost, setProjectCost] = useState('');
    const [gstAmount, setGstAmount] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [allocatedBudget, setAllocatedBudget] = useState('');
    const [spentBudget, setSpentBudget] = useState('');
    const [spendBudgetGst, setSpendBudgetGst] = useState('');
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [openProjectName, setOpenProjectName] = useState(false);
    const [openVertical, setOpenVertical] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
    const [openLeadCreator, setOpenLeadCreator] = useState(false);
    const [openClient, setOpenClient] = useState(false);
    const [openProjectManager, setOpenProjectManager] = useState(false);

    // Dropdown items
    const dropdownItems = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ];
    const statusItems = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ];

    const handleCreateProject = () => {
        // Add your project creation logic here
    };

    const handleCancel = () => {
        navigation.navigate('Projects');
    };

    const onChangeStartDate = (event, selectedDate) => {
        setShowStartDatePicker(false);
        if (event.type === 'set') {
            setStartDate(selectedDate || startDate);
        }
    };

    const onChangeEndDate = (event, selectedDate) => {
        setShowEndDatePicker(false);
        if (event.type === 'set') {
            setEndDate(selectedDate || endDate);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.headingText}>Create New Project</Text>

                <Text style={styles.label}>Project Name</Text>
                <DropDownPicker
                    open={openProjectName}
                    value={projectName}
                    items={dropdownItems}
                    setOpen={setOpenProjectName}
                    setValue={setProjectName}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Select Vertical</Text>
                <DropDownPicker
                    open={openVertical}
                    value={vertical}
                    items={dropdownItems}
                    setOpen={setOpenVertical}
                    setValue={setVertical}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
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

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />

                <Text style={styles.label}>Lead Creator</Text>
                <DropDownPicker
                    open={openLeadCreator}
                    value={leadCreator}
                    items={dropdownItems}
                    setOpen={setOpenLeadCreator}
                    setValue={setLeadCreator}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Client</Text>
                <DropDownPicker
                    open={openClient}
                    value={client}
                    items={dropdownItems}
                    setOpen={setOpenClient}
                    setValue={setClient}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Project Manager</Text>
                <DropDownPicker
                    open={openProjectManager}
                    value={projectManager}
                    items={dropdownItems}
                    setOpen={setOpenProjectManager}
                    setValue={setProjectManager}
                    setItems={() => dropdownItems}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                />

                <Text style={styles.label}>Project Cost</Text>
                <TextInput
                    style={styles.input}
                    value={projectCost}
                    onChangeText={setProjectCost}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>GST Amount</Text>
                <TextInput
                    style={styles.input}
                    value={gstAmount}
                    onChangeText={setGstAmount}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Start Date</Text>
                <View style={styles.dateRow}>
                    <Pressable onPress={() => setShowStartDatePicker(true)} style={styles.datePicker}>
                        <Text style={styles.dateText}>{startDate ? startDate.toLocaleDateString() : 'Select Date'}</Text>
                        <Icon name="calendar" size={20} style={styles.icon} />
                    </Pressable>
                    {showStartDatePicker && (
                        <DateTimePicker
                            value={startDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeStartDate}
                        />
                    )}
                </View>

                <Text style={styles.label}>End Date</Text>
                <View style={styles.dateRow}>
                    <Pressable onPress={() => setShowEndDatePicker(true)} style={styles.datePicker}>
                        <Text style={styles.dateText}>{endDate ? endDate.toLocaleDateString() : 'Select Date'}</Text>
                        <Icon name="calendar" size={20} style={styles.icon} />
                    </Pressable>
                    {showEndDatePicker && (
                        <DateTimePicker
                            value={endDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeEndDate}
                        />
                    )}
                </View>

                <Text style={styles.label}>Allocated Budget</Text>
                <TextInput
                    style={styles.input}
                    value={allocatedBudget}
                    onChangeText={setAllocatedBudget}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Spent Budget</Text>
                <TextInput
                    style={styles.input}
                    value={spentBudget}
                    onChangeText={setSpentBudget}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Spend Budget GST</Text>
                <TextInput
                    style={styles.input}
                    value={spendBudgetGst}
                    onChangeText={setSpendBudgetGst}
                    keyboardType="numeric"
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateProject}>
                        <Text style={styles.buttonText}>Create Project</Text>
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
    dateRow: {
        marginBottom: 16,
    },
    datePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 40,
    },
    dateText: {
        flex: 1,
        color: '#000',
    },
    icon: {
        marginLeft: 8,
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

export default ProjectCreate;
