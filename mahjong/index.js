
function updateURL() {
  let params = {"tiles": $('#tileSelect').val()};
  updateURLWithParams(params, true);
}

function updateURLWithParams(paramsToUpdate, doReplace) {
  const url = new URL(window.location);
  for (const [param, val] of Object.entries(paramsToUpdate)) {
    if (val != undefined && (!val.trim || val.trim() !== "")) {
      url.searchParams.set(param, val);
    }
    else {
      url.searchParams.delete(param);
    }
  }
  updateURLTo(url, doReplace);
}

function updateURLTo(newURL, doReplace) {
  if (doReplace) {
    console.log(Date.now() + " [replaced] " + newURL.searchParams);
    history.replaceState({}, "", newURL);
  }
  else {
    console.log(Date.now() + " [pushed] " + newURL.searchParams);
    history.pushState({}, "", newURL);
  }
}

window.onpopstate = function(e) {
  const url = new URL(window.location);
  console.log(Date.now() + " [popped] " + url.searchParams);
  setStateFromURL(e);
};

function setStateFromURL(e) {
  const urlParams = new URLSearchParams(window.location.search);
  setStateFromParams(urlParams, e);
}

function setStateFromParams(urlParams, e) {
  if (urlParams.has("tiles")) {
    let param = urlParams.get("tiles");
    if (["13", "14", "16"].includes(param)) {
      $('#tileSelect').val(param);
      tileSelectChange();
    }
  }
}

function tileSelectChange() {
  if ($('#tileSelect').val() == "13") {
    $('.not14').removeClass("hidden");
    $('.only14').addClass("hidden");
    $('.not16').removeClass("hidden");
    $('.only16').addClass("hidden");
  }
  if ($('#tileSelect').val() == "14") {
    $('.not14').addClass("hidden");
    $('.only14').removeClass("hidden");
    $('.not16').removeClass("hidden");
    $('.only16').addClass("hidden");
  }
  if ($('#tileSelect').val() == "16") {
    $('.not14').removeClass("hidden");
    $('.only14').addClass("hidden");
    $('.not16').addClass("hidden");
    $('.only16').removeClass("hidden");
  }
}

$(document).ready(function () {
  setStateFromURL();
  $('#tileSelect').change(function () {
    tileSelectChange();
    updateURL();
  })
})