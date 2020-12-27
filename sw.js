// JavaScript source code

const cupName = "cn";

const cupAssets = [
    "css/stylesheet.css",
    "index.html",
    "sw_checking.js",
    "Script.js",
    "myCloudManifest.json",
]
    
// to call install event
self.addEventListener("install", (e) => {
    Console.log('Service Worker: installed');

    e
}
)

//try create element using js
var para = document.createElement('P');
para.innerText = 'weather Sight';
document.body.appendchild(para);

