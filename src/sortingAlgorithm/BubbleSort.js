
export default function getAnimations(arr) {
    const animations = [];
    bubbleSort(arr, animations);


    return animations
}

function bubbleSort(arr, animations) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            animations.push([i, j, true]);
            animations.push([i, j, true]);
            if (newArr[i] > newArr[j]) {
                animations.push([i, newArr[j], false]);
                animations.push([j, newArr[i], false]);                
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr
}

