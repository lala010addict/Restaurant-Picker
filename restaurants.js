
//greetings
 var name = prompt("What is your name?");

 if (name != "null") {
     document.querySelector('h3').textContent = "Hi " + name + ", I hope you are hungry!"
 } else {
     document.querySelector('h3').textContent = "Hi stranger, I hope you are hungry!"

 };

//a list of restaurants
 var restaurants = [
     {
         name: "El Chato Taco Truck",
         location: "Los Angeles",
         category: "Mexican",
         moneysign: "$",
         restaurant_url: "http://bunnyandporkbelly.com/2014/04/01/el-chato-taco-truck-los-angeles-ca/",
         picture_url: "https://farm3.staticflickr.com/2828/11755456334_56a84a1c54_b.jpg?resize=500%2C333"
     },

     {
         name: "Keungama Korean Restaurant",
         location: "Los Angeles",
         category: "Korean",
         moneysign: "$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2015/07/19/keungama-korean-restaurant-big-pot-korean-restaurant-%EF%BD%9C-koreatown-los-angeles-ca/",
         picture_url: "https://farm1.staticflickr.com/299/19198776403_50346019c1_o.jpg?resize=500%2C333"
     },

     {
         name: "Savoy Kitchen",
         location: "Los Angeles",
         category: "Chinese",
         moneysign: "$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2014/06/10/savoy-kitchen-alhambra-ca/",
         picture_url: "https://farm6.staticflickr.com/5278/14183523817_5af259d28f_b.jpg?resize=500%2C333"
     },

     {
         name: "The Golden State",
         location: "Los Angeles",
         category: "American",
         moneysign: "$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2014/07/13/the-golden-state-los-angeles-ca-fairfax/",
         picture_url: "https://farm4.staticflickr.com/3882/14458442840_9b7537a280_b.jpg?resize=500%2C333"
     },
     {
         name: "Gaslight Brasserie Du Coin",
         location: "Boston",
         category: "French",
         moneysign: "$$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2013/08/02/brunch-gaslight-brasserie-du-coin-south-end-boston-ma/",
         picture_url: "http://i1.wp.com/farm4.staticflickr.com/3684/9426996536_0eff23fdc8_c.jpg?resize=500%2C333"
     },

     {
         name: "Blue Ribbon",
         location: "Boston",
         category: "American",
         moneysign: "$",
         restaurant_url: "https://bunnyandporkbelly.wordpress.com/2013/01/19/blue-ribbon-bbq-arlington-center-boston-ma/",
         picture_url: "https://i0.wp.com/farm9.staticflickr.com/8046/8393493077_0318e5f4ed_c.jpg?resize=500%2C333"
     },

     {
         name: "Potluck Cafe",
         location: "Boston",
         category: "Chinese",
         moneysign: "$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2014/02/09/%E9%BA%BB%E8%BE%A3%E7%83%AB-potluck-cafe-%E4%B8%89%E8%8F%9C%E4%B8%80%E6%B1%A4-chinatown-boston-ma/",
         picture_url: "http://i0.wp.com/farm8.staticflickr.com/7318/12399824483_bce559902f_b.jpg?resize=500%2C333"
     },


     {
         name: "Fairsted Kitchen",
         location: "Boston",
         category: "American",
         moneysign: "$$$",
         restaurant_url: "http://bunnyandporkbelly.com/2014/01/11/fairsted-kitchen-brookline-ma-boston/",
         picture_url: "http://i2.wp.com/farm3.staticflickr.com/2837/11864379415_f6a18a3218_b.jpg?resize=500%2C333"
     }, {
         name: "La Brasa",
         location: "Boston",
         category: "American",
         moneysign: "$$",
         restaurant_url: "http://bunnyandporkbelly.com/2014/05/05/la-brasa-somerville-ma/",
         picture_url: "https://farm3.staticflickr.com/2914/14114960411_d94b040355_b.jpg?resize=500%2C333"
     },

     {
         name: "Bondir",
         location: "Boston",
         category: "French",
         moneysign: "$$$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2012/08/27/bondir-cambridge-ma-boston/",
         picture_url: "http://i0.wp.com/farm8.staticflickr.com/7139/7875031850_5bef55e600_c.jpg?resize=500%2C333"
     },

     {
         name: "Shanghai Gate",
         location: "Boston",
         category: "Chinese",
         moneysign: "$$",
         restaurant_url: "http://bunnyandporkbelly.wordpress.com/2012/03/24/soup-dumplings-shanghai-gate-allstonbrighton-boston-ma/",
         picture_url: "https://bunnyandporkbelly.files.wordpress.com/2012/03/l1100488.jpg?resize=500%2C333"
     },

     {
         name: "Taqueria Jalisco",
         location: "Boston",
         category: "Mexican",
         moneysign: "$",
         restaurant_url: "http://bunnyandporkbelly.wordpress.com/2012/07/30/best-tacos-in-bean-taqueria-jalisco-east-boston-ma/",
         picture_url: "https://i1.wp.com/farm9.staticflickr.com/8161/7680497250_039c1a6912_c.jpg?resize=500%2C333"
     }, {
         name: "OB Bear",
         location: "Los Angeles",
         category: "Korean",
         moneysign: "$$",
         restaurant_url: "http://www.bunnyandporkbelly.com/2013/12/17/ob-bear-los-angeles-ca-koreatown-wilshire-center/",
         picture_url: "http://i0.wp.com/farm4.staticflickr.com/3797/11414630303_70a7ae9b7e_b.jpg?resize=500%2C333"
     }, {
         name: "Feng Mao Mutton Kebab",
         location: "Los Angeles",
         category: "Chinese",
         moneysign: "$$",
         restaurant_url: "http://bunnyandporkbelly.com/2013/11/20/feng-mao-2-mutton-kebab-koreatown-wilshire-center-los-angeles-ca/",
         picture_url: "http://i0.wp.com/farm6.staticflickr.com/5534/10899624473_13583249f6_b.jpg?resize=500%2C333"
     }
 ]

//extracts the selected values
 function myFunction() {
     var a = document.getElementById("loc").selectedIndex;
     var b = document.getElementsByTagName("option")[a].text;
     var c = document.getElementById("category").selectedIndex;
     var d = document.getElementsByTagName("option")[c + 3].text;
     var e = document.getElementById("price").selectedIndex;
     var f = document.getElementsByTagName("option")[e + 9].text;

//filter out the restaurants that match the criteria
     var result = restaurants.filter(function(restaurant) {
         return restaurant.location == b && restaurant.category === d && restaurant.moneysign === f;

     })

     //write out 'how about...'
     document.querySelector("#how").textContent = "How about..."

//if no restaurant that matches -> try again
     if (result.length == 0) {

         document.querySelector("#name").textContent = "try another combination. I don't have a restaurant that fits your criteria. Sorry!"
//overwrites the other paragraphs or else the previous restaurant info stays on the page when re-select 
         document.querySelector("#location").textContent = ""
         document.querySelector("#cate").textContent = ""
         $('#image1').attr('src', "");

// else return a list of restaurants that matches ->[object]

     } else {
         restaurants.filter(function(restaurant) {
             return restaurant.location == b && restaurant.category === d && restaurant.moneysign === f;
//map out the name, link, and pic of the restaurant 
         }).map(function(restaurant) {
             var g = restaurant.name;
             var k = restaurant.restaurant_url;
             var pic = restaurant.picture_url;
             document.querySelector("#name").textContent = g;
             document.querySelector("#cate").textContent = " Click for review and more pictures";
             $('#linkto').attr('href', k);
             $('#image1').attr('src', pic);


         })
     }

 };

//popup window -> when click on the restaurant link. 
 $('.popup').click(function(event) {
     event.preventDefault();
     window.open($(this).attr("href"), "popupWindow", "width=800,height=600,scrollbars=yes");
 });