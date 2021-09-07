const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count ++);
    }
    return displayCount;
}

let counter = buildCount(10);
counter();
counter();
counter();
counter();
counter();