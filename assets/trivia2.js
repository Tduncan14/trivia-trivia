$('#startButton').on('click',function(){
    gameRules.gameStart();
    
// removes everything inside of the array.

 
});

let questions =[{
    question:"who discovered 'fire'?",
    answer:["A caveman","A lion","A firefighter","The sun"],
    correctAnswer:"A caveman"
},
   { question:"'Stay away from my swamp!!!!' who famous lines is that",
    answer:["Shrek", "an Ogre","Treek","Homer Simpsons"],
    correctAnswer:"Shrek"
   },
    {question:"Who has the possesion of the nine tail fox?",
     answer:["Sasuke","Naruto","Sakura","Goku"],
     correctAnswer:"Naruto"},

    {question:"Which answer below is the oddball?",
      answer:["shark","salmon","tuna","orca"],
     correctAnswer:"orca"
    },

    {question:"How many dragonball are there in dbz",
     answer:["3","4","5","7"] }
];

  var gameRules ={
      incorrect :0,
      correct : 0,
      counter:100,
      countDown: function(){
         gameRules.counter--;
         $("#counter").html(gameRules.counter);
         if(gameRules.counter===0){
             alert("timer is up time to check the results");
             game.over();
         }

      },
      gameStart:function(){
           timer = setInterval(gameRules.countDown,1000);
           $("#subwrapper").prepend('<h2>Time Remaining:<span id="counter">100</span> seconds </h2>');
            $("#startButton").remove();
              console.log("Hello World");
            for(var i = 0; i < questions.length; i++){
             $("#subwrapper").append("<h4>"+ questions[i].question+"</h4>");
              for(var j = 0; j < questions[i].answer.length; j++){
               //("#subwrapper").append("<input type = 'radio' name = 'question' "+i+" value ='"+questions[i].answer[j]+"'>");
                $ ("#subwrapper").append("<input type ='radio' name ='question-"+i+"'value ='"+ questions[i].answer[j]+"'>"+ questions[i].answer[j]);
                 console.log("hey");
          
      }
  }
      },
      over:function (){
          $.each($('input [name ="question-0"]:checked'),function(){
              if($(this).val()===questions[1].correctAnswer){
                  game.correct++;
              }
              else{
                  game.incorrect++;
              }
          });
          $.each($('input [name ="question-1"]:checked'),function(){
            if($(this).val()===questions[1].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input [name ="question-2"]:checked'),function(){
            if($(this).val()===questions[2].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input [name ="question-3"]:checked'),function(){
            if($(this).val()===questions[3].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input [name ="question-4"]:checked'),function(){
            if($(this).val()===questions[4].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
      }
    }