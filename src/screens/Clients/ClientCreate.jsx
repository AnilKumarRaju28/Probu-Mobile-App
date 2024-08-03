import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const ClientCreate = () => {
    const navigation = useNavigation();
    const [clientName, setClientName] = useState('');
    const [gstNumber, setGstNumber] = useState('');
    const [pan, setPan] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [altPhoneNumber, setAltPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [district, setDistrict] = useState(null);
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [isPrimaryContact, setIsPrimaryContact] = useState(false);

    const [openCountry, setOpenCountry] = useState(false);
    const [openState, setOpenState] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);

    const dropdownItems = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ];

    const handleSave = () => {
        // Add your save logic here
    };

    const handleCancel = () => {
        navigation.navigate('Clients')
    };

    const addContact = () => {
        // Add your add contact logic here
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.headingText}>Create Client</Text>

                {/* Client Information Section */}
                <Text style={styles.sectionHeading}>Client Information</Text>

                <Text style={styles.label}>Client Name</Text>
                <TextInput
                    style={styles.input}
                    value={clientName}
                    onChangeText={setClientName}
                />

                <Text style={styles.label}>Client GST Number</Text>
                <TextInput
                    style={styles.input}
                    value={gstNumber}
                    onChangeText={setGstNumber}
                />

                <Text style={styles.label}>PAN</Text>
                <TextInput
                    style={styles.input}
                    value={pan}
                    onChangeText={setPan}
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Alternate Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={altPhoneNumber}
                    onChangeText={setAltPhoneNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Email ID</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Alternate Email ID</Text>
                <TextInput
                    style={styles.input}
                    value={altEmail}
                    onChangeText={setAltEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Website</Text>
                <TextInput
                    style={styles.input}
                    value={website}
                    onChangeText={setWebsite}
                />

                {/* Address Section */}
                <Text style={styles.sectionHeading}>Address</Text>

                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />

                <Text style={styles.label}>Country</Text>
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openCountry}
                        value={country}
                        items={dropdownItems}
                        setOpen={setOpenCountry}
                        setValue={setCountry}
                        setItems={() => dropdownItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                    />
                </View>

                <Text style={styles.label}>State</Text>
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openState}
                        value={state}
                        items={dropdownItems}
                        setOpen={setOpenState}
                        setValue={setState}
                        setItems={() => dropdownItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                    />
                </View>

                <Text style={styles.label}>District</Text>
                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openDistrict}
                        value={district}
                        items={dropdownItems}
                        setOpen={setOpenDistrict}
                        setValue={setDistrict}
                        setItems={() => dropdownItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                    />
                </View>

                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    value={city}
                    onChangeText={setCity}
                />

                <Text style={styles.label}>Pincode</Text>
                <TextInput
                    style={styles.input}
                    value={pincode}
                    onChangeText={setPincode}
                    keyboardType="numeric"
                />

                {/* Contact Details Section */}
                <Text style={styles.sectionHeading}>Contact Details</Text>

                <Text style={styles.label}>Contact Name</Text>
                <TextInput
                    style={styles.input}
                    value={contactName}
                    onChangeText={setContactName}
                />

                <Text style={styles.label}>Phone</Text>
                <TextInput
                    style={styles.input}
                    value={contactPhone}
                    onChangeText={setContactPhone}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={contactEmail}
                    onChangeText={setContactEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Designation</Text>
                <TextInput
                    style={styles.input}
                    value={designation}
                    onChangeText={setDesignation}
                />

                <View style={styles.checkboxRow}>
                    <CheckBox
                        value={isPrimaryContact}
                        onValueChange={setIsPrimaryContact}
                    />
                    <Text style={styles.checkboxLabel}>Is Primary Contact</Text>
                </View>

                <TouchableOpacity style={styles.addButton} onPress={addContact}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                {/* Save and Cancel Buttons */}
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
        backgroundColor: '#f8f9fa', // Light background color
    },
    scrollContainer: {
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        color: '#333', // Dark text color
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333', // Dark text color
    },
    input: {
        height: 40,
        borderColor: '#ccc', // Light border color
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
        color: '#000', // Black text color
    },
    dropdownContainer: {
        marginBottom: 16,
    },
    dropdown: {
        backgroundColor: '#fff', // White background for dropdown
        borderColor: '#ccc', // Light border color
        borderWidth: 1,
        borderRadius: 8,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333', // Dark text color
    },
    addButton: {
        backgroundColor: '#000', // Primary button color
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff', // White text color
        fontSize: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: '#000', // Secondary button color
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginRight: 8,
    },
    saveButton: {
        backgroundColor: '#000', // Success button color
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        flex: 1,
    },
});

export default ClientCreate;
