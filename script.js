const months=[31,28,31,30,31,30,31,31,30,31,30,31]

function calculateAge()
{
    const current=new Date();
    const currentYear=current.getFullYear()
    const currentMonth=current.getMonth()+1
    const currentDate=current.getDate()
    let birthYear,birthMonth,birthDate
    const inputDate= new Date(document.getElementById("input-date").value)
    checkLeapYear(currentYear)
    let birthDetails={
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    if(
        birthDetails.year>currentYear || (birthDetails.month>currentMonth 
            && birthDetails.year==currentYear)||(birthDetails.date>currentDate
                && birthDetails.month==currentMonth && birthDetails.year ==currentYear)
    ){
        alert("Not born yet")
    }
    birthYear=currentYear-birthDetails.year
    if(currentMonth>=birthDetails.month)
    {
        birthMonth=currentMonth-birthDetails.month
    }else{
        birthYear--
        birthMonth=12+currentMonth-birthDetails.month
    }
    if(currentDate>=birthDetails.date){
        birthDate=currentDate-birthDetails.date
    }else{
        birthMonth--
        let days=months[currentMonth-2]
        birthDate=days+currentDate-birthDetails.date
        if(birthMonth<0){
            birthMonth=11
            birthYear--
        }
    }
    displayAge(birthYear,birthMonth,birthDate)

} 
function checkLeapYear(year){
    if(year%4==0||year%400==0 && year%100==0){
        months[1]=29
    }
    else{
        months[1]=28
    }
    
}
function displayAge(byear,bmonth,bdate)
{
    document.getElementById("exact_year").textContent=byear
    document.getElementById("exact_month").textContent=bmonth
    document.getElementById("exact_date").textContent=bdate
}