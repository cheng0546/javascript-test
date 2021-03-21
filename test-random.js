const members = {
    0: "cui",
    1: "gong",
    2: "qu",
    3: "wei",
    4: "wu",
    5: "yuan",
    6: "zan",
    7: "zhen"
}
const len = Object.keys(members).length;

let newMembers = JSON.parse(JSON.stringify(members));

function memberRandom() {
    for(let point = len - 1; point >= 0; point--) {
        let index = Math.floor(Math.random() * len);
        [newMembers[point], newMembers[index]] = [newMembers[index], newMembers[point]];
    }
    for(let i = 0; i < len - 1; i++) {
        if(members[i] === newMembers[i]) {
            (function() {
                let newIndex = Math.floor(Math.random() * len);
                if(newMembers[i] !== members[newIndex] && newMembers[newIndex] !== members[i]) {
                    [newMembers[i], newMembers[newIndex]] = [newMembers[newIndex], newMembers[i]];
                } else {
                    arguments.callee();
                }
            })();
        }
    }
    return newMembers;
}

console.log(members);
console.log(memberRandom());