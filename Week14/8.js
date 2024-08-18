function countdownToDate(eventStartDate) {
    const currentDate = new Date();
    const eventDate = new Date(eventStartDate);
    const differenceInMilliseconds = eventDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
    return differenceInDays;
}


const eventStartDate = '2024-08-19';
const daysUntilEvent = countdownToDate(eventStartDate);
console.log(`There are ${daysUntilEvent} days until the event.`);
