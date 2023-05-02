let times = [
    1000,
    1200,
    1400,
    3000
];


async function loop() {

    let stamp = Date.now();
    
    const delay = ms => new Promise(resolve => setTimeout(() => {
        // console.log(ms, (Date.now() - stamp)); 
        resolve();
    }, ms));
    
    // let promiseArr = times.map((t) => delay(t).then(() => {console.log(t, (Date.now() - stamp))}));

    let arr = times.map(async (t) => {
        await delay(t);
        console.log(t, (Date.now() - stamp));
    });

    console.log(arr);

    const result = await Promise.allSettled(arr);

    console.log('finished', result);
}

loop();