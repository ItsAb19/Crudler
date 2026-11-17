import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';

const defaultModule = {
  ModuleCode: 'CI6330',
  ModuleName: 'Mobile Application Development',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage:
    'https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg',
};

const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations --------------------------------------------
  const { onAdd } = route.params;

  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  const handleAdd = () => {
    const module = {
      ...defaultModule,
      ModuleID: Math.floor(100000 + Math.random() * 900000),
    };

    onAdd(module);
  };

  const handleCancel = () => navigation.goBack();

  // View -------------------------------------------------------
  return (
    <Screen>
      <Text>Add</Text>

      <ButtonTray>
        <Button
          label="Add"
          icon={<Icons.Add />}
          onClick={handleAdd}
        />

        <Button
          label="Cancel"
          onClick={handleCancel}
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
