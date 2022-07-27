(function () {


  var speakBtn = document.querySelector('#speakbt');
  var resultSpeaker = document.querySelector('#resultSpeak');
  var naoOuvi = new Audio('../accets/media/audio/voz/naoOuvi.mp3');
  var umMinuto = new Audio('../accets/media/audio/voz/umMinuto.mp3');
  var voceSabeCantar = new Audio('../accets/media/audio/voz/voceSabeCantar.mp3');
  var simSenhor = new Audio('../accets/media/audio/voz/simSenhor.mp3');
  var voceFazOque = new Audio('../accets/media/audio/voz/voceFazOque.mp3');
  var oiSenhor = new Audio('../accets/media/audio/voz/oiSenhor.mp3');
  var estouAquiSenhor = new Audio('../accets/media/audio/voz/estouAquiSenhor.mp3');
  var bemVindoSenhor = new Audio('../accets/media/audio/voz/bemVindoSenhor.mp3');
  

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var myRecognition = new SpeechRecognition();

    myRecognition.lang = 'pt-BR';

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
          umMinuto.play();
          var resultado = resultSpeak.split('buscar por');
          window.location.href = 'https://www.google.com.br/search?q=' + resultado[1];

        }, 2000);
      }
      
      if (resultSpeak.match(/O que é/)) {

        resultSpeaker.innerHTML = 'Sim senhor';

        setTimeout(function () {
          umMinuto.play();
          var resultado = resultSpeak.split('O que é');
          window.location.href = 'https://www.google.com.br/search?q=O+que+é' + resultado[1];

        }, 2000);
      }
      
      if (resultSpeak.match(/Olá/)) {

        resultSpeaker.innerHTML = 'oi';

        setTimeout(function () {
          oiSenhor.play();
        }, 2000);
      }
      
      if (resultSpeak.match(/Aurora/)) {

        resultSpeaker.innerHTML = '...';

        setTimeout(function () {
          estouAquiSenhor.play();
        }, 2000);
      }
      
      if (resultSpeak.match(/você faz o quê/)) {

        resultSpeaker.innerHTML = '...';

        setTimeout(function () {
          voceFazOque.play();
        }, 2000);
      }
      
      if (resultSpeak.match(/Você sabe cantar/)) {

        resultSpeaker.innerHTML = '...';

        setTimeout(function () {
          voceSabeCantar.play();
        }, 2000);
      }

    },
      false);

    myRecognition.addEventListener('error',
      function (evt) {
        naoOuvi.play();
        resultSpeaker.innerHTML = 'Se você disse alguma coisa, não ouvi muito bem!';
      },
      false);

  } else {
    resultSpeaker.innerHTML = 'Seu navegador não suporta tanta tecnoligia!';
  }

})();