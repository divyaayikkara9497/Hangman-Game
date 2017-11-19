var wordBank = ["wizard" , "wand" , "potter"];
			var wins = 0;
			var loss = 0;
			var wrongLetter = [];
			var correctGuess = 0;
			var guessLetter = 10;
			var underScores = [];
			var userGuess;
			var randomWord;
			var winCounter = 0;

			function startgame() {
				randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
				

				for (var i = 0; i < randomWord.length; i++) {
					underScores.push(" _ ");
					
				}


				document.getElementById("word").innerHTML = underScores.join(" ");
				
			}


			document.getElementById("word").innerHtml = guessLetter;


			document.onkeyup = function(event) 
			{	
				userGuess = event.key;
				
				if (randomWord.indexOf(userGuess) > -1) 
				{
					for (var i = 0; i < randomWord.length; i++) 
					{
						if(randomWord[i] == userGuess) 
						{
							//correctGuess.push(userGuess);
							//document.getElementById("word").innerHTML = correctGuess;
							underScores[i] = userGuess;
							document.getElementById("word").innerHTML = underScores.join(" ");
							correctGuess ++;
							winlose();

						}	
					}
				}

				else {
					wrongLetter.push(userGuess);
					document.getElementById("wrong").innerHTML = wrongLetter.join(" ");
					guessLetter--;
					document.getElementById("lives").innerHTML = (guessLetter);
					winlose();
				}
			}

			function winlose() {

				if (correctGuess === randomWord.length) {
					winCounter++;
					document.getElementById("wins").innerHTML = (winCounter);
					 alert("Yer a wizard!");
					 startgame();
				}

				else if (guessLetter === 0) {
					alert("You lost muggle!");
					startgame();
				}
			}


		startgame();

		winlose();
