function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

const input = "A man, a plan, a canal, Panama";
console.log(`Is the string a palindrome? ${isPalindrome(input)}`);
