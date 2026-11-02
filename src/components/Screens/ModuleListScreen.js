import { Alert } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import initialModules from '../../data/modules.js';

// Initialisations --------------------------------------------
const modules = initialModules;

// State ------------------------------------------------------

// Handlers ---------------------------------------------------
const handleSelect = (module) => {
  Alert.alert(`Item ${module.ModuleCode} Selected`);
};

// View -------------------------------------------------------
const ModuleListScreen = () => {
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

export default ModuleListScreen;

