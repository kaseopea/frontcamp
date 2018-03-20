export const getRandomDays = () => {
    const min = 1;
    const max = 30;
    const dayTime = 24 * 60 * 60 * 1000;
    return dayTime * Math.ceil(Math.random() * (max - min) + min);
}