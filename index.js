// Code your solution here
function findMatching(arr, nameToSearch){
    let matchingArray = []
    for(let name of arr){
        if (name.toLowerCase() === nameToSearch.toLowerCase()) matchingArray.push(name)
    }
    return matchingArray
}

function fuzzyMatch(arr, item){
    let matchingArray = []
    for(let name of arr){
        if (name.slice(0,2) === item) matchingArray.push(name)
    }
    return matchingArray
}

function matchName(arr, name){
    let matchingArray = []
    for(let item of arr){
        if(item["name"] === name)
        matchingArray.push(item)
    }
    return matchingArray
}


