function createPromise() {

    return  new Promise(function(resolve, reject){
    
        const db={
            name: 'Daniel',
            profession: 'developer',
        };

      //  resolve(db);
      reject(new Error('oops!'));
    
    });
    
}


async function  print(){

    try{
    const result = await createPromise(); //await se pune->async in function
    console.log(result);
    } catch (error){
        console.log(error);
    }

}

print();