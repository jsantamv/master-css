import { apiBaconIpsum } from '../modules/api.js';

export const resolution = () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  const result = `Width: ${newWidth} Height: ${newHeight}`;
  const deviceType = navigator.userAgent;
  document.getElementById('txtSearch').value = result;
  document.getElementById('deviceType').textContent = `Resolucion ${result} Navegador: ${deviceType}`
}

/** Fill paragraphs with API */
export const filParagraphs = async () => {
  let result = await apiBaconIpsum()
  document.getElementById('bacon-ipsum1').textContent = result[0];
  document.getElementById('bacon-ipsum2').textContent = result[1];
  document.getElementById('bacon-ipsum3').textContent = result[2];
}