M.AutoInit();

const sectionContent = $(".sectionContent");
const sectionList = $(".sectionList");
const title = $(".titleButtons");

screenSizeAdj = () => {
    if ($(window).width() < 990) {
        sectionContent.addClass("center-align");
        sectionList.addClass("narrowList");
        title.removeClass("valign-wrapper");
    } else {
        sectionContent.removeClass("center-align");
        sectionList.removeClass("narrowList");
        title.addClass("valign-wrapper");
    }
};

$(document).ready(function() {
    screenSizeAdj();
    $(window).resize(function() {
        screenSizeAdj();
    });
});


// calculator
// click events for buttons
// get what number was clicked
// combine numbers into one number before an operator is clicked
// show numbers on the page after they are clicked
// do the opertion on the two numbers
// display the result on the page