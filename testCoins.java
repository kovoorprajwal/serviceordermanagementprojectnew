public class TestCoins{
	
public static void main(String args[]){
	System.out.println(coinChange(10,new int []{1,2,3}));
}

public static int coinChange(int sum, int coins[])
{
	int combinations[][] = new int[coins.length][sum+1];
	int coinsSupplied [] = coins;
	int row =0;
	for(int coin:coins){
		
		for(int i=0;i<sum+1;i++){
			if(row>0){
			combinations[row][i] = combinations[row-1][i];
			}
		if(i==0){
			combinations[row][i] = 1;
			System.out.print(combinations[row][i]+"\t");
		}
		
		else if(i>=coin){
			combinations[row][i] += combinations[row][i-coin];
			System.out.print(combinations[row][i]+"\t");
			}
			else{
			System.out.print(combinations[row][i]+"\t");
		}
		}
		
		System.out.println("");
		row++;
	}
	return combinations[row-1][sum];
}
}