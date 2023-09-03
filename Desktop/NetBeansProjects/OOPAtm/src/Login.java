
import java.util.Scanner;

// KULLANICI GİRİŞİ

public class Login{
   
    public boolean userlogin(Account acclogin){  // Account Classımızdan , acclogin referansımız.
        
        Scanner getDataFromUser = new Scanner(System.in);  // Scanner ile kullanıcıdan kullanıcı adı ve şifre alıyoruz.
        
        String usernameLogin;  //Kullanıcı adı
        String passwordLogin;  //Şifre
        
        System.out.print("Enter Your Username : ");
        usernameLogin = getDataFromUser.nextLine();  // Kullanıcıdan gelen Kullanıcı adı bilgimiz
        System.out.print("Enter Your Password : ");
        passwordLogin = getDataFromUser.nextLine();  // Kullanıcıdan Gelen Şifre Bilgimiz.
        
        
        // Kullanıcının girdiği Bilgiler ile Mevcut Bilgileri Karşılaştırıyoruz.
        if(acclogin.getUsername().equals(usernameLogin) && acclogin.getPassword().equals(passwordLogin)){
            
            return true;
            
        }
        
        else{
            return false;
        }
        
        
    }
     
    
}