function getElementWidth (content, padding, border) {

    const content = Number.parseFloat(content);
    const padding = Number.parseFloat(padding);
    const border = Number.parseFloat( border);

    const totalWidth = content + padding * 2 + border * 2;

    return totalWidth

};

console.log(getElementWidth("50px", "8px", "4px"));