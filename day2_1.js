// Using the countries array create the following array of arrays. The country name, the first three letters of the 
//country name and the length of the country name.
function createArrayOfArrays(countries){
    let newAray = [];
    for(let i=0;i<countries.length; i++){
        newAray.push([countries[i], countries[i].slice(0,3), countries[i].length])
    }
    console.log(newAray)
}
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  createArrayOfArrays(countries)