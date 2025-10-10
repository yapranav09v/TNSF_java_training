package src;

public class ConstructorDemo {
    public static void main(String[] args) {
        Person p = new Person("Sneha", 22);
        System.out.println("Person Name: " + p.getName());
        System.out.println("Person Age: " + p.getAge());
    }
}
