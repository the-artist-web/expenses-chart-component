/**
 * push json
 */
const pushJson = document.querySelector("[data-push-json]");

pushJson.innerHTML = `
<li class="box-item-zena">
    <button class="item-zena item-zena-1"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-2"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-3"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-4"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-5"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-6"></button>
    <p class="text-bottom-zena"></p>
</li>
<li class="box-item-zena">
    <button class="item-zena item-zena-7"></button>
    <p class="text-bottom-zena"></p>
</li>
`;

fetch("./assets/json/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        pushJson.innerHTML = ``;

        let i = 1;

        data.forEach(item => {
            pushJson.innerHTML += `
            <li class="box-item">
                <p class="box-title">${item.amount}</p>
                <button class="item item-${i++}"></button>
                <p class="text-bottom">${item.day}</p>
            </li>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
