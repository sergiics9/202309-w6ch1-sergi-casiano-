import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  phone: string;
  loadState: '' | 'Calling...';
};

const initialState: PhoneState = {
  phone: '',
  loadState: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState: initialState,
  reducers: {
    phone: (state, { payload }: { payload: string }) => {
      state.phone = state.phone + payload;
      state.loadState = '';
    },
    delete: (state) => {
      state.phone = '';
      state.loadState = '';
    },
    call: (state, { payload }) => {
      state.loadState = 'Calling...';
      setTimeout(payload, 5000);
    },
    hang: (state) => {
      state.phone = '';
      state.loadState = '';
    },
  },
});

export default phoneSlice.reducer;
export const actions = phoneSlice.actions;
