import { filParagraphs, resolution } from '../modules/fillDataHtml.js';
import { devicesTypeIOS } from '../modules/devices.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    await filParagraphs();
    resolution();
});

window.addEventListener('resize', () => {
    resolution();
    devicesTypeIOS();
});