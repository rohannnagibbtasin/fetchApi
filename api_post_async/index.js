document.getElementById('btn').addEventListener('click',makereq)
async function makereq(){
    try{
        const myinit = {
            method : 'POST',
            header : {
                'Content-Type' : 'application/json'
            },
            body: '{"name": "johny sins","job": "pornstar"}'
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