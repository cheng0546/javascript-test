function nextWeek(date) {
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 7);
    return nextDate;
}

const date = new Date();
console.log(date);
console.log(nextWeek(date));