(function () {


  var speakBtn = document.querySelector('#speakbt');
  var resultSpeaker = document.querySelector('#resultSpeak');
  var naoOuvi = new Audio('../accets/media/audio/voz/testeDeVoz.m4a');
  var testeDeVoz = new Audio('../accets/media/audio/voz/testeDeVoz.m4a');
  var aSuaDisposicao = new Audio('../accets/media/audio/voz/aSuaDisposicao.m4a');
  var estouAqui = new Audio('../accets/media/audio/voz/estouAqui.m4a');
  var Ok = new Audio('../accets/media/audio/voz/Ok.m4a');
  var simSenhor = new Audio('../accets/media/audio/voz/simSenhor.m4a');
  var comoQuiserSenhor = new Audio('../accets/media/audio/voz/comoQuiserSenhor.m4a');
  var bemVindoSenhor = new Audio('../accets/media/audio/voz/bemVindoSenhor.m4a');

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
      
      if (resultSpeak.match(/entrar no meu site/)) {

        resultSpeaker.innerHTML = 'ok';

        setTimeout(function () {

          simSenhor.play();
          window.location.href = 'https://testep1.netlify.app'

        }, 2000);
      }
      
      if (resultSpeak.match(/entre no meu site/)) {

        resultSpeaker.innerHTML = 'ok';

        setTimeout(function () {

          Ok.play();
          window.location.href = 'https://testep1.netlify.app'

        }, 2000);
      }
      
      if (resultSpeak.match(/tomá no cu/)) {

        resultSpeaker.innerHTML = 'Quanta falta de educação!';

        setTimeout(function () {
          
          window.alert('O jarvis disse que não vai trabalhar assim')

        }, 2000);
      }
      
      if (resultSpeak.match(/tomá no seu cu/)) {

        resultSpeaker.innerHTML = 'Quanta falta de educação!';

        setTimeout(function () {
          
          window.alert('O jarvis disse que não vai trabalhar assim')

        }, 2000);
      }
      
      if (resultSpeak.match(/Jarvis tá aí/)) {

        resultSpeaker.innerHTML = 'A sua disposição senhor';

        setTimeout(function () {
          aSuaDisposicao.play();

        }, 2000);
      }
      
      if (resultSpeak.match(/Jarvis/)) {

        resultSpeaker.innerHTML = 'Estou aqui, senhor';

        setTimeout(function () {
          estouAqui.play();

        }, 2000);
      }
      
      if (resultSpeak.match(/você não tem voz/)) {

        resultSpeaker.innerHTML = 'Olha minha voz aí ajudando o meu antigo dono';
        testeDeVoz.play();
        setTimeout(function () {

          

        }, 2000);
      }

      if (resultSpeak.match(/como está/)) {

        resultSpeaker.innerHTML = 'Bem';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }
      
      if (resultSpeak.match(/Bom dia/)) {

        resultSpeaker.innerHTML = 'Bom dia';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }
      
      if (resultSpeak.match(/Boa noite/)) {

        resultSpeaker.innerHTML = 'Boa noite';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }
      
      if (resultSpeak.match(/Boa tarde/)) {

        resultSpeaker.innerHTML = 'Boa tarde';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/como você tá/)) {

        resultSpeaker.innerHTML = 'estou bem, senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }
      if (resultSpeak.match(/como você está/)) {

        resultSpeaker.innerHTML = 'como sempre, senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/como é que você está/)) {

        resultSpeaker.innerHTML = 'Bem senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/como é que você tá/)) {

        resultSpeaker.innerHTML = 'Bem senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/como é que sê tá/)) {

        resultSpeaker.innerHTML = 'Bem senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/você está bem/)) {

        resultSpeaker.innerHTML = 'estou sim, senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/você tá bem/)) {

        resultSpeaker.innerHTML = 'Sim senhor';

        setTimeout(function () {

          // myRecognition.start();

        }, 2000);
      }

      if (resultSpeak.match(/você tá legal/)) {

        resultSpeaker.innerHTML = 'Sim senhor';

        setTimeout(function () {

          // myRecognition.start();

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
