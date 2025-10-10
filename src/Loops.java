package src;

public class Loops {
    public static void main(String[] args) {
        for(int i=1; i<=5; i++){
            System.out.println("For loop: " + i);
        }
        int j=1;
        while(j<=5){
            System.out.println("While loop: " + j);
            j++;
        }
        int k=1;
        do{
            System.out.println("Do While loop: " + k);
            k++;
        }while(k<=5);
    }
}
