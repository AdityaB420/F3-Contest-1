function startPromiseChain() {
    PromiseAPI1()
      .then(result => {
        if (result) {
          return PromiseAPI2();
        }
      })
      .then(result => {
        if (result) {
          return PromiseAPI3();
        }
      });
  }

  function PromiseAPI1() {
    return new Promise(resolve => {
      setTimeout(() => {
        fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(data => {
            const table = document.createElement("table");
            const headerRow = table.insertRow();
            for (const key in data.posts[0]) {
            const headerCell = document.createElement("th");
            const headerText = document.createTextNode(key);
            headerCell.appendChild(headerText);
            headerRow.appendChild(headerCell);
            }
            for (const post of data.posts) {
            const row = table.insertRow();
            for (const key in post) {
                const cell = row.insertCell();
                const text = document.createTextNode(post[key]);
                cell.appendChild(text);
            }
            }
            const tableContainer = document.getElementById("table-container-1");
            tableContainer.appendChild(table);
            resolve(true);
          });
      }, 1000);
    });
  }

  function PromiseAPI2() {
    return new Promise(resolve => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
            const table = document.createElement("table");
            const headerRow = table.insertRow();
            for (const key in data.products[0]) {
            const headerCell = document.createElement("th");
            const headerText = document.createTextNode(key);
            headerCell.appendChild(headerText);
            headerRow.appendChild(headerCell);
            }
            for (const product of data.products) {
            const row = table.insertRow();
            for (const key in product) {
                const cell = row.insertCell();
                const text = document.createTextNode(product[key]);
                cell.appendChild(text);
            }
            }
            const tableContainer = document.getElementById("table-container-2");
            tableContainer.appendChild(table);
            resolve(true);
          });
      }, 2000);
    });
  }

  function PromiseAPI3() {
    return new Promise(resolve => {
      setTimeout(() => {
        fetch('https://dummyjson.com/todos')
          .then(response => response.json())
          .then(data => {
            const table = document.createElement("table");
            const headerRow = table.insertRow();
            for (const key in data.todos[0]) {
            const headerCell = document.createElement("th");
            const headerText = document.createTextNode(key);
            headerCell.appendChild(headerText);
            headerRow.appendChild(headerCell);
            }
            for (const todos of data.todos) {
            const row = table.insertRow();
            for (const key in todos) {
                const cell = row.insertCell();
                const text = document.createTextNode(todos[key]);
                cell.appendChild(text);
            }
            }
            const tableContainer = document.getElementById("table-container-3");
            tableContainer.appendChild(table);
            resolve(true);
          });
      }, 3000);
    });
  }