// "use client";

// import { useEffect } from 'react';
// import { gsap } from 'gsap';

// const items = Array.from({ length: 10 }, (_, index) => ({
//   id: index,
//   imgSrc: "https://placehold.co/250"
// }));

// export default function Home() {
//   useEffect(() => {
//     const loopContainers = document.querySelectorAll('.loop-container');
//     loopContainers.forEach((el, i) => {
//       const elements = el.querySelectorAll('.element');
//       const loop = createHorizontalLoop(elements, {
//         repeat: -1, // Infinite loop
//         paused: false,
//         paddingRight: 10,
//         reversed: i % 2 > 0,
//       });
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 space-y-5">
//       {Array(2).fill(0).map((_, index) => (
//         <div key={index} className="loop-container flex max-w-5xl overflow-hidden border border-fuchsia-500">
//           {items.map(item => (
//             <img key={item.id} src={item.imgSrc} alt={`Item ${item.id}`} className="element flex-none w-64 h-64" />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// function createHorizontalLoop(items, config) {
//   items = Array.from(items);
//   config = config || {};
  
//   const tl = gsap.timeline({
//     repeat: config.repeat,
//     paused: config.paused,
//     defaults: { ease: 'none' },
//     onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
//   });

//   let totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
//   items.forEach(item => {
//     tl.to(item, {
//       x: `-=${totalWidth}`,
//       duration: totalWidth / 100, // adjust speed for infinite loop
//     }, 0);
//   });

//   tl.progress(1).progress(0); // pre-render for better performance

//   if (config.reversed) {
//     tl.reverse();
//   }

//   return tl;
// }
