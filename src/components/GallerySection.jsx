import React from 'react'

export default function GallerySection() {
  return (
   
 <section id="Gallery" className="py-24 px-8 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {" "}
          Creative <span className="text-primary"> Gallery </span>
        </h2>

       
      

<div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 @max-xs:grid-cols-1 gap-4">
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
        src= "/Gallery/g4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
        src= "/Gallery/g2.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g6.jpg"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g1.jpg"
        alt=""
      />
    </div>
  
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g7.jpg"
        alt=""
      />
    </div>
      <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g5.jpg"
        alt=""
      />
    </div>
    {/* <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src= "/Gallery/g2.jpg"
        alt=""
      />
    </div> */}
   
  </div>
 
</div>
  </div>
  </section>
  
  


  )
}
