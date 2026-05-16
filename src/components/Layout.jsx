// import React, { useRef, useEffect, useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const Layout = ({ children }) => {
//   const containerRef = useRef(null);
//   const [isLocked, setIsLocked] = useState(false);

//   useEffect(() => {
//     const container = containerRef.current;

//     const onWheel = (e) => {
//       if (isLocked) return;

//       e.preventDefault();

//       const direction = e.deltaY > 0 ? 1 : -1;
//       const scrollAmount = window.innerHeight * direction;

//       container.scrollBy({
//         top: scrollAmount,
//         behavior: "smooth",
//       });

//       // ⏸ STOP TIME — change here (1000 = 1s, 2000 = 2s)
//       setIsLocked(true);
//       setTimeout(() => setIsLocked(false), 5000); // 🔥 1.5 seconds
//     };

//     container.addEventListener("wheel", onWheel, { passive: false });
//     return () => container.removeEventListener("wheel", onWheel);
//   }, [isLocked]);

//   return (
//     <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth">
//       <main
//         ref={containerRef}
//         className="h-screen overflow-y-scroll snap-y scroll-smooth no-scrollbar"
//       >
//         <Navbar />
//         {children}
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, onHeroClick, onAboutClick }) => {
  return (
    <div className="m-0 bg-white">
      <Navbar onHeroClick={onHeroClick} onAboutClick={onAboutClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;