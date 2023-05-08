class VRButton{static createButton(t){const e=document.createElement("button");function n(){e.style.display="",e.style.cursor="auto",e.style.left="calc(50% - 75px)",e.style.width="150px",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null}function o(t){t.style.position="absolute",t.style.bottom="20px",t.style.padding="12px 6px",t.style.border="1px solid #fff",t.style.borderRadius="4px",t.style.background="rgba(0,0,0,0.1)",t.style.color="#fff",t.style.font="normal 13px sans-serif",t.style.textAlign="center",t.style.opacity="0.5",t.style.outline="none",t.style.zIndex="999"}if("xr"in navigator)return e.id="VRButton",e.style.display="none",o(e),navigator.xr.isSessionSupported("immersive-vr").then((function(o){o?function(){let n=null;async function o(o){o.addEventListener("end",s),await t.xr.setSession(o),e.textContent="EXIT VR",n=o}function s(){n.removeEventListener("end",s),e.textContent="ENTER VR",n=null}e.style.display="",e.style.cursor="pointer",e.style.left="calc(50% - 50px)",e.style.width="100px",e.textContent="ENTER VR",e.onmouseenter=function(){e.style.opacity="1.0"},e.onmouseleave=function(){e.style.opacity="0.5"},e.onclick=function(){if(null===n){const t={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",t).then(o)}else n.end()}}():(n(),e.textContent="VR NOT SUPPORTED"),o&&VRButton.xrSessionIsGranted&&e.click()})).catch((function(t){n(),console.warn("Exception when trying to call xr.isSessionSupported",t),e.textContent="VR NOT ALLOWED"})),e;{const t=document.createElement("a");return!1===window.isSecureContext?(t.href=document.location.href.replace(/^http:/,"https:"),t.innerHTML="WEBXR NEEDS HTTPS"):(t.href="https://immersiveweb.dev/",t.innerHTML="WEBXR NOT AVAILABLE"),t.style.left="calc(50% - 90px)",t.style.width="180px",t.style.textDecoration="none",o(t),t}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",(()=>{VRButton.xrSessionIsGranted=!0}))}}}VRButton.xrSessionIsGranted=!1,VRButton.registerSessionGrantedListener();export{VRButton};