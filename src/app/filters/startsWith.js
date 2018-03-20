function startsWithFilterFn() {
    return (items, letter, property) => (items.length && letter) ?
        items.filter((item) => item[property].toString().startsWith(letter)) : items;
}

export default startsWithFilterFn;