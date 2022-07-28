
export const devicesTypeIOS = () => {
    let deviceType = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Kindle|Silk/i)
    let name = deviceType[0];

    console.log(name, deviceType);
}