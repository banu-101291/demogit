const shop=()=>{
    console.log("add to cart");
}
const purchase=(callback)=>{
    setTimeout(()=>{
        console.log("purchasing time 30mins!!!");
        callback();
        console.log("purchase over!!!");
    },
    3000
    )
}
const callback=()=>{
    alert("purchase done!!!")
}
const coffee=()=>{
    console.log("prepare coffee!!")
}
shop();
purchase(callback);
coffee();