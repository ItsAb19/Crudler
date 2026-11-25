import { useState } from 'react';
import Form from '../../UI/Form.js';
import Icons from '../../UI/Icons.js';

// Initialisations --------------------------------------------
const defaultModule = {
  ModuleID: null,
  ModuleCode: '',
  ModuleName: '',
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: '',
  ModuleImage:
    'https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg',
};

const levels = [
  { value: 3, label: '3 (Foundation)' },
  { value: 4, label: '4 (First year)' },
  { value: 5, label: '5 (Second year)' },
  { value: 6, label: '6 (Final year)' },
  { value: 7, label: '7 (Masters)' },
];

const ModuleForm = ({ onSubmit, onCancel }) => {
  // Initialisations --------------------------------------------
  const submitLabel = 'Add';
  const submitIcon = <Icons.Add />;

  // State ------------------------------------------------------
  const [module, setModule] = useState({ ...defaultModule });

  // Handlers ---------------------------------------------------
  const handleChange = (field, value) =>
    setModule((currentModule) => ({
      ...currentModule,
      [field]: value,
    }));

  const handleSubmit = () => {
    const newModule = {
      ...module,
      ModuleID: Math.floor(100000 + Math.random() * 900000),
    };

    onSubmit(newModule);
  };

  // View -------------------------------------------------------
  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module code"
        value={module.ModuleCode}
        onChange={(value) => handleChange('ModuleCode', value)}
      />

      <Form.InputText
        label="Module name"
        value={module.ModuleName}
        onChange={(value) => handleChange('ModuleName', value)}
      />

      <Form.InputSelect
        label="Module level"
        prompt="Select module level ..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange('ModuleLevel', value)}
      />

      <Form.InputText
        label="Module leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange('ModuleLeaderName', value)}
      />

      <Form.InputText
        label="Module image URL"
        value={module.ModuleImage}
        onChange={(value) => handleChange('ModuleImage', value)}
      />
    </Form>
  );
};

export default ModuleForm;
