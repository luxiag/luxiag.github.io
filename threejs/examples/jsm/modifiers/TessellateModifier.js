import{BufferGeometry,Color,Float32BufferAttribute,Vector2,Vector3}from"three";class TessellateModifier{constructor(r=.1,e=6){this.maxEdgeLength=r,this.maxIterations=e}modify(r){null!==r.index&&(r=r.toNonIndexed());const e=this.maxIterations,t=this.maxEdgeLength*this.maxEdgeLength,o=new Vector3,s=new Vector3,n=new Vector3,l=new Vector3,u=[o,s,n,l],a=new Vector3,c=new Vector3,f=new Vector3,i=new Vector3,y=[a,c,f,i],p=new Color,V=new Color,m=new Color,w=new Color,A=[p,V,m,w],h=new Vector2,x=new Vector2,d=new Vector2,b=new Vector2,v=[h,x,d,b],z=new Vector2,B=new Vector2,C=new Vector2,g=new Vector2,F=[z,B,C,g],T=r.attributes,q=void 0!==T.normal,E=void 0!==T.color,I=void 0!==T.uv,L=void 0!==T.uv2;let S=T.position.array,G=q?T.normal.array:null,M=E?T.color.array:null,N=I?T.uv.array:null,j=L?T.uv2.array:null,k=S,D=G,H=M,J=N,K=j,O=0,P=!0;function Q(r,e,t){const o=u[r],s=u[e],n=u[t];if(k.push(o.x,o.y,o.z),k.push(s.x,s.y,s.z),k.push(n.x,n.y,n.z),q){const o=y[r],s=y[e],n=y[t];D.push(o.x,o.y,o.z),D.push(s.x,s.y,s.z),D.push(n.x,n.y,n.z)}if(E){const o=A[r],s=A[e],n=A[t];H.push(o.x,o.y,o.z),H.push(s.x,s.y,s.z),H.push(n.x,n.y,n.z)}if(I){const o=v[r],s=v[e],n=v[t];J.push(o.x,o.y),J.push(s.x,s.y),J.push(n.x,n.y)}if(L){const o=F[r],s=F[e],n=F[t];K.push(o.x,o.y),K.push(s.x,s.y),K.push(n.x,n.y)}}for(;P&&O<e;){O++,P=!1,S=k,k=[],q&&(G=D,D=[]),E&&(M=H,H=[]),I&&(N=J,J=[]),L&&(j=K,K=[]);for(let r=0,e=0,u=S.length;r<u;r+=9,e+=6){o.fromArray(S,r+0),s.fromArray(S,r+3),n.fromArray(S,r+6),q&&(a.fromArray(G,r+0),c.fromArray(G,r+3),f.fromArray(G,r+6)),E&&(p.fromArray(M,r+0),V.fromArray(M,r+3),m.fromArray(M,r+6)),I&&(h.fromArray(N,e+0),x.fromArray(N,e+2),d.fromArray(N,e+4)),L&&(z.fromArray(j,e+0),B.fromArray(j,e+2),C.fromArray(j,e+4));const u=o.distanceToSquared(s),y=s.distanceToSquared(n),A=o.distanceToSquared(n);u>t||y>t||A>t?(P=!0,u>=y&&u>=A?(l.lerpVectors(o,s,.5),q&&i.lerpVectors(a,c,.5),E&&w.lerpColors(p,V,.5),I&&b.lerpVectors(h,x,.5),L&&g.lerpVectors(z,B,.5),Q(0,3,2),Q(3,1,2)):y>=u&&y>=A?(l.lerpVectors(s,n,.5),q&&i.lerpVectors(c,f,.5),E&&w.lerpColors(V,m,.5),I&&b.lerpVectors(x,d,.5),L&&g.lerpVectors(B,C,.5),Q(0,1,3),Q(3,2,0)):(l.lerpVectors(o,n,.5),q&&i.lerpVectors(a,f,.5),E&&w.lerpColors(p,m,.5),I&&b.lerpVectors(h,d,.5),L&&g.lerpVectors(z,C,.5),Q(0,1,3),Q(3,1,2))):Q(0,1,2)}}const R=new BufferGeometry;return R.setAttribute("position",new Float32BufferAttribute(k,3)),q&&R.setAttribute("normal",new Float32BufferAttribute(D,3)),E&&R.setAttribute("color",new Float32BufferAttribute(H,3)),I&&R.setAttribute("uv",new Float32BufferAttribute(J,2)),L&&R.setAttribute("uv2",new Float32BufferAttribute(K,2)),R}}export{TessellateModifier};