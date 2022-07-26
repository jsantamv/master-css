import { filParagraphs, resolution } from '../modules/fillDataHtml.js';

window.addEventListener('DOMContentLoaded', async (event) => {    
    await filParagraphs();    
    resolution();
});

window.addEventListener('resize', () => {
    resolution();
});