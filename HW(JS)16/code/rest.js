const tbody = document.querySelector("tbody");
const rest = JSON.parse(localStorage.BDRest);

function createElementTable (rest) {
   return rest.map((el, i) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td title="${el.dishIngredients}">${el.productName}</td>
            <td title="При настиску сортувати.">${el.dishPrice} грн.</td>
            <td>&#128397;</td>
            <td>${el.stopList ? "&#9989;" : "&#10060;"}</td>
            <td>${el.date}</td>
            <td>&#128465;</td>
        </tr>
        `;
   }).join("")
}

tbody.insertAdjacentHTML("beforeend", createElementTable(rest))





