let cityName = document.getElementById("cityName");
let inputSearch = document.getElementById("inputSearch");
// var nextDay=[]
// to search city and git weather
inputSearch.addEventListener("input", function () {
  getApi(inputSearch.value);
  getLocation()
});


// mather function to get Api 
async function getApi(city) {
  var apiResponc = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=15709bd764dd4e4e878223728230608&q=${city}&days=7`
  );

  let finalApi = await apiResponc.json();
  cityName.innerHTML = finalApi.location.name;
  document.getElementById("temperature").innerHTML =
    finalApi.current.temp_c + "<sup>o</sup>C";
  let clear = document.querySelectorAll(".moode").innerHTML = finalApi.current.condition.text;
  

  document.getElementById(
    "iconWeather"
  ).src = `${finalApi.current.condition.icon}`;
  let day = new Date(finalApi.forecast.forecastday.date);
  document.getElementById("dayName").innerHTML = day;


//   array to find date and day or history
 let nextDay= finalApi.forecast.forecastday
 for(let i=0;i<nextDay.length;i++){
    let day=new Date(nextDay[0].date)
    let tomorDay=new Date(nextDay[1].date)
    let dayThree=new Date(nextDay[2].date)

// get Name of month====================>
    let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let deyNow = weekday[day.getDay()]
      let tomorrow =weekday[tomorDay.getDay()]
      let afterTomor=weekday[dayThree.getDay()]

    document.getElementById("dayName").innerHTML=deyNow
    document.getElementById("naxetDay").innerHTML=tomorrow
    document.getElementById("dayThree").innerHTML=afterTomor

// get Name of month====================>
    let  monthYears = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
   let month = monthYears[day.getMonth()]
//    console.log(deyNow);
      let monthNum= day.getDay()+3
      console.log(monthNum);

    document.getElementById('monthId').innerHTML=month
    document.getElementById('monthNum').innerHTML=monthNum




    

 }
//  date and icon next day ======================>
 let stateNextDay=nextDay[0].day.condition.text
 document.getElementById('stateNextDay').innerHTML=stateNextDay
 let iconNextDay=nextDay[0].day.condition.icon
 document.getElementById("iconNextDay").src=`${iconNextDay}`
 // temperature  next day ======================>
 let tempNextDayMa=nextDay[0].day.maxtemp_c
 document.getElementById('tempNextDayMa').innerHTML=tempNextDayMa+'<sup>o</sup>'

 let tempNextDayMi=nextDay[0].day.mintemp_c
 document.getElementById('tempNextDayMi').innerHTML=tempNextDayMi+'<sup>o</sup>'

 //  date and icon day three  ======================>

 let stateDayThree=nextDay[1].day.condition.text
 document.getElementById('stateDayThree').innerHTML=stateDayThree

 let iconDayThree=nextDay[1].day.condition.icon
 document.getElementById('iconDayThree').src=`${iconDayThree}`
 // temperature  day three ======================>
 let tempDayThreeMa=nextDay[1].day.maxtemp_c
 document.getElementById('tempDayThreeMa').innerHTML=tempDayThreeMa+'<sup>o</sup>'

 let tempDayThreeMi=nextDay[1].day.mintemp_c
 document.getElementById('tempDayThreeMi').innerHTML=tempDayThreeMi+'<sup>o</sup>'

 


}




function secsses(position)
{
  
  const location=`${position.coords.latitude},${position.coords.longitude}`
  console.log(location);
  getApi(location) 
}
navigator.geolocation.getCurrentPosition(secsses)