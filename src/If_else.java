package src;

public class If_else {
        public static void main(String[] args) {
            int a = 10, b = 5;
            if(a > b && a != 0){
                System.out.println("a is greater and not zero");
            } else if(a == b){
                System.out.println("a and b are equal");
            } else {
                System.out.println("b is greater");
            }
            int x = -3;
            if(x > 0){
                System.out.println("Positive");
            } else if(x < 0){
                System.out.println("Negative");
            } else {
                System.out.println("Zero");
            }
        }


}
