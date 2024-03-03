<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Random Animation</title>
<style>
    #animated-element {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
    }
</style>
</head>
<body>
<div id="animated-element"></div>
<script>
    function getRandomPosition() {
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        return [x, y];
    }

    function animateElement() {
        var element = document.getElementById('animated-element');
        var newPosition = getRandomPosition();
        element.style.left = newPosition[0] + 'px';
        element.style.top = newPosition[1] + 'px';
    }

    setInterval(animateElement, 1000); // 1秒钟执行一次动画
</script>
</body>
</html>
