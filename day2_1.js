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