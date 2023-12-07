const input = 
`Game 1: 4 red, 1 green, 15 blue; 6 green, 2 red, 10 blue; 7 blue, 6 green, 4 red; 12 blue, 10 green, 3 red
Game 2: 3 green, 18 blue; 14 green, 4 red, 2 blue; 3 red, 14 green, 15 blue
Game 3: 12 green, 2 blue; 9 green; 1 red, 11 blue, 4 green`;

// ---------- Solution 1 ----------

const colorLimits = new Map();
colorLimits.set('red', 12);
colorLimits.set('green', 13);
colorLimits.set('blue', 14);


function getSumOfIds() {
    const gamesPassed = input.split('\n').map(line => {
        const games = line.split(':').pop().split(';');
        let limitChecks = [];

        games.forEach(drawing => {
            drawing = drawing.trim();

            const coloredCubes = drawing.split(',');
            coloredCubes.forEach(color => {
                color = color.trim();
                numAndColor = color.split(' ');
                const limit = colorLimits.get(numAndColor[1]);                
                numAndColor[0] <= limit ? limitChecks.push(true) : limitChecks.push(false);
            })
        });

        return !limitChecks.includes(false);
    });

    return gamesPassed.reduce((acc, cur, i) => {
        if (cur == true) return acc += (i + 1);
        return acc;
    }, 0);
}

// console.log(getSumOfIds());

// ---------- Solution 2 ----------

function findSumOfPowers() {
    const lines = input.split('\n');
    const powers = lines.map(line => {
        
        let highestRed = 0;
        let highestGreen = 0;
        let highestBlue = 0;
        const drawings = line.split(':').pop().split(';');
        
        drawings.forEach(drawing => {       
            const coloredCubes = drawing.split(', ');    
            coloredCubes.forEach((numAndColor) => {     
                numAndColor = numAndColor.trim();
                numColorArray = numAndColor.split(' ');
            
                if (numColorArray[1] === 'red' && Number(numColorArray[0]) > highestRed) {
                    highestRed = Number(numColorArray[0]);
                } else if (numColorArray[1] === 'green' && Number(numColorArray[0]) > highestGreen) {
                    highestGreen = Number(numColorArray[0]);
                } else if (numColorArray[1] === 'blue' && Number(numColorArray[0]) > highestBlue) {
                    highestBlue = Number(numColorArray[0])
                }
            });
        });

        return highestRed * highestGreen * highestBlue;
    });
    return powers.reduce((acc, cur) => {
        return acc += cur;
    }, 0);
}

console.log(findSumOfPowers());