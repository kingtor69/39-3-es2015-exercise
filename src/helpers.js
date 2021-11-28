function choice (items) {
    const i = Math.floor(Math.random() * items.length);
    return items[i];
};

function remove (items, item) {
    return items.filter((i) => {
        return i !== item;
    });
}

export { choice, remove };