// ----------------------
// ตัวแปร
// ----------------------

const envelope = document.getElementById("envelope");
const mainPage = document.getElementById("mainPage");

const openLetter = document.getElementById("openLetter");

const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");

const music = document.getElementById("bgmusic");

// ----------------------
// เปิดซองจดหมาย
// ----------------------

openLetter.addEventListener("click", () => {

    envelope.classList.add("hide");

    setTimeout(() => {

        mainPage.style.display = "flex";

    },700);

    // เล่นเพลง (ต้องเกิดจากการกดของผู้ใช้)
    music.play().catch(() => {});

});


// ----------------------
// เปิดกล่องของขวัญ
// ----------------------

giftBox.addEventListener("click",()=>{

    giftBox.style.transform="scale(1.3) rotate(15deg)";

    setTimeout(()=>{

        giftBox.innerHTML="🎉";

    },250);

    setTimeout(()=>{

        message.style.display="block";

        createHeart();

    },500);

});


// ----------------------
// กลีบซากุระ
// ----------------------

function sakura(){

    const flower=document.createElement("div");

    flower.className="sakura";

    const flowers=["🎂","🎂","🎉","🎉"];

    flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*6)+"s";

    flower.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },12000);

}

setInterval(sakura,350);


// ----------------------
// หัวใจลอย
// ----------------------

function createHeart(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="🎉";

            heart.style.position="fixed";

            heart.style.left=Math.random()*100+"vw";

            heart.style.bottom="-40px";

            heart.style.fontSize=(20+Math.random()*20)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition="5s linear";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.style.transform=
                `translateY(-110vh)
                 translateX(${Math.random()*100-50}px)
                 rotate(${Math.random()*360}deg)`;

                heart.style.opacity="0";

            },50);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*120);

    }

}


// ----------------------
// เอฟเฟกต์ดาววิบวับ
// ----------------------

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(12+Math.random()*12)+"px";

    star.style.opacity="0";

    star.style.pointerEvents="none";

    star.style.transition="1.5s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="1";

    },50);

    setTimeout(()=>{

        star.style.opacity="0";

    },900);

    setTimeout(()=>{

        star.remove();

    },1700);

}

setInterval(sparkle,300);


// ----------------------
// เคลื่อนไหวรูปเบา ๆ
// ----------------------

const photo=document.querySelector(".photo img");

let scale=1;

setInterval(()=>{

    scale=scale===1?1.05:1;

    photo.style.transform=`scale(${scale})`;

},3500);


// ----------------------
// พิมพ์ข้อความทีละตัว (Typewriter)
// ----------------------

const textElement=document.querySelector("#message p");

const originalText=textElement.innerHTML;

textElement.innerHTML="";

function typeWriter(text,element,speed){

    let i=0;

    function typing(){

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

giftBox.addEventListener("click",()=>{

    setTimeout(()=>{

        textElement.innerHTML="";

        typeWriter(originalText,textElement,35);

    },700);

},{once:true});