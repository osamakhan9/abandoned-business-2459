let obj=[{
            
    Image:"https://pic-bstarstatic.akamaized.net/ugc/02f4112b12a97c5e66842a64c7eda8da.jpg@1200w_630h_1e_1c_1f.webp",
},
{
    Image:"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/17/Nithiin-and-Rashmika-Mandanna-s-Bheeshma-Movie-HD-posters--scaled.jpg?quality=80&zoom=1&ssl=1",
},
{
    Image:"https://wallpaperaccess.com/full/1076854.jpg",
},
{
    Image:"https://images.indianexpress.com/2021/01/10-Laal-Singh-Chaddha.jpg",
},
{
    Image:"https://wallpapercave.com/wp/wp5435701.jpg",
},
];
localStorage.setItem("images",JSON.stringify(obj))
let slideshow = document.querySelector("#slideshow")
function disp(dat){
    slideshow.innerHTML=null;
    dat.forEach(function(ele){
      let image = document.createElement("img")
      //image.setAttribute("id","box")
      image.src = ele.Image;

      //console.log(image)
      slideshow.append(image)
      image.append()  
    }) 
}
disp(obj)


let slideIn=0
slide()
function slide(){
let i;
let x = document.getElementsByTagName("img")
for(i=0;i < 5;i++){
    x[i].style.display = "none";
}
slideIn++;
if(slideIn > 5) {slideIn=1}
x[slideIn-1].style.display = "block"
setTimeout(slide,2000);
}
