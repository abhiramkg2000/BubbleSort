/*var item=document.getElementById("item");*/
var array=document.getElementById("array-elements");
var btn1=document.getElementById("btn");
var btn2=document.getElementById("clr");
var container=document.getElementById("contain");
btn1.onclick=function display(){
    var j=0;
    var i=0;
    var swap=0;
    /*var array_item=document.createElement("p");
    array_item.appendChild(document.createTextNode(array.value));
    document.body.appendChild(array_item);*/
    var temp=String(array.value);
    //var num=Number(item.value);
    const result=temp.split(" ");
    /*for(i=0;i<result.length;i++)
    {
        if(num==result[i])
        {
            console.log("Found At:",i+1);
            j=1;
            break;
        }
    }
    if(j==0)
    {
        console.log("Not Found");
    }*/
    for(i=0;i<result.length-1;i++)
    {
        var array_item=document.createElement("p");
        array_item.classList.add("paragraph-head");
        array_item.appendChild(document.createTextNode((i+1)+" Pass Value: "));
        container.appendChild(array_item);
        for(j=0;j<result.length-i-1;j++)
        {
            if(result[j]>result[j+1])
            {
                swap=result[j];
                result[j]=result[j+1];
                result[j+1]=swap;
            }
            var array_item=document.createElement("p");
            array_item.classList.add("paragraph");
            array_item.appendChild(document.createTextNode("i= "+i+" j= "+j+" array is: "+result));
            container.appendChild(array_item);
        }
        /*array_item.setAttribute("class","elements");
        array_item.setAttribute("style","--v");
        array_item.style.setProperty("--v",i);*/
    }
    /*para.innerHTML=result;*/
    array.value="";
}
btn2.onclick=function reset(){
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

/*let text = "10 20 30";
let item="10";
const myArray = text.split(" ");
for(var i=0;i<3;i++)
{
	if(item===myArray[i])
	{
		console.log("present at position:",i+1);
	}
}*/