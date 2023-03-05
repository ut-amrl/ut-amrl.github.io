---
title: Workshops
layout: default
exclude: true
order: 5
---


<center> <h1><u>Decentralized Social Navigation with Non-Cooperative Robots via Bi-Level Optimization</u></h1></center>
<p align="center">
  <a href="http://rohanchandra30.github.io/">Rohan Chandra</a>, <a href="https://www.linkedin.com/in/rmeno12/">Rahul Menon</a>, <a href="https://zaynesprague.com/">Zayne Sprague</a>, <a href="https://www.linkedin.com/in/arya-anantula-1aa3661aa/">Arya Anantula</a>, <a href="https://www.joydeepb.com/">Joydeep Biswas</a> 
</p>

Abstract
--------  
***

This paper presents a fully decentralized approach for realtime non-cooperative multi-robot navigation in social mini-games, such as navigating through a narrow doorway or negotiating right of way at a corridor intersection. Our contribution is a new realtime bi-level optimization algorithm, in which the top-level optimization consists of computing a fair and collision-free ordering followed by the bottom-level optimization which plans optimal trajectories conditioned on the ordering. We show that, given such a priority order, we can impose simple kinodynamic constraints on each robot that are sufficient for it to plan collision-free trajectories with minimal deviation from their preferred velocities, similar to how humans navigate in these scenarios. We successfully deploy the proposed algorithm in the real world using F1/10 robots, a Clearpath Jackal, and a Boston Dynamics Spot as well as in simulation using the SocialGym 2.0 multi-agent social navigation simulator, in the doorway and corridor intersection scenarios. We compare with state-of-the-art social navigation methods using multi-agent reinforcement learning, collision avoidance algorithms, and crowd simulation models. We show that (i) classical navigation performs 44% better than the state-of-the-art learning-based social navigation algorithms, (ii) without a scheduling protocol, our approach results in collisions in social mini-games (iii) our approach yields 2 times and 5 times fewer velocity changes than CADRL in doorways and intersections, and finally (iv) bi-level navigation in doorways at a flow rate of 2.8 - 3.3 (ms)^{-1} is comparable to flow rate in human navigation at a flow rate of 4 (ms)^{-1}.


Video
---------------
***
<div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eh30X7NteJw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<!-- <br><br> -->

<!-- Authors
---------------
***
| [Rohan Chandra](http://rohanchandra30.github.io/) | [Rahul Menon](https://www.linkedin.com/in/rmeno12/) | [Zayne Sprague](https://zaynesprague.com/) | [Arya Anantula](https://www.linkedin.com/in/arya-anantula-1aa3661aa/) |  [Joydeep Biswas](https://www.joydeepb.com/) | -->

<!-- | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| UT Austin     | UT Austin     | UT Austin          | UT Austin     | UT Austin     |  -->
<!-- | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/rohan.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/negar.png"> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/joydeep.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  -->