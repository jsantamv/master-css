import { filParagraphs, resolution } from '../modules/fillDataHtml.js';
import { devicesTypeIOS, callAppFetch } from '../modules/devices.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    await filParagraphs();
    await callAppFetch();
    resolution();
});

window.addEventListener('resize', () => {
    resolution();
    devicesTypeIOS();
});