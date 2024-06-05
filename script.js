const weatherdata = () => {
  const weather = {
    apikey: "a37b0c7959dd6fce5593b773efacb4a1",
    fetchweather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          this.apikey
      )
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));
    },

    displayweather: function (data) {
      const { description, icon } = data.weather[0];
      const { temp, feels_like, pressure, humidity } = data.main;
      const { speed, deg } = data.wind;
      const { all } = data.clouds;
      const { country } = data.sys;
      const { name } = data;
    //  const{ timezone} = data ;

      // alert(name);

      document.getElementById("dec").innerHTML = description;
      document.getElementById("sun").src = "img/" + icon + ".png";
      document.getElementById("temp").innerHTML =
        Math.floor(temp) +
        "°" +
        `<span></span>
            <span>External</span>`;
      document.getElementById("feel").innerHTML =
        Math.floor(feels_like) +
        "°" +
        ` <span></span>
            <span>Internal</span>`;
      document.getElementById("hum").innerHTML = humidity;
      document.getElementById("pre").innerHTML = pressure;
      document.getElementById("cloud").innerHTML = all;
      document.getElementById("wind_deg").innerHTML = deg;
      document.getElementById("wind").innerHTML = speed;
      document.getElementById("name").innerHTML = name;
      document.getElementById("con").innerHTML = country;
      
      // document.getElementById("time").innerHTML = timezone;


    },
  };
  weather.fetchweather("panipat");
};

weatherdata();

const timeshow = () => {
  let ti = new Date();
  let ho = ti.getHours();
  let mi = ti.getMinutes();
  let se = ti.getSeconds();
  ampm = "AM";

  if (ho > 12) {
    ho -= 12;
    ampm = "PM";
  }
  if (ho == 0) {
    tr = 12;
    ampm = "AM";
  }

  ho = ho < 10 ? "0" + ho : ho;
  mi = mi < 10 ? "0" + mi : mi;
  se = se < 10 ? "0" + se : se;

  let maintime = ho + ":" + mi + ":" + se;
  document.getElementById("time").innerHTML = maintime;
  document.getElementById("am_pm").innerHTML = ampm;

  //day
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[ti.getDay()];
  document.getElementById("day").innerHTML = day;

  //Month
  const months = [
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
  let month = months[ti.getMonth()];
  document.getElementById("month").innerHTML = month;

  //Date
  let date = ti.getDate();
  document.getElementById("date").innerHTML = date;

  // year
  let year = ti.getFullYear();
  document.getElementById("year").innerHTML = year;
};

setInterval(timeshow, 1000);
timeshow();
