
var photos = [];
    var fileNames=[];
    var imageList= [];
    dTag=[];
    cTag=[];
    var image;
    var openList = "<li>";
    var closeList = "</li>";
    var openCaptionTag = '<p class="caption">';
    var closeCaptiontag = '</p>';
    var openDescTag = '<p class="description" onclick ="descVisible('
    var closeTag = ')">';
    var closeDesctag='</p>';
    var openInfoTag='<p class="info">';
    var closeInfoTag='</p>';
    var caption =[
    	'caption 1',
    	'caption 2',
    	'caption 3',
    	'caption 4',
    	'caption 5',
    	'caption 6',
    	'caption 7',
    	'caption 8',
    	'caption 9',
    	'caption 10',
    ];
    var description=['description1','description2','description3','description4','description5',
    'description6','description7','description8','description9','description10'];

    var info = ['info1','info2','info3','info4','info5','info6','info7','info8','info9','info10'];
    
    for (var i=0;i<10;i++) {
    	fileNames.push("photo"+(i+1));
      // photos.push("<img class='photo lightbox-toggle' src='images/"+fileNames[i]+ ".jpeg'>");
      photos.push("<a href='#/' class='lightbox-toggle'>" + "<img src='images/"+fileNames[i]+".jpeg'>" + "</a>");
      image = openList + photos[i] +
        openCaptionTag + caption[i] + closeCaptiontag +
        openDescTag + i + closeTag + description[i] + closeDesctag + openInfoTag + info[i] + closeInfoTag + closeList;
    	imageList.push(image);
    }
        document.getElementById("album").innerHTML = imageList.join(" ");
        
var closeText = "X-click to close";
      function descVisible(i) {
        document.getElementById("infoBox").style.visibility="visible";
        document.getElementById("clickToClose").innerHTML = closeText;
        document.getElementById("info").innerHTML = info[i];
        document.getElementById("infoTitle").innerHTML = caption[i];
        }

        function hideIntro() {
          document.getElementById("infoBox").style.visibility="hidden";
        }
        document.getElementById('clickToClose').addEventListener("click", hideIntro);
 
     $(document).ready(function(){   
    /* Open lightbox on button click */
       $('.lightbox-toggle img').click(function () {
         $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
         $('.box').fadeIn();
         //Check if lightbox has an image
         if ($('.box').contents('img')) {
           $('.box').contents().remove('img'); //If true, clear image
         }
         // Get text content in attribute
         // var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
         // if (".album") {
         var img = $(this).clone(); //Duplicate DOM element
         $('.box').append(img); //Insert duplicated element in another element

        });
       
         /* Click to close lightbox */
         $('.close, .backdrop').click(function () {
           $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
             $('.backdrop').css('display', 'none');
           });
           $('.box').fadeOut();
      
         });
       });
