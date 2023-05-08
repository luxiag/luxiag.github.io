import{LineSegmentsGeometry}from"../lines/LineSegmentsGeometry.js";class LineGeometry extends LineSegmentsGeometry{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,s=new Float32Array(2*t);for(let r=0;r<t;r+=3)s[2*r]=e[r],s[2*r+1]=e[r+1],s[2*r+2]=e[r+2],s[2*r+3]=e[r+3],s[2*r+4]=e[r+4],s[2*r+5]=e[r+5];return super.setPositions(s),this}setColors(e){const t=e.length-3,s=new Float32Array(2*t);for(let r=0;r<t;r+=3)s[2*r]=e[r],s[2*r+1]=e[r+1],s[2*r+2]=e[r+2],s[2*r+3]=e[r+3],s[2*r+4]=e[r+4],s[2*r+5]=e[r+5];return super.setColors(s),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}export{LineGeometry};