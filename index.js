mapkit.init({
    authorizationCallback: function(done) {
        done('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik43RkZHNVozMjgifQ.eyJpc3MiOiJHWjg0NVlRUDZFIiwiaWF0IjoxNTUwOTUyODA3LCJleHAiOjE1NTM2MzEyMDd9.2VxmOm72n-4pMUidzu8qPCPcpf00m2MH1CsB5zxtq3FzP88U8jhyDm3Zsx_VBYPX3gRkbGvb6JH60NM2s7VDUA');
    }
});

var Cupertino = new mapkit.CoordinateRegion(
new mapkit.Coordinate(37.3316850890998, -122.030067374026),
new mapkit.CoordinateSpan(0.167647972, 0.354985255)
);

var map = new mapkit.Map("map");
map.region = Cupertino;

map.addEventListener("region-change-end", function() {
    document.getElementById("latC").innerHTML = map.region.center.latitude;
    document.getElementById("lonC").innerHTML = map.region.center.longitude;
    document.getElementById("latS").innerHTML = map.region.span.latitudeDelta;
    document.getElementById("lonS").innerHTML = map.region.span.longitudeDelta;

    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});