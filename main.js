

	const loadBtn = document.querySelector(".json-load");
	
	const searchInputJson = document.querySelector(".json-input");
	
	const resultsContainerUser = document.querySelector(".json-results");


	loadBtn.addEventListener("click", function (evt) {
		evt.preventDefault();
	const id = searchInputJson.value.trim().toLowerCase();
		axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
			.then((data) =>  { console.log(data.data);
				for (let key in data.data) {
					const value = data.data[key];
					(resultsContainerUser.innerHTML =
						`<div class="response-container">
							<p> id: <span>${value.id}</span><p>
							<p> Website: <span>${value.website}</span><p>
							<p> Имя: <span>${value.name}</span><p>
							<p> Фамилия: <span>${value.username}</span><p>
							<p> Email: <span>${value.email}</span><p>
						</div>`)
					}	
				})
	});






























/* let loadBtn = document.querySelector("js-load");
let resultsContainer = document.querySelector("js-results"); 


  loadBtn.addEventListener("click", function (evt) {
	evt.preventDefault();

	
	axios.get(`https://jsonplaceholder.typicode.com/posts`)
		
			.then(data => { for (let key in data.data) {
				const res = data.data[key];
				console.log(res.userId);
				console.log(res.id);
				console.log(res.title);
				console.log(res.body);
				(resultsContainer.innerHTML = `<div class="response-container">
					<img src="${data.data[key].userId}">
					<p> Имя: <span>${data.data[key].id}</span><p>
					<p> О себе: <span>${data.data[key].title}</span><p>
					<p> Кол-во репозиториев: <span>${data.data[key].body}</span><p>
				</div>`)
			}
			}) 
	});

*/

	


		