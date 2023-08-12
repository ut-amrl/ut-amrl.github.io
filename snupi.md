---
title: GT-MPC-CBFs
layout: default
exclude: true
order: 5
---


<center> <h1><u>Decentralized Multi-Robot Social Navigation in Constrained Environments via Game-Theoretic Control Barrier Functions</u></h1></center>
<p align="center">
  <a href="http://rohanchandra30.github.io/">Rohan Chandra</a>, <a href="https://www.linkedin.com/in/vrushabh-zinage/">Vrushabh Zinage</a>, <a href="https://sites.utexas.edu/ebakolas/">Efstathios Bakolas</a>, <a href="https://www.joydeepb.com/">Joydeep Biswas</a>, <a href="https://www.cs.utexas.edu/~pstone/">Peter Stone</a> 
</p>

Abstract
--------  
***

We present an approach to ensure safe and deadlock-free navigation for decentralized multi-robot systems operating in constrained environments, including doorways and intersections. The primary objective of our navigation problem is for each robot to reach its target without colliding, freezing, and minimally deviating from its preferred plan or trajectory. Furthermore, they must navigate with partial observability using decentralized controllers. Although many solutions have been proposed to ensure safety, preventing deadlocks in a decentralized fashion with global consensus remains an open problem. In this work, we first formalize the above multi-robot navigation problem in constrained spaces with multiple conflicting agents, which we term as \emph{social mini-games}. To solve social mini-games, we propose a new class of decentralized controllers that ensure both safety and deadlock resolution by attaining a game-theoretic Nash equilibrium. Our controller builds on two key insights: first, we reduce the deadlock resolution problem to solving a modified version of an N-player Chicken game, for which a Nash equilibrium solution exists. Second, we formulate the Nash equilibrium as a control barrier function (CBF) and integrate it with traditional CBFs to inherit their safety guarantees. We compare game-theoretic deadlock resolution with random perturbation and find that our proposed strategy results in lower cost and path deviation for robots. We further demonstrate the effectiveness of our proposed CBF controller in various challenging constrained environments. 


Preprint
--------  
***
Coming soon.
<!-- [PDF](https://drive.google.com/file/d/1Jm9P0FQl8-JPzVh-_OOr_6LTnn6tEO1N/view?usp=sharing). This paper is submitted to IROS 2023. This version contains minor typo and notation fixes. -->


Video
---------------
***
<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/fA7BbM8iTwg" title="Decentralized Multi-Robot Social Navigation in Constrained Environments via Game-Theoretic CBFs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<!-- <br><br> -->

<!-- Authors
---------------
***
| [Rohan Chandra](http://rohanchandra30.github.io/) | [Rahul Menon](https://www.linkedin.com/in/rmeno12/) | [Zayne Sprague](https://zaynesprague.com/) | [Arya Anantula](https://www.linkedin.com/in/arya-anantula-1aa3661aa/) |  [Joydeep Biswas](https://www.joydeepb.com/) | -->

<!-- | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| UT Austin     | UT Austin     | UT Austin          | UT Austin     | UT Austin     |  -->
<!-- | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/rohan.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/negar.png"> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/joydeep.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  -->