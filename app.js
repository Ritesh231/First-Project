const wrapper=document.querySelector(".sliderWrapper")

const menuItems=document.querySelectorAll(".menuItem")
const products=[
    {
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"./img/air.png",
            },
            {
                code:"darkblue",
                img:"./img/air2.png",
            },
        ],

    },
    {
        id:2,
        title:"Air Jordan",
        price:99,
        colors:[
            {
                code:"lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            },
        ],

    },
    {
        id:3,
        title:"Blazer",
        price:129,
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"darkgreen",
                img:"./img/blazer2.png",
            },
        ],

    },
    {
        id:4,
        title:"Crater",
        price:109,
        colors:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"lightgray",
                img:"./img/crater2.png",
            },
        ],

    },
    
];

let choosenProduct=products[0]
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductClors=document.querySelectorAll(".color");
const currentSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`;
        //change the choosen product
        choosenProduct=products[index]

        //change texts of currentProduct
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="$"+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img

        //assigninng new colors
        currentProductClors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });
    }); 
});

currentProductClors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
         currentProductImg.src=choosenProduct.colors[index].img
    });
});

currentSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})