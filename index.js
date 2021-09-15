// // Remove the transition class
// const square = document.querySelector('.content');
// square.classList.remove('cards');

// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       square.classList.add('cards');
//       return;
//     }

//     square.classList.remove('cards');
//   });
// });

// observer.observe(document.querySelector('.content-4'));