  window.onload = function(){

  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      console.log(navigator.notification);
  }

  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log("navigator.geolocation works well");
  }
  $(document).on('click', '#myModal', function(){
    var onSuccess = function(position) {
      L.mapquest.key = 'VuATH4WRuwVc1ZJUa2GyU3oOaDiljlOr';
      var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
      });
      map.addControl(L.mapquest.control());
    };
    function onError(error){
      navigator.notification.alert('code: '    + error.code    + '\n' +
                                   'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
}