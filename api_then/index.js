document.getElementById('btn').addEventListener('click',makereq);
function makereq(){
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json().then(data=>{
                console.log(data);
            })
        }
    )
}