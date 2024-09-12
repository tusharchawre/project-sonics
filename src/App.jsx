import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';






function App() {
  const heroTxt = useRef(null)
  const paraTxt = useRef(null)
  const buttonRef = useRef(null)
  const { contextSafe } = useGSAP();
  const imageRef = useRef(null)
  const svgRef = useRef(null)

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

  const onHover1 = contextSafe(() => {
    gsap.to('.glass', { 
      backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.1),rgb(255 255 255 / 0.15) )" ,
    ease: "power1.out" ,
  stagger: 0.5
  });
});

const onHover2 = contextSafe(() => {
  gsap.to('.glass2', { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.1),rgb(255 255 255 / 0.15) )" ,
  ease: "power1.out" ,
stagger: 0.5
});
});


const onHover3 = contextSafe(() => {
  gsap.to('.glass3', { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.1),rgb(255 255 255 / 0.15) )" ,
  ease: "power1.out" ,

});
});

const mouseLeave= contextSafe(()=>{
  gsap.to('.glass', { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.2),rgb(255 255 255 / 0) )" ,
    ease: "power1.out" ,
});
})

const mouseLeave2= contextSafe(()=>{
  gsap.to('.glass2', { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.2),rgb(255 255 255 / 0) )" ,
    ease: "power1.out" ,
});
})


const mouseLeave3= contextSafe(()=>{
  gsap.to('.glass3', { 
    backgroundImage: "linear-gradient(to right,rgb(255 255 255 / 0.2),rgb(255 255 255 / 0) )" ,
    ease: "power1.out" ,
});
})

const svgBend = contextSafe((e)=>{
  gsap.to(svgRef.current , {
    attr : {d : `M 10 100 Q 720 ${e.clientY - e.target.getBoundingClientRect().top} 1430 100`}
  })



})




const svgVibe = contextSafe(()=>{
  const tl2= gsap.timeline()
  tl2.to(svgRef.current , {
    attr : {d : `M 10 100 Q 12.5 100, 13.5 100 Q 15.5 100, 17.5 100 Q 18.5 100, 19.5 100 T 1430 100`},

})



  tl2.to(svgRef.current , {
    attr : {d : `M 10 100 Q 12.5 -120, 13.5 180 Q 15.5 -120, 17.5 180 Q 18.5 -120, 19.5 180 T 1430 100`},
    ease: "power3.out",
    duration: 1
  

})

  

})



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
          <ArrowUpRight />


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
            <div onMouseEnter={onHover1} onMouseLeave={mouseLeave} className='bg-gradient-to-r from-white/20 to-white/0 h-20 w-80 rounded-2xl flex items-center border-white/10 border px-4 gap-3   glass'>
            <img src="spatial.png" alt="" className='size-12'/>
              <p className='w-44 text-left text-sm'>
                Spatial audio with <br /> dynamic head tracking
              </p>
            </div>
            <div onMouseEnter={onHover2} onMouseLeave={mouseLeave2}  
            className='bg-gradient-to-r from-white/20 to-white/0 h-20 w-80 rounded-2xl flex items-center border-white/10 border px-4 gap-3  glass2'>
            <img src="noise-cancel.png" alt="" className='size-12'/>
            <p className='w-44 text-left text-sm'>
                Active Noise <br /> Cancellation
              </p>
            </div>
            <div onMouseEnter={onHover3} onMouseLeave={mouseLeave3}  
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
        <div className='flex flex-col items-center justify-center h-[100vh] scale-90 '>
          <div className='bg-red-950'>

          {/* <svg onMouseMove={(e)=>svgBend(e)} onMouseLeave={svgVibe} width={1440} height={200}  > */}

          <svg width={1440} height={200}   >
          <path ref={svgRef} d="M 10 100 
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
          Q 58.5 -40, 65.5 60
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
          Q 724 -115, 726 152
          Q 728 -108, 730.5 140
          Q 732 -89, 734.5 134
          Q 736 -64, 738.5 123 
          Q 740 -40, 742.5 120
          Q 744 -30, 746.5 115
          Q 748 -10, 750.5 110
          





          

           




          T 1430 100" stroke="white" strokeWidth={3} fill="transparent" />
          </svg>
          </div>

        </div>
      </div>
    </div>
    






    </>

    
  )
}

export default App
