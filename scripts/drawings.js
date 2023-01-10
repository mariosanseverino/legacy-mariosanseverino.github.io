const DRAWINGS_LIST = ['bird-of-paradise.png', 'blood-knife.png', 'blood-sword.png'];
const DRAWINGS_LIBRARY = document.querySelector('.drawing-library');

const createLibrary = (drawingsList = [], drawingsOutput) => {
    drawingsList.forEach((item) => {
        let drawingItem = document.createElement('img');
        drawingItem.setAttribute('src', `./images/drawings/${item}`);
        drawingItem.setAttribute('class', 'drawing-small')
        drawingsOutput.appendChild(drawingItem);
    });
};

createLibrary(DRAWINGS_LIST, DRAWINGS_LIBRARY);