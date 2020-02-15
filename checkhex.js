function checkHex(input){
    var i, code, len;

    if(input[0]==="#"){
        len = input.length
        if(len == 3 || len == 6){
            input = input.toLowerCase();
            for(i = 1; i < len; i++){
                code = input.charCodeAt(i);
                if (!((code > 47 && code < 58) || (code > 96 && code < 103))){
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}