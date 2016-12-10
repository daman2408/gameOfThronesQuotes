
//GET quotes
var octopus = {

  getQuoteDivHeight: function() {
    var quoteDivHeight = document.getElementById('quoteDiv').scrollHeight;
    return quoteDivHeight;
  },

  getMastHeadHeight: function() {
    var mastHeadHeight = document.getElementById('masthead').scrollHeight;
    return mastHeadHeight;
  },

  getButtonDivHeight: function() {
    var buttonDiv = (document.getElementById('theButtonDiv').clientHeight);
    return buttonDiv;
  }

};

//set screen height of the body depending on width of the viewport
var setBodyHeight = function() {
  if (window.innerWidth < 769) {

    var mastfootHeight = document.getElementById('mastfoot').scrollHeight;
    var realPageHeight = octopus.getMastHeadHeight() + octopus.getQuoteDivHeight() + octopus.getButtonDivHeight() + mastfootHeight + 40;

    document.body.style.height = realPageHeight + "px";
  } else {
    document.body.style.height = "100%"
  };
};

window.addEventListener('resize', setBodyHeight);


function displayQuote() {


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://got-quotes.herokuapp.com/quotes"); //returns a random quote from single character
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var quoteObject = JSON.parse(xhr.responseText),
                quote = quoteObject.quote,
                author = quoteObject.character;
                document.getElementById('quoteDiv').innerHTML = "<p>" + "\"" + quote + "\"" + "</p>" + "\n" + "<p>" + author + "</p>";

                switch (author) {
                    case 'Bran':
                        document.body.removeAttribute('class');
                        document.body.classList.add('bran');
                        break;

                    case 'Bronn':
                        document.body.removeAttribute('class');
                        document.body.classList.add('bronn');
                        break;

                    case 'Brynden Tully':
                        document.body.removeAttribute('class');
                        document.body.classList.add('brynden');
                        break;

                    case 'Cersei and Tyrion':
                        document.body.removeAttribute('class');
                        document.body.classList.add('cerseiTyrion');
                        break;

                    case 'Cersei Lannister':
                        document.body.removeAttribute('class');
                        document.body.classList.add('cersei');
                        break;

                    case 'Daenerys':
                        document.body.removeAttribute('class');
                        document.body.classList.add('daenarys');
                        break;

                    case 'Davos':
                        document.body.removeAttribute('class');
                        document.body.classList.add('davos');
                        break;

                    case 'The Hound':
                        document.body.removeAttribute('class');
                        document.body.classList.add('hound');
                        break;

                    case 'Jaime Lannister':
                        document.body.removeAttribute('class');
                        document.body.classList.add('jaime');
                        break;

                    case 'Jon Snow':
                        document.body.removeAttribute('class');
                        document.body.classList.add('jon');
                        break;

                    case 'Littlefinger':
                        document.body.removeAttribute('class');
                        document.body.classList.add('littlefinger');
                        break;

                    case 'Lord Rodrik':
                        document.body.removeAttribute('class');
                        document.body.classList.add('lordRodrik');
                        break;

                    case 'Olenna Tyrell':
                        document.body.removeAttribute('class');
                        document.body.classList.add('olenna');
                        break;

                    case 'Quaithe':
                        document.body.removeAttribute('class');
                        document.body.classList.add('quaithe');
                        break;

                    case 'Renly Baratheon':
                        document.body.removeAttribute('class');
                        document.body.classList.add('renly');
                        break;

                    case 'Samwell':
                        document.body.removeAttribute('class');
                        document.body.classList.add('sam');
                        break;

                    case 'Sansa':
                        document.body.removeAttribute('class');
                        document.body.classList.add('sansa');
                        break;

                    case 'Tyrion':
                        document.body.removeAttribute('class');
                        document.body.classList.add('tyrion');
                        break;

                    case 'Varys':
                        document.body.removeAttribute('class');
                        document.body.classList.add('varys');
                        break;

                    case 'Victarion Greyjoy':
                        document.body.removeAttribute('class');
                        document.body.classList.add('victarion');
                        break;


                    default:
                        document.body.removeAttribute('class');
                        document.body.classList.add('gameOfT');

                };

                  setBodyHeight();

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);

};

requestAnimationFrame(displayQuote);

document.getElementById('quoteButton').addEventListener('click', function(e) {
  e.preventDefault();
  displayQuote();
});
