const likeButton = document.querySelector('.like-button');
const maskReact = document.querySelector('.emoji');

likeButton.addEventListener('mouseenter', e => {
  maskReact.style.transform = "scale(1)";
  });

  maskReact.addEventListener('mouseenter', e => {
    maskReact.style.transform = "scale(1.1)";
    });
    maskReact.addEventListener('mouseleave', e => {
      maskReact.style.transform = "scale(0)";
      });
  likeButton.addEventListener('mouseleave', e => {
    maskReact.style.transform = "scale(0)";
    });


