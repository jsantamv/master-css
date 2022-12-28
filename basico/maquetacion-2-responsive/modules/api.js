
/** Return Lorepm Impsun Bacon */
export const apiBaconIpsum = async () => {
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
