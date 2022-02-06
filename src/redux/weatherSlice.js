import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortBy: 'temperature',
    data: []
  };

// First, create the thunk
export const loadWeatherData = createAsyncThunk(
  'weather/loadWeatherData',
  async (weatherUrl, thunkAPI) => {
    console.log(weatherUrl);
    const response = await fetch(weatherUrl);
    const data = await response.json();

    return data.value;
  }
)

// Then, handle actions in your reducers:
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateSortBy(state, action) {
        state.sortBy = action.payload;
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loadWeatherData.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    }
  }
})

export const { updateSortBy } = weatherSlice.actions;
export default weatherSlice.reducer;
