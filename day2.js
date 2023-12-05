const input = 
`Game 1: 4 red, 1 green, 15 blue; 6 green, 2 red, 10 blue; 7 blue, 6 green, 4 red; 12 blue, 10 green, 3 red
Game 2: 3 green, 18 blue; 14 green, 4 red, 2 blue; 3 red, 14 green, 15 blue
Game 3: 12 green, 2 blue; 9 green; 1 red, 11 blue, 4 green
Game 4: 4 blue, 8 green, 5 red; 6 red, 7 blue, 9 green; 2 green, 2 red, 2 blue; 2 green, 6 blue, 9 red; 10 red, 9 green
Game 5: 12 red, 1 green, 7 blue; 13 red, 16 blue; 16 blue, 10 red; 4 blue; 16 blue, 7 red; 1 blue, 7 red`;

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

console.log(getSumOfIds());