/* --- Calcular la edad actual de una persona --- */

// Determinar si año bisiesto
const isLeap = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
// Obtener edad actual
const getCurrentAge = (year, month, day) => {
    // Año, mes y dia actual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    // Años, meses y dias de edad
    let yearsOld = currentYear - year;
    let monthsOld = Math.abs( currentMonth - month );
    let daysOld = Math.abs( currentDay - day );
    
    if(currentYear >= year){
        if(currentMonth < month){
            monthsOld = 12 - (month - currentMonth);
            yearsOld--;
        }
        if(currentDay < day){
            if(month == 2){
                if(isLeap(year))
                    daysOld = 29 - (day - currentDay);
                else
                    daysOld = 28 - (day - currentDay);
            }
            if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
                daysOld = 31 - (day - currentDay);
            else
                daysOld = 30 - (day - currentDay);
        }
        if(currentDay < day && monthsOld == 0)
            monthsOld = 11;
        if(currentDay < day && monthsOld == 1)
            monthsOld = 0

        return `Tienes ${ yearsOld } años, ${ monthsOld } meses y ${ daysOld } días de edad`;
    }else{
        return `${year} es mayor a ${currentYear}`;
    }
}
console.log(getCurrentAge(/*Año*/1997, /*Mes*/10, /*Dia*/03));