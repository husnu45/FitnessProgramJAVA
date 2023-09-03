
public class Main {
    
    public static void main(String[] args) {
    // OOP ile ATM Programı    
    // Login Class'ı Kullanıcı Girişini Kontrol Edecek
    // ATM ise atmmizi çalıştıracak.
    
    
    ATM bankATM = new ATM(); // ATM Classından bankATM Objesi oluşturduk.
    
    Account acc1 = new Account("Husnu45", "12345", 2000); // Bir Kullanıcı oluşturduk
    
   bankATM.runATM(acc1); // bankATM Referansımızla ATM Classının içindeki runATM methodunu acc1 parametresi ile çağırdık.
    
        // ATM Çalışması sonlandıktan sonra gelecek yazımız
        System.out.println("Thank You For Choosing Our Bank.Have a Nice Day !");
    
     
    
    
    
}
}
