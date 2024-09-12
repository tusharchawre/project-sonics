import { ArrowUpRight } from 'lucide-react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';






function App() {
  const heroTxt = useRef(null)
  const paraTxt = useRef(null)
  const buttonRef = useRef(null)
  const { contextSafe } = useGSAP();
  const imageRef = useRef(null)
  const svgRef = useRef(null)

  const straightPath = `M 10 100 
          Q 12.5 100, 13.5 100 
          Q 15.5 100, 17.5 100 
          Q 18.5 100, 19.5 100
          Q 20.5 100, 21.5 100
          Q 23.5 100, 25.5 100
          Q 27.5 100, 30.5 100
          Q 32.5 100, 35.5 100 
          Q 37.5 100, 39.5 100
          Q 40.5 100, 43.5 100
          Q 45.5 100, 47.5 100
          Q 50.5 100, 52.5 100
          Q 58.5 100, 60.5 100
          Q 62.5 100, 64 100
          Q 68.5 100, 69.5 100
          Q 70 100, 100 100
          Q 150 100, 160 100
          Q 395 100, 398 100
          Q 400 100, 402 100
          Q 404 100, 406 100
          Q 408 100, 410 100
          Q 412 100, 414.5 100
          Q 416 100, 418.5 100
          Q 424 100, 426.5 100 
          Q 428 100, 430.5 100
          Q 432 100, 434.5 100
          Q 436 100, 440.5 100
          Q 443 100, 445 100
          Q 710 100, 714 100
          Q 716 100, 718 100
          Q 720 100, 722 100
          Q 724 100, 726 100
          Q 728 100, 730.5 100
          Q 732 100, 734.5 100
          Q 736 100, 738.5 100 
          Q 740 100, 742.5 100
          Q 744 100, 746.5 100
          Q 748 100, 750.5 100
           Q 752 100, 754 100
          Q 872 100, 874 100
          Q 876 100, 878 100 
          Q 890 100, 892 100 
          Q 894 100, 896 100
          Q 895 100, 897.5 100
          Q 898.5 100, 903.5 100
          Q 905.5 100, 907.5 100
          Q 909.5 100, 911.5 100 
          Q 913.5 100, 915.5 100
          Q 917.5 100, 919.5 100
          Q 921.5 100, 923.5 100
          Q 925.5 100, 927.5 100
          Q 928.5 100, 929.5 100
          Q 930.5 100, 935.5 100
          Q 936 100, 938 100
          Q 1220 100, 1222 100
          Q 1224 100, 1226 100
          Q 1228 100, 1230 100
          Q 1232 100, 1234 100
          Q 1236 100, 1238.5 100
          Q 1240 100, 1242.5 100
          Q 1244 100, 1246.5 100 
          Q 1248 100, 1250.5 100
          Q 1252 100, 1254.5 100
          Q 1256 100, 1258.5 100
          Q 1259 100, 1230 100
          T 1430 100`

  const wavePath = `M 10 100 
          Q 12.5 -80, 13.5 170 
          Q 15.5 -120, 17.5 180 
          Q 18.5 -117, 19.5 178
          Q 20.5 -120, 21.5 180
          Q 23.5 -120, 25.5 180
          Q 27.5 -110, 30.5 176
          Q 32.5 -120, 35.5 180 
          Q 37.5 -120, 39.5 177
          Q 40.5 -111, 43.5 180
          Q 45.5 -120, 47.5 168
          Q 50.5 -120, 52.5 180
          Q 58.5 -40, 60.5 60
          Q 62.5 180, 64 120
          Q 68.5 100, 69.5 100
          Q 70 100, 100 100
          Q 150 100, 160 100
          Q 395 100, 398 100
          Q 400 -60, 402 170
          Q 404 -118, 406 170
          Q 408 -120, 410 180
          Q 412 -120, 414.5 180
          Q 416 -110, 418.5 176
          Q 424 -120, 426.5 180 
          Q 428 -120, 430.5 177
          Q 432 -111, 434.5 180
          Q 436 -120, 440.5 168
          Q 443 100, 445 100
          Q 710 100, 714 100
          Q 716 -60, 718 160
          Q 720 -118, 722 160
          Q 724 -115, 726 160
          Q 728 -108, 730.5 155
          Q 732 -89, 734.5 150
          Q 736 -64, 738.5 147 
          Q 740 -40, 742.5 140
          Q 744 -30, 746.5 135
          Q 748 -10, 750.5 130
           Q 752 100, 754 100
          Q 872 100, 874 100
          Q 876 -80, 878 170 
          Q 890 -120, 892 180 
          Q 894 -117, 896 178
          Q 895 -120, 897.5 180
          Q 898.5 -120, 903.5 180
          Q 905.5 -110, 907.5 176
          Q 909.5 -120, 911.5 180 
          Q 913.5 -120, 915.5 177
          Q 917.5 -111, 919.5 180
          Q 921.5 -120, 923.5 168
          Q 925.5 -120, 927.5 180
          Q 928.5 -40, 929.5 60
          Q 930.5 180, 935.5 100
          Q 936 100, 938 100
          Q 1220 100, 1222 100
          Q 1224 -60, 1226 160
          Q 1228 -118, 1230 160
          Q 1232 -115, 1234 160
          Q 1236 -108, 1238.5 155
          Q 1240 -89, 1242.5 150
          Q 1244 -64, 1246.5 147 
          Q 1248 -40, 1250.5 140
          Q 1252 -30, 1254.5 135
          Q 1256 -10, 1258.5 130
          Q 1259 100, 1230 100
          T 1430 100`

  const [path, setPath ] = useState(straightPath)

  // const heroShift = contextSafe((e)=>{
  //   gsap.to(imageRef.current,{
  //     x: gsap.utils.clamp(-10, 10 , (e.clientX-720)/1440)
  // })
 
  // })

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from("nav img", { 
      duration: 0.3,
      opacity: 0,

    });
    tl.from("nav button", { 
      duration: 1,
      opacity: 0,

    }, "-=0.3");
    tl.from("nav p", { 
      y: -10,
      duration: 0.3,
      ease: "power1.out",
      opacity: 0,
      stagger: 0.3
    });
  
    tl.from(heroTxt.current, { 
      x: -10,
      duration: 0.5,
      opacity:0,
    }, "-=1");
    tl.from(paraTxt.current, { 
      x: -10,
      delay: 0.2,
      duration: 0.5,
      opacity:0,
    }, "-=1");
    tl.from(buttonRef.current, { 
      duration: 0.4,
      opacity:0,
    }, "-=1");
    tl.from(imageRef.current,{
      duration: 0.8,
      opacity:0,
    },"-=1");
    tl.from(".arrow-icon", { 
      delay: 0.2,
      rotate: 180,
      duration: 0.5,
      opacity:0,
    }, "-=1");
    tl.from(".star-text", { 
      delay: 0.2,
      duration: 0.5,
      opacity:0,
    }, "-=1");
    tl.from(".star-icon", { 
      delay: 0.2,
      rotate: 180,
      duration: 0.5,
      opacity:0,
    }, "-=1");
    tl.from(".glass-slide div", { 
      x: 300,
      delay: 0.2,
      duration: 0.5,
      stagger: 0.4,
      ease: "power2.out"
    }, "-=1");
   
  })

  const onHover = contextSafe((elem) => {
    gsap.to(`.${elem}`, { 
      backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.1),rgb(255 255 255 / 0.15) )" ,
    ease: "power1.out" ,
  stagger: 0.5
  });
});



const mouseLeave= contextSafe((elem)=>{
  gsap.to(`.${elem}`, { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.2),rgb(255 255 255 / 0) )" ,
    ease: "power1.out" ,
});
})

const onHover2 = contextSafe((elem) => {
  gsap.to(`.${elem}`, { 
    backgroundImage: "linear-gradient(to bottom right,rgb(255 255 255 / 0.1),rgb(255 255 255 / 0.15) )" ,
  ease: "power1.out" ,
stagger: 0.5
});
});



const mouseLeave2= contextSafe((elem)=>{
gsap.to(`.${elem}`, { 
  backgroundImage: "linear-gradient(to bottom right,rgb(255 255 255 / 0.2),rgb(255 255 255 / 0.1) )" ,
  ease: "power1.out" ,
});
})


const svgBend = contextSafe((e)=>{
  if(path == straightPath){ 
              
  let bendingFactor = e.clientY - e.target.getBoundingClientRect().top
  gsap.to(svgRef.current , {
    attr : {d : `M 10 100 
          Q 12.5 100, 13.5 100 
          Q 15.5 100, 17.5 100 
          Q 18.5 100, 19.5 100
          Q 20.5 100, 21.5 100
          Q 23.5 100, 25.5 100
          Q 27.5 100, 30.5 100
          Q 32.5 100, 35.5 100 
          Q 37.5 100, 39.5 100
          Q 40.5 100, 43.5 100
          Q 45.5 100, 47.5 100
          Q 50.5 100, 52.5 100
          Q 58.5 100, 60.5 100
          Q 62.5 100, 64 100
          Q 68.5 100, 69.5 100
          Q 70 100, 100 100
          Q 150 100, 160 100
          Q 395 100, 398 100
          Q 400 100, 402 100
          Q 404 100, 406 100
          Q 408 100, 410 100
          Q 412 100, 414.5 100
          Q 416 100, 418.5 100
          Q 424 100, 426.5 100 
          Q 428 100, 430.5 100
          Q 432 100, 434.5 100
          Q 436 100, 440.5 100
          Q 443 100, 445 100
          Q 710 100, 714 100
          Q 716 100, 718 100
          Q 720 ${bendingFactor} , 722 ${bendingFactor}
          Q 724 100, 726 100
          Q 728 100, 730.5 100
          Q 732 100, 734.5 100
          Q 736 100, 738.5 100 
          Q 740 100, 742.5 100
          Q 744 100, 746.5 100
          Q 748 100, 750.5 100
           Q 752 100, 754 100
          Q 872 100, 874 100
          Q 876 100, 878 100 
          Q 890 100, 892 100 
          Q 894 100, 896 100
          Q 895 100, 897.5 100
          Q 898.5 100, 903.5 100
          Q 905.5 100, 907.5 100
          Q 909.5 100, 911.5 100 
          Q 913.5 100, 915.5 100
          Q 917.5 100, 919.5 100
          Q 921.5 100, 923.5 100
          Q 925.5 100, 927.5 100
          Q 928.5 100, 929.5 100
          Q 930.5 100, 935.5 100
          Q 936 100, 938 100
          Q 1220 100, 1222 100
          Q 1224 100, 1226 100
          Q 1228 100, 1230 100
          Q 1232 100, 1234 100
          Q 1236 100, 1238.5 100
          Q 1240 100, 1242.5 100
          Q 1244 100, 1246.5 100 
          Q 1248 100, 1250.5 100
          Q 1252 100, 1254.5 100
          Q 1256 100, 1258.5 100
          Q 1259 100, 1230 100
          T 1430 100`}
  })
}
})

const svgVibe = contextSafe(()=>{
  const tl2= gsap.timeline()
  tl2.to(svgRef.current , {
    attr : {d : wavePath},
          ease: "elastic.out(1,0.5)",
    duration: 2
});
tl2.to(".sounds" , {
  opacity: 1,
  duration:0.3,

 
})




setPath(wavePath)
})

const hoverText = () => {

  if(path == straightPath){
    return "Hover over the line!"
  }else{
    return "Sound So crisp you can see the waves."
  }
}


  return (
    <>
    <div className="h-full w-screen bg-gradient-to-b from-zinc-700 to-zinc-900 text-white overflow-x-hidden ">
      <div className='backdrop-blur-3xl'>
      <nav className="flex justify-around h-20 items-center ">
        <img src="https://logodix.com/logo/75968.png" className="size-12"/>
        <div className="px-20 flex w-[50%] justify-around ">
          <p>Features</p>
          <p>Design</p>
          <p>Models</p>
          <p>Accessories</p>
        </div>
        <div className="flex gap-5">
          <button>Log in</button>
          <button className="rounded-3xl border-white border-2 px-4 py-2">Sign Up</button>
        </div>

      </nav>

      <div className='flex justify-around'>
        <div  className='h-full  pr-0 py-12 flex flex-col gap-8'>
          <div ref={buttonRef} className='pt-6 -mb-2'>
            <p className='flex justify-center items-center w-60 h-10 bg-orange-500 rounded-[30px] '>SOUNDS LIKE AN EPIPHANY</p>
          </div>
          <h1 ref={heroTxt} className='text-[5vw] leading-none font-sans'>
            Perfect balance<br />
            of exhilarating<br />
            high-fidelity <br />
            audio
          </h1>
          <p ref={paraTxt}>Top songs being discovered <br />
          around the world right now
          </p>
          <ArrowUpRight className='arrow-icon' />


        </div>
        <div ref={imageRef} onMouseMove={(e)=>heroShift(e)}  className="size-2/5 -translate-x-28">
          <img src="Hero.png" alt="" />
        </div>
        <div className='flex flex-col h-screen w-32 items-center justify-around text-center'>
          <div>
            <div className='w-full flex justify-center'>
            <img  src="star-icon.png" className='size-12 star-icon' alt="" />
            </div>
            <p  className='text-m star-text'>
            Experience your music like never before.
            </p>
            
          </div>
          <div className='flex glass-slide flex-col gap-3'>
            <div onMouseEnter={() => onHover('glass')} onMouseLeave={()=>mouseLeave('glass')} className='bg-gradient-to-r from-white/20 to-white/0 h-20 w-80 rounded-2xl flex items-center border-white/10 border px-4 gap-3   glass'>
            <img src="spatial.png" alt="" className='size-12'/>
              <p className='w-44 text-left text-sm'>
                Spatial audio with <br /> dynamic head tracking
              </p>
            </div>
            <div onMouseEnter={() => onHover('glass2')} onMouseLeave={()=>mouseLeave('glass2')}  
            className='bg-gradient-to-r from-white/20 to-white/0 h-20 w-80 rounded-2xl flex items-center border-white/10 border px-4 gap-3  glass2'>
            <img src="noise-cancel.png" alt="" className='size-12'/>
            <p className='w-44 text-left text-sm'>
                Active Noise <br /> Cancellation
              </p>
            </div>
            <div onMouseEnter={() => onHover('glass3')} onMouseLeave={()=>mouseLeave('glass3')}  
             className='bg-gradient-to-r from-white/20 to-white/0 h-20 w-80 rounded-2xl flex items-center border-white/10 border px-4 gap-3  glass3 '>
            <img src="transparency.png" alt="" className='size-12'/>
            <p className='w-44 text-left text-sm'>
               Transparency mode
              </p>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="h-[100vh] w-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white ">
      <div className='backdrop-blur-3xl '>
        <div className='flex flex-col items-center justify-center h-[100vh] scale-90 gap-5 '>
          <div className='flex justify-around w-full sounds opacity-0'>
          <p className='-translate-x-24'>Kick</p>
          <p>Kick</p>
          <p className='translate-x-4'>Snare</p>
          <p className='-translate-x-24'>Kick</p>
          <p className='-translate-x-12'>Snare</p>

          </div>

          
          <div>
          <svg onMouseMove={(e)=>svgBend(e)} onMouseLeave={svgVibe} width={1440} height={200}>
          <path ref={svgRef} d={path} stroke="white" strokeWidth={3} fill="transparent" />
          </svg>
          </div>

          <div className='font-mono animate-pulse opacity-75 transition-transform'>
            <p>{hoverText()}</p>
            
          </div>
          

        </div>
      </div>
    </div>

    <div className="h-[full] w-screen bg-zinc-950 text-white">
      <div className="flex justify-center items-center px-20 py-10 pb-40 gap-10 flex-shrink-0 ">
        
        <div onMouseEnter={() => onHover2('glass4')} onMouseLeave={()=>mouseLeave2('glass4')}  
        className='panel rounded-3xl w-[30vw] h-[500px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-white/10 border flex flex-col items-center p-10 glass4'>
        <img src="spatial.png" alt="" className='size-28 -translate-y-4'/>
              <p className='w-44  text-xl text-center -translate-y-2'>
                Spatial audio 
              </p>
              <p className="text-center py-10 w-60">
              Experience <span className='text-orange-500'>immersive</span>, 360-degree audio that moves with you. Whether you're gaming, watching movies, or listening to music, <span className='text-orange-500'>spatial</span> sound places you at the center of the action, delivering <span className='text-orange-500'>rich</span>, dynamic audio from every direction.
              </p>
        </div>
        <div onMouseEnter={() => onHover2('glass5')} onMouseLeave={()=>mouseLeave2('glass5')}   className='panel rounded-3xl w-[30vw] h-[500px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-white/10 border flex flex-col items-center p-10 glass5'>
        <img src="noise-cancel.png" alt="" className='size-28'/>
              <p className='w-44  text-xl text-center'>
                Noise Cancellation
              </p>
              <p className="text-center py-10 w-60">
                Block out distractions and immerse yourself in <span className='text-orange-500'>pure</span> sound. Our advanced noise cancellation technology filters out background noise, letting you <span className='text-orange-500'>focus</span> on what matters most—whether it's a conference call or your favorite playlist.
              </p>
             
</div>

        <div onMouseEnter={() => onHover2('glass6')} onMouseLeave={()=>mouseLeave2('glass6')} className='panel rounded-3xl w-[30vw] h-[500px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-white/10 border flex flex-col items-center p-10 glass6'>
              <img src="transparency.png" alt="" className='size-28'/>
              <p className='text-xl w-full text-center line-clamp-1'>
                Transaparency Mode
              </p>
        <p className="text-center py-10 w-60">
        Stay <span className='text-orange-500'>aware</span> of your surroundings without compromising your audio <span className='text-orange-500'>experience</span>. With transparency mode, seamlessly blend external sounds with your <span className='text-orange-500'>media</span>, ensuring you never miss a conversation or important sound in your environment.
        </p>

              
</div>

        

      </div>

      <footer className='flex bg-zinc-950 h-[40px] items-end justify-around'>
        <p className='text-white'>
        Copyright © 2024 Apple Inc. – All rights reserved.
</p>
       
      </footer>


      </div>
    
      






    </>

    
  )
}

export default App
