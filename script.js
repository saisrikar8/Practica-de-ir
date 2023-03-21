var questions = {
"iralugar":{
  "1": {
    "question": "¿Vas ___ después de la escuela?",
    "answer": "al gimnasio",
    "translation": "Are you going to the gym after school?"
  },
  "2": {
    "question": "¿Van ___ este fin de semana?",
    "answer": "de compras",
    "translation": "Are they going shopping this weekend?"
  },
  "3": {
    "question": "¿Va ___ en tren o en autobús?",
    "answer": "a Barcelona",
    "translation": "Is he/she going to Barcelona by train or by bus?"
  },
  "4": {
    "question": "¿Vas ___ en coche o en bicicleta?",
    "answer": "al parque",
    "translation": "Are you going to the park by car or by bike?"
  },
  "5": {
    "question": "¿Van ___ juntos o por separado?",
    "answer": "al cine",
    "translation": "Are they going to the movies together or separately?"
  },
  "6": {
    "question": "¿Vas ___ con tu familia o con tus amigos?",
    "answer": "de vacaciones",
    "translation": "Are you going on vacation with your family or with your friends?"
  },
  "7": {
    "question": "¿Van ___ antes o después de cenar?",
    "answer": "a pasear",
    "translation": "Are they going for a walk before or after dinner?"
  },
  "8": {
    "question": "¿Vas ___ en avión o en barco?",
    "answer": "a Hawai",
    "translation": "Are you going to Hawaii by plane or by boat?"
  },
  "9": {
    "question": "¿Va ___ a pie o en taxi?",
    "answer": "al aeropuerto",
    "translation": "Is he/she going to the airport on foot or by taxi?"
  },
  "10": {
    "question": "¿Van ___ temprano o tarde?",
    "answer": "al mercado",
    "translation": "Are they going to the market early or late?"
  },
  "11": {
    "question": "¿Vas ___ en autobús o en metro?",
    "answer": "al trabajo",
    "translation": "Are you going to work by bus or by metro?"
  },
  "12": {
    "question": "¿Van ___ en el centro o en las afueras?",
    "answer": "de fiesta",
    "translation": "Are they going partying in the city center or in the suburbs?"
  },
  "13": {
    "question": "¿Vas ___ con tu novio/a?",
    "answer": "al restaurante",
    "translation": "Are you going to the restaurant with your boyfriend/girlfriend?"
  },
  "14": {
    "question": "¿Van ___ en grupo o solos?",
    "answer": "al concierto",
    "translation": "Are they going to the concert as a group or alone?"
  }
},
"irainfinitivo":{
  "1": {
    "question": "¿Vas ___ la cena hoy?",
    "answer": "a preparar",
    "translation": "Are you going to prepare dinner today?"
  },
  "2": {
    "question": "¿Van ___ la casa este fin de semana?",
    "answer": "a limpiar",
    "translation": "Are they going to clean the house this weekend?"
  },
  "3": {
    "question": "¿Va ___ la presentación mañana?",
    "answer": "a ver",
    "translation": "Is he/she going to see the presentation tomorrow?"
  },
  "4": {
    "question": "¿Vas ___ la cena o la comida?",
    "answer": "a cocinar",
    "translation": "Are you going to cook dinner or lunch?"
  },
  "5": {
    "question": "¿Van ___ al parque de atracciones?",
    "answer": "a montar",
    "translation": "Are they going to ride the rides at the amusement park?"
  },
  "6": {
    "question": "¿Vas ___ el pastel de cumpleaños?",
    "answer": "a hacer",
    "translation": "Are you going to make the birthday cake?"
  },
  "7": {
    "question": "¿Van ___ la sala de cine nueva?",
    "answer": "a conocer",
    "translation": "Are they going to check out the new movie theater?"
  },
  "8": {
    "question": "¿Vas ___ la cena con amigos?",
    "answer": "a compartir",
    "translation": "Are you going to share dinner with friends?"
  },
  "9": {
    "question": "¿Va ___ el informe mañana?",
    "answer": "a presentar",
    "translation": "Is he/she going to present the report tomorrow?"
  },
  "10": {
    "question": "¿Van ___ una película de terror?",
    "answer": "a ver",
    "translation": "Are they going to watch a horror movie?"
  },
  "11": {
    "question": "¿Vas ___ la comida hoy?",
    "answer": "a comprar",
    "translation": "Are you going to buy groceries for lunch today?"
  },
  "12": {
    "question": "¿Van ___ un viaje en bicicleta?",
    "answer": "a hacer",
    "translation": "Are they going to go on a bike ride?"
  },
  "13": {
    "question": "¿Vas ___ tu habitación?",
    "answer": "a limpiar",
    "translation": "Are you going to clean your room?"
  },
  "14": {
    "question": "¿Van ___ el museo de arte?",
    "answer": "a visitar",
    "translation": "Are they going to visit the art museum?"
    }
  } 
}
var questionAnswer = ""

function chooseQuestion(){
  var categoryNum =Math.round(Math.random())
  var category;
  if (categoryNum == 0){
    category = "iralugar"
  }
  else if (categoryNum == 1){
    category = "irainfinitivo"
  }
  var categoryQuestions = questions[category];
  var question = categoryQuestions[getRandom(1, 15).toString()];
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = question.question + "<br>Translation: " + question.translation + "<br><input type = 'text' id = 'answer'>";
  questionAnswer = question.answer;
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function checkAnswer(){
  answer = document.getElementById("answer");
  response = document.getElementById("response");
  if (questionAnswer == answer.value){
    response.innerHTML = "That is correct. Reload the page for another question."
  }
  else{
    response.innerHTML = "That is incorrect. Try again."
    console.log(questionAnswer)
  }
}