



const loadData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1/';

    try {
        const res = await fetch(url)

        //validar las respuestas
        // console.log(res.status);
        // console.log(res.ok);

        const data = await res.json();

        return data;


    } catch (err) {
        console.error(err);
    }
}


/**Otro truco hacking */
// (async () =>{
//     const data = await loadData();
//     console.log(data);
// })()

// /*esta es una forma de llamar a la promesa desde afuera*/
const data = loadData().then(data => console.log('async-await',data));


/**Devolver un arreglo de datos de diferentes 
 * api.
 */
const loadDataArray = async () => {

    console.time()

    const url1 = 'https://jsonplaceholder.typicode.com/todos/1/';
    const url2 = 'https://jsonplaceholder.typicode.com/todos/2/';
    const url3 = 'https://jsonplaceholder.typicode.com/todos/3/';

    try {

        const result = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ])

        const dataPromises = result.map(result => result.json())
        const finaldata = await Promise.all(dataPromises)

        console.log('Con promesas', finaldata)

        return finaldata;

    } catch (err) {
        console.error(err);
    }

    console.timeEnd()
}

const result = loadDataArray().then(data => console.log('llamado a la funcion loadDataArray',data));