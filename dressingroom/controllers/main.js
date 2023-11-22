document.querySelectorAll("#ao .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("bikinitop", imgUrl);
  });
});

document.querySelectorAll("#quan .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("bikinibottom", imgUrl);
  });
});

document.querySelectorAll("#giay .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("feet", imgUrl);
  });
});

document.querySelectorAll("#tuixach .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("handbag", imgUrl);
  });
});

document.querySelectorAll("#daychuyen .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("necklace", imgUrl);
  });
});

document.querySelectorAll("#kieutoc .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("hairstyle", imgUrl);
  });
});

document.querySelectorAll("#nen .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("background", imgUrl);
  });
});

function showInContain(itemClass, imgUrl) {
  var item = document.querySelector("." + itemClass);
  item.style.backgroundImage = 'url("' + imgUrl + '")';
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
}
