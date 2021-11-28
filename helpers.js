import {fruit} from './foods.js';


function choice (items) {
    const choice = Math.floor(Math.random()) * items.length;
    return items[choice];
};

function remove (items, item) {
    return items
    .filter((i) => {
        return i === item;
    })
    .map((i) => {
        return i;
    });


    // return items.filter((item, idx, items) => {
    //     return item === items[idx];
    // });
}