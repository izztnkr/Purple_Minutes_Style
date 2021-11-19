// const { response } = require("express");
const description = document.getElementsByClassName("description");

async function editorialData(event) {
  event.preventDefault();

  const response = await fetch("/dashboard/editorial", {
    method: "POST",
    body: JSON.stringify({
      id,
      production_name,
      production_type,
      production_dates,
      production_link,
      production_description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// const filmText = await response.json;

//   document.getElementsByClassName('filmText').src = data;
// .catch(error => {
//   console.log('error!');
//   console.error(error);
// });

//   const film_text = document.querySelector('textarea[name="comment-body"]').value.trim();
//   const post_id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];

//   if (comment_text) {
//     const response = await fetch('/api/comments', {
//       method: 'POST',
//       body: JSON.stringify({
//         id,
//         production_name,
//         production_type,
//         production_dates,
//         production_link,
//         production_description
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
//   }
// }
console.log("event listener was CLICKED!");
document.querySelector(".editorial").addEventListener("click", editorialData);
