(function () {
    

    var width = 250; // We will scale the photo width to this
    var height = 0; // This will be computed based on the input stream

    var streaming = false;

    var video;
    var canvas;
    var photo = null;
    var photo1 = null;
    var photo2 = null;
    var photo3 = null;
    var photo4 = null;



    var startbutton = null;
    photo = document.getElementById('photo');
    photo1 = document.getElementById('photo1');
    photo2 = document.getElementById('photo2');
    photo3 = document.getElementById('photo3');
    photo4 = document.getElementById('photo4');


    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');


        startbutton = document.getElementById('startbutton');

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });

        video.addEventListener('canplay', function (ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                if (isNaN(height)) {
                    height = width / (4 / 3);
                }

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        startbutton.addEventListener('click', function (ev) {
            document.getElementById('photo').style.display = "inline-block";
            takepicture();


            ev.preventDefault();

        }, false);

        clearphoto();
    }

    // for clearing photos
    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }
    window.onbeforeunload = function (e) {

        localStorage.clear();
    };

    //for taking snapshots

    function takepicture() {
        var context = canvas.getContext('2d');

        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            var data = canvas.toDataURL('image/png');


            if (localStorage.key(0) == null) {
                photo.setAttribute('src', data);
                localStorage.setItem("photo0", "0")
                console.log(localStorage.key(0))

            }

            else if (localStorage.key(0) == "photo0") {
                photo1.setAttribute('src', data)
                localStorage.setItem("photo1", "1");;
                console.log(localStorage.key(1))

            }
            else if (localStorage.key(1) == "photo0") {
                photo2.setAttribute('src', data)
                localStorage.setItem("photo2", "2");;
                console.log(localStorage.key(2))

            }
            else if (localStorage.key(2) == "photo0") {
                photo3.setAttribute('src', data)
                localStorage.setItem("photo3", "3");;
                console.log(localStorage.key(3))
            }
            else if (localStorage.key(3) == "photo0") {
                photo4.setAttribute('src', data)
                localStorage.setItem("photo4", "4");;
                console.log(localStorage.key(4))
                document.getElementById("makegif").style.display='inline-block'
                document.getElementById("btn").style.display='inline-block'
                document.getElementById("h1").style.display='inline-block'

               
            }

        }


        else {
            clearphoto();
        }


    }

    window.addEventListener('load', startup, false);

})();



//creating gif from above images 

          

var createGIF = function () {
    

    gifshot.createGIF({
        images: [photo, photo1, photo2, photo3, photo4

        ],
        
        interval: .5

    }, function (obj) {
        if (!obj.error) {
            var image = obj.image,
           
                animatedImage = document.getElementById('animatedGIF');
            animatedImage.src = image;


        }


    })
};
$('#btn').click(function () {
    let a = document.createElement('a')
    a.href = $("#animatedGIF").attr('src');

    a.download = $('#animatedGif').attr('src')
    a.download = "mygif.gif"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

})

createGIF()


//to save the gif in the system





