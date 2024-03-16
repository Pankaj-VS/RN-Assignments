import moment from 'moment';
export const getTodayDate=():string=>{
    const date = moment();
    const formattedDate: string = date.format('DD MMM YYYY');
    const day:number = parseInt(formattedDate.slice(0, 2), 10);
    const monthYear:string = formattedDate.slice(3);
    let todayDate: string;

    if (day < 11 || day > 13) {
        if (day % 10 === 1) {
            todayDate = `${day}st ${monthYear}`;
        } else if (day % 10 === 2) {
            todayDate = `${day}nd ${monthYear}`;
        } else if (day % 10 === 3) {
            todayDate = `${day}rd ${monthYear}`;
        } else {
            todayDate = `${day}th ${monthYear}`;
        }
    } else {
        todayDate = `${day}th ${monthYear}`;
    }


    return todayDate;
};



