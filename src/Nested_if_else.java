package src;

public class Nested_if_else {
    public static void main(String[] args) {
        int marks = 85;
        if(marks >= 35){
            if(marks >= 75){
                System.out.println("Distinction");
            } else if(marks >= 60){
                System.out.println("First Class");
            } else {
                System.out.println("Pass");
            }
        } else {
            System.out.println("Fail");
        }
    }
}
