
export function convertHourStringToMinutes(hourString: string){
        const [hours, minutes] =hourString.split(':').map(Number)

        const minutsAmout = (hours *60) + minutes;

        return minutsAmout;
}