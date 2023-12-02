const input = `heightseven4two5
npskfdstpk2knsm
djnrmpxjbsbpgzvtjkhq6pkkfshx`;

const numMappings = new Map();
numMappings.set('one', '1');
numMappings.set('two', '2');
numMappings.set('three', '3');
numMappings.set('four', '4');
numMappings.set('five', '5');
numMappings.set('six', '6');
numMappings.set('seven', '7');
numMappings.set('eight', '8');
numMappings.set('nine', '9');

const alphaNumberics = ['one','two','three','four','five','six','seven','eight','nine'];

const result = () => {
    let lines = input.split('\n');
    return lines.reduce((acc, cur) => {
        let mixedNums = cur.match(/\d+|\D+/g);
        let nums = [];

        mixedNums.forEach(mixedNum => {
            if (isNaN(mixedNum)) {
                let splitNums = mixedNum.match(new RegExp(alphaNumberics.join('|'), 'g'));
                if (splitNums) {
                    splitNums.forEach(num => nums.push(numMappings.get(num)));
                }
            } else {
                nums.push(mixedNum);
            }
        })

        if (nums.length === 0) return acc;

        if (nums.length < 2) {
            const filteredNum = nums[0].split('')[0];
            nums.splice(0, 1, filteredNum);
            
            const result = filteredNum + filteredNum;
            return acc + Number(result);
        } else {
            const firstNum = nums[0].split('')[0];
            const lastNum = nums.pop().split('').pop();
            nums.splice(0, 1, firstNum);
            nums.push(lastNum);
            
            const result = firstNum + lastNum;
            return acc + Number(result);
        }       
    }, 0)
}

console.log(result());


// First Solution

// const result = () => {
//     let lines = input.split('\n');
//     return lines.reduce((acc, cur) => {
//         let nums = cur.split('').filter(x => !isNaN(x))
//         if (nums.length === 0) {
//             return acc;
//         }
//         if (nums.length < 2) {
//             const result = nums[0] + nums[0];
//             return acc + Number(result);
//         } else {
//             const result = nums[0] + nums.pop();
//             return acc + Number(result);
//         }
//     }, 0)
// }