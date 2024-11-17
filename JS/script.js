$("document").ready(documentReady);

function documentReady() {
  $(".box").click(popup);
  $(".closeBtn").click(closePopup);
}

function popup(e) {
  var data = $.getJSON("itemInfo.json", jsonLoaded);

  function jsonLoaded(data) {
    var projectsData = data[0].projects;
    var personalPortfolioData = data[0].personalPortfolio;

    var clickedItemAttr = $(e.currentTarget).attr("class");

    if (clickedItemAttr.includes("project")) {
      for (var i = 0; i < projectsData.length; i++) {
        var project = projectsData[i];

        var projectName = project.name;
        var projectDuration = project.duration;
        var projectTeam = project.team;
        var projectTools = project.tools;
        var projectURL = project.URL;
        var projectTrailer = project.trailer;
        var projectDescription = project.description;

        if (clickedItemAttr.includes("project" + i)) {
          console.log(projectName);
          for (var j = 0; j < project.images.length; j++) {
            var projectImage = project.images[j];

            $(".img" + j).attr("src", projectImage);
          }
          $(".popupHeader h2").html(projectName);

          $(".popupInfo h3 p.duration").html(projectDuration);
          $(".popupInfo h3 p.team").html(projectTeam);
          $(".popupInfo h3 p.tools").html(projectTools);
          $(".popupInfo h3 p.URL").html(projectURL);
          if(projectTrailer != ""){
            $("#radio1").prop("checked", true);
            $("label[for='radio1']").show();
            $(".imageSlider div.first iframe").attr("src", projectTrailer);
          }
          else {
            $("#radio2").prop("checked", true);
            $("label[for='radio1']").hide();
            $(".imageSlider div.first iframe").attr("src", projectTrailer);
          }
          $(".popupInfo h3 p.description").html(projectDescription);

          $(".popup").prop("open", true);
        }
      }
    }

    if (clickedItemAttr.includes("item")) {
      for (var i = 0; i < personalPortfolioData.length; i++) {
        var item = personalPortfolioData[i];

        var itemName = item.name;
        var itemDuration = item.duration;
        var itemTeam = item.team;
        var itemTools = item.tools;
        var itemURL = item.URL;
        var itemTrailer = item.trailer;
        var itemDescription = item.description;

        if (clickedItemAttr.includes("item" + i)) {
          console.log(item);

          for (var j = 0; j < item.images.length; j++) {
            var itemImage = item.images[j];

            $(".img" + j).attr("src", itemImage);
          }

          $(".popupHeader h2").html(itemName);

          $(".popupInfo h3 p.duration").html(itemDuration);
          $(".popupInfo h3 p.team").html(itemTeam);
          $(".popupInfo h3 p.tools").html(itemTools);
          $(".popupInfo h3 p.URL").html(itemURL);
          if(itemTrailer != ""){
            $("#radio1").prop("checked", true);
            $("label[for='radio1']").show();
            $(".imageSlider div.first iframe").attr("src", itemTrailer);
          }
          else {
            $("#radio2").prop("checked", true);
            $("label[for='radio1']").hide();
            $(".imageSlider div.first iframe").attr("src", itemTrailer);
          }
          $(".popupInfo h3 p.description").html(itemDescription);

          $(".popup").prop("open", true);
        }
      }
    }
  }
}

function closePopup() {
  $(".popup").prop("open", false);
}
