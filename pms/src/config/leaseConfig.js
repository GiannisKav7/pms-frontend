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
    prefix: 'sqm',
  },
  rentMonthly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  rentYearly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  rentPerSqmMonthly: {
    type: 'number',
    min: 0,
    step: 1,
    prefix: '€/sqm',
  },
  rentPerSqmYearly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€/sqm',
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
    prefix: '€',
  },
  depositsBilled: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  depositsReceived: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
};
