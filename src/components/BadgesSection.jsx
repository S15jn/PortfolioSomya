import React from 'react'


export default function BadgesSection() {
  return (
    <section id="badges" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Badges </span>
        </h2>

       <div className='grid grid-cols-3'>
          <div className="w-full max-w-sm">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src="/Badges/javaBadges.png"
      alt="product image"
    />
  </a>
</div>
        <div className="w-md  h- md max-w-sm">
  <a href="#">
    <img
      className="p-8 rounded-t-lg "
      src="/Badges/leetcode.gif"
      alt="product image"
    />
  </a>
</div>

     

       <div className="w-full max-w-sm">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src="/Badges/PythonB.png"
      alt="product image"
    />
  </a>
</div>
       </div>


      
      </div>
    </section>
  )
}
