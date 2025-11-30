const  quote=["In the middle of every difficulty lies opportunity."
,
"Do not go where the path may lead, go instead where there is no path and leave a trail."
,
"Happiness depends upon ourselves." 
,
"Life is really simple, but we insist on making it complicated." 
,
]

const button=document.querySelector('button');
const outuput=document.querySelector('h1');
button.addEventListener('click',()=>{

    const num=Math.floor(Math.random()*4);
    outuput.textContent=quote[num];



})
