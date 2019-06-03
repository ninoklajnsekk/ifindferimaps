//Android
//var GetZaposleniUri = "http://10.0.2.2:8000/zaposleni";
//browser
var GetZaposleniUri = "http://localhost:8000/zaposleni";

var storage = window.localStorage;
$(document).ready(function () {
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

  $(searchTextField).on('keyup', getZaposleni)
  getJSONZaposleni("");
});

function getZaposleni() {
  var searchString = $(searchTextField).val();
  getJSONZaposleni(searchString);
}

function getJSONZaposleni(ss) {
  $.ajax(GetZaposleniUri, {
    beforeSend: function (xhr) {
      console.log('Pred');
    },
    complete: function () {
      console.log('Po');
    },
    contentType: 'application/json',
    dataType: 'json',
    async: true,
    type: 'GET',
    crossDomain: true,
    error: function (xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      //alert(xhr.responseText);
      console.log(xhr.status);
      console.log(thrownError);
    },
    success: function (data, status) {
      console.log('Rezultat iz baze');
      console.log(JSON.stringify(data))
      if (storage.getItem("lang") === "en") {
        const en = "en";
        data = data.filter(item => en.includes(item.lang))
      } else if (storage.getItem("lang") === "slo") {
        const en = "sl";
        data = data.filter(item => en.includes(item.lang))
      }
      var filtered_data = filterValuePart(data, ss);
      var tabela = null;
      if (filtered_data.length > 0) {
        tabela = Handlebars.compile($(ustvariTabelo).html());
      } else {
        tabela = Handlebars.compile($(ustvariTabeloEn).html());
      }
      var res = tabela(filtered_data);
      $(content).html(res);
    }
  });
}

function filterValuePart(arr, part) {
  part = part.toLowerCase();

  return arr.filter(function (obj) {
    return Object.keys(obj)
      .some(function (k) {
        return String(obj[k]).toLowerCase().indexOf(part) !== -1;
      });
  });
}

function saveLocationId(id) {
  console.log(id);
  storage.setItem("locationId", id);
  window.location.href = 'index.html';
}