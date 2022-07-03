// Approach 1
// Time Complexity - O(n)
// Space Complexity - O(n) - Stack
public class Solution {
    public bool IsValid(string s) {
        Stack<char> brackets = new Stack<char>();
        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] == '(')
            {
                brackets.Push(')');
            }else if (s[i]=='[')
            {
                brackets.Push(']');
            }else if(s[i] =='{')
            {
                brackets.Push('}');
            }else if (brackets.Count == 0 || brackets.Pop() != s[i])
            {
                return false;
            }
        }
        
        return brackets.Count == 0;
    }
}

// Approach 2
// Time Complexity - O(N)
// Space - O(n) + O(n) = O(2n)
public class Solution {
    public bool IsValid(string s) {
        Stack<char> br = new Stack<char>();
        char[] charArr = s.ToCharArray();
        foreach(char c in s.ToCharArray())
        {
            if(c == '(' || c == '{' || c == '[') br.Push(c);
            else {
                if(br.Count == 0 ||
                    (br.Peek() == '(' && c != ')')  ||
                    (br.Peek() == '[' && c != ']')  ||
                    (br.Peek() == '{' && c != '}')  
                  ) return false;
                br.Pop();
            }
        }
        
        return br.Count == 0;
    }
}