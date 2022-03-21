//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";
    var names=["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
    var decemberSales=[1500, 15000, 30000, 12000, 45000, 25000, 8000];
    var januarySales=[10000, 25000, 20000, 14000, 30000, 16000, 30000];
    var februarySales=[8000, 7500, 45000, 10000, 38000, 22000, 15000];
    console.log("Salesperson " +  "Commission " + "Average commission");
    for (i=0; i<7; i++)
    {
        var totalSales = decemberSales[i] + januarySales[i] + februarySales[i]
        var commission;
        if(totalSales>30000)
        {
            commission = totalSales * 0.08;
           
        }
        else if(15000>totalSales<=30000)
        {
            commission = totalSales * 0.05;
         
        }
        else if (10000>totalSales<=15000)
        {
            commission= totalSales*.03;
           
        }
        else if(5000>totalSales<=10000)
        {
            commission= totalSales*.02;
         
        }
        else if(totalSales<=5000)
        {
            commission=totalSales*.01;
         
        }
        var meanCommission=commission/3;
        console.log(names[i] + " $" + commission + " $" + Math.round(meanCommission));
   
       if(topCommission<commission)
       {
           topCommission=commission;
           topSalesPerson=names[i];
       }
       
    }
    console.log("Top Salesperson and their commission: " + topSalesPerson + " $" + topCommission);
   
   

}