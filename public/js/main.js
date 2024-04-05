const cityName = document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const getInfo =async(event)=>{
  event.preventDefault();
  let cityval=cityName.value;
  if(cityval===""){  
    document.getElementById('city_name').innerHTML='Plz write the name before search';
  }
  else{
    try{
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d54f249b30469833936e32fe311b592d`;
      const response= await fetch(url);
      const data= await response.json();
      const arrData=[data];
      document.getElementById('city_name').innerHTML= `${arrData[0].name},${arrData[0].sys.country}`;
      temp.innerHTML=`${arrData[0].main.temp}<sup>o</sup>C`;
      const tempMood =arrData[0].weather[0].main;
      console.log(temp_status.innerHTML,tempMood);
      //condion
      if(tempMood=="Clear")
      {
         temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
        }
      else if(tempMood=="Clouds")
       {
        temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
      }
      else if(tempMood=="Rain")
      {
        temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>";
      }
      else 
      {
         temp_status.innerHTML="<i class=' fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
      }
     console.log(data);
    }
    catch{
      document.getElementById('city_name').innerHTML='Plz  enter city name properly';
    }
  }
}
submitBtn.addEventListener('click', getInfo);