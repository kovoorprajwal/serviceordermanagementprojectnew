import java.util.Arrays;
import java.util.ArrayList;
public class Coinn{

public static void main (String args[]){

System.out.println("");

System.out.println(change(new int[]{1,2,3},10));
}

public static int change(int[]coins, int amount){

int[]combinations = new int[amount+1];
ArrayList<Integer> array = new ArrayList<Integer>();
 combinations[0] = 1;

for(int coin:coins){

for(int i=0;i<combinations.length;i++){

if(i>=coin){


combinations[i]+=combinations[i-coin];





}
if(i%coin==0){
array.add(coin);
array.remove(array.size()-(1));
for(int arra:array){
System.out.print(""+arra);
}
System.out.println("");
}

}



}
return combinations[combinations.length-1];
}
}