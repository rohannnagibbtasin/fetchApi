document.getElementById('btn').addEventListener('click',makereq);
async function makereq(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    console.log(data);
}