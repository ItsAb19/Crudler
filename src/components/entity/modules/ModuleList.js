import { ScrollView, StyleSheet } from 'react-native';
import ModuleItem from './ModuleItem';

const ModuleList = ({ modules, onDelete }) => {
  // Initialisations --------------------------------------------

  // State ------------------------------------------------------

  // Handlers ---------------------------------------------------

  // View -------------------------------------------------------
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onDelete={onDelete}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleList;
