
export const devicesTypeIOS = () => {
    let deviceType = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Kindle|Silk/i)
    let name = deviceType[0];

    let result = navigator.userAgent.includes('iPad')

    console.log(result, name, deviceType);
}

export const callAppFetch = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await result.json()
    console.log(data);
}