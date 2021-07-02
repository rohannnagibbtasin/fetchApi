document.getElementById('btn').addEventListener('click',makereq)
async function makereq(e){
    e.preventDefault();
    let name = document.getElementById('name').value
    let job = document.getElementById('job').value
    try{
        const myinit = {
            method : 'POST',
            header : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name:name,job:job})
        }
        const res = await fetch('https://reqres.in/api/users',myinit)
        if(!res){
            throw Error(res.statusText)
        }
        const data = await res.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}