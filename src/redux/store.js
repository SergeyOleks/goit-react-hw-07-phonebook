import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';

import { contactsReduser } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filtersReducer,
  },
});


