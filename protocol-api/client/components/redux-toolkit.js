import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: '',
    connected: false,
    web3: null
}

const logSlice = createSlice({
    name: 'wallet',
    initialState : initialState,
    reducers: {
        connect: {
            reducer: (
                state, {payload}
            ) => {
                state.address = payload.address,
                state.connected = payload.connected,
                state.web3 = payload.web3
            }
        },
        disconnect: {
            reducer: (
                state
            ) => {
                state.address = '',
                state.connected = false,
                state.web3 = null
            }
        }
    }
});

export const {
    connect: connectWallet,
    disconnect: disconnectWallet
} = logSlice.actions;

const reducer = {
    wallet: logSlice.reducer
}

export default configureStore({
    reducer
});
