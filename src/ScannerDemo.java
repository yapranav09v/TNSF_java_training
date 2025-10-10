package src;
import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student s = new Student();

        System.out.print("Enter Student Name: ");
        s.setStudentName(sc.nextLine());

        System.out.print("Enter Roll No: ");
        s.setRollNo(sc.nextInt());
        sc.nextLine();

        System.out.print("Enter Course: ");
        s.setCourse(sc.nextLine());

        System.out.println("Student Details:");
        System.out.println("Name: " + s.getStudentName());
        System.out.println("Roll No: " + s.getRollNo());
        System.out.println("Course: " + s.getCourse());
    }
}
