document.getElementById('btn').addEventListener('click',makereq);

// async function makereq(){
//     const res = await fetch('data.txt')
//     console.log(res);
//     const data = await res.text()
//     console.log(data);
// }

// async function makereq(){
//     try{
//         const res = await fetch('data1.txt')
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res);
//         const data = await res.text()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

async function makereq(){
    try{
        const res = await fetch('data.txt')
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res);
        const data = await res.text()
        console.log(data);
        document.getElementById('d').innerText = data
    }
    catch(error){
        console.log(error);
    }
}