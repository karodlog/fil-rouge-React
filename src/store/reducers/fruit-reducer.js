import { createReducer } from "@reduxjs/toolkit";
import { addFruit } from "../actions/fruit-action";

const initialState = {
    fruits: [],
    msg: 'Départ'
}
const fruitReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(addFruit, (state, action)=>{
            state.fruits.push(action.payload);
            state.msg = 'Ajout';
        })
        .addCase(removeFruit, (state, action)=>{
            const fruitId = action.payload;

            const targetIndex = state.fruits.findIndex(f => f.id === fruitId);
            state.fruits.splice(targetIndex, 1);
        })
        .addCase(expireFruit, (state, action)=>{
            const fruitId = action.payload;
            const targetIndex = state.fruits.findIndex(f => f.id === fruitId);
            state.fruits[targetIndex].expire = true;

        })
});

export default fruitReducer;