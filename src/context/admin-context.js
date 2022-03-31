import { createContext, useContext } from 'react';

export const AdminContext = createContext({
  searchEntry: null,
  setSearchEntry: (_searchEntry) => {},

  damageId: null,
  setDamageId: (_damageId) => {},
  orderItems: [],
  setOrderData: (_orderData) => {},
  orderTracking: [],
  claimTypeName: '',
  selectedClaimType: undefined,
  onSubmitItem: (_selectedItems, _selectedFiles) => {},
  variantData: [],
  fulfillments: null,
  storePlan: '',
});

export const useAdminContext = () => useContext(AdminContext);
