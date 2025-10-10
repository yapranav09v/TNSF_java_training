package src;

public class Switch_case {
    public static void main(String[] args) {
        int day = 3;
        switch(day){
            case 1: System.out.println("Monday"); break;
            case 2: System.out.println("Tuesday"); break;
            case 3: System.out.println("Wednesday"); break;
            default: System.out.println("Invalid day");
        }

        char grade = 'B';
        switch(grade){
            case 'A': System.out.println("Excellent"); break;
            case 'B': System.out.println("Good"); break;
            case 'C': System.out.println("Average"); break;
            default: System.out.println("Fail");
        }

        String fruit = "Apple";
        switch(fruit){
            case "Apple": System.out.println("Red fruit"); break;
            case "Banana": System.out.println("Yellow fruit"); break;
            default: System.out.println("Unknown fruit");
        }
    }
}
