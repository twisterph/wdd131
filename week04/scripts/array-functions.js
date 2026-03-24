

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
let nameLengths = names.map(name => name.length);
let average =
  names.reduce((total, name) => total + name.length, 0) / names.length;

document.querySelector("#original").textContent = names.join(", ");
document.querySelector("#namesB").textContent = namesB.join(", ");
document.querySelector("#lengths").textContent = nameLengths.join(", ");
document.querySelector("#average").textContent = average.toFixed(1);