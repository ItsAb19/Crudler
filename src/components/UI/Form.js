import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Icons from './Icons.js';
import { Button, ButtonTray } from './Button.js';

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  // Initialisations --------------------------------------------
  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  // View -------------------------------------------------------
  return (
    <KeyboardAvoidingView
      style={styles.formContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.formItems}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>

      <ButtonTray>
        <Button
          label={submitLabel}
          icon={submitIcon}
          onClick={onSubmit}
        />

        <Button
          label="Cancel"
          icon={<Icons.Close />}
          onClick={onCancel}
        />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  // Initialisations --------------------------------------------
  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  // View -------------------------------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>

      <TextInput
        value={value ?? ''}
        onChangeText={onChange}
        style={styles.itemTextInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  // Initialisations --------------------------------------------
  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  // View -------------------------------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>

      <View style={styles.pickerContainer}>
        <Picker
          mode="dropdown"
          selectedValue={value}
          onValueChange={onChange}
          style={styles.itemPickerStyle}
          itemStyle={styles.itemPickerItem}
        >
          <Picker.Item
            value={null}
            label={prompt}
            color="gray"
          />

          {options.map((option, index) => (
            <Picker.Item
              key={index}
              value={option.value}
              label={option.label}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

// Compose components ------------------------------------------
Form.InputText = InputText;
Form.InputSelect = InputSelect;

// Styles ------------------------------------------------------
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    gap: 10,
  },

  formItems: {
    gap: 5,
    paddingBottom: 20,
  },

  item: {
    marginBottom: 10,
  },

  itemLabel: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },

  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
  },

  pickerContainer: {
    height: Platform.OS === 'ios' ? 180 : 50,
    backgroundColor: 'whitesmoke',
    borderRadius: 7,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  itemPickerStyle: {
    height: Platform.OS === 'ios' ? 180 : 50,
    width: '100%',
  },

  itemPickerItem: {
    fontSize: 16,
    height: Platform.OS === 'ios' ? 180 : 50,
  },
});

export default Form;
