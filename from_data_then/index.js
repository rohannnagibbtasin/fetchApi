document.getElementById('btn').addEventListener('click',makereq)
async function makereq(e){
    e.preventDefault();
    let name = document.getElementById('name').value
    let job = document.getElementById('job').value
    const myinit = {
        method : 'POST',
        header : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name:name,job:job})
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