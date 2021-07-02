document.getElementById('btn').addEventListener('click',makereq);
// function makereq(){
//     const promisObj = fetch('data.txt')
//     console.log(promisObj);
//     promisObj.then(res=>{
//         console.log(res);
//         return res.text().
//         then(data=>{
//             console.log(data);
//         })
//     })

// }

// function makereq(){
//     fetch('data.txt').then(res=>{
//         return res.text().
//         then(data=>{
//             console.log(data);
//         })
//     })
// }

// function makereq(){
//     fetch('data.txt').then(res=>{
//         if(!res.ok){
//             throw Error (res.statusText)
//         }
//         return res.text().
//         then(data=>{
//             console.log(data);
//         })
//     }).catch(error=>{
//         console.log(error)
//     })
// }

function makereq(){
    fetch('data.txt').then(res=>{
        if(!res.ok){
            throw Error (res.statusText)
        }
        return res.text().
        then(data=>{
            console.log(data);
            document.getElementById('d').innerText = data
        })
    }).catch(error=>{
        console.log(error)
    })
}