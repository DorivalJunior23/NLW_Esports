export function convertMinutesToHourString(minutesAmout: number){
    const  hour = Math.floor(minutesAmout / 60);
    const minuntes = minutesAmout % 60;

    return `${String(hour).padStart(2,'0')}:${String(minuntes).padStart(2,'0')}`;
}