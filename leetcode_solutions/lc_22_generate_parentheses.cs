/*
A method of solving combinatorial problems by means of an algorithm which is allowed to run forward until a dead end is reached, at which point previous steps are retraced and the algorithm is allowed to run forward again.

Recursion vs Backtracking
============================
In recursion, the function calls itself until it reaches a base case. 
In backtracking, we use recursion to explore all the possibilities until we get the best result for the problem.

Backtracking vs DP
=====================
- Dynamic programming emphasizes on overlapping subproblems, while backtracking focus on all or some solutions. Dynamic programming relies on the principle of optimality, while backtracking uses a brute force approach.

- Backtracking is similar to Dynamic Programming in that it solves a problem by efficiently performing an exhaustive search over the entire set of possible options. Backtracking is different in that it structures the search to be able to efficiently eliminate large sub-sets of solutions that are no longer possible.

=======================================================
What choices are available? Left or right parentheisi
1. Make choice recursively 

2. Make chioces 
    Good choice keep going until we get the correct answer
    Bad choice => backtrack 



*/

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<String>();
        backtrackHelper(result, "", 0, 0, n);
        return result;
    }
    
    private void backtrackHelper(List<String> result, String current, int open, int close, int n){
        // Base case
        // Make choice recursively - This is the base case 
        if(current.length() == n * 2){
            result.add(current);
            return;
        }
        
        // Recursive steps 
        if(open < n ){
            backtrackHelper(result, current + "(" , open+1, close, n);
        }
        
        if(close < open) {
            backtrackHelper(result, current + ")" , open , close +1, n);
        }
    }
}

/*          
                    (
                
                ((
                
            (((
              
                 ((()
                        
                        ((())
                            
                            ((()))  <== Valid parenthesis
                            
            
            
                    ((

                (()
                
            (()(
        
        (()()
    
    
    (()()) <== valid parenthesis 
    
    
                        (()
                        
                           (())
                                
                                (())(
                                    
                                    (())() <== valid parenthesis 
                                    
        (
        
        ()
            ()(
                ()((
                    ()(()
                        ()(())  <=== valid parenthesis
                                    
    
          (
            
            ()
                ()(
                    ()()
                        ()()() <== valid parenthesis 
            
            
Solve for n.

(2n - 3) x 3 = 21

Backtracking method 





*/