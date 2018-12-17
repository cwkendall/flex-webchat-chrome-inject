function ready(callback){
  // in case the document is already rendered
  if (document.readyState !== 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState === 'complete') callback();
  });
}
function inject() {
    let code = "window.appConfig = {};"
    code += "window.appConfig.context = "+ JSON.stringify(document.getElementById("deadlift-context").value) +";";
    code += "window.appConfig.accountSid = '"+ document.getElementById("deadlift-account").value +"';";
    code += "window.appConfig.flexFlowSid = '"+ document.getElementById("deadlift-flow").value +"';";
    chrome.tabs.executeScript(null, {code: code}, function() {
      chrome.tabs.insertCSS(null, {file:"./static/css/main.css" }, function(){
        console.log("Loaded Flex WebChat CSS")
        chrome.tabs.executeScript(null, {file:"./static/js/main.js"}, function() {
          console.log("Loaded Flex WebChat JS");
        });
      });
    })
}

function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}
console.log("Deadlift loading");
ready(function(){
    console.log("Deadlift ready");
    for (var elem of document.getElementsByClassName("deadlift-button")){
      addEvent(
          elem,
          'click',
          inject);
    }
});