export const signUpfields = [
  { id: 'name', label: 'Name', name: 'name', type: 'text', required: true },
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
  },
  { id: 'age', label: 'Age', name: 'age', type: 'number', required: true },
  {
    id: 'country',
    label: 'Country',
    name: 'country',
    type: 'text',
    required: true,
  },
  {
    id: 'gender',
    label: 'Gender',
    name: 'gender',
    type: 'select',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Not Applicable', value: 'not-applicable' },
    ],
    placeholder: 'Select gender',
    required: true,
  },
  {
    id: 'image',
    label: 'Image',
    name: 'image',
    type: 'file',
    required: true,
    accept: 'image/*',
  },
];

