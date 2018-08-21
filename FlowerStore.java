import java.util.Scanner;

public class FlowerStore{



    public static void main(String[] args)
    {
             
        Scanner keyboard = new Scanner(System.in);

        System.out.println("\nWhat kind of flower would you like to purchase? \n");
        System.out.println("petunia");
        System.out.println("pansy");
        System.out.println("rose");
        System.out.println("alstromeria");
        System.out.println("amaryllis");
        System.out.println("chives");
        System.out.println("diascia");
        System.out.println("hyacinth");
        System.out.println("violet  or");
        System.out.println("carnation \n");

        String index = "";

        String indexIgnoreCase = "";

        double costNew =0;

        while(costNew == 0){

        index = keyboard.nextLine();

        indexIgnoreCase= index.toLowerCase();

        costNew = switchMethod(indexIgnoreCase);

        if(costNew == 0){

        System.out.println("Invalid flower name");

    }

    }

    System.out.println("How many " + index +"s" + " would you like?");

    int count = keyboard.nextInt();

    double total = count * costNew;

    System.out.println("The cost for "+count+index+"s is "+total);  
        
    }

    public static double switchMethod(String indexIgnoreCase){ 

    double cost;

    switch(indexIgnoreCase){

    case "petunia":
    cost = .50;
    break;

    case "pansy":
    cost = .75;
    break;

    case "rose":
    cost = 1.50;
    break;

    case "alstromeria":
    cost = .50;
    break;

    case "amaryllis":
    cost = .80;
    break;

    case "chives":
    cost = .90;
    break;

    case "diascia":
    cost = .60;
    break;

    case "hyacinth":
    cost = .50;
    break;

    case "violet":
    cost = .80;
    break;

    case "carnation":
    cost = .90;
    break;

    default:
    cost = 0;

    }

    return cost;

    }
    
    }
