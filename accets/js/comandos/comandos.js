(function () {


  var speakBtn = document.querySelector('#speakbt');
  var resultSpeaker = document.querySelector('#resultSpeak');
  var naoOuvi = new Audio('../accets/media/testeDeVoz.m4a');
  var testeDeVoz = new Audio('../accets/media/testeDeVoz.m4a');
  var aSuaDisposicao = new Audio('../accets/media/aSuaDisposicao.m4a');
  var estouAqui = new Audio('../accets/media/estouAqui.m4a');
  var Ok = new Audio('../accets/media/Ok.m4a');
  var simSenhor = new Audio('../accets/media/simSenhor.m4a');
  var comoQuiserSenhor = new Audio('../accets/media/comoQuiserSenhor.m4a');
  var bemVindoSenhor = new Audio('../accets/media/bemVindoSenhor.m4a');

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var myRecognition = new SpeechRecognition();

    myRecognition.lang = 'pt-BR';

    $(document).ready(function() {
      myRecognition.start();
    });

    speakBtn.addEventListener('click', function () {

      try {


        resultSpeaker.innerHTML = "Estou aqui senhor";
        myRecognition.start();
      } catch (erro) {
        alert('erro:' + erro.message);
      }

    }, false);

    myRecognition.addEventListener('result', function (evt) {

      var resultSpeak = evt.results[0][0].transcript;

      console.log(resultSpeak);

      resultSpeaker.innerHTML = resultSpeak;

      switch (resultSpeak.toLowerCase()) {
        case 'clarear':
          document.body.style.backgroundColor = '#33cc99';
          break;
        case 'escurecer':
          document.body.style.backgroundColor = '#047751';
          break;
        
        case 'vai descançar':
          myRecognition.stop();
          break;
        case 'acorda criança papai chegou':
          bemVindoSenhor.play();
          resultSpeaker.innerHTML = 'Bem vindo senhor';
          break;
        case 'Aurora':
          resultSpeaker.innerHTML = 'Bem vindo senhor';
          aSuaDisposicao.play();
          break;
        case 't**********':
          resultSpeaker.innerHTML = 'Vai toma nu cu você seu arrombado'
          break;
      }

      if (resultSpeak.match(/buscar por/)) {

        resultSpeaker.innerHTML = 'Sim senhor';
        
        setTimeout(function () {
          simSenhor.play();
          var resultado = resultSpeak.split('buscar por');
          window.location.href = 'https://www.google.com.br/search?q=' + resultado[1];

        }, 2000);
      }
      
    },
      false);

    myRecognition.addEventListener('error',
      function (evt) {
        naoOuvi.play();
        naoOuvi.controls();
        resultSpeaker.innerHTML = 'Se você disse alguma coisa, não ouvi muito bem!';
      },
      false);

  } else {
    resultSpeaker.innerHTML = 'Seu navegador não suporta tanta tecnoligia!';
  }

})();
