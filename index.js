const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']




function findMatching(drivers, string) {
    
    const namesThatmatch = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())

    return (namesThatmatch)
    

    
}

console.log (findMatching(drivers,"saLLy"))


function fuzzyMatch(driver,string){
    const namesThatmatch = drivers.filter(drivers => drivers[0] === string[0])
    return(namesThatmatch)

}


      function matchName(drivers, string){
        const namesThatmatch = drivers.filter(drivers => drivers.name === string )

return(namesThatmatch)

}
console.log(namesThatmatch)