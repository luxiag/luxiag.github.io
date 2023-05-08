import{BufferAttribute,BufferGeometry,Color,DynamicDrawUsage,Mesh}from"three";class MarchingCubes extends Mesh{constructor(t,e,i=!1,r=!1,s=1e4){const a=new BufferGeometry;super(a,e),this.isMarchingCubes=!0;const o=this,n=new Float32Array(36),l=new Float32Array(36),h=new Float32Array(36);function c(t,e,i){return t+(e-t)*i}function f(t,e,i,r,s,a,f,y,A,d){const u=(i-f)/(y-f),z=o.normal_cache;n[e+0]=r+u*o.delta,n[e+1]=s,n[e+2]=a,l[e+0]=c(z[t+0],z[t+3],u),l[e+1]=c(z[t+1],z[t+4],u),l[e+2]=c(z[t+2],z[t+5],u),h[e+0]=c(o.palette[3*A+0],o.palette[3*d+0],u),h[e+1]=c(o.palette[3*A+1],o.palette[3*d+1],u),h[e+2]=c(o.palette[3*A+2],o.palette[3*d+2],u)}function y(t,e,i,r,s,a,f,y,A,d){const u=(i-f)/(y-f),z=o.normal_cache;n[e+0]=r,n[e+1]=s+u*o.delta,n[e+2]=a;const m=t+3*o.yd;l[e+0]=c(z[t+0],z[m+0],u),l[e+1]=c(z[t+1],z[m+1],u),l[e+2]=c(z[t+2],z[m+2],u),h[e+0]=c(o.palette[3*A+0],o.palette[3*d+0],u),h[e+1]=c(o.palette[3*A+1],o.palette[3*d+1],u),h[e+2]=c(o.palette[3*A+2],o.palette[3*d+2],u)}function A(t,e,i,r,s,a,f,y,A,d){const u=(i-f)/(y-f),z=o.normal_cache;n[e+0]=r,n[e+1]=s,n[e+2]=a+u*o.delta;const m=t+3*o.zd;l[e+0]=c(z[t+0],z[m+0],u),l[e+1]=c(z[t+1],z[m+1],u),l[e+2]=c(z[t+2],z[m+2],u),h[e+0]=c(o.palette[3*A+0],o.palette[3*d+0],u),h[e+1]=c(o.palette[3*A+1],o.palette[3*d+1],u),h[e+2]=c(o.palette[3*A+2],o.palette[3*d+2],u)}function d(t){const e=3*t;0===o.normal_cache[e]&&(o.normal_cache[e+0]=o.field[t-1]-o.field[t+1],o.normal_cache[e+1]=o.field[t-o.yd]-o.field[t+o.yd],o.normal_cache[e+2]=o.field[t-o.zd]-o.field[t+o.zd])}function u(t,e,i,r,s){const a=r+1,c=r+o.yd,u=r+o.zd,m=a+o.yd,p=a+o.zd,b=r+o.yd+o.zd,w=a+o.yd+o.zd;let g=0;const M=o.field[r],U=o.field[a],C=o.field[c],v=o.field[m],D=o.field[u],F=o.field[p],T=o.field[b],_=o.field[w];M<s&&(g|=1),U<s&&(g|=2),C<s&&(g|=8),v<s&&(g|=4),D<s&&(g|=16),F<s&&(g|=32),T<s&&(g|=128),_<s&&(g|=64);const B=edgeTable[g];if(0===B)return 0;const q=o.delta,P=t+q,G=e+q,x=i+q;1&B&&(d(r),d(a),f(3*r,0,s,t,e,i,M,U,r,a)),2&B&&(d(a),d(m),y(3*a,3,s,P,e,i,U,v,a,m)),4&B&&(d(c),d(m),f(3*c,6,s,t,G,i,C,v,c,m)),8&B&&(d(r),d(c),y(3*r,9,s,t,e,i,M,C,r,c)),16&B&&(d(u),d(p),f(3*u,12,s,t,e,x,D,F,u,p)),32&B&&(d(p),d(w),y(3*p,15,s,P,e,x,F,_,p,w)),64&B&&(d(b),d(w),f(3*b,18,s,t,G,x,T,_,b,w)),128&B&&(d(u),d(b),y(3*u,21,s,t,e,x,D,T,u,b)),256&B&&(d(r),d(u),A(3*r,24,s,t,e,i,M,D,r,u)),512&B&&(d(a),d(p),A(3*a,27,s,P,e,i,U,F,a,p)),1024&B&&(d(m),d(w),A(3*m,30,s,P,G,i,v,_,m,w)),2048&B&&(d(c),d(b),A(3*c,33,s,t,G,i,C,T,c,b)),g<<=4;let E,I,R,H=0,S=0;for(;-1!=triTable[g+S];)E=g+S,I=E+1,R=E+2,z(n,l,h,3*triTable[E],3*triTable[I],3*triTable[R]),S+=3,H++;return H}function z(t,e,i,r,s,a){const n=3*o.count;if(o.positionArray[n+0]=t[r],o.positionArray[n+1]=t[r+1],o.positionArray[n+2]=t[r+2],o.positionArray[n+3]=t[s],o.positionArray[n+4]=t[s+1],o.positionArray[n+5]=t[s+2],o.positionArray[n+6]=t[a],o.positionArray[n+7]=t[a+1],o.positionArray[n+8]=t[a+2],!0===o.material.flatShading){const t=(e[r+0]+e[s+0]+e[a+0])/3,i=(e[r+1]+e[s+1]+e[a+1])/3,l=(e[r+2]+e[s+2]+e[a+2])/3;o.normalArray[n+0]=t,o.normalArray[n+1]=i,o.normalArray[n+2]=l,o.normalArray[n+3]=t,o.normalArray[n+4]=i,o.normalArray[n+5]=l,o.normalArray[n+6]=t,o.normalArray[n+7]=i,o.normalArray[n+8]=l}else o.normalArray[n+0]=e[r+0],o.normalArray[n+1]=e[r+1],o.normalArray[n+2]=e[r+2],o.normalArray[n+3]=e[s+0],o.normalArray[n+4]=e[s+1],o.normalArray[n+5]=e[s+2],o.normalArray[n+6]=e[a+0],o.normalArray[n+7]=e[a+1],o.normalArray[n+8]=e[a+2];if(o.enableUvs){const e=2*o.count;o.uvArray[e+0]=t[r+0],o.uvArray[e+1]=t[r+2],o.uvArray[e+2]=t[s+0],o.uvArray[e+3]=t[s+2],o.uvArray[e+4]=t[a+0],o.uvArray[e+5]=t[a+2]}o.enableColors&&(o.colorArray[n+0]=i[r+0],o.colorArray[n+1]=i[r+1],o.colorArray[n+2]=i[r+2],o.colorArray[n+3]=i[s+0],o.colorArray[n+4]=i[s+1],o.colorArray[n+5]=i[s+2],o.colorArray[n+6]=i[a+0],o.colorArray[n+7]=i[a+1],o.colorArray[n+8]=i[a+2]),o.count+=3}this.enableUvs=i,this.enableColors=r,this.init=function(t){this.resolution=t,this.isolation=80,this.size=t,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(3*this.size3),this.palette=new Float32Array(3*this.size3),this.count=0;const e=3*s;this.positionArray=new Float32Array(3*e);const i=new BufferAttribute(this.positionArray,3);i.setUsage(DynamicDrawUsage),a.setAttribute("position",i),this.normalArray=new Float32Array(3*e);const r=new BufferAttribute(this.normalArray,3);if(r.setUsage(DynamicDrawUsage),a.setAttribute("normal",r),this.enableUvs){this.uvArray=new Float32Array(2*e);const t=new BufferAttribute(this.uvArray,2);t.setUsage(DynamicDrawUsage),a.setAttribute("uv",t)}if(this.enableColors){this.colorArray=new Float32Array(3*e);const t=new BufferAttribute(this.colorArray,3);t.setUsage(DynamicDrawUsage),a.setAttribute("color",t)}},this.addBall=function(t,e,i,r,s,a){const o=Math.sign(r);r=Math.abs(r);const n=!(null==a);let l=new Color(t,e,i);if(n)try{l=a instanceof Color?a:Array.isArray(a)?new Color(Math.min(Math.abs(a[0]),1),Math.min(Math.abs(a[1]),1),Math.min(Math.abs(a[2]),1)):new Color(a)}catch(r){l=new Color(t,e,i)}const h=this.size*Math.sqrt(r/s),c=i*this.size,f=e*this.size,y=t*this.size;let A=Math.floor(c-h);A<1&&(A=1);let d=Math.floor(c+h);d>this.size-1&&(d=this.size-1);let u=Math.floor(f-h);u<1&&(u=1);let z=Math.floor(f+h);z>this.size-1&&(z=this.size-1);let m=Math.floor(y-h);m<1&&(m=1);let p,b,w,g,M,U,C,v,D,F,T,_=Math.floor(y+h);for(_>this.size-1&&(_=this.size-1),w=A;w<d;w++)for(M=this.size2*w,v=w/this.size-i,D=v*v,b=u;b<z;b++)for(g=M+this.size*b,C=b/this.size-e,F=C*C,p=m;p<_;p++)if(U=p/this.size-t,T=r/(1e-6+U*U+F+D)-s,T>0){this.field[g+p]+=T*o;const t=Math.sqrt((p-y)*(p-y)+(b-f)*(b-f)+(w-c)*(w-c))/h,e=1-t*t*t*(t*(6*t-15)+10);this.palette[3*(g+p)+0]+=l.r*e,this.palette[3*(g+p)+1]+=l.g*e,this.palette[3*(g+p)+2]+=l.b*e}},this.addPlaneX=function(t,e){const i=this.size,r=this.yd,s=this.zd,a=this.field;let o,n,l,h,c,f,y,A=i*Math.sqrt(t/e);for(A>i&&(A=i),o=0;o<A;o++)if(f=o/i,h=f*f,c=t/(1e-4+h)-e,c>0)for(n=0;n<i;n++)for(y=o+n*r,l=0;l<i;l++)a[s*l+y]+=c},this.addPlaneY=function(t,e){const i=this.size,r=this.yd,s=this.zd,a=this.field;let o,n,l,h,c,f,y,A,d=i*Math.sqrt(t/e);for(d>i&&(d=i),n=0;n<d;n++)if(f=n/i,h=f*f,c=t/(1e-4+h)-e,c>0)for(y=n*r,o=0;o<i;o++)for(A=y+o,l=0;l<i;l++)a[s*l+A]+=c},this.addPlaneZ=function(t,e){const i=this.size,r=this.yd,s=this.zd,a=this.field;let o,n,l,h,c,f,y,A,d=i*Math.sqrt(t/e);for(d>i&&(d=i),l=0;l<d;l++)if(f=l/i,h=f*f,c=t/(1e-4+h)-e,c>0)for(y=s*l,n=0;n<i;n++)for(A=y+n*r,o=0;o<i;o++)a[A+o]+=c},this.setCell=function(t,e,i,r){const s=this.size2*i+this.size*e+t;this.field[s]=r},this.getCell=function(t,e,i){const r=this.size2*i+this.size*e+t;return this.field[r]},this.blur=function(t=1){const e=this.field,i=e.slice(),r=this.size,s=this.size2;for(let a=0;a<r;a++)for(let o=0;o<r;o++)for(let n=0;n<r;n++){const l=s*n+r*o+a;let h=i[l],c=1;for(let e=-1;e<=1;e+=2){const l=e+a;if(!(l<0||l>=r))for(let e=-1;e<=1;e+=2){const a=e+o;if(!(a<0||a>=r))for(let e=-1;e<=1;e+=2){const o=e+n;if(o<0||o>=r)continue;const f=i[s*o+r*a+l];c++,h+=t*(f-h)/c}}}e[l]=h}},this.reset=function(){for(let t=0;t<this.size3;t++)this.normal_cache[3*t]=0,this.field[t]=0,this.palette[3*t]=this.palette[3*t+1]=this.palette[3*t+2]=0},this.update=function(){this.count=0;const t=this.size-2;for(let e=1;e<t;e++){const i=this.size2*e,r=(e-this.halfsize)/this.halfsize;for(let e=1;e<t;e++){const s=i+this.size*e,a=(e-this.halfsize)/this.halfsize;for(let e=1;e<t;e++)u((e-this.halfsize)/this.halfsize,a,r,s+e,this.isolation)}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}}const edgeTable=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),triTable=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);export{MarchingCubes,edgeTable,triTable};