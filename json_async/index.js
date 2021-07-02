document.getElementById('btn').addEventListener('click',makereq);
async function makereq(){
    try{
        const res = await fetch('data.json')
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res);
        const data = await res.json()
        console.log(data);
        document.getElementById('d').innerText = data.name +" " + data.roll
    }
    catch(error){
        console.log(error);
    }
}