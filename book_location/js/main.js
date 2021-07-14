const url = "https://ghost-test-server.herokuapp.com/api/item/book/";
const getBook = document.querySelector("#getBook");
const html = document.querySelector(".pageContainer");
getBook.addEventListener("click", function () {
  const church = document.querySelector("#viewClick");
  const churchName = church.innerHTML;
  fetch(url + `${churchName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (!data.length) {
        html.innerHTML = `
        <div class="main-container">
      <div class="left-container">
        <div class="title-container">
          <div class="church">
            <p>${churchName}</p>
          </div>
          <div class="link">
            <a href="/book_location.html">Look for anthor church?</a>
          </div>
        </div>
      </div>
  
        <div class="right-container">
          <div class="list-container">
            <div class="content content-row-1">
              <p>It's Empty!!</p>
            </div>
            </div>
        </div>
        </div>`;
        return;
      }
      let htmlSegment = `    <div class="main-container">
      <div class="left-container">
        <div class="title-container">
          <div class="church">
            <p>${churchName}</p>
          </div>
          <div class="link">
            <a href="/book_location.html">Look for anthor church?</a>
          </div>
        </div>
      </div>

      <div class="right-container">
        <div class="list-container">
          <div class="content content-row-1">
            <p>ALL BOOK</p>
          </div>
          <div class="list">`;
      let index = 0;
      while (index < data.length) {
        if (index + 1 < data.length) {
          htmlSegment += `<div class="list-row">
            <div class="list-row-item">
              <div class="list-item-left">
                <div class="item">
                  <div class="img">
                    <img src="${data[index].image}" alt="" />
                  </div>
                  <div class="content">
                    <p>NAME: ${data[index].name}</p>
                    <p class="grayContent">Content: ${data[index].content}</p>
                  </div>
                </div>
              </div>
              <div class="list-item-right">
                <div class="item">
                  <div class="img">
                  <img src="${data[index + 1].image}" alt="" />
                  </div>
                  <div class="content">
                  <p>NAME: ${data[index + 1].name}</p>
                  <p class="grayContent">Content: ${data[index + 1].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
          index += 2;
        } else {
          htmlSegment += `<div class="list-row">
            <div class="list-row-item">
              <div class="list-item-left">
                <div class="item">
                  <div class="img">
                    <img src="${data[index].image}" alt="" />
                  </div>
                  <div class="content">
                    <p>NAME: ${data[index].name}</p>
                    <p class="grayContent">Content: ${data[index].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
          index += 1;
        }
      }
      htmlSegment += `</div></div>`;
      html.innerHTML = htmlSegment;
    });
});
