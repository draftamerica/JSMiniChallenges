var photoApp = {
    myPhotoArray: [
                {title: "basketball", photoLocation: "DC", url: "Basketball.JPG"},
                {title: "hockey", photoLocation: "Florida", url: "Hockey.jpeg"},
                {title: "profile", photoLocation: "LA", url: "Profile.JPG"}
            ],

initialize: function() {
    console.log("==initialize==");
    photoApp.activateInterface();
},

activateInterface: function() {
    console.log("==activateInterface==");
    var saveButtonEl = document.getElementById("saveButton");
    console.log("saveButton", saveButton);
    saveButtonEl.addEventListener("click", photoApp.saveNewPhoto);
    phototitles.addEventListener("click", photoApp.myPhotoArray.title);
},

Photo: function(title, photoLocation, url) {
    console.log("photo");
    this.title = title;
    this.photoLocation = photoLocation;
    this.url = url;
},

saveNewPhoto: function() {
    console.log("==saveNewPhoto==");
    title = document.getElementById("titleinput").value;
    photoLocation = document.getElementById("locationinput").value;
    url = document.getElementById("urlinput").value;
    console.log(title, photoLocation, url);
    var nextPhoto = new photoApp.Photo(title, photoLocation, url);
    console.log("nextPhoto", nextPhoto);
    photoApp.myPhotoArray.push(nextPhoto);
    console.log("photoApp.myPhotoArray", photoApp.myPhotoArray);
    photoApp.makePhotoList();
    photoApp.activatePhotoList();
},

activatePhotoList: function() {
    console.log("==activatePhotoList==");
    var photoClicks = document.getElementById("phototitles").getElementsByTagName("li");
    console.log("photoClicks", photoClicks);
    for (var i = 0; i < photoClicks.length; i++) {
    var nextClickEl = photoClicks[i];
    console.log("nextClickEl", nextClickEl);
    nextClickEl.addEventListener("click", photoApp.displaySelectedPhoto);
    }
},

makePhotoList: function() {
    console.log("==makePhotoList==");
    var nextListItem = " ";
    var phototitles = document.getElementById("phototitles");
    console.log("phototitles", phototitles);
    phototitles.innerHTML = " ";
    for (var i = 0; i < photoApp.myPhotoArray.length; i++) {
    nextPhoto = photoApp.myPhotoArray[i];
    nextTitle = nextPhoto.title;
    nextListItem += "<li id='title_" + i + "'>" + nextTitle + "</li>";
    }
    console.log("nextListItem", nextListItem);
    phototitles.innerHTML = nextListItem;
},

displaySelectedPhoto: function() {
    console.log("== displaySelectedPhoto ==");
    var titleId = event.currentTarget.id;
    console.log(event.currentTarget.id);
    var titleIndex = titleId.indexOf("_") + 1;
    console.log(titleIndex);
    var photoIndex = titleId.substring(titleIndex);
    console.log(photoIndex);
    var selectPhoto = photoApp.myPhotoArray[photoIndex];
    console.log(selectPhoto);
    var photoTags = document.getElementById("photostuff").getElementsByTagName("p");
    console.log(photoTags);
    photoTags[0].innerText = selectPhoto.title;
    photoTags[1].innerText = selectPhoto.photoLocation;
    photoTags[2].innerText = selectPhoto.url;
    console.log("photo");
}

}
photoApp.initialize();
