document.getElementById('btn').addEventListener('click',makereq)
function makereq(){
    const myinit = {
        method : 'POST',
        header : {
            'Content-Type' : 'application/json'
        },
        body: '{"name": "johny sins","job": "pornstar"}'
    }
    fetch('https://reqres.in/api/users',myinit).then(res=>{
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res.json().then(data=>{
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
    })
}