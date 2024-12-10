// const data =[
//     {
//         "name"{
//             "comma" : "South Geprgia",
//             "official": "South Georgia and the South Sandwich Island"
//             "nativename": {
//                 "eng":{
//                     "official":South Gerogia and the SouthSandwich Island key,
//                     "comma": "South Georgia" 
//                 }
//             }
//         }
//     }
// ]


const url = "https://restcountries.com/v3.1/all";
    const element = document.getElementById("container")

async function fetchData(){
    try{
        const ressponse = await fetch(url);
        const data = await ressponse.json();
            console.log(data);
            for (let i = 0; i < data.length; i++){
                const value = data[i];
                const html =
               ` <div class='card'>
                    <img src=${value?.flags?.png} />
                    <h3>
                        ${value?.name?.common}
                    </h3>
                    <h3>Population :
                        ${value?.population}
                    </h3>
                    <h3>Region :
                        ${value?.region}
                    </h3>
                    <h3>Captial :
                        ${value?.capital}
                    </h3>
                    <h3>Currency :
                        ${value?.currencies?.SHP?.name}
                    </h3>
                </div>`
                
                element.innerHTML += html;
            }
        
    }catch (error){
        console.log("-------error----", error.message);
    }
}