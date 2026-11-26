import { useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';
import ModuleList from '../entity/modules/ModuleList.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = ({ navigation }) => {
  // Initialisations --------------------------------------------
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  // State ------------------------------------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers ---------------------------------------------------
  const handleDelete = (module) =>
    setModules((currentModules) =>
      currentModules.filter((item) => item.ModuleID !== module.ModuleID)
    );

  const handleAdd = (module) =>
    setModules((currentModules) => [...currentModules, module]);

  const handleModify = (updatedModule) =>
    setModules((currentModules) =>
      currentModules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    // Return from Modify through View to List.
    navigation.pop(2);
  };

  const handleSelect = (module) =>
    navigation.navigate('ModuleViewScreen', {
      module,
      onDelete,
      onModify,
    });

  const gotoAddScreen = () =>
    navigation.navigate('ModuleAddScreen', { onAdd });

  // View -------------------------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button
          label="Add"
          icon={<Icons.Add />}
          onClick={gotoAddScreen}
        />
      </ButtonTray>

      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
