function saturdayFun(defaultactivity = 'roller-skate') {
    return `This Saturday, I want to ${defaultactivity}!`  
}

function mondayWork(defAct = 'go to the office') {
    return `This Monday, I will ${defAct}.`
}

let wrapAdjective = function(special = '*') {
    return function(adjective= 'special') {
    return `You are ${special}${adjective}${special}!`
}
}
