// Approach 1 - use Set
//===========================================
// Time O(n)
// Space O(1) - Set (10 alphabets)
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');

    let p1 = 0, p2 = s.length -1;
    while(p1 < p2){
        if( vowels.has(s[p1]) && vowels.has(s[p2])){
            [s[p1], s[p2]] = [s[p2], s[p1]];
            p1++;
            p2--;
        }else if ( !vowels.has(s[p1])){
            p1++;
        }else{
            p2--;
        }
    }
    