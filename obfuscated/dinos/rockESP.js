/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\trockESP.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");let s=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"];const e=[...document.querySelector('[class*="rockButton"]').parentElement.children];e.every(e=>e.querySelector("div"))||s.setState({choices:[{type:"fossil",val:10,rate:.1,blook:"Amber"},{type:"fossil",val:25,rate:.1,blook:"Dino Egg"},{type:"fossil",val:50,rate:.175,blook:"Dino Fossil"},{type:"fossil",val:75,rate:.175,blook:"Stegosaurus"},{type:"fossil",val:100,rate:.15,blook:"Velociraptor"},{type:"fossil",val:125,rate:.125,blook:"Brontosaurus"},{type:"fossil",val:250,rate:.075,blook:"Triceratops"},{type:"fossil",val:500,rate:.025,blook:"Tyrannosaurus Rex"},{type:"mult",val:1.5,rate:.05},{type:"mult",val:2,rate:.025}].sort(()=>.5-Math.random()).slice(0,3)},()=>{e.forEach((e,t)=>{var t=s.state.choices[t],o=(e.querySelector("div")&&e.querySelector("div").remove(),document.createElement("div"));o.style.color="white",o.style.fontFamily="Macondo",o.style.fontSize="1em",o.style.display="flex",o.style.justifyContent="center",o.style.transform="translateY(25px)",o.innerText="fossil"===t.type?`+${99999999<Math.round(t.val*s.state.fossilMult)?Object.values(webpack("74sb")).find(e=>e.toString().includes("×"))(Math.round(t.val*s.state.fossilMult)):Math.round(t.val*s.state.fossilMult)} Fossils`:`x${t.val} Fossils Per Excavation`,e.append(o)})})})();