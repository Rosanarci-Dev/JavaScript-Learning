// array notas//
// const notas=[
//     {nome:maria,nota:7},
//     {nome:joao, nota:4},
//     {nome:carlos, nota:9},
//     {nome:ias, nota:9},

// ]


// for( let i=notas; i>=0; i++){
//     const media=0;
//     document.querySelector("#texto");
//     media+=notas[i].nota/notas[i];
//     console.log(media.toFixed(2));
//     avaliacao=>{
//     if media
//     }
// }

const notas=[
 4,6,9,9
]

let media=0;
let soma=0;
for( let i=0;i<notas.length; i++){  
    
    soma+=notas[i];
   
   
}

    avaliacao= () =>{
      let texto=document.querySelector("#texto");
    media=soma/notas.length;
    console.log(media.toFixed(2));
    if (media>= 7){
        texto.innerHTML="aprovado"
    }
    else{texto.innerHTML="reprovado"}
    }
     
    avaliacao();


