function laodjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(res=>{
			if(res.ok){
				resolve(res.json());
			}else {
				reject(new Error('error'));
			}
		})		
	})

}
var  fetchedData=laodjson("data.json");
  fetchedData.then(data=>{
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var childtwo=document.querySelector(".child2");
console.log(childtwo);

function career(car)
{
	// console.log(car);
	var heading=document.createElement("h3");
	heading.textContent="Career Objective";
	childtwo.appendChild(heading);
    var hr=document.createElement("hr");
    heading.appendChild(hr);
    var text=document.createElement("p");
    text.textContent=car.info;
    childtwo.appendChild(text);
}
function education(edu)
{
	//console.log(edu);
	var heading=document.createElement("h3");
	heading.textContent="Education Qualification";
	childtwo.appendChild(heading);
    var hr=document.createElement("hr");
    heading.appendChild(hr);
    var tab=document.createElement("table");
    tab.border="1";
    childtwo.appendChild(tab);
    var tr="<tr> <th> degree </th> <th> institute </th> <th> data </th> </tr>";
    //tab.innerHTML=tr;
    var tr1="";
    for(var i=0;i<edu.length;i++){
    	tr1+="<tr> <td> "+edu[i].degree+" </td> <td> "+edu[i].institute+" </td> <td> "+edu[i].data+" </td> </tr>";
    }
    tab.innerHTML=tr+tr1;

}
function skills(skill){
	var heading=document.createElement("h3");
	heading.textContent="Technical  skills";
	childtwo.appendChild(heading);
    var hr=document.createElement("hr");
    heading.appendChild(hr);
    for (var i=0;i<skill.length;i++){
    var skillDiv=document.createElement("div");
    skillDiv.classList.add("skillDiv");
    childtwo.appendChild(skillDiv);
    var title=document.createElement("h3"); 
    title.textContent=skill[i].title;
    var hr=document.createElement("hr");
    title.appendChild(hr);
    skillDiv.appendChild(title);
    for (var j=0;j<skill[i].content.length;j++)
    {
    	var con=document.createElement("span");
         con.textContent=skill[i].content[j];
         skillDiv.appendChild(con);
    }
    }
}
