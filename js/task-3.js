function getElementWidth (content, padding, border) {

    const contWidth = parseFloat(content);
    const paddWidth = parseFloat(padding);
    const bordWidth = parseFloat(border);

    const totalWidth = contWidth + paddWidth * 2 + bordWidth * 2;

    return totalWidth;

}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));