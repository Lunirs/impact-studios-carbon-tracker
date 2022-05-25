var requestOptions = {
  method: "GET",
};

var params = {
  api_token: "TNPak6m6ig7UHDYZQqczuFZHKtzZBIGaIgx8DZ8q",
  categories: "general,tech",
  search: "climate change",
  limit: "100",
};

var esc = encodeURIComponent;
var query = Object.keys(params)
  .map(function (k) {
    return esc(k) + "=" + esc(params[k]);
  })
  .join("&");

fetch(`https://api.thenewsapi.com/v1/news/all?${query}${requestOptions}`)
  .then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    for (i = 0; i < 5; i++) {
      articleImg = data.data[i].image_url;
      articleTitle = data.data[i].title;
      articleSnippet = data.data[i].snippet;
      articleURL = data.data[i].url;

      var cardRow = $("<div>");
      cardRow.addClass("row");
      var cardCol = $("<div>");
      cardCol.addClass("col s12 m7");
      var card = $("<div>");
      card.addClass("card");
      card.attr("data-aos", "flip-up");
      var cardImgContainer = $("<div>");
      var cardImg = $("<img>").attr("src", `${articleImg}`);
      cardImg.attr("id", "card-img");
      var cardTitle = $("<span>").text(`${articleTitle}`);
      cardTitle.addClass("card-title");
      var cardContentContain = $("<div>");
      cardContentContain.addClass("card-content");
      var cardContent = $("<p>").text(`${articleSnippet}`);
      var cardActionContain = $("<div>");
      var cardAction = $("<a>")
        .attr("href", `${articleURL}`)
        .attr("target", "blank")
        .text(`Click here to read more!`);

      cardImg.appendTo(cardImgContainer);
      cardTitle.appendTo(cardImgContainer);
      cardAction.appendTo(cardActionContain);
      cardContent.appendTo(cardContentContain);
      cardImgContainer.appendTo(card);
      cardContentContain.appendTo(card);
      cardActionContain.appendTo(card);
      card.appendTo(cardCol);
      card.appendTo(cardRow);
      cardRow.appendTo($("#card-container"));
    }
  });

AOS.init();
