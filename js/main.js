

	(function GetWinner(){ //immediatelyinvoked function
	this.players = [];

	this.init = function(){
		this.addPlayers();
		this.getRandomUser();
		this.runAgain();
		this.startAgain();
		this.winningPrize();
		this.showRandomUser();
	};

	
	this.showList = function(){ // to show the players list that user input
		var parent = document.querySelector('.player_list_wrapper');
		var template = '';

		for(var i= 0; i < players.length; i++){
				template += '<span class="name-tag" data-id = "+i+">'+players[i]+'</span>';

			}

			parent.innerHTML = '';
			parent.insertAdjacentHTML('afterbegin', template);
			deleteOne();
	}

	this.addPlayers = function(){ // add the players in the list

		function generateList(input){
			var value = input.value;

			if(this.checkValid(value.toLowerCase())){
				players.push(value.toLowerCase());
				input.value = '';
				showList();
			}else{
				alert('Something is wrong')
			}
			
		}

		var addBtn = document.querySelector('#add_player');

        addBtn.addEventListener('click',function(e){
            var input = document.querySelector('#player_value');
            generateList(input);
        });
	};

	this.checkValid = function(value){

		if(players.indexOf(value)< 0 && value != ''){
			return true;
		}
		return false;
	};

	this.deleteOne = function(){ //delete the player that we don't want to participate
		var item = document.querySelectorAll('.name-tag');

		function removeIt(element){

			var attr = parseInt(element.getAttribute('.data-id'));

			players.splice(attr,1);

			showList();
		}

		for(var i= 0; i <item.length; i++){

			item[i].addEventListener('click',function(e){
				removeIt(this)
			});
		}
	};


	this.getRandomUser = function(){ // select randomplayer as winner

		var resultsButton = document.querySelector('#show_results');

			function showWinner(){
				var resultsContainer = document.querySelector('.results_container');
            	var playerContainer = document.querySelector('.player_container');

            playerContainer.className += ' hidden';
			resultsContainer.className = ' results_container';

			showRandomUser();
		}

		resultsButton.addEventListener('click', function(e){
			if(players.length > 1){
				showWinner();

			}

		});

	};


	this.showRandomUser = function(){ //show the winner in the second container
		var resultContainer = document.querySelector('.result');
		var rand = players[Math.floor(Math.random() * players.length)];

		resultContainer.innerHTML = '';
		resultContainer.insertAdjacentHTML('afterbegin', '<h3>'+ rand +'</h3>');
	};

	this.runAgain = function(){ //randomize the list again and choose another winner
		var runAgainBtn = document.querySelector('.run_again');

		runAgainBtn.addEventListener('click', function(e){
			showRandomUser();

		})
		};


		this.winningPrize = function(){ // show the reward on the next page
		var winningPrize = document.querySelector('.winning_prize');
		winningPrize.addEventListener('click', function(e){
			var prizeContainer = document.querySelector('.prize_container');
			var resultsContainer = document.querySelector('.results_container');
            var playerContainer = document.querySelector('.player_container');

            prizeContainer.className = ' prize_container';
            playerContainer.className = ' player_container hidden';
			resultsContainer.className = ' results_container hidden';
		

	

		});	

	}

		this.startAgain = function(){ // start the game all over again
			var startAgain = document.querySelector('.start_again');
			startAgain.addEventListener('click', function(e){
			var prizeContainer = document.querySelector('.prize_container');
            var playerContainer = document.querySelector('.player_container');
            var playersWrapper = document.querySelector('.player_list_wrapper');


            prizeContainer.className = ' prize_container hidden';
            playerContainer.className = ' player_container';
			playersWrapper.innerHTML = '';

			players = [];


		});
		
	};

	this.init();
}) ();
