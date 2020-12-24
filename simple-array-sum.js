let lengthArr2, NumberArr, total=0;

lengthArr2 = parseInt(prompt("Please Enter the Length of the Array :>"));
for(let i =lengthArr2-1; i>=0; i--){
   NumberArr = parseInt(prompt("Please Enter the Numbers :>"));
}
   
    console.log("Total outside if",total);
    console.log("outside if NumberArr.length-1",NumberArr.length-1);
    if(lengthArr2 == NumberArr.length-1){
      console.log("Total Inside if ", total);
      console.log("if NumberArr.length-1",NumberArr.length-1);
        for(let i =NumberArr.length-1; i>=0; i--){
          console.log("NumberArr.length-1",NumberArr.length-1);
          console.log("Thae total inside for loop", total); 
          total += NumberArr[i];
        }
        console.log(total); 
    }
    else{
        console.log("Please Ya zeft Enter the correct length or add sum number to sum");
    }
