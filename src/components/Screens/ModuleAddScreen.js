import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';

// Initialisations --------------------------------------------
const defaultModule = {
  ModuleCode: '',
  ModuleName: '',
  ModuleLevel: '',
  ModuleLeaderID: null,
  ModuleLeaderName: '',
  ModuleImage:
    'https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg',
};

const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations --------------------------------------------
  const { onAdd } = route.params;

  // State ------------------------------------------------------
  const [module, setModule] = useState({ ...defaultModule });

  // Handlers ---------------------------------------------------
  const handleChange = (field, value) => {
    setModule((currentModule) => ({
      ...currentModule,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    const newModule = {
      ...module,
      ModuleID: Math.floor(100000 + Math.random() * 900000),
      ModuleLevel:
        module.ModuleLevel.trim() === ''
          ? null
          : Number(module.ModuleLevel),
    };

    onAdd(newModule);
  };

  const handleCancel = () => navigation.goBack();

  // View -------------------------------------------------------
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange('ModuleCode', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange('ModuleName', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange('ModuleLevel', value)}
          style={styles.itemTextInput}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) =>
            handleChange('ModuleLeaderName', value)
          }
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange('ModuleImage', value)}
          style={styles.itemTextInput}
          autoCapitalize="none"
        />
      </View>

      <ButtonTray>
        <Button
          label="Add"
          icon={<Icons.Add />}
          onClick={handleAdd}
        />

        <Button
          label="Cancel"
          icon={<Icons.Close />}
          onClick={handleCancel}
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
});

export default ModuleAddScreen;
