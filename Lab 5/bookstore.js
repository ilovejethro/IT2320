/********************************************/
var books = [
    {name: "Foreign Park", author: "Jeff Steudel", price: 18, origin: "Canada"},
    {name: "The Notary", author: "Alexandros Rizos Rangavis", price:49, origin: "Greece"},
    {name: "How do we know we are doing it right", author: "Pandora Sykes", price:31, origin: "UK"},
    {name: "My Daughters Wedding", author: "Gretel Killeen", price: 25, origin: "Australia"},
    {name: "The Four Winds", author: "Kristin Hannah", price:31, origin: "US"},
    {name: "The Midnight Library", author: "Matt Haig", price:25, origin: "Anguilla"},
    {name: "At Home With History", author: "Eve Lazarus", price:20, origin: "Canada"},
    {name: "Behind the Mask", author: "Tyson Fury", price:22, origin: "UK"},
    {name: "Rise", author: "Mark Boris", price:23, origin: "Australia"},
    {name: "The Beautiful Ones", author: "Prince", price:21, origin: "UK"},
    {name: "The Sanitorium", author: "Sarah Pearce", price:30, origin: "US"},
    {name: "Bad Endings", author: "Carleigh Baker", price: 40, origin: "Canada"},
    {name: "V2", author: "Robert Harris", price:29, origin: "UK"},
    {name: "Where the Crawdads Sing", author: "Delia Owens", price:40, origin: "Ukraine"},
    {name: "The Kaisers Web", author: "Steve Barry", price:50, origin: "US"},
    {name: "Rain City", author: "John Moore", price: 67, origin: "Canada"},
    {name: "Land Of Destiny", author: "Jesse Donaldson", price: 15, origin: "Canada"},
    {name: "A Gentleman in Moscow", author: "Amor Towles", price:72, origin: "UK"},
    {name: "The Russian", author: "James Patterson", price:25, origin: "US"},
    {name: "Limitless", author: "Tim Peake", price:43, origin: "UK"},

]




/********************************************/
var discount;
var origin;
var price;

function getDiscountedPrices(price, origin)
{
    
   


  function getDiscount(origin)
   {
   
    if(origin=="US")
    {
        return 0.1;
    }
    else if (origin=="UK")
    {
       return 0.05;
    }
    else if (origin=="Canada")
    {
        return 0.12;
    }
    else
    { return 0.15;}
}
books.forEach(function(boo)
{boo.discountedPrice= boo.price-(boo.price*getDiscount(boo.origin));
    console.log("Book name: " + boo.name + ", " + "Author: " + boo.author + ", Sales Price: " + boo.price + ", Discounted Price: " + boo.discountedPrice);
}
)}
   