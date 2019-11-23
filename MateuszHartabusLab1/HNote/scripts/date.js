export const getTime = function () {
    const time = new Date();
    return `${time.getDay()}.${time.getMonth()}.${time.getFullYear()}`
}