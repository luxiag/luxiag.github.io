function queryKey(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];if(!componentRegistered(o))throw new Error("Tried to create a query with an unregistered component");if("object"==typeof o){var s="not"===o.operator?"!":o.operator;t.push(s+o.Component._typeId)}else t.push(o._typeId)}return t.sort().join("-")}const hasWindow="undefined"!=typeof window,now=hasWindow&&void 0!==window.performance?performance.now.bind(performance):Date.now.bind(Date);function componentRegistered(e){return"object"==typeof e&&void 0!==e.Component._typeId||e.isComponent&&void 0!==e._typeId}class SystemManager{constructor(e){this._systems=[],this._executeSystems=[],this.world=e,this.lastExecutedSystem=null}registerSystem(e,t){if(!e.isSystem)throw new Error(`System '${e.name}' does not extend 'System' class`);if(void 0!==this.getSystem(e))return console.warn(`System '${e.getName()}' already registered.`),this;var n=new e(this.world,t);return n.init&&n.init(t),n.order=this._systems.length,this._systems.push(n),n.execute&&(this._executeSystems.push(n),this.sortSystems()),this}unregisterSystem(e){let t=this.getSystem(e);return void 0===t?(console.warn(`Can unregister system '${e.getName()}'. It doesn't exist.`),this):(this._systems.splice(this._systems.indexOf(t),1),t.execute&&this._executeSystems.splice(this._executeSystems.indexOf(t),1),this)}sortSystems(){this._executeSystems.sort(((e,t)=>e.priority-t.priority||e.order-t.order))}getSystem(e){return this._systems.find((t=>t instanceof e))}getSystems(){return this._systems}removeSystem(e){var t=this._systems.indexOf(e);~t&&this._systems.splice(t,1)}executeSystem(e,t,n){if(e.initialized&&e.canExecute()){let o=now();e.execute(t,n),e.executeTime=now()-o,this.lastExecutedSystem=e,e.clearEvents()}}stop(){this._executeSystems.forEach((e=>e.stop()))}execute(e,t,n){this._executeSystems.forEach((o=>(n||o.enabled)&&this.executeSystem(o,e,t)))}stats(){for(var e={numSystems:this._systems.length,systems:{}},t=0;t<this._systems.length;t++){var n=this._systems[t],o=e.systems[n.getName()]={queries:{},executeTime:n.executeTime};for(var s in n.ctx)o.queries[s]=n.ctx[s].stats()}return e}}class ObjectPool{constructor(e,t){this.freeList=[],this.count=0,this.T=e,this.isObjectPool=!0,void 0!==t&&this.expand(t)}acquire(){return this.freeList.length<=0&&this.expand(Math.round(.2*this.count)+1),this.freeList.pop()}release(e){e.reset(),this.freeList.push(e)}expand(e){for(var t=0;t<e;t++){var n=new this.T;n._pool=this,this.freeList.push(n)}this.count+=e}totalSize(){return this.count}totalFree(){return this.freeList.length}totalUsed(){return this.count-this.freeList.length}}class EventDispatcher{constructor(){this._listeners={},this.stats={fired:0,handled:0}}addEventListener(e,t){let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){return void 0!==this._listeners[e]&&-1!==this._listeners[e].indexOf(t)}removeEventListener(e,t){var n=this._listeners[e];if(void 0!==n){var o=n.indexOf(t);-1!==o&&n.splice(o,1)}}dispatchEvent(e,t,n){this.stats.fired++;var o=this._listeners[e];if(void 0!==o)for(var s=o.slice(0),i=0;i<s.length;i++)s[i].call(this,t,n)}resetCounters(){this.stats.fired=this.stats.handled=0}}class Query{constructor(e,t){if(this.Components=[],this.NotComponents=[],e.forEach((e=>{"object"==typeof e?this.NotComponents.push(e.Component):this.Components.push(e)})),0===this.Components.length)throw new Error("Can't create a query without components");this.entities=[],this.eventDispatcher=new EventDispatcher,this.reactive=!1,this.key=queryKey(e);for(var n=0;n<t._entities.length;n++){var o=t._entities[n];this.match(o)&&(o.queries.push(this),this.entities.push(o))}}addEntity(e){e.queries.push(this),this.entities.push(e),this.eventDispatcher.dispatchEvent(Query.prototype.ENTITY_ADDED,e)}removeEntity(e){let t=this.entities.indexOf(e);~t&&(this.entities.splice(t,1),t=e.queries.indexOf(this),e.queries.splice(t,1),this.eventDispatcher.dispatchEvent(Query.prototype.ENTITY_REMOVED,e))}match(e){return e.hasAllComponents(this.Components)&&!e.hasAnyComponents(this.NotComponents)}toJSON(){return{key:this.key,reactive:this.reactive,components:{included:this.Components.map((e=>e.name)),not:this.NotComponents.map((e=>e.name))},numEntities:this.entities.length}}stats(){return{numComponents:this.Components.length,numEntities:this.entities.length}}}Query.prototype.ENTITY_ADDED="Query#ENTITY_ADDED",Query.prototype.ENTITY_REMOVED="Query#ENTITY_REMOVED",Query.prototype.COMPONENT_CHANGED="Query#COMPONENT_CHANGED";class QueryManager{constructor(e){this._world=e,this._queries={}}onEntityRemoved(e){for(var t in this._queries){var n=this._queries[t];-1!==e.queries.indexOf(n)&&n.removeEntity(e)}}onEntityComponentAdded(e,t){for(var n in this._queries){var o=this._queries[n];~o.NotComponents.indexOf(t)&&~o.entities.indexOf(e)?o.removeEntity(e):~o.Components.indexOf(t)&&o.match(e)&&!~o.entities.indexOf(e)&&o.addEntity(e)}}onEntityComponentRemoved(e,t){for(var n in this._queries){var o=this._queries[n];~o.NotComponents.indexOf(t)&&!~o.entities.indexOf(e)&&o.match(e)?o.addEntity(e):~o.Components.indexOf(t)&&~o.entities.indexOf(e)&&!o.match(e)&&o.removeEntity(e)}}getQuery(e){var t=queryKey(e),n=this._queries[t];return n||(this._queries[t]=n=new Query(e,this._world)),n}stats(){var e={};for(var t in this._queries)e[t]=this._queries[t].stats();return e}}class Component{constructor(e){if(!1!==e){const t=this.constructor.schema;for(const n in t)if(e&&e.hasOwnProperty(n))this[n]=e[n];else{const e=t[n];if(e.hasOwnProperty("default"))this[n]=e.type.clone(e.default);else{const t=e.type;this[n]=t.clone(t.default)}}void 0!==e&&this.checkUndefinedAttributes(e)}this._pool=null}copy(e){const t=this.constructor.schema;for(const n in t){const o=t[n];e.hasOwnProperty(n)&&(this[n]=o.type.copy(e[n],this[n]))}return this.checkUndefinedAttributes(e),this}clone(){return(new this.constructor).copy(this)}reset(){const e=this.constructor.schema;for(const t in e){const n=e[t];if(n.hasOwnProperty("default"))this[t]=n.type.copy(n.default,this[t]);else{const e=n.type;this[t]=e.copy(e.default,this[t])}}}dispose(){this._pool&&this._pool.release(this)}getName(){return this.constructor.getName()}checkUndefinedAttributes(e){const t=this.constructor.schema;Object.keys(e).forEach((e=>{t.hasOwnProperty(e)||console.warn(`Trying to set attribute '${e}' not defined in the '${this.constructor.name}' schema. Please fix the schema, the attribute value won't be set`)}))}}Component.schema={},Component.isComponent=!0,Component.getName=function(){return this.displayName||this.name};class SystemStateComponent extends Component{}SystemStateComponent.isSystemStateComponent=!0;class EntityPool extends ObjectPool{constructor(e,t,n){super(t,void 0),this.entityManager=e,void 0!==n&&this.expand(n)}expand(e){for(var t=0;t<e;t++){var n=new this.T(this.entityManager);n._pool=this,this.freeList.push(n)}this.count+=e}}class EntityManager{constructor(e){this.world=e,this.componentsManager=e.componentsManager,this._entities=[],this._nextEntityId=0,this._entitiesByNames={},this._queryManager=new QueryManager(this),this.eventDispatcher=new EventDispatcher,this._entityPool=new EntityPool(this,this.world.options.entityClass,this.world.options.entityPoolSize),this.entitiesWithComponentsToRemove=[],this.entitiesToRemove=[],this.deferredRemovalEnabled=!0}getEntityByName(e){return this._entitiesByNames[e]}createEntity(e){var t=this._entityPool.acquire();return t.alive=!0,t.name=e||"",e&&(this._entitiesByNames[e]?console.warn(`Entity name '${e}' already exist`):this._entitiesByNames[e]=t),this._entities.push(t),this.eventDispatcher.dispatchEvent(ENTITY_CREATED,t),t}entityAddComponent(e,t,n){if(void 0===t._typeId&&!this.world.componentsManager._ComponentsMap[t._typeId])throw new Error(`Attempted to add unregistered component "${t.getName()}"`);if(~e._ComponentTypes.indexOf(t))console.warn("Component type already exists on entity.",e,t.getName());else{e._ComponentTypes.push(t),t.__proto__===SystemStateComponent&&e.numStateComponents++;var o=this.world.componentsManager.getComponentsPool(t),s=o?o.acquire():new t(n);o&&n&&s.copy(n),e._components[t._typeId]=s,this._queryManager.onEntityComponentAdded(e,t),this.world.componentsManager.componentAddedToEntity(t),this.eventDispatcher.dispatchEvent(COMPONENT_ADDED,e,t)}}entityRemoveComponent(e,t,n){var o=e._ComponentTypes.indexOf(t);~o&&(this.eventDispatcher.dispatchEvent(COMPONENT_REMOVE,e,t),n?this._entityRemoveComponentSync(e,t,o):(0===e._ComponentTypesToRemove.length&&this.entitiesWithComponentsToRemove.push(e),e._ComponentTypes.splice(o,1),e._ComponentTypesToRemove.push(t),e._componentsToRemove[t._typeId]=e._components[t._typeId],delete e._components[t._typeId]),this._queryManager.onEntityComponentRemoved(e,t),t.__proto__===SystemStateComponent&&(e.numStateComponents--,0!==e.numStateComponents||e.alive||e.remove()))}_entityRemoveComponentSync(e,t,n){e._ComponentTypes.splice(n,1);var o=e._components[t._typeId];delete e._components[t._typeId],o.dispose(),this.world.componentsManager.componentRemovedFromEntity(t)}entityRemoveAllComponents(e,t){let n=e._ComponentTypes;for(let o=n.length-1;o>=0;o--)n[o].__proto__!==SystemStateComponent&&this.entityRemoveComponent(e,n[o],t)}removeEntity(e,t){var n=this._entities.indexOf(e);if(!~n)throw new Error("Tried to remove entity not in list");e.alive=!1,this.entityRemoveAllComponents(e,t),0===e.numStateComponents&&(this.eventDispatcher.dispatchEvent(ENTITY_REMOVED,e),this._queryManager.onEntityRemoved(e),!0===t?this._releaseEntity(e,n):this.entitiesToRemove.push(e))}_releaseEntity(e,t){this._entities.splice(t,1),this._entitiesByNames[e.name]&&delete this._entitiesByNames[e.name],e._pool.release(e)}removeAllEntities(){for(var e=this._entities.length-1;e>=0;e--)this.removeEntity(this._entities[e])}processDeferredRemoval(){if(this.deferredRemovalEnabled){for(let e=0;e<this.entitiesToRemove.length;e++){let t=this.entitiesToRemove[e],n=this._entities.indexOf(t);this._releaseEntity(t,n)}this.entitiesToRemove.length=0;for(let t=0;t<this.entitiesWithComponentsToRemove.length;t++){let n=this.entitiesWithComponentsToRemove[t];for(;n._ComponentTypesToRemove.length>0;){let t=n._ComponentTypesToRemove.pop();var e=n._componentsToRemove[t._typeId];delete n._componentsToRemove[t._typeId],e.dispose(),this.world.componentsManager.componentRemovedFromEntity(t)}}this.entitiesWithComponentsToRemove.length=0}}queryComponents(e){return this._queryManager.getQuery(e)}count(){return this._entities.length}stats(){var e={numEntities:this._entities.length,numQueries:Object.keys(this._queryManager._queries).length,queries:this._queryManager.stats(),numComponentPool:Object.keys(this.componentsManager._componentPool).length,componentPool:{},eventDispatcher:this.eventDispatcher.stats};for(var t in this.componentsManager._componentPool){var n=this.componentsManager._componentPool[t];e.componentPool[n.T.getName()]={used:n.totalUsed(),size:n.count}}return e}}const ENTITY_CREATED="EntityManager#ENTITY_CREATE",ENTITY_REMOVED="EntityManager#ENTITY_REMOVED",COMPONENT_ADDED="EntityManager#COMPONENT_ADDED",COMPONENT_REMOVE="EntityManager#COMPONENT_REMOVE";class ComponentManager{constructor(){this.Components=[],this._ComponentsMap={},this._componentPool={},this.numComponents={},this.nextComponentId=0}hasComponent(e){return-1!==this.Components.indexOf(e)}registerComponent(e,t){if(-1!==this.Components.indexOf(e))return void console.warn(`Component type: '${e.getName()}' already registered.`);const n=e.schema;if(!n)throw new Error(`Component "${e.getName()}" has no schema property.`);for(const t in n)if(!n[t].type)throw new Error(`Invalid schema for component "${e.getName()}". Missing type for "${t}" property.`);e._typeId=this.nextComponentId++,this.Components.push(e),this._ComponentsMap[e._typeId]=e,this.numComponents[e._typeId]=0,void 0===t?t=new ObjectPool(e):!1===t&&(t=void 0),this._componentPool[e._typeId]=t}componentAddedToEntity(e){this.numComponents[e._typeId]++}componentRemovedFromEntity(e){this.numComponents[e._typeId]--}getComponentsPool(e){return this._componentPool[e._typeId]}}const Version="0.3.1",proxyMap=new WeakMap,proxyHandler={set(e,t){throw new Error(`Tried to write to "${e.constructor.getName()}#${String(t)}" on immutable component. Use .getMutableComponent() to modify a component.`)}};function wrapImmutableComponent(e,t){if(void 0===t)return;let n=proxyMap.get(t);return n||(n=new Proxy(t,proxyHandler),proxyMap.set(t,n)),n}class Entity{constructor(e){this._entityManager=e||null,this.id=e._nextEntityId++,this._ComponentTypes=[],this._components={},this._componentsToRemove={},this.queries=[],this._ComponentTypesToRemove=[],this.alive=!1,this.numStateComponents=0}getComponent(e,t){var n=this._components[e._typeId];return n||!0!==t||(n=this._componentsToRemove[e._typeId]),wrapImmutableComponent(e,n)}getRemovedComponent(e){return wrapImmutableComponent(e,this._componentsToRemove[e._typeId])}getComponents(){return this._components}getComponentsToRemove(){return this._componentsToRemove}getComponentTypes(){return this._ComponentTypes}getMutableComponent(e){var t=this._components[e._typeId];if(t){for(var n=0;n<this.queries.length;n++){var o=this.queries[n];o.reactive&&-1!==o.Components.indexOf(e)&&o.eventDispatcher.dispatchEvent(Query.prototype.COMPONENT_CHANGED,this,t)}return t}}addComponent(e,t){return this._entityManager.entityAddComponent(this,e,t),this}removeComponent(e,t){return this._entityManager.entityRemoveComponent(this,e,t),this}hasComponent(e,t){return!!~this._ComponentTypes.indexOf(e)||!0===t&&this.hasRemovedComponent(e)}hasRemovedComponent(e){return!!~this._ComponentTypesToRemove.indexOf(e)}hasAllComponents(e){for(var t=0;t<e.length;t++)if(!this.hasComponent(e[t]))return!1;return!0}hasAnyComponents(e){for(var t=0;t<e.length;t++)if(this.hasComponent(e[t]))return!0;return!1}removeAllComponents(e){return this._entityManager.entityRemoveAllComponents(this,e)}copy(e){for(var t in e._components){var n=e._components[t];this.addComponent(n.constructor),this.getComponent(n.constructor).copy(n)}return this}clone(){return new Entity(this._entityManager).copy(this)}reset(){for(var e in this.id=this._entityManager._nextEntityId++,this._ComponentTypes.length=0,this.queries.length=0,this._components)delete this._components[e]}remove(e){return this._entityManager.removeEntity(this,e)}}const DEFAULT_OPTIONS={entityPoolSize:0,entityClass:Entity};class World{constructor(e={}){if(this.options=Object.assign({},DEFAULT_OPTIONS,e),this.componentsManager=new ComponentManager(this),this.entityManager=new EntityManager(this),this.systemManager=new SystemManager(this),this.enabled=!0,this.eventQueues={},hasWindow&&"undefined"!=typeof CustomEvent){var t=new CustomEvent("ecsy-world-created",{detail:{world:this,version:Version}});window.dispatchEvent(t)}this.lastTime=now()/1e3}registerComponent(e,t){return this.componentsManager.registerComponent(e,t),this}registerSystem(e,t){return this.systemManager.registerSystem(e,t),this}hasRegisteredComponent(e){return this.componentsManager.hasComponent(e)}unregisterSystem(e){return this.systemManager.unregisterSystem(e),this}getSystem(e){return this.systemManager.getSystem(e)}getSystems(){return this.systemManager.getSystems()}execute(e,t){e||(e=(t=now()/1e3)-this.lastTime,this.lastTime=t),this.enabled&&(this.systemManager.execute(e,t),this.entityManager.processDeferredRemoval())}stop(){this.enabled=!1}play(){this.enabled=!0}createEntity(e){return this.entityManager.createEntity(e)}stats(){return{entities:this.entityManager.stats(),system:this.systemManager.stats()}}}class System{canExecute(){if(0===this._mandatoryQueries.length)return!0;for(let e=0;e<this._mandatoryQueries.length;e++)if(0===this._mandatoryQueries[e].entities.length)return!1;return!0}getName(){return this.constructor.getName()}constructor(e,t){if(this.world=e,this.enabled=!0,this._queries={},this.queries={},this.priority=0,this.executeTime=0,t&&t.priority&&(this.priority=t.priority),this._mandatoryQueries=[],this.initialized=!0,this.constructor.queries)for(var n in this.constructor.queries){var o=this.constructor.queries[n],s=o.components;if(!s||0===s.length)throw new Error("'components' attribute can't be empty in a query");let e=s.filter((e=>!componentRegistered(e)));if(e.length>0)throw new Error(`Tried to create a query '${this.constructor.name}.${n}' with unregistered components: [${e.map((e=>e.getName())).join(", ")}]`);var i=this.world.entityManager.queryComponents(s);this._queries[n]=i,!0===o.mandatory&&this._mandatoryQueries.push(i),this.queries[n]={results:i.entities};var r=["added","removed","changed"];const t={added:Query.prototype.ENTITY_ADDED,removed:Query.prototype.ENTITY_REMOVED,changed:Query.prototype.COMPONENT_CHANGED};o.listen&&r.forEach((e=>{if(this.execute||console.warn(`System '${this.getName()}' has defined listen events (${r.join(", ")}) for query '${n}' but it does not implement the 'execute' method.`),o.listen[e]){let s=o.listen[e];if("changed"===e){if(i.reactive=!0,!0===s){let t=this.queries[n][e]=[];i.eventDispatcher.addEventListener(Query.prototype.COMPONENT_CHANGED,(e=>{-1===t.indexOf(e)&&t.push(e)}))}else if(Array.isArray(s)){let t=this.queries[n][e]=[];i.eventDispatcher.addEventListener(Query.prototype.COMPONENT_CHANGED,((e,n)=>{-1!==s.indexOf(n.constructor)&&-1===t.indexOf(e)&&t.push(e)}))}}else{let o=this.queries[n][e]=[];i.eventDispatcher.addEventListener(t[e],(e=>{-1===o.indexOf(e)&&o.push(e)}))}}}))}}stop(){this.executeTime=0,this.enabled=!1}play(){this.enabled=!0}clearEvents(){for(let t in this.queries){var e=this.queries[t];if(e.added&&(e.added.length=0),e.removed&&(e.removed.length=0),e.changed)if(Array.isArray(e.changed))e.changed.length=0;else for(let t in e.changed)e.changed[t].length=0}}toJSON(){var e={name:this.getName(),enabled:this.enabled,executeTime:this.executeTime,priority:this.priority,queries:{}};if(this.constructor.queries){var t=this.constructor.queries;for(let n in t){let o=this.queries[n],s=t[n],i=e.queries[n]={key:this._queries[n].key};i.mandatory=!0===s.mandatory,i.reactive=s.listen&&(!0===s.listen.added||!0===s.listen.removed||!0===s.listen.changed||Array.isArray(s.listen.changed)),i.reactive&&(i.listen={},["added","removed","changed"].forEach((e=>{o[e]&&(i.listen[e]={entities:o[e].length})})))}}return e}}function Not(e){return{operator:"not",Component:e}}System.isSystem=!0,System.getName=function(){return this.displayName||this.name};class TagComponent extends Component{constructor(){super(!1)}}TagComponent.isTagComponent=!0;const copyValue=e=>e,cloneValue=e=>e,copyArray=(e,t)=>{if(!e)return e;if(!t)return e.slice();t.length=0;for(let n=0;n<e.length;n++)t.push(e[n]);return t},cloneArray=e=>e&&e.slice(),copyJSON=e=>JSON.parse(JSON.stringify(e)),cloneJSON=e=>JSON.parse(JSON.stringify(e)),copyCopyable=(e,t)=>e?t?t.copy(e):e.clone():e,cloneClonable=e=>e&&e.clone();function createType(e){var t=["name","default","copy","clone"].filter((t=>!e.hasOwnProperty(t)));if(t.length>0)throw new Error(`createType expects a type definition with the following properties: ${t.join(", ")}`);return e.isType=!0,e}const Types={Number:createType({name:"Number",default:0,copy:copyValue,clone:cloneValue}),Boolean:createType({name:"Boolean",default:!1,copy:copyValue,clone:cloneValue}),String:createType({name:"String",default:"",copy:copyValue,clone:cloneValue}),Array:createType({name:"Array",default:[],copy:copyArray,clone:cloneArray}),Ref:createType({name:"Ref",default:void 0,copy:copyValue,clone:cloneValue}),JSON:createType({name:"JSON",default:null,copy:copyJSON,clone:cloneJSON})};function generateId(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",o=n.length,s=0;s<e;s++)t+=n.charAt(Math.floor(Math.random()*o));return t}function injectScript(e,t){var n=document.createElement("script");n.src=e,n.onload=t,(document.head||document.documentElement).appendChild(n)}function hookConsoleAndErrors(e){["error","warning","log"].forEach((t=>{if("function"==typeof console[t]){var n=console[t].bind(console);console[t]=(...o)=>(e.send({method:"console",type:t,args:JSON.stringify(o)}),n.apply(null,o))}})),window.addEventListener("error",(t=>{e.send({method:"error",error:JSON.stringify({message:t.error.message,stack:t.error.stack})})}))}function includeRemoteIdHTML(e){let t=document.createElement("div");return t.style.cssText="\n    align-items: center;\n    background-color: #333;\n    color: #aaa;\n    display:flex;\n    font-family: Arial;\n    font-size: 1.1em;\n    height: 40px;\n    justify-content: center;\n    left: 0;\n    opacity: 0.9;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n  ",t.innerHTML=`Open ECSY devtools to connect to this page using the code:&nbsp;<b style="color: #fff">${e}</b>&nbsp;<button onClick="generateNewCode()">Generate new code</button>`,document.body.appendChild(t),t}function enableRemoteDevtools(remoteId){if(!hasWindow)return void console.warn("Remote devtools not available outside the browser");window.generateNewCode=()=>{window.localStorage.clear(),remoteId=generateId(6),window.localStorage.setItem("ecsyRemoteId",remoteId),window.location.reload(!1)},remoteId=remoteId||window.localStorage.getItem("ecsyRemoteId"),remoteId||(remoteId=generateId(6),window.localStorage.setItem("ecsyRemoteId",remoteId));let infoDiv=includeRemoteIdHTML(remoteId);window.__ECSY_REMOTE_DEVTOOLS_INJECTED=!0,window.__ECSY_REMOTE_DEVTOOLS={};let Version="",worldsBeforeLoading=[],onWorldCreated=e=>{var t=e.detail.world;Version=e.detail.version,worldsBeforeLoading.push(t)};window.addEventListener("ecsy-world-created",onWorldCreated);let onLoaded=()=>{var peer=new Peer(remoteId,{host:"peerjs.ecsy.io",secure:!0,port:443,config:{iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"}]},debug:3});peer.on("open",(()=>{peer.on("connection",(connection=>{window.__ECSY_REMOTE_DEVTOOLS.connection=connection,connection.on("open",(function(){infoDiv.innerHTML="Connected",connection.on("data",(function(data){if("init"===data.type){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.onload=()=>{script.parentNode.removeChild(script),window.removeEventListener("ecsy-world-created",onWorldCreated),worldsBeforeLoading.forEach((e=>{var t=new CustomEvent("ecsy-world-created",{detail:{world:e,version:Version}});window.dispatchEvent(t)}))},script.innerHTML=data.script,(document.head||document.documentElement).appendChild(script),script.onload(),hookConsoleAndErrors(connection)}else if("executeScript"===data.type){let value=eval(data.script);data.returnEval&&connection.send({method:"evalReturn",value})}}))}))}))}))};injectScript("https://cdn.jsdelivr.net/npm/peerjs@0.3.20/dist/peer.min.js",onLoaded)}if(hasWindow){const e=new URLSearchParams(window.location.search);e.has("enable-remote-devtools")&&enableRemoteDevtools()}export{Component,Not,ObjectPool,System,SystemStateComponent,TagComponent,Types,Version,World,Entity as _Entity,cloneArray,cloneClonable,cloneJSON,cloneValue,copyArray,copyCopyable,copyJSON,copyValue,createType,enableRemoteDevtools};