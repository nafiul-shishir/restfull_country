fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => {
    displayCountry(data)
})


const displayCountry = (country) =>{
    const countryContainer = document.getElementById('country-id')
    country.forEach(element => {
        const countryDiv = document.createElement('div');
        countryDiv.className ='country';
        const countryInfo = `
            <h3> ${element.name.common} </h3>
            <p> ${element.capital}</p>
            <button onClick="displayCountryDetails('${element.name.common}')"> Show More </button>
        `
        countryDiv.innerHTML = countryInfo;
        countryContainer.appendChild(countryDiv);
       
        
    });
    // for (let i = 0; i < country.length; i++) {
    //     const element = country[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className ='country';
    //     // const name = document.createElement('h3');
    //     // name.innerText = element.name.common
    //     // const capital = document.createElement('p');
    //     // capital.innerText = element.capital;
    //     // countryDiv.appendChild(name);
    //     // countryDiv.appendChild(capital);

    //     const countryInfo = `
    //         <h3> ${element.name.common} </h3>
    //         <p> ${element.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countryContainer.appendChild(countryDiv);
       
        
    // }
    
}

const displayCountryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryinfo(data[0]))
    
}

const renderCountryinfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = 
    ` <h1> ${country.name.common}</h1>
      <h3> Area: ${country.area}</h3>
      <p> Population: ${country.population} </p>
      <p> ${country.continents}</p>
      <img src="${country.flags.png}" alt="">
    `
    const countryContainer = document.getElementById('country-id');
    countryContainer.style.display = 'none';

} 