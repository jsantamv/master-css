import { firstModule } from '../modules/firsmodule.js';
import { apiBaconIpsum } from '../modules/api.js';

const resolution = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    const result = `Width: ${newWidth} Height: ${newHeight}`;
    document.getElementById('txtSearch').value = result;
    document.getElementById('deviceType').textContent = `Resolucion ${result} Navegador: \n${navigator.userAgent}`
}

const filParagraphs = async () => {
    var result = await apiBaconIpsum()
    document.getElementById('bacon-ipsum1').textContent = result[0];
    document.getElementById('bacon-ipsum2').textContent = result[1];
    document.getElementById('bacon-ipsum3').textContent = result[2];
}

window.addEventListener('load', async (event) => {    
    await filParagraphs();    
    resolution();
    console.log('page is fully loaded', event);
    firstModule();
});

window.addEventListener('resize', () => {
    resolution();
});