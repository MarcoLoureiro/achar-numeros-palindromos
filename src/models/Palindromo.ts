
export const palindromo = (de:string,ate:string) =>{
    let conv:number;
    if(parseInt(de)<0){
        conv = parseInt(de)*-1;
        de = conv+'';
    }
    if(parseInt(ate)<0){
        conv = parseInt(ate)*-1;
        ate = conv+'';
    }
    let interval1:number = parseInt(de);
    let temp:string = ''
    let palindromos:string='';
    while(interval1<parseInt(ate)){
        de = interval1.toString();

        for(let i = de.length;i>=0;i--){
            temp+=de.charAt(i);
        }

        if(temp == de){
            palindromos+= `|${de}`
        }

        temp=''
        interval1++;
    }
    if(palindromos!=''){
        palindromos+= '|'
    }
return palindromos;
}