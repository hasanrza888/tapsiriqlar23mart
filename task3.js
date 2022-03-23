function evennumber(){
    let n=prompt('ededleri daxil edin');

    let eded=n.split(' ');

    let str=[];

    let str2= [];

    for(let i=0; i<eded.length; i++){

        str.push(Number(eded[i]));

        if(str[i]%2==0){
            str2.push(str[i]);
        }
    }

    console.log(str2);
}

evennumber();