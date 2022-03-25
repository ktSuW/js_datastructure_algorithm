/*
car with L direction. Will only move to left direction. Will never collide
car with R direction. Will only move to right direction. Will never collide 
In between them, everything will collide 
*/
// Time O(n)
// Space O(1)
class Solution {
    public int countCollisions(String directions) {
        int result = 0;
        int left = 0, right = directions.length()-1;
        while(left < directions.length() && directions.charAt(left) == 'L'){
            left++;
        }
        
        while(right >= 0 && directions.charAt(right) == 'R'){
            right--;
        }
        
        int count = 0;
        for(int i = left; i <= right; i++){
            if(directions.charAt(i) != 'S'){
                result++;
            }
        }
        return result;
    }
}

// Stack based approach 
// Time O(n)
// Space O(n)
class Solution {
    public int countCollisions(String directions) {
        int collisions = 0;
        Stack<Character> stack = new Stack();
        stack.push(directions.charAt(0));
        for(int i = 1; i < directions.length(); i++){
            char curr = directions.charAt(i);
            
            if((stack.peek() =='R' && curr == 'L')){
                collisions += 2;
                stack.pop();
                curr = 'S';
            }else if(stack.peek() == 'S' && curr == 'L'){
                collisions += 1;
                curr = 'S';
            }
            
            while(!stack.isEmpty() && stack.peek() == 'R' && curr == 'S'){
                collisions +=1;
                stack.pop();
            }
            stack.push(curr);
        }
        return collisions;
    }
}