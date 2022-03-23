function soz(){

    n=prompt('soz daxil edin!');

    ayrilmis = n.split('');

    let b=[];
    

    for(let i=0; i<ayrilmis.length; i++){
        
        let count=0;


        for(let j=0; j<ayrilmis.length; j++){

            if(ayrilmis[i]==ayrilmis[j] && i>j){
                break;
            }
            if(ayrilmis[i]==ayrilmis[j]){
                count+=1;
            }
        }

        if(count>0){

        console.log(ayrilmis[i] + ': ' + count + ' ' + 'dene var');

        }

    }

}


soz();