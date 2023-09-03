
public class Account {
    
    // Verilerimiz
    
    private String username; // Kullanıcı Adı
    private String password; // Şifre
    private double balance;  // Bakiye
    
    // CONSTRUCTOR

    public Account(String username, String password, double balance) {
        this.username = username;
        this.password = password;
        this.balance = balance;
    }
    
    // GETTERS - SETTERS Methotlarımız  // ENCAPSULATION

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
    
    // PARA ÇEKME - PARA YATIRMA METHODLARIMIZ
    
    public void deposit(double depositMoney){  // Para Yatırma
        
        balance += depositMoney;
        System.out.println("Your new balance is : " + balance);
        
    }
    
    public void withdrawal(double withdrawMoney){
        
        if(balance - withdrawMoney < 0){
            
            System.out.println("Your balance is not enough for this withdrawal !");
            System.out.println("Your Balance is :  " + balance );
            
        }
        
        else{
            
            balance -= withdrawMoney;
            System.out.println("Withdrawal Successfull.Your new balance is : " + balance);
            
        }
        
    }
    
    
    
    
    
}
