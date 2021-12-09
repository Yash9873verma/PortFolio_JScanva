const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
const particleArray = [];
let hue = 0;
let toggle_nav = document.getElementsByClassName('bar-container');
let temp = document.getElementsByClassName("contact-container");
let particleNum = 1;

function particle_num(){
    particleNum++;
    if(particleNum>=9){
        particleNum=1;
    }
    document.getElementById("particle_num_changer").innerHTML = particleNum;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const mouse = {
    x:undefined,
    y:undefined
};
canvas.addEventListener("click",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0;i<10;i++){
        particleArray.push(new Particle);
    }
})
canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0;i<particleNum;i++){
        particleArray.push(new Particle);
    }
});

class Particle{
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 5 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
        this.color = 'hsl('+hue+',100%,50%';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>0.2){
            this.size -= 0.1;
        }
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        ctx.fill();
    }
}


function particleHandler(){
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
        for(let j=0;j<i;j++){
            let dx = particleArray[i].x-particleArray[j].x;
            let dy = particleArray[i].y-particleArray[j].y;
            distance = Math.sqrt(dx*dx +dy*dy);
            if(distance  <100 & distance>20){
                ctx.beginPath();
                ctx.strokeStyle = particleArray[i].color;
                ctx.lineWidth = particleArray[i].size/10;
                ctx.moveTo(particleArray[i].x,particleArray[i].y);
                ctx.lineTo(particleArray[j].x,particleArray[j].y);
                ctx.stroke();
            }
        }
        if(particleArray[i].size<=0.3){
            particleArray.splice(i,1);
            i--;
        }
    }
}

function animate(){
    //ctx.fillStyle = 'rgba(0,0,0,0.02)';
    //ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    hue+=2;
    particleHandler();
    requestAnimationFrame(animate);
}
animate();

function canvas_switch(){
    let canvaElement = document.getElementsByClassName("canvas-class")[0];
    let num_changer = document.getElementsByClassName("num_changer")[0];
    canvaElement.classList.toggle("change_canva");
    num_changer.classList.toggle("dis_num_changer");
    //btn innerHTML
    btn_text = document.getElementsByClassName("canva_switch")[0];
    if(btn_text.innerHTML.search("Try")!=-1){
        btn_text.innerHTML = "Turn Off";
        document.getElementById('quote').style.display = "none";
    }    
    else{
        btn_text.innerHTML = "Try Me";
        document.getElementById('quote').style.display = "block";
    }
}


//toggle for burger is here
toggle_nav[0].addEventListener("click",function(){
    let element = document.getElementsByClassName('nav-menu');
    toggle_nav[0].classList.toggle('new-bar-container');
    element[0].classList.toggle('new-nav-menu');
    

})
//toggle ends here


//work-section toggle

let workNav = document.getElementsByClassName("work");
workNav[0].addEventListener("click",toggle_workpanel);
function toggle_workpanel(){
    let element = document.getElementsByClassName("work-container");
    element[0].classList.toggle("work-panel-toggle");
}
//work section toggle ends here


//contact toggle
let toggle_c = document.getElementsByClassName("contact-nav");

toggle_c[0].addEventListener("click",function(){
    temp[0].classList.toggle("toggle-contact");
})

function toggle_contact_form(){
    temp[0].classList.toggle("toggle-contact");
}
//contact toggle end

//changing quote random
const quotelist = [
    "'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away'. – Antoine de Saint-Exupery",
    '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House',
    '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon',
    '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
    '“Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
    '“Simplicity is the soul of efficiency.” – Austin Freeman',
    '“Make it work, make it right, make it fast.” – Kent Beck',
    '“Before software can be reusable it first has to be usable.” – Ralph Johnson',
    '“Fix the cause, not the symptom.” – Steve Maguire'
]

let quote = document.getElementById("quote");
let temprand = Math.random() * 10 - 1;
quote.innerHTML = quotelist[Math.ceil(temprand)];

//

//backspace refresh event

document.addEventListener('keydown',function(event){
    if(event.key === "Backspace"){
        window.location="http://devfolio.epizy.com";
    }
})

//backspace refresh end