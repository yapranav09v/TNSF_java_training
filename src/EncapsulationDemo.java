package src;

public class EncapsulationDemo {
    public static void main(String[] args) {
        Customer c = new Customer();
        c.setName("Rahul");
        c.setAge(25);
        c.setEmail("rahul@gmail.com");

        System.out.println("Name: " + c.getName());
        System.out.println("Age: " + c.getAge());
        System.out.println("Email: " + c.getEmail());
    }
}
