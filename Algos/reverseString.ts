export const reverseString = (str: string):string | never => {
    if(!str || typeof str !== 'string') {
        throw new Error('Please provide a string value')
    }
    if(str.length < 2) return str
    let backwardsArray = []
    const itemsLength = str.length - 1
    for(let i = itemsLength; i >= 0; i--) {
        backwardsArray.push(str[i])
    }
    return backwardsArray.join('')
}