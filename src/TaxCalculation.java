package src;

public class TaxCalculation {
    private double salary;

    public void setSalary(double salary){
        this.salary = salary;
    }

    public double getSalary(){
        return salary;
    }

    public double calculateTax(){
        if(salary <= 250000){
            return 0;
        } else if(salary <= 500000){
            return salary * 0.05;
        } else if(salary <= 1000000){
            return salary * 0.20;
        } else {
            return salary * 0.30;
        }
    }

    public static void main(String[] args) {
        TaxCalculation t = new TaxCalculation();
        t.setSalary(600000);
        System.out.println("Salary: " + t.getSalary());
        System.out.println("Tax Amount: " + t.calculateTax());
    }
}
