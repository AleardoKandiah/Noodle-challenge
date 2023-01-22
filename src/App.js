import React, { useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Circle, Path } from 'react-konva';

export function Noodles() {
  const [noodles, setNoodles] = useState([
    {width: 2, minLength: 20, maxLength: 40, minBendRadius: 10},
    {width: 2, minLength: 20, maxLength: 40, minBendRadius: 10},
    {width: 2, minLength: 20, maxLength: 40, minBendRadius: 10},
    {width: 2, minLength: 20, maxLength: 40, minBendRadius: 10},
  ]);
  const dishRadius = 100;
  const dishX = window.innerWidth / 2;
  const dishY = window.innerHeight / 2;

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle
          x={dishX}
          y={dishY}
          radius={dishRadius}
          fill="white"
          stroke="black"
        />

        {/* //randomly map the noodles */}
        {noodles.map((noodle, i) => {
          const startAngle = Math.random() * 2 * Math.PI;
          let endAngle = startAngle + Math.random() * Math.PI - Math.PI / 2;
          const startRadius = dishRadius - noodle.minBendRadius;
          let endRadius = startRadius + noodle.minLength;
          if (endRadius > dishRadius) {
            endRadius = dishRadius;
            endAngle = startAngle + Math.asin((endRadius - startRadius) / dishRadius);
          }

          // set dish radius
          const startX = dishX + startRadius * Math.cos(startAngle);
          const startY = dishY + startRadius * Math.sin(startAngle);
          const endX = dishX + endRadius * Math.cos(endAngle);
          const endY = dishY + endRadius * Math.sin(endAngle);

          // Inside control point for tangents 
          const insideControlRadius = dishRadius / 2;
          const insideControlX = dishX + insideControlRadius * Math.cos(endAngle + Math.PI / 2);
          const insideControlY = dishY + insideControlRadius * Math.sin(endAngle + Math.PI / 2);
          return (
            <Path
              key={i}
              data={`M ${startX}, ${startY} Q ${insideControlX}, ${insideControlY} ${endX}, ${endY}`}
              stroke={'black'}
              strokeWidth={noodle.width}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}
