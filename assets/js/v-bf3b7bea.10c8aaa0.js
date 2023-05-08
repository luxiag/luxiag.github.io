"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7478],{37068:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var n=o(71534),i=o(32049),r=o(86171),s=o(80984),a=o(97630),l=o(7132),d=o(33344),h=o(82783);const m={href:"https://threejs.org/",target:"_blank",rel:"noopener noreferrer"},u={__name:"threejs-firework.html",setup(e){const t=(0,i.iH)();class o{constructor(e,t,o={x:0,y:0,z:0}){this.color=new r.Ilk(e),this.startGeometry=new r.u9r;const n=new Float32Array(3);n[0]=o.x,n[1]=o.y,n[2]=o.z,this.startGeometry.setAttribute("position",new r.TlE(n,3));const i=new Float32Array(3);i[0]=t.x-o.x,i[1]=t.y-o.y,i[2]=t.z-o.x,this.startGeometry.setAttribute("aStep",new r.TlE(i,3)),this.startMaterial=new r.jyz({vertexShader:"\nattribute vec3 aStep;\n\nuniform float uTime;\nuniform float uSize;\nvoid main(){\n    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );\n    modelPosition.xyz += (aStep*uTime);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    gl_Position =  projectionMatrix * viewPosition;\n    // 设置顶点大小\n    gl_PointSize =uSize;   \n}\n",fragmentShader:"\nuniform vec3 uColor;\nvoid main(){\n    float distanceToCenter = distance(gl_PointCoord,vec2(0.5));\n    float strength = distanceToCenter*2.0;\n    strength = 1.0-strength;\n    strength = pow(strength,1.5);\n    gl_FragColor = vec4(uColor,strength);\n}\n\n",transparent:!0,blending:r.WMw,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:20},uColor:{value:this.color}}}),this.startPoint=new r.woe(this.startGeometry,this.startMaterial),this.clock=new r.SUY,this.fireworkGeometry=new r.u9r,this.FireworksCount=180+Math.floor(180*Math.random());const s=new Float32Array(3*this.FireworksCount),a=new Float32Array(this.FireworksCount),l=new Float32Array(3*this.FireworksCount);for(let e=0;e<this.FireworksCount;e++){s[3*e+0]=t.x,s[3*e+1]=t.y,s[3*e+2]=t.z,a[e]=Math.random();let o=2*Math.random()*Math.PI,n=2*Math.random()*Math.PI,i=Math.random();l[3*e+0]=i*Math.sin(o)+i*Math.sin(n),l[3*e+1]=i*Math.cos(o)+i*Math.cos(n),l[3*e+2]=i*Math.sin(o)+i*Math.cos(n)}this.fireworkGeometry.setAttribute("position",new r.TlE(s,3)),this.fireworkGeometry.setAttribute("aScale",new r.TlE(a,1)),this.fireworkGeometry.setAttribute("aRandom",new r.TlE(l,3)),this.fireworksMaterial=new r.jyz({uniforms:{uTime:{value:0},uSize:{value:0},uColor:{value:this.color}},transparent:!0,blending:r.WMw,depthWrite:!1,vertexShader:"\n\nattribute float aScale;\nattribute vec3 aRandom;\nuniform float uTime;\nuniform float uSize;\nvoid main(){\n    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );\n    modelPosition.xyz+=aRandom*uTime*10.0;\n    vec4 viewPosition = viewMatrix * modelPosition;\n    gl_Position =  projectionMatrix * viewPosition;\n\n    // 设置顶点大小\n    gl_PointSize =uSize*aScale-(uTime*20.0);\n    \n}\n",fragmentShader:"\n\nuniform vec3 uColor;\nvoid main(){\n    float distanceToCenter = distance(gl_PointCoord,vec2(0.5));\n    float strength = distanceToCenter*2.0;\n    strength = 1.0-strength;\n    strength = pow(strength,1.5);\n    gl_FragColor = vec4(uColor,strength);\n}\n\n"}),this.fireworks=new r.woe(this.fireworkGeometry,this.fireworksMaterial),this.linstener=new r.SJI,this.linstener1=new r.SJI,this.sound=new r.BbS(this.linstener),this.sendSound=new r.BbS(this.linstener1);const d=new r.mTL;d.load(`/assets/audio/pow${Math.floor(4*Math.random())+1}.ogg`,(e=>{this.sound.setBuffer(e),this.sound.setLoop(!1),this.sound.setVolume(1)})),d.load("/assets/audio/send.mp3",(e=>{this.sendSound.setBuffer(e),this.sendSound.setLoop(!1),this.sendSound.setVolume(1)}))}addScene(e,t){e.add(this.startPoint),e.add(this.fireworks),this.scene=e}update(){const e=this.clock.getElapsedTime();if(e>.2&&e<1)this.sendSound.isPlaying||this.sendSoundplay||(this.sendSound.play(),this.sendSoundplay=!0),this.startMaterial.uniforms.uTime.value=e,this.startMaterial.uniforms.uSize.value=20;else if(e>.2){const t=e-1;if(this.startMaterial.uniforms.uSize.value=0,this.startPoint.clear(),this.startGeometry.dispose(),this.startMaterial.dispose(),this.sound.isPlaying||this.play||(this.sound.play(),this.play=!0),this.fireworksMaterial.uniforms.uSize.value=20,this.fireworksMaterial.uniforms.uTime.value=t,t>5)return this.fireworksMaterial.uniforms.uSize.value=0,this.fireworks.clear(),this.fireworkGeometry.dispose(),this.fireworksMaterial.dispose(),this.scene.remove(this.fireworks),this.scene.remove(this.startPoint),"remove"}}}return(0,n.bv)((()=>{(()=>{const e=new r.xsS,n=new r.cPb(90,2,.1,1e3);e.add(n),(new l.x).loadAsync("/assets/textures/hdr/2k.hdr").then((t=>{t.mapping=r.dSO,e.background=t,e.environment=t}));const i=new r.jyz({vertexShader:"\n  \nprecision lowp float;\nvarying vec4 vPosition;\nvarying vec4 gPosition;\nvoid main(){\n    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );\n\n    vPosition = modelPosition;\n    gPosition = vec4( position, 1.0 );\n    gl_Position =  projectionMatrix * viewMatrix * modelPosition;\n    \n\n}\n\n  ",fragmentShader:"\nprecision lowp float;\nvarying vec4 vPosition;\nvarying vec4 gPosition;\n\nvoid main(){\n    vec4 redColor = vec4(1,0,0,1);\n    vec4 yellowColor = vec4(1,1,0.5,1);\n    vec4 mixColor = mix(yellowColor,redColor,gPosition.y/3.0);\n    if(gl_FrontFacing){\n        gl_FragColor = vec4(mixColor.xyz-(vPosition.y-20.0)/80.0-0.1,1);\n        // gl_FragColor = vec4(1,1,1,1);\n    }else{\n        gl_FragColor = vec4(mixColor.xyz,1);\n    }\n}\n  ",uniforms:{},side:r.ehD}),m=new r.CP7;m.outputEncoding=r.knz,m.toneMapping=r.LY2,m.toneMappingExposure=.1;const u=new d.E;let c=null;u.load("/assets/model/newyears_min.glb",(t=>{console.log(t),e.add(t.scene);const o=new r.BKK(100,100);let n=new h.B(o,{scale:4,textureHeight:1024,textureWidth:1024});n.position.y=1,n.rotation.x=-Math.PI/2,e.add(n)})),u.load("/assets/model/flyLight.glb",(t=>{console.log(t),c=t.scene.children[0],c.material=i;for(let o=0;o<150;o++){let o=t.scene.clone(!0),n=300*(Math.random()-.5),i=300*(Math.random()-.5),r=60*Math.random()+5;o.position.set(n,r,i),s.ZP.to(o.rotation,{y:2*Math.PI,duration:10+30*Math.random(),repeat:-1}),s.ZP.to(o.position,{x:"+="+5*Math.random(),y:"+="+20*Math.random(),yoyo:!0,duration:5+10*Math.random(),repeat:-1}),e.add(o)}})),m.setSize(t.value.offsetWidth,t.value.offsetWidth/2),t.value.appendChild(m.domElement);let p=()=>{let t=`hsl(${Math.floor(360*Math.random())},100%,80%)`,i={x:40*(Math.random()-.5),z:40*-(Math.random()-.5),y:3+15*Math.random()},r=new o(t,i);r.addScene(e,n),v.push(r)};window.addEventListener("resize",(()=>{m.setSize(t.value.offsetWidth,t.value.offsetWidth/2),m.setPixelRatio(window.devicePixelRatio),window.addEventListener("click",p)}));const f=new a.z(n,m.domElement);f.enableDamping=!0,f.autoRotate=!0,f.autoRotateSpeed=.1;const w=new r.SUY;let v=[];!function t(o){f.update(),w.getElapsedTime(),v.forEach(((e,t)=>{"remove"==e.update()&&v.splice(t,1)})),requestAnimationFrame(t),m.render(e,n)}()})()})),(e,o)=>{const i=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("p",null,[(0,n.Uk)("参考："),(0,n._)("a",m,[(0,n.Uk)("https://threejs.org/"),(0,n.Wm)(i)])]),(0,n._)("div",{ref_key:"fireworkRef",ref:t},null,512)])}}}},41294:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-bf3b7bea","path":"/threejs/threejs-firework.html","title":"ThreeJS烟火","lang":"zh-CN","frontmatter":{"title":"ThreeJS烟火","category":["ThreeJS"],"date":"2022-03-13T00:00:00.000Z","summary":"参考：https://threejs.org/ import {ref,onMounted} from \'vue\' import * as THREE from \\"three\\"; import gsap from \\"gsap\\"; import { OrbitControls } from \\"three/examples/jsm/controls/OrbitC","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/threejs/threejs-firework.html"}],["meta",{"property":"og:title","content":"ThreeJS烟火"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-27T03:25:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-27T03:25:07.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1682066702000,"updatedTime":1682565907000,"contributors":[{"name":"卢祥","email":"example@qq.com","commits":2}]},"readingTime":{"minutes":3.87,"words":1162},"filePathRelative":"threejs/threejs-firework.md","localizedDate":"2022年3月13日"}')}}]);