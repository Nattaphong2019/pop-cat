const changeImgPopCat = () => {
  let popCat = document.getElementById("cat_img");
  let countPop = document.getElementById("count_pop");
  let i = 0;
  popCat.onmousedown = () => {
    i = i + 1;
    popCat.src = "images/cat-pop.png";
    countPop.innerHTML = i;
  };
  popCat.onmouseup = () => {
    popCat.src = "images/cat.png";
  };
};

changeImgPopCat();
