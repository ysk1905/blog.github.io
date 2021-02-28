const container=document.querySelectorAll('.button-container');
container.forEach((cont)=>{
    const buttons= cont.children;
    for(let button=0;button<buttons.length;button++){
        buttons[button].addEventListener('click',(e)=>{
            const slider = document.getElementById(e.target.parentNode.previousElementSibling.id);
            slider.style.left=-40*(Number(e.target.id)-1)+'vw';
        });
    }
});

let previousLeft = '0px';
let lastTime = 0;
let start=0;

if(window.matchMedia("(max-width:375px)").matches)
{
    const containerM=document.querySelectorAll('.button-container-mobile');
    containerM.forEach((contM)=>{
        const buttonsM=contM.children;
        for(let i=0;i<buttonsM.length;i++)
        {
            buttonsM[i].addEventListener('click',(e)=>{
                const slide= document.getElementById(e.target.parentNode.parentNode.firstElementChild.id);
                const count= slide.children.length;
                slide.style.transitionDuration='1s';
                let presentTime=(new Date()).getTime();
                let s=getComputedStyle(slide).getPropertyValue('left');
                console.log(s);
                let vw=window.innerWidth;
                if(e.target.id==='left')
                {
                    if(presentTime-lastTime<1000)
                    {
                        if(previousLeft!=='0px')
                        {
                            slide.style.left=Number(previousLeft.substring(0,previousLeft.length-2))+0.85*vw+'px';
                            previousLeft=slide.style.left;
                        }
                        slide.style.transitionDuration='0s';
                    }
                    else
                    {
                        if(s!=='0px')
                        {
                            previousLeft=s;
                            slide.style.left=Number(s.substring(0,s.length-2))+0.85*vw+'px';
                        }
                    }
                }
                else
                {
                    if(presentTime-lastTime<1000)
                    {
                        if(previousLeft!==(count-1)*-0.85*vw+'px')
                        {
                            slide.style.left=Number(previousLeft.substring(0,previousLeft.length-2))-0.85*vw+'px';
                            previousLeft=slide.style.left;
                        }
                        slide.style.transitionDuration='0s';
                    }
                    else 
                    {
                        if(s!==(count-1)*-0.85*vw+'px')
                        {
                            previousLeft=s;
                            slide.style.left=Number(s.substring(0,s.length-2))-0.85*vw+'px';
                        }
                    }
                }
                lastTime=presentTime;
            });
        }
    });
}

if(window.matchMedia("(max-width:425px)").matches&&window.matchMedia("(min-width:376px)").matches)
{
    const containerM=document.querySelectorAll('.button-container-mobile');
    containerM.forEach((contM)=>{
        const buttonsM=contM.children;
        for(let i=0;i<buttonsM.length;i++)
        {
            buttonsM[i].addEventListener('click',(e)=>{
                const slide= document.getElementById(e.target.parentNode.parentNode.firstElementChild.id);
                const count= slide.children.length;
                slide.style.transitionDuration='1s';
                let presentTime=(new Date()).getTime();
                let s=getComputedStyle(slide).getPropertyValue('left');
                console.log(s);
                let vw=window.innerWidth;
                if(e.target.id==='left')
                {
                    if(presentTime-lastTime<1000)
                    {
                        if(previousLeft!=='0px')
                        {
                            slide.style.left=Number(previousLeft.substring(0,previousLeft.length-2))+0.7*vw+'px';
                            previousLeft=slide.style.left;
                        }
                        slide.style.transitionDuration='0s';
                    }
                    else
                    {
                        if(s!=='0px')
                        {
                            previousLeft=s;
                            slide.style.left=Number(s.substring(0,s.length-2))+0.7*vw+'px';
                        }
                    }
                }
                else
                {
                    if(presentTime-lastTime<1000)
                    {
                        if(previousLeft!==(count-1)*-0.7*vw+'px')
                        {
                            slide.style.left=Number(previousLeft.substring(0,previousLeft.length-2))-0.7*vw+'px';
                            previousLeft=slide.style.left;
                        }
                        slide.style.transitionDuration='0s';
                    }
                    else 
                    {
                        if(s!==(count-1)*-0.7*vw+'px')
                        {
                            previousLeft=s;
                            slide.style.left=Number(s.substring(0,s.length-2))-0.7*vw+'px';
                        }
                    }
                }
                lastTime=presentTime;
            });
        }
    });
}