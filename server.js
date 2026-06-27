const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extended: true }));         
app.use(express.json());                                 
app.use(methodOverride("_method"));                      

let orders = [
    {
        id: uuidv4(),
        restaurant: "Ajmeri Caters",
        item: "Chicken Dum Biryani",
        qty: 2,
        status: "Preparing"
    },
    {
        id: uuidv4(),
        restaurant: "Domino's",
        item: "Golden Corn Pizza",
        qty: 1,
        status: "Delivered"
    },
    {
        id: uuidv4(),
        restaurant: "New Annapurna Bhojnalay",
        item: "Special Thali",
        qty: 1,
        status: "Out for Delivery"
    },
    {
        id: uuidv4(),
        restaurant: "A One Biryani",
        item: "Mutton Dum Biryani",
        qty: 3,
        status: "Preparing"
    },
    {
        id: uuidv4(),
        restaurant: "Domino's",
        item: "Peppy Paneer Pizza",
        qty: 2,
        status: "Out for Delivery"
    },
    {
        id: uuidv4(),
        restaurant: "New Annapurna Bhojnalay",
        item: "Paneer Masala Thali",
        qty: 1,
        status: "Delivered"
    },
    {
        id: uuidv4(),
        restaurant: "Domino's",
        item: "Barbecue Chicken Pizza",
        qty: 1,
        status: "Preparing"
    },
    {
        id: uuidv4(),
        restaurant: "Ajmeri Caters",
        item: "Chicken Tikka",
        qty: 2,
        status: "Out for Delivery"
    }
];


app.get("/", (req, res) => {
    res.send("Foodie API Server is working ekdam makhhan!");
});


app.get("/orders",(req,res)=>{
    res.render("orderlist.ejs",{orders});
})

app.get("/orders/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/orders",(req,res)=>{
    let {restaurant,item,qty}=req.body;
    id = uuidv4();
    status = "preparing"
    orders.push({restaurant,item,qty,id,status});
    res.redirect("/orders");
})

app.get("/orders/:id/edit",(req,res)=>{
    let {id} = req.params;
    let order = orders.find((o)=> id === o.id);
    if(order){
        res.render("edit.ejs",{order});
    }else{
        res.send("Page Not Found")
    }
})

app.patch("/orders/:id",(req,res)=>{
    let {id} = req.params;
    let newStatus = req.body.status
    let order = orders.find((o)=> id === o.id);
    if(order){
        order.status =newStatus;
        res.redirect("/orders");
    }else{
        res.send("Order Not Found");
    }
    console.log(order);
})

app.delete("/orders/:id",(req,res)=>{
    let { id } = req.params;
    orders = orders.filter((o) => o.id !== id);    
    res.redirect("/orders");
})

app.listen(port, () => {
    console.log(`Foodie API Server Is Running On Port ${port}`);
});

