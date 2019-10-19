---
title: Home
layout: default
order: 0
---

<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

<style>

button.slick-prev.slick-arrow::before {
color: black;
}

button.slick-next.slick-arrow::before {
color: black;
}
</style>

<div class="main_carousel">
  <div><img class="center-image" src="./assets/images/slideshow/amrl_panorama.jpg"></div>
  <div style="visibility: hidden;"><img class="center-image" src="./assets/images/slideshow/group_photo_scaled.jpg"></div>
  <div style="visibility: hidden;"><img class="center-image" src="./assets/images/slideshow/robocup_2017_scaled.jpg"></div>
  <div style="visibility: hidden;"><img class="center-image" src="./assets/images/slideshow/robocup_robots_scaled.jpg"></div>
  <div style="visibility: hidden;"><img class="center-image" src="./assets/images/slideshow/jackal_grass_scaled.jpg"></div>
  <div style="visibility: hidden;"><img class="center-image" src="./assets/images/slideshow/robocup_robots_scaled.jpg"></div>
</div>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script type="text/javascript">
$('.main_carousel').children('div').each(function () {
    $(this).css("visibility", "visible")
  });
$(document).ready(function(){
  $('.main_carousel').slick({
  autoplay: true,
  autoplaySpeed: 6250,
  fade: true,
  cssEase: 'linear',
  dots: true,
  infinite: true,
  });
});
</script>

The Autonomous Mobile Robotics Laboratory (AMRL), led by professor Joydeep
Biswas, performs research in robotics to continually make robots more
autonomous, accurate, robust, and efficient, in real-world unstructured
environments. We are working on a wide range of problems, including perception
for long-term autonomy, high-speed multi-agent planning in adversarial domains,
time-optimal control for omnidirectional robots, and correcting and learning
complex autonomous behaviors from human interactions.

The AMRL is comprised of students, robots, and facilities across two
universities - the Computer Science department
at UT Austin, and the College of Information and Computer Sciences, University
of Massachusetts Amherst.

