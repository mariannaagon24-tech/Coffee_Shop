async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appDmyU946vj3VkOZ/Drinks%20Menu",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patn5tGDsb8yyPfMl.4bf6714e06582ed474b31d9b00f9c2a05f76ce77156f21d2675745fc0a92f92c",
      },
    },
  );
  const data = await response.json();
  console.log(data);
  const container = document.getElementById("Drinks");
  container.textContent = data.records[1].fields.Product;
}
getdata();

// for (let i = 0; i< data.recordss.length; i++) {
//     let drinks = data.records[i]. fields["tblbG6B8SiTVFb8IP"];
//     let pastries = data.records[i].fields["Pastries Menu"];

// }
async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appDmyU946vj3VkOZ/Pastries%20Menu",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patn5tGDsb8yyPfMl.4bf6714e06582ed474b31d9b00f9c2a05f76ce77156f21d2675745fc0a92f92c",
      },
    },
  );
  const data = await response.json();
  console.log(data);
  const container = document.getElementById("coxinha");
  container.textContent = data.records[2].fields.Product;
}
getdata();

async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appDmyU946vj3VkOZ/Pastries%20Menu",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patn5tGDsb8yyPfMl.4bf6714e06582ed474b31d9b00f9c2a05f76ce77156f21d2675745fc0a92f92c",
      },
    },
  );
  const data = await response.json();
  console.log(data);
  const container = document.getElementById("brigadeiro");
  container.textContent = data.records[0].fields.Product;
}
getdata();

async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appDmyU946vj3VkOZ/Pastries%20Menu",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patn5tGDsb8yyPfMl.4bf6714e06582ed474b31d9b00f9c2a05f76ce77156f21d2675745fc0a92f92c",
      },
    },
  );
  const data = await response.json();
  console.log(data);
  const container = document.getElementById("bread");
  container.textContent = data.records[4].fields.Product;
}
getdata();
