function init(){
	var num=document.getElementById('num');
	num.value=0;
	num.disabled="disabled"
	var oButton=document.getElementsByTagName('input');
	var btn_num1;
	var fh;
	for (var i=0;i<oButton.length; i++) {
		oButton[i].onclick=function(){
			if (!isNaN(this.value)) {
				if (isNull(num.value)) {
					num.value=this.value;
				}else{
			 		num.value=(num.value+this.value)*1;
				}
			}else{
				var btn_num=this.value;
				switch(btn_num){
					case "+":
						btn_num1=Number(num.value);
						num.value=0;
						fh="+";
						break;
					case "-":
						btn_num1=Number(num.value);
						num.value=0;
						fh="-";
						break;
					case "*":
						btn_num1=Number(num.value);
						num.value=0;
						fh="*";
						break;
					case "/":
						btn_num1=Number(num.value);
						num.value=0;
						fh="/";
						break;
					case ".":
						if(num.value.indexOf(".")==-1){
							num.value=num.value+".";
						}
						break;
					case "ca":
						num.value=num.value.substr(0,num.value.length-1);
						if (isNull(num.value)) {
							num.value="0";
						}
						break;
					case "+/-":
						num.value=Number(num.value)*-1;
						break;
					case "c":
						num.value="0";
						break;
					case "=":
						switch(fh){
							case "+":
								num.value=btn_num1+Number(num.value);
								break;
							case "-":
								num.value=btn_num1-Number(num.value);
								break;
							case "*":
								num.value=btn_num1*Number(num.value);
								break;
							case "/":
								if(Number(num.value)=="0"){
									num.value=0;
									alert("Error!");
								}else{
									num.value=btn_num1/Number(num.value);
								}
								break;
								}
						break;
				}
			}
		}
	}
}
function isNull(n){
	if (n=="0" || n.length==0) {
		return true;
	}else{
		return false;
	}
}

