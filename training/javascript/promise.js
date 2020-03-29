function createPromise() {


return  new Promise(function(resolve, reject){

    //Load db data
    if(4%2 == 0){
        resolve('all good');
    }
    reject('Bad');

});

}


const myPromise = createPromise();

myPromise
    .then(function(data){

         const newData = 'Cozma';
         console.log(newData);
         return createPromise();

})
    .then(function(data){ // daca se intampla aia de deasupra, se intampla si asta
        console.log(data);
})

    .catch(function(err){ // prinde de oriunde
        console.log(err);
});



