import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  loading: Boolean
}

const initialState: CounterState = {
  loading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Boolean>) => {
      state.loading = action.payload;
    }
  },
})

export const { setLoading } = loadingSlice.actions

export const selectCount = (state: RootState) => state.loads.loading

export default loadingSlice.reducer