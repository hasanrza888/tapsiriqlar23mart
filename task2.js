function averagenumber(){
    let n=prompt('ededleri daxil edin');

    let eded=n.split(' ');

    let str=[];

    let sum=0;

    for(let i=0; i<eded.length; i++){

        str.push(Number(eded[i]));

        sum+=str[i];
    }

    console.log(sum/str.length);
}

averagenumber();
