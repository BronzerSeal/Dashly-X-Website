let third_block_btn = document.querySelectorAll("#third-block-btn");
console.log(third_block_btn);

for (let i = 0; i < third_block_btn.length; i++) {
  third_block_btn[i].addEventListener("click", function () {
    for (let i = 0; i < third_block_btn.length; i++) {
      if (third_block_btn[i].classList.contains("blue_btn")) {
        third_block_btn[i].classList.toggle("blue_btn");
      }
    }
    third_block_btn[i].classList.toggle("blue_btn");
  });
}
