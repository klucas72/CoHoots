// var deleteDesignHandler = async (designId) => {
//   await fetch(`/api/designs/${designId}`, {
//     method: "DELETE",
//   });
// };

// var deleteBtnArray = document.querySelectorAll(".delete-btn");
const tshirtEl = $("#tshirt");

tshirtEl.click("delete-btn", function(event) {
  console.log(event.target);
  const buttonDelete = $(event.target);
  const cardId = buttonDelete.attr("id");
  console.log(`My id is ${cardId}`);
  $.ajax({
    url: `/api/designs/${cardId}`,
    type: "DELETE",
  }).then((data) => deleteCard(cardId));
});

const deleteCard = (id) => {
  const cardDelete = $("#design-card-" + id);
  cardDelete.remove();
};
