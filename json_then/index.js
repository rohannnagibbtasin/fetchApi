document.getElementById('btn').addEventListener('click',makereq);
function makereq(){
    const promisObj = fetch('data.json')
    console.log(promisObj);
    promisObj.then(res=>{
        console.log(res);
        return res.json().
        then(data=>{
            console.log(data.name);
        })
    })

}