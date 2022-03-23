function herflebaslayan(n,m){

    n=prompt('cumle daxil edin!');
    m=prompt('herf daxil edin!');

    ayrilmis = n.split(' ');

    let b=[];
    
    for(let i=0; i<ayrilmis.length; i++){
        
        if(ayrilmis[i][0]==m){
            b.push(ayrilmis[i]);
        }
    }

    console.log(b);

}


herflebaslayan();