function vergul(){
    n=prompt('cumle daxil edin!');
    ayrilmis = n.split(' ');

    let b;
    let sum="";

    for(let i=0; i<ayrilmis.length; i++){
        b=ayrilmis[i];
        sum = sum + b;

        if(i < ayrilmis.length-1){
            sum+=',';
        }

    }


    console.log(sum);
}

vergul();