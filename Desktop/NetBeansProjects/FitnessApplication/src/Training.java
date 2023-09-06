
public class Training {
    
    private int burpee_count;
    private int pushup_count;
    private int situp_count;
    private int squat_count;

    public Training(int burpee_count, int pushup_count, int situp_count, int squat_count) {
        this.burpee_count = burpee_count;
        this.pushup_count = pushup_count;
        this.situp_count = situp_count;
        this.squat_count = squat_count;
    }

    public int getBurpee_count() {
        return burpee_count;
    }

    public void setBurpee_count(int burpee_count) {
        this.burpee_count = burpee_count;
    }

    public int getPushup_count() {
        return pushup_count;
    }

    public void setPushup_count(int pushup_count) {
        this.pushup_count = pushup_count;
    }

    public int getSitup_count() {
        return situp_count;
    }

    public void setSitup_count(int situp_count) {
        this.situp_count = situp_count;
    }

    public int getSquat_count() {
        return squat_count;
    }

    public void setSquat_count(int squat_count) {
        this.squat_count = squat_count;
    }
    
    public void doMovement(String movementType,int count){
        
        if (movementType.equals("Burpee")){
            
            doBurpee(count);
            
        }
        else if(movementType.equals("PushUp")){
            
            doPushup(count);
            
        }
        
        else if(movementType.equals("SitUp")){
            
            doSitup(count);
        
        }
        else if(movementType.equals("Squat")){
            
            doSquat(count);
            
        }
        
        else{
            System.out.println("Invalid Movement Type");
        }
        
    }
    
    public void doBurpee(int count){
        
        if(burpee_count == 0){
            System.out.println("There is no more Burpee to do.");
        }
        if(burpee_count - count < 0){
            System.out.println("Aimed burpee has been exceeded.Congratulations !!!");
            burpee_count = 0;
            System.out.println("Burpee Remaining : " + burpee_count);
        }
        else{
            burpee_count -= count;
            System.out.println("Burpee Remaining : " + burpee_count);
        }
        
    }
    
    public void doPushup(int count){
        
        if(pushup_count == 0){
            System.out.println("There is no more Pushup to do.");
        }
        if(pushup_count - count < 0){
            System.out.println("Aimed Pushup has been exceeded.Congratulations !!!");
            pushup_count = 0;
            System.out.println("Pushup Remaining : " + pushup_count);
        }
        else{
            pushup_count -= count;
            System.out.println("Pushup Remaining : " + pushup_count);
        }
        
    }
    
    public void doSitup(int count){
        
        if(situp_count == 0){
            System.out.println("There is no more Situp to do.");
        }
        if(situp_count - count < 0){
            System.out.println("Aimed Situp has been exceeded.Congratulations !!!");
            situp_count = 0;
            System.out.println("Situp Remaining : " + situp_count);
        }
        else{
            situp_count -= count;
            System.out.println("Situp Remaining : " + situp_count); //
        }
        
    }
    
    public void doSquat(int count){
        
        if(squat_count == 0){
            System.out.println("There is no more Squat to do.");
        }
        if(squat_count - count < 0){
            System.out.println("Aimed Squat has been exceeded.Congratulations !!!");
            squat_count = 0;
            System.out.println("Squat Remaining : " + squat_count);
        }
        else{
            squat_count -= count;
            System.out.println("Squat Remaining : " + squat_count);
        }
        
    }
    
    public boolean isTrainingFinished(){
        
        return(burpee_count == 0) && (pushup_count == 0) && (situp_count == 0) && (squat_count == 0);
        
    }
}


