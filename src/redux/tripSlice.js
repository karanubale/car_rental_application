import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
    name: 'trip',
    initialState: {
        from: '',
        to: '',
        pickUpDate: '',
        pickUpTime: '',
        returnDate: '',
        tripOption: '',
        tripType: '',
    },
    reducers: {
        saveTripData: (state, action) => {
            return { ...state, ...action.payload }; // Merge new data into state
        },
    },
});

export const { saveTripData } = tripSlice.actions;
export default tripSlice.reducer;
