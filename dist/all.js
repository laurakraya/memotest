const AmountOfCardsbyLvl=[6,12,20],grid=document.querySelector(".grid"),currentLvl=1,card=document.createElement("div");card.classList.add("card");const cardBack=document.createElement("img");cardBack.src="./app/img/question-mark.png",card.appendChild(cardBack),console.log(card);let deck=[];for(let c=0;c<AmountOfCardsbyLvl[1];c++)deck.push("https://api.adorable.io/avatars/"+c);(deck=deck.concat(deck).sort(function(){return.5-Math.random()})).forEach(function(c){const d=document.createElement("div");d.classList.add("card");const e=document.createElement("img");e.src="./app/img/question-mark.png",e.classList.add("card__side"),e.classList.add("card__side--back");const a=document.createElement("img");a.src=c,a.classList.add("card__side"),a.classList.add("card__side--front"),d.appendChild(e),d.appendChild(a),grid.appendChild(d)}),console.log(deck);let cards=document.querySelectorAll(".card");cards.forEach(function(c){c.addEventListener("click",function(){c.classList.toggle("card--flipped")})});