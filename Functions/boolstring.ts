const boolcheck = (check : boolean , str : string) : string => {
    if (check) {
        return `${str} and its length is : ${str.length}.`
    }
    else{
        return `${str.length}. `
    }
} 

boolcheck(true, "Raghav");