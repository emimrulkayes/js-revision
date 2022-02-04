/* Find out Dublicate  */
const manNames = ['abul', 'rahim', 'karim', 'rana', 'rahim', 'jalal', 'hasan', 'karim', 'sentu', 'montu', 'rana', 'reja', 'mamud', 'chowdhury', 'jalal', 'hasan', 'sentu'];

function removeDuplicate(manNames) {
    const unique = [];
    // for (let i = 0; i < manNames.length; i++) {
    //     const element = manNames[i];
    // }
    for (const element of manNames) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(manNames);
// console.log(uniqueNames);


/* Find out Dublicate Number */
const numbers = [434, 454, 433, 5434, 23, 45, 43, 43, 54, 32, 43, 54, 34];

function removeDuplicateNumber(numbers) {
    const uniqueNum = [];
    for (const element of numbers) {
        if (uniqueNum.indexOf(element) == -1) {
            uniqueNum.push(element);
        }
    }
    return uniqueNum;
}
const uniqueNum = removeDuplicateNumber(numbers);
// console.log(uniqueNum);

/* Find out Duplicate Name in Array */
const findDuplicate = ['hilim', 'jamil', 'kader', 'sogir', 'hasem', 'kasem', 'hilim', 'sogir', 'shapon', 'ripon', 'hasem', 'kader', 'sogir'];

function removeDuplicateName(findDuplicate) {
    const pickName = [];
    for (const element of findDuplicate) {
        if (pickName.indexOf(element) == -1) {
            pickName.push(element);
        }
    }
    return pickName;
}

const pickName = removeDuplicateName(findDuplicate);
console.log(pickName);