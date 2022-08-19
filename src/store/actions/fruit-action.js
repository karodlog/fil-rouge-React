

//liste d'actions pour la catégorie fruits
// obtenir la liste des fruits
// ajouter un fruit {family: 'pomme weight: '100gr'}
// supprimer un fruit
// indiquer qu'un fruit est périmé

import { convertLength } from "@mui/material/styles/cssUtils";
import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"


// action création old

// export const addFruit = (fruit)=>{
//     return {
//         type: 'fruit/add',
//         payload: {
//             id: nanoid(),
//             ...fruit
//         }
//     };
// };
// export const removeFruit = (fruitId)=>{
//     return {
//         type: 'fruit/remove',
//         payload: fruitId
//     };
// };

// action  création moderne avec Redux Toolkit

export const addFruit = createAction('fruit/add', (fruit) =>({
        payload: {
            id: nanoid(),
            ...fruit
        }
}));


export const removeFruit = createAction('fruit/remove');

export const expireFruit = createAction('fruit/expire');