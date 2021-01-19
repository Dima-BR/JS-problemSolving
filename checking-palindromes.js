//Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
for(let i = 0; i < inputString.length; i++ ){ 
    if(inputString.substring(i, i+1)!== inputString.substring(inputString.length -i -1,inputString.length -i)){
        return false;
    }
}
    return true;
}
