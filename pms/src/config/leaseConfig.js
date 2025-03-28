export const fieldConfig = {
  leaseType: {
    type: 'select',
    options: [
      { label: 'Commercial', value: 'Commercial' },
      { label: 'Residential', value: 'Residential' },
    ]
  },
  status: {
    type: 'radio',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' }
    ]
  },
  atRisk: {
    type: 'radio',
    options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ]
  },
  contractedArea: {
    type: 'number',
    min: 0,
    step: 1,
    postfix: ' sqm',
  },
  rentMonthly: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€',
  },
  rentYearly: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€',
  },
  rentPerSqmMonthly: {
    type: 'number',
    min: 0,
    step: 1,
    postfix: '€/sqm',
  },
  rentPerSqmYearly: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€/sqm',
  },
  leaseFromDate: { type: 'date', format: 'DD/MM/YYYY' },
  leaseToDate: { type: 'date', format: 'DD/MM/YYYY' },
  moveInDate: { type: 'date', format: 'DD/MM/YYYY' },
  moveOutDate: { type: 'date', format: 'DD/MM/YYYY' },
  lastRenewalDate: { type: 'date', format: 'DD/MM/YYYY' },
  signDate: { type: 'date', format: 'DD/MM/YYYY' },
  nextBreakDate: { type: 'date', format: 'DD/MM/YYYY' },
  nextRentReviewDate: { type: 'date', format: 'DD/MM/YYYY' },
  security: {
    type: 'switch',
  },
  depositsRequired: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€',
  },
  depositsBilled: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€',
  },
  depositsReceived: {
    type: 'number',
    min: 0,
    step: 10,
    postfix: '€',
  },
  address1: { type: "text" },
  address2: { type: "text" },
  address3: { type: "text" },
  address4: { type: "text" },
  city: {
    type: "select",
    options: [
      { label: "Athens", value: "Athens" },
      { label: "Thessaloniki", value: "Thessaloniki" },
      // ...
    ],
  },
  countyMunicipality: {
    type: "select",
    options: [
      { label: "County1", value: "County1" },
      { label: "County2", value: "County2" },
      // ...
    ],
  },
  prefecture: {
    type: "select",
    options: [
      { label: "Attica", value: "Attica" },
      { label: "Central Macedonia", value: "Central Macedonia" },
      // ...
    ],
  },
  region: {
    type: "select",
    options: [
      { label: "Southern Greece", value: "Southern Greece" },
      { label: "Northern Greece", value: "Northern Greece" },
      // ...
    ],
  },
  postcode: { type: "text" },
  country: {
    type: "select",
    options: [
      { label: "Greece", value: "Greece" },
      { label: "Other", value: "Other" },
      // ...
    ],
  },
  type: { type: "text" },
  name: { type: "text" },
  firstName: { type: "text" },
  lastName: { type: "text" },
  fatherName: { type: "text" },
  motherName: { type: "text" },
  taxid: { type: "text" },
  
};
