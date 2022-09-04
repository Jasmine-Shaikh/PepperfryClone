// import React from 'react'
// import { useState } from 'react';

// function Quantity(item) {
//   const [open, setopen] = useState(false);
//       const [quantity, setquantity] = useState(1);
//       const [checked, setchecked] = useState(1);
//       const setstate = (id, item) => {
//         setquantity(id);
//         setchecked(id);
//       };
//   return (
//     <div>
//       <div
//         className={` ${open == item.id ? 'select-items' : 'hidden '} `}
//         onClick={() => setopen(false)}
//       >
//         <div
//           onClick={() => setstate(1)}
//           className={` ${checked == 1 && open == item.id ? 'checked' : ''} `}
//         >
//           1
//         </div>
//         <div
//           onClick={() => setstate(2, item.id)}
//           className={` ${checked == 2 ? 'checked' : ''} `}
//         >
//           2
//         </div>
//         <div
//           onClick={() => setstate(3)}
//           className={` ${checked == 3 ? 'checked' : ''} `}
//         >
//           3
//         </div>
//         <div
//           onClick={() => setstate(4)}
//           className={` ${checked == 4 ? 'checked' : ''} `}
//         >
//           4
//         </div>
//         <div
//           onClick={() => setstate(5)}
//           className={` ${checked == 5 ? 'checked' : ''} `}
//         >
//           5
//         </div>
//         <div
//           onClick={() => setstate(6)}
//           className={` ${checked == 6 ? 'checked' : ''} `}
//         >
//           6
//         </div>
//         <div
//           onClick={() => setstate(7)}
//           className={` ${checked == 7 ? 'checked' : ''} `}
//         >
//           7
//         </div>
//         <div
//           onClick={() => setstate(8)}
//           className={` ${checked == 8 ? 'checked' : ''} `}
//         >
//           8
//         </div>
//         <div
//           onClick={() => setstate(9)}
//           className={` ${checked == 9 ? 'checked' : ''} `}
//         >
//           9
//         </div>
//         <div
//           onClick={() => setstate(10)}
//           className={` ${checked == 10 ? 'checked' : ''} `}
//         >
//           10
//         </div>
//         <div
//           onClick={() => setstate(11)}
//           className={` ${checked == 11 ? 'checked' : ''} `}
//         >
//           11
//         </div>
//         <div
//           onClick={() => setstate(12)}
//           className={` ${checked == 12 ? 'checked' : ''} `}
//         >
//           12
//         </div>
//         <div
//           onClick={() => setstate(13)}
//           className={` ${checked == 13 ? 'checked' : ''} `}
//         >
//           13
//         </div>
//         <div
//           onClick={() => setstate(14)}
//           className={` ${checked == 14 ? 'checked' : ''} `}
//         >
//           14
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Quantity