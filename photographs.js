var photoApp = {
    myPhotoArray: [],

    initialize: function() {
        console.log("==initialize==");
        photoApp.activateInterface();
    },
    activateInterface: function() {
        console.log("==activateInterface==");
        var saveButtonEl = document.getElementById("saveButton");
        console.log("saveButton", saveButton);
        saveButtonEl.addEventListener("click", photoApp.saveNewPhoto);
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
        photoApp.makePhotoList(photoApp);
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
    }

}
photoApp.initialize();
