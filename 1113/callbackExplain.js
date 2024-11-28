function dynamicCalc (a,b,callback) {
    callback(a,b);
  }
  
dynamicCalc(1,2,function(a,b){
  let result = a+b;
  console.log(result);
})