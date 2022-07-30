
export const devicesTypeIOS = () => {
    let deviceType = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Kindle|Silk/i)
    let name = deviceType[0];

    let result = navigator.userAgent.includes('iPad')

    console.log(result, name, deviceType);
}