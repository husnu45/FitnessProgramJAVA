
import java.util.Scanner;


public class Main {
    
    public static void main(String[] args) {
        
        // Fitness Program
        
        Scanner getDataFromUser = new Scanner(System.in);
        
        System.out.println("Welcome to Training Program...");
        
        String movementMenu = "The Movement List : \n"
                             +"************************\n"
                             +"Burpee\n"
                             +"PushUp\n"
                             +"SitUp\n"
                             +"Squat\n"
                             +"*************************\n";   
                                
        System.out.println(movementMenu);
        
        System.out.println("Create a Training Program...\n");
        
        System.out.print("Enter the Number of Burpees You Want to Make : ");
        int burpee = getDataFromUser.nextInt();
        System.out.print("Enter the Number of PushUps You Want to Make : "); //
        int pushUp = getDataFromUser.nextInt();
        System.out.print("Enter the Number of SitUps You Want to Make : ");
        int sitUp = getDataFromUser.nextInt();
        System.out.print("Enter the Number of Squats You Want to Make : ");
        int squat = getDataFromUser.nextInt();
        getDataFromUser.nextLine();
        
        Training train = new Training(burpee, pushUp, sitUp, squat);
        
        System.out.println("Your Training is Begins...");
        
        while(train.isTrainingFinished() == false){
            
            System.out.print("Select Your Movement Type You Made -> (Burpee,PushUp,SitUp,Squat) : ");
            String type = getDataFromUser.nextLine();
            System.out.print("Enter the count of the Movement You Made : ");
            int count = getDataFromUser.nextInt();
            getDataFromUser.nextLine();// Dummy Code
            
            train.doMovement(type, count);
            
        }
        
        System.out.println("The Training Finished Successfully !!");
        
        
        
    }
    
}
