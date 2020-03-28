
 
 
 const StringTokeniser = function * (text){
     let token =""
   for (let i=0;i<text.length;i++){
       let char = text[i];
       if(text.match(/[\'\= {}[]]/)){
        if(token.length!==0) {
            yield token;
            token=""
        }
        yield char;
       }else{
           token+=char;
       }
   }
}

export default StringTokeniser;