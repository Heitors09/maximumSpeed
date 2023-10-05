//mede o limite de velocidade e a cada 5 km acima do limite 1 ponto na carteira
//Math.Floor para arredondar os pontos que são números com virgula 

maximumSpeed(180)

function maximumSpeed(velocidade){
    
    //variáveis para uso dos valores
    const speedOk = 70; //limite de velocidade
    const kmPoints = 5; //km por ponto
    
    // se a velocidade for menor ou igual a variavel que corresponde ao limite de velocidade
    if (velocidade <= speedOk){
        console.log('Ok')
     }
     //mostrar pontuação a ser reduzida a carteira caso passe do limite
     else{
        //cauculo dos pontos
        const pontos = Math.floor(((velocidade - speedOk) / kmPoints));
        //passando de 12 "carteira suspensa"
        if(pontos>=12)
         console.log('Carteira Suspensa')
        //não passando demonstra os pontos
        else {
            console.log("Pontos: ", pontos)
        }
     }
} 