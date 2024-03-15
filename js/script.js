function listImgsFrmArray(anArray){
if( !Array.isArray(anArray) ){
return `<p>Error. Please provide an array ${anArray} is not an arrary</p>`;
// console.log(`error, not an arrary`);
} else {
let html = `<ul>`;
anArray.forEach(function(img){
if(typeof img == ""){
html += `<li><img src=${pathToImages}/${img} alt=${img}></li>`;
}
else{console.log ("not an img") };
html +=`</ul>`;
return html;
})
}};