package com.prajwal;
import java.util.Arrays;

public class CoinChangee{

public static void main (String args[]){

System.out.println("");

System.out.println(change(new int[]{1,2,3},10));
}

public static int change(int[]coins, int amount){

int[]combinations = new int[amount+1];

 combinations[0] = 1;

for(int coin:coins){

for(int i=0;i<combinations.length;i++){

if(i>=coin){

combinations[i]+=combinations[i-coin];

if(i==combinations.length-1){

System.out.println(Arrays.toString(combinations));

}
}

}

}

return combinations[combinations.length-1];

}
}