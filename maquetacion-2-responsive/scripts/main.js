import { filParagraphs, resolution } from '../modules/fillDataHtml.js';

window.addEventListener('load', async (event) => {    
    await filParagraphs();    
    resolution();
});

window.addEventListener('resize', () => {
    resolution();
});