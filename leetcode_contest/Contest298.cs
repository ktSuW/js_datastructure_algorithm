// https://leetcode.com/contest/weekly-contest-298/

// 5242. Greatest English Letter in Upper and Lower Case
// Time - O(n)
// Space - O(n) for HashSet 
// Approach - 1 : Accepted :) 
public class Solution {
    public string GreatestLetter(string s) {
        char[] charArr = s.ToCharArray();
        HashSet<char>  upperSet = new HashSet<char>();
        int greatest = 0;
        foreach (char ch in charArr)  
        {  
            if(Char.IsUpper(ch))
            {
                
                upperSet.Add(Char.ToLower(ch));
                
            }
        } 
        
        foreach(char ch in charArr)
        {
            if(upperSet.Contains(ch))
                {
                    greatest = Math.Max((int)ch, greatest);
                }
        }
        char ans1 = (Char.ToUpper((char)greatest));
        if(ans1 == '\u0000') {
            return "";
        }
            
        else {
           return  ans1.ToString(); 
        }
            
    }
}