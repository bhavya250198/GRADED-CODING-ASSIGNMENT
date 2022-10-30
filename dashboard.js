const reader = new FileReader();
reader.readAsText('Data.json');
console.log("reader",reader);
// let resumeData=data.resume;
let resume="bhavya"
var dashboardData= document.getElementById("containerDiv");
console.log(dashboardData);
   let dashboard= '<div>'+resume+'</div>';
   dashboardData.innerHTML=dashboard
 

