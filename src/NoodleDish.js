// import React, { useRef, useEffect } from 'react';

// export function NoodleDish() {
//     const canvasRef = useRef(null);
//     useEffect(() => {
//     const ctx = canvasRef.current.getContext('2d');
//     // Clear the canvas
//     ctx.clearRect(0, 0, width, width);
//     // Draw the dish
//     ctx.beginPath();
//     ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
//     ctx.stroke();
//     // Draw the noodles
//     for (let i = 0; i < noodleCount; i++) {
//       // Generate random noodle properties
//       const angle = Math.random() * 2 * Math.PI;
//       const length = Math.random() * (maxLength - minLength) + minLength;
//       const bendRadius = Math.random() * (radius - minBendRadius) + minBendRadius;

//       // Calculate the starting point of the noodle
//       const startX = width / 2 + Math.cos(angle) * (radius - bendRadius);
//       const startY = width / 2 + Math.sin(angle) * (radius - bendRadius);
//       // Draw the noodle
//       ctx.beginPath();
//       ctx.moveTo(startX, startY);
//       ctx.quadraticCurveTo(startX + Math.cos(angle) * bendRadius, startY + Math.sin(angle) * bendRadius, startX + Math.cos(angle) * (bendRadius + length), startY + Math.sin(angle) * (bendRadius + length));
//       ctx.stroke();
//     }
//   }, [width, radius, noodleCount, minLength, maxLength, minBendRadius]);

//   return (
//     <NoodleDish />
//   );
// };

// export default NoodleDish;


// import React, { useState } from 'react';
// import { Stage, Layer, Line, Circle } from 'react-konva';

// export function Noodles({ width = 300, minLength = 50, maxLength = 100, minBendRadius = 20, noodleWidth = 2 }) {
//   const [lines, setLines] = useState([]);

//   const generateNoodles = () => {
//     let newLines = [];
//     // generate lines with random length and bend radius
//     for (let i = 0; i < 10; i++) {
//       let length = Math.random() * (maxLength - minLength) + minLength;
//       let radius = Math.random() * (width/2 - minBendRadius) + minBendRadius;
//       let angle = Math.random() * (Math.PI - 2*Math.asin(minBendRadius/radius)) + Math.asin(minBendRadius/radius);
//       let x1 = width/2 + radius * Math.cos(angle);
//       let y1 = width/2 + radius * Math.sin(angle);
//       let x2 = x1 + length * Math.cos(angle);
//       let y2 = y1 + length * Math.sin(angle);
//       newLines.push(<Line key={i} x={x1} y={y1} points={[x1, y1, x2, y2]} stroke={'black'} strokeWidth={noodleWidth} />);
//     }
//     setLines(newLines);
//   }

//   return (
//     <div>
//       <button onClick={generateNoodles}>Generate Noodles</button>
//       <Stage width={width} height={width}>
//         <Layer>
//           <Circle
//             x={width/2}
//             y={width/2}
//             radius={width/2}
//             stroke={'black'}
//             strokeWidth={2}
//           />
//           {lines}
//         </Layer>
//       </Stage>
//     </div>
//   );
// }


// 3rd*
// import React, { useState } from 'react';
// import { Stage, Layer, Line } from 'react-konva';

// function NoodleDish({ width, minLength, maxLength, minBendRadius }) {
//   // state to store the noodles
//   const [noodles, setNoodles] = useState([]);

//   // function to generate the noodles
//   function generateNoodles() {
//     // calculate the radius of the dish
//     const radius = width / 2;

//     // generate the noodles
//     const newNoodles = [];
//     for (let i = 0; i < 8; i++) {
//       // generate a random length and bend radius
//       const length = Math.random() * (maxLength - minLength) + minLength;
//       const bendRadius = Math.random() * (radius - minBendRadius) + minBendRadius;

//       // calculate the x and y coordinates of the noodle
//       const x1 = radius + bendRadius * Math.cos((i * 45) * (Math.PI / 180));
//       const y1 = radius + bendRadius * Math.sin((i * 45) * (Math.PI / 180));
//       const x2 = radius + (bendRadius + length) * Math.cos((i * 45) * (Math.PI / 180));
//       const y2 = radius + (bendRadius + length) * Math.sin((i * 45) * (Math.PI / 180));

//       // add the noodle to the array
//       newNoodles.push({ x1, y1, x2, y2 });
//     }

//     // update the state with the new noodles
//     setNoodles(newNoodles);
//   }

//   return (
//     <>
//       <button onClick={generateNoodles}>Generate Noodles</button>
//       <Stage width={width} height={width}>
//         <Layer>
//           {noodles.map((noodle, index) => (
//             <Line
//               key={index}
//               points={[noodle.x1, noodle.y1, noodle.x2, noodle.y2]}
//               stroke="black"
//               strokeWidth={2}
//             />
//           ))}
//         </Layer>
//       </Stage>
//     </>
//   );
// }

// export default NoodleDish;



// 4* attempt which generates noodles but no dispatchEvent. the noodles are zigzag straight lines and not smooth
// import React from 'react';
// import { Stage, Layer, Circle, Line } from 'react-konva';


// //write code in react with an export default function named Noodles. The function should use react-kanva to draw a circular dish with noodles inside of the circular dish that touch at tangents. The noodles should have the properties of width, minimum length, maximum length and minimum bend radius .


// export function Noodles() {
//   const dishRadius = 100;
//   const noodleWidth = 10;
//   const minLength = 50;
//   const maxLength = 80;
//   const minBendRadius = 20;

//   const renderNoodles = () => {
//     // code to generate noodles
//     let noodles = [];
//     for (let i = 0; i < 5; i++) {
//       let startX = dishRadius + Math.random() * (dishRadius - minBendRadius);
//       let startY = dishRadius + Math.random() * (dishRadius - minBendRadius);
//       let endX = startX + (minLength + (maxLength - minLength) * Math.random()) * Math.cos(2 * Math.PI * i / 5);
//       let endY = startY + (minLength + (maxLength - minLength) * Math.random()) * Math.sin(2 * Math.PI * i / 5);
//       let controlX1 = startX + minBendRadius * Math.cos(2 * Math.PI * (i - 0.3) / 5);
//       let controlY1 = startY + minBendRadius * Math.sin(2 * Math.PI * (i - 0.3) / 5);
//       let controlX2 = endX - minBendRadius * Math.cos(2 * Math.PI * (i + 0.3) / 5);
//       let controlY2 = endY - minBendRadius * Math.sin(2 * Math.PI * (i + 0.3) / 5);
//       noodles.push(
//         <Line
//           key={i}
//           points={[startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY]}
//           stroke={'black'}
//           strokeWidth={noodleWidth}
//         />
//       );
//     }
//     return noodles;
//   }

//   return (
//     <Stage width={dishRadius * 2} height={dishRadius * 2}>
//       <Layer>
//         <Circle
//           x={dishRadius}
//           y={dishRadius}
//           radius={dishRadius}
//           fill={'white'}
//         />
//         {renderNoodles()}
//       </Layer>
//     </Stage>
//   );
// }









// 5* attempt where it generates smooth lines... or at least attempts to generate them
// import React from 'react';
// import { Stage, Layer, Circle, Path } from 'react-konva';

// const Noodles = () => {
//   const dishRadius = 100;
//   const noodleWidth = 10;
//   const minLength = 50;
//   const maxLength = 80;
//   const minBendRadius = 20;

//   const renderNoodles = () => {
//     let noodles = [];
//     for (let i = 0; i < 5; i++) {
//       let startAngle = 2 * Math.PI * i / 5;
//       let endAngle = startAngle + 2 * Math.PI / 5;
//       let startRadius = dishRadius + Math.random() * (dishRadius - minBendRadius);
//       let endRadius = startRadius + minLength + (maxLength - minLength) * Math.random();
//       let controlRadius1 = startRadius + minBendRadius;
//       let controlRadius2 = endRadius - minBendRadius;
//       let path = new Konva.Path({
//         data: `M ${dishRadius + startRadius * Math.cos(startAngle)} ${dishRadius + startRadius * Math.sin(startAngle)} Q ${dishRadius + controlRadius1 * Math.cos(startAngle + 0.3)} ${dishRadius + controlRadius1 * Math.sin(startAngle + 0.3)} ${dishRadius + endRadius * Math.cos(endAngle)} ${dishRadius + endRadius * Math.sin(endAngle)} Q ${dishRadius + controlRadius2 * Math.cos(endAngle - 0.3)} ${dishRadius + controlRadius2 * Math.sin(endAngle - 0.3)} ${dishRadius + startRadius * Math.cos(startAngle)} ${dishRadius + startRadius * Math.sin(startAngle)}`,
//         stroke: 'black',
//         strokeWidth: noodleWidth,
//         closed: true,
//       });
//       noodles.push(path);
//     }
//     return noodles;
//   }

//   return (
//     <div>
//       <Stage width={dishRadius * 2} height={dishRadius * 2}>
//         <Layer>
//           <Circle
//             x={dishRadius}
//             y={dishRadius}
//             radius={dishRadius}
//             fill={'white'}
//           />
//           {renderNoodles()}
//         </Layer>
//       </Stage>
//     </div>
//   );
// }
// export default Noodles
