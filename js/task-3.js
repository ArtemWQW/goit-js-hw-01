function getElementWidth (content, padding, border) {

    console.log(Number.parseFloat(content));
    console.log(Number.parseFloat(padding));
    console.log(Number.parseFloat(border));

    return `${content} + ${padding * 2} + ${border * 2}`

};

console.log(getElementWidth("50px", "8px", "4px"));