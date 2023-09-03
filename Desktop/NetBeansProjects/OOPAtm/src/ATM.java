
import java.util.Scanner;


public class ATM{
    
    public void runATM(Account acc1){
        
        Login newLogin = new Login();  // "Login" Classından userLogin referansı ile yeni bir nesne (instance) oluşturduk.
        
        Scanner getDataFromUser = new Scanner(System.in);
        
        System.out.println("Welcome to Our Bank :) ");
        
        System.out.println("************************************************");
        System.out.println("User Login");
        System.out.println("*************************************************");
        
        int login_attempt = 3;
        
        while(true){
            
            if(newLogin.userlogin(acc1)){ //newLogin referansımızla Login Classımızın içindeki userlogin methodumuzun acc1 parametresine ulaşıyoruz
                // Eğer değerimiz True ise Giriş Başarılı yazdırıyoruz.
                System.out.println("Login Success...");
                break;
            }
            else{
                System.out.println("Login Failed !"); // Bilgiler yanlış girildiğinde.
                login_attempt -= 1;                   // Giriş hakkımızı bir azaltarak güncelliyoruz
                System.out.println("Login Attempt Remain : " + login_attempt);
            }
            if(login_attempt == 0){ // Giriş Hakkının Bitmesi durumu
                System.out.println("Your Login Attempts Finished.Please Try Again Later.");
                return;
            }
                
            
        }
        
        System.out.println("***************************************************");
        // İşlem Menüsü
        String transactions = "1.View Your Balance\n"
                             +"2.Deposit Money\n"
                             +"3.Withdraw Money\n"
                             +"4.Press Q for Exit";
        System.out.println(transactions); 
        System.out.println("***************************************************");
        
        
        System.out.print("Choose the Transaction : ");
        
        
        
        
        while(true){
            
            Scanner getMenuselectFromUser = new Scanner(System.in);
            String menuselect = getDataFromUser.nextLine();
            
            if(menuselect.equals("Q")){
                System.out.println("Thank You For Visiting Us.Have a nice Day :) ");
                break;
            }
            
            else if(menuselect.equals("1")){
                System.out.println("Your Balance " + acc1.getBalance());
                System.out.print("Choose Your Action : ");
            }
            
            else if (menuselect.equals("2")){
                
                System.out.print("Enter Your Deposit Amount : ");
                double depositAmount = getDataFromUser.nextInt();
                getDataFromUser.nextLine(); // Dummy Code
                
                acc1.deposit(depositAmount);
                
                System.out.print("Choose Your Action : ");
                
            }
            
            else if(menuselect.equals("3")){
                System.out.print("Withdraw Amount : ");
                double withdrawAmount = getDataFromUser.nextDouble();
                getDataFromUser.nextLine(); // Dummy Code
                
                acc1.withdrawal(withdrawAmount);
                
                System.out.print("Choose Your Action : ");
                  
            }
            
            else{
                System.out.println("Invalid Selection !! ");
                
                System.out.print("Choose Your Action : ");
            }
            
            
            
        }
        
        
    }
        
   
    
}