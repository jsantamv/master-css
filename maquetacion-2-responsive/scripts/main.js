
const resolution = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    const result = `Width: ${newWidth} Height: ${newHeight}`;
    document.getElementById('txtSearch').value = result;
    document.getElementById('deviceType').textContent = `Resolucion ${result} Navegador: \n${navigator.userAgent}`
}

const baconIpsum = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://baconipsum.com/api/?type=meat-and-filler", requestOptions)
        .then(response => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.log('error', error));
}

const filParagraphs = async () => {
    var result = await baconIpsum()

    document.getElementById('bacon-ipsum1').textContent = result[0];
    document.getElementById('bacon-ipsum2').textContent = result[1];
    document.getElementById('bacon-ipsum3').textContent = result[2];

}

window.addEventListener('load', async (event) => {    
    await filParagraphs();
    resolution();
    console.log('page is fully loaded', event);
});

window.addEventListener('resize', () => {
    resolution();
});