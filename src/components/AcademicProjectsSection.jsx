import { ArrowRight, ExternalLink, Github } from "lucide-react";


export const AcademicProjectsSection = () => {
  return (
    <section id="academic" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Academic <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         I made this video as part of an assignment for Computer Oriented Numerical Methods in my 5th semester. It demonstrates key concepts I learned in the subject
        </p>

        <div className="grid gap-4">
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    <div className="rounded-xl border-2 border-[#e1e7ef] ">
   <a href="https://youtu.be/QNDY8M6eixI?si=Bej36PdR_c1gBlmf" target="_blank">
     <img
      className="h-auto max-w-full rounded-lg"
      src="/Academics/pic1.jpg"
      alt="SIMPON 1/3 rule "
    />
   </a>
  </div>
  <div className="rounded-xl border-2 border-[#e1e7ef]">
   <a href="https://youtu.be/xXrOO53Hs1o?si=-rfyXz7jy_-5Xbpl" target="_blank">
     <img
      className="h-auto max-w-full rounded-lg"
      src="/Academics/pic.jpg"
      alt="Bubble Sort "
    />
   </a>
  </div>
  </div>
  <div className="grid grid-cols-5 gap-4">
    <div className="rounded-xl border-2 border-[#e1e7ef]">
    <a href="https://youtu.be/GId9uAw5jME?si=pH--gOWYFbv4fuD8" target="_blank">
        <img
      
        className="h-auto max-w-full rounded-lg"
        src="/Academics/pic7.jpg"
        alt="Netwon Raphson's Method"
      />
    </a>
    </div>
    <div className="rounded-xl border-2 border-[#e1e7ef]">
     <a href="https://youtu.be/8ImF7rWa41Y?si=BfNj5chpUCT_9c5I" target="_blank">
       <img
        className="h-auto max-w-full rounded-lg"
        src="/Academics/pic3.jpg"
        alt="Gauss Jordan Method"
      />
     </a>
    </div>
    <div className="rounded-xl border-2 border-[#e1e7ef]">
      <a href="https://youtu.be/gnuU1ayBqKU?si=XROb3z3Ub_7duFJE" target="_blank">
        <img
        className="h-auto max-w-full rounded-lg"
        src="/Academics/pic4.jpg"
        alt="Lagrange's Interpolation Method"
      />
      </a>
    </div>
    <div className="rounded-xl border-2 border-[#e1e7ef]">
    <a href="https://youtu.be/zWHJtArN-Ks?si=CdL69aJUNorDRbrg" target="_blank">
        <img
        className="h-auto max-w-full rounded-lg"
        src="/Academics/pic5.jpg"
        alt="IIL Conditioned equation"
      />
    </a>
    </div>
    <div className="rounded-xl border-2 border-[#e1e7ef]">
<a href="https://youtu.be/NHIY0pzs78s?si=z-7W94yeGyhmKjQz" target="_blank">
        <img
        className="h-auto max-w-full rounded-lg"
        src="/Academics/pic6.jpg"
        alt="Fixed Point Iteration Method"
      />
</a>
    </div>
   
  </div>
</div>
<div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://youtube.com/@somyajain6365?si=Og8-2J7vL4MAFAVk"
          >
           More Video <ArrowRight size={16} />
          </a>
        </div>

      
      </div>
    </section>
  );
};