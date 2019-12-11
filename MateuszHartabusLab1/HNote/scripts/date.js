export const getTime = function () {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}`
}