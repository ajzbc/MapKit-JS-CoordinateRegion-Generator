mapkit.init({
    authorizationCallback: function(done) {
        done('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhYTjJQNTk5UFAifQ.eyJpc3MiOiJHWjg0NVlRUDZFIiwiaWF0IjoxNTY1NDk0ODY0LCJleHAiOjE1Nzc3NTA0MDB9.fHKPaPzP_kLSbacVzd4LLuJHR4_yFJ1ry0GrYP3KA9eKSLkwU9IroXcVQ_9G0oHuhWJQJqteIVS3-yhTXxKZ4w');
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