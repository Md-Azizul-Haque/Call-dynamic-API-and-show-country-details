fetch('https://restcountries.eu/rest/v2/all')
.then(rec => rec.json()) 
.then(data => countryName(data))

function countryName(data){
    const countries =  document.getElementById("countries");
    data.forEach(country => {
           const div = document.createElement("div");
           div.className = "country";
        const countryInfo = `
                  <h3 class="country-name">${country.name}</h3>
                  <p>${country.capital}</p>
                  <button onclick= "displayCountry('${country.name}')">Details</button>
        `
        div.innerHTML = countryInfo;
        countries.appendChild(div);
    });
 }
 const displayCountry = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(rec => rec.json())
    .then(data => countryInfo(data[0]));
 }
 const countryInfo = data =>{
     const countryInfo = document.getElementById("countryInfo");
     countryInfo.innerHTML = `
                    <h1>Country Name : ${data.name} </h1>
                    <p>Population : ${data.population} </p>
                    <p>Area : ${data.area} </p>
                    <p>Region : ${data.region} </p>
                    <p>Language : ${data.languages.nativeName} </p>
                    <p>Timezones : ${data.timezones} </p>
                    <img src ="${data.flag}">
     `
 }

    //    const name = document.createElement("h3");
    //    const p = document.createElement('p');
    //    name.innerHTML = country.name;
    //    p.innerHTML = country.capital;
    //    countries.appendChild(div);
    //    countries.appendChild(name);
    //    countries.appendChild(p);