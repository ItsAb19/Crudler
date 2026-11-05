
import { ScrollView, StyleSheet } from 'react-native';
import ModuleItem from './ModuleItem';

const ModuleList = ({ modules, onSelect }) => {
  // Initialisations --------------------------------------------
  // State ------------------------------------------------------
  // Handlers ---------------------------------------------------
  // View -------------------------------------------------------
  return (
    <ScrollView>
      {modules.map((module) => (
        <ModuleItem
          key={module.ModuleID ?? module.ModuleCode}
          module={module}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
