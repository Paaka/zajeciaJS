export const getTime = function () {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDay()}.${time.getMonth()}.${time.getFullYear()}`
}