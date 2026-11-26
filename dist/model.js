/* Deliberately illustrative values, not empirical estimates or forecasts. */
(function(root){
 const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
 function allocate(values,index,next,budget=100){const result=[...values]; result[index]=clamp(Math.round(next),0,budget-values.reduce((s,v,i)=>s+(i===index?0:v),0));return result;}
 function evaluate(a,shock=0){const [housing,commons,voice,enterprise]=a;return {access:Math.round(clamp(20+housing*1.25+commons*.5-shock*.7)),autonomy:Math.round(clamp(15+voice*1.4+commons*.65-enterprise*.25)),capacity:Math.round(clamp(20+enterprise*1.4+commons*.45-shock*.9)),resilience:Math.round(clamp(10+Math.min(...a)*1.8+commons*.65-shock*.5)),reserve:100-a.reduce((s,v)=>s+v,0)};}
 function oscillate(damping=0.35,feedback=1,shock=1){let x=shock,v=0;const points=[];const dt=.04;for(let i=0;i<=600;i++){points.push({t:i*dt,x});v+=(-feedback*x-2*damping*v)*dt;x+=v*dt;}return points;}
 const api={allocate,evaluate,oscillate};if(typeof module!=='undefined')module.exports=api;root.ProtocolModel=api;
})(typeof window!=='undefined'?window:globalThis);
