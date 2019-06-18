// $.ajax({
//     url: "https://pnpninja-daily-comicstrips-v1.p.rapidapi.com/getComicLinks",
//     method: "GET"
// })
// .then(res => {
//     console.log(res);
// })



// var queryURL = apiUrl + "?bottom=" + bottomText + "&font=" + font + "&font_size=" + fontSize + "&meme=" + meme + "&top=" + topText;

// $.ajax({
//     url: queryURL,
//     method: "GET",
//     headers: {
//         "X-Mashape-Key": "jCuQ07buCmmshB86bfe7bGRUwQOEp1TxvzWjsnsnNSN16soTiH",
//         "Accept": "text/plain"
//     },
// }).then(function (response) {
//     // console.log(response);
//     $("#cMeme").html("<img src = 'http://apimeme.com/meme?meme=" + meme + "&top=" + topText + "&bottom=" + bottomText + "&test=1'>")

// });

// // Delete Meme Comments

// $(document).on('click', '.delete', function () {
//     var memeKey = $(this).attr('data-train');
//     database.ref(memeKey).remove();
//     $("#" + memeKey).remove();

//     var index = commentArray.findIndex(x => x.memeId==memeKey);
//     console.log(index);
//     if (index > -1) {
//         commentArray.splice(index, 1);
//     }
// });

// Click Show All button to show all User Memes posted so far

// $(document).on("click", "#showAll", function (e) {

//     var n = commentArray.length - 1

//     $("#uMeme").empty();

//     for (var i = n; i > -1; i--) {
//         $("#uMeme").append("<div id='" + commentArray[i].memeId + "'><hr><h5><b>" + commentArray[i].name + " says on <span id='timeSpan'>" + commentArray[i].time
//             + "                    </b><i class='material-icons delete' data-train='" + commentArray[i].memeId +
//             "' style='font-size:25px; color: red'>close</i></span></h5><img src='http://apimeme.com/meme?meme="
//             + commentArray[i].mName + "&top=" + commentArray[i].topTxt + "&bottom=" + commentArray[i].bottomTxt + "&test=1'</img></div>");
//     }

// });

// $(document).on("click", "#commentSub", function (e) {
//     e.preventDefault();
//     name = $("#name").val().trim();
//     topTxt = $("#topText").val();
//     bottomTxt = $("#bottomText").val();
//     // console.log(mName);
//     // console.log(name);
//     // console.log(topTxt)

//     if (name && topTxt && bottomTxt && mName) {
//         database.ref().push({
//             name: name,
//             mName: mName,
//             topTxt: topTxt,
//             bottomTxt: bottomTxt,
//             time: timeStamp()
//         });
//     }
//     $("#name").val("");
//     $("#topText").val("");
//     $("#bottomText").val("");
//     $("#memeImageName").val($("#memeImageName").data("default-value"));

//     mName = "";
//     name = "";
//     topTxt = "";
//     bottomTxt = "";

//     appendUserMeme()

//     console.log(commentArray);
// });

// $.getJSON("meme-images.json", function (json2) {
//     // console.log(json2);
//     for (var i = 0; i < json2.length; i++) {
//         memeName = json2[i];
//         $("#memeImageName").append("<option value='" + memeName + "'>" + memeName + "</option>");
//     }
// });

// var mName = "";
// var name = "";
// var topTxt = "";
// var bottomTxt = "";
// var memeId = "";

// $("#memeImageName").change(function () {
//     mName = $(this).children(":selected").attr("value");
// });