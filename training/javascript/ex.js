// function create promise
// that promise 
//in promise: a  random nr
// if nr is even-> resolve, otherwise reject
//setTimeout 2000
// function start primeste rezultatul de la createPromise
// face handle la rezultat


function createPromise(){

    return new Promise(function(resolve, reject){

     const  x =  Math.round(Math.random()*100);

     if(x%2==0){

        setTimeout(function(){

            resolve(x);
        },2000);

     }
     else

     setTimeout(function(){
        reject(new Error("Err"));
    },2000);

    })
}

async function checkNumber(){

    try{
        const result = await createPromise(); //await se pune->async in function
        console.log(result);
        } catch (error){
            console.log(error);
        }
}

checkNumber();