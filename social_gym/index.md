---
title: RSS23
layout: default
exclude: true
order: 5
---


<center> <h1><u>SOCIALGYM 2.0: Simulator for Multi-Agent Social Robot Navigation in Shared Human Spaces</u></h1></center>
<p align="center">
  <a href="https://zaynesprague.com/">Zayne Sprague</a>, <a href="http://rohanchandra30.github.io/">Rohan Chandra</a>, <a href="https://www.linkedin.com/in/jarrett-holtz-79618a52">Jarrett Holtz</a>, <a href="https://www.joydeepb.com/">Joydeep Biswas</a> 
</p>


<p align="center">
  <img src="https://raw.githubusercontent.com/ut-amrl/SocialGym2/main/assets/sg2_sim.gif" />
</p>

<!-- Visualizations
--------  
***
<p align="center">
  <img src="https://drive.google.com/uc?id=1RlhEdqMbEbQ491q6htZGjRph8-y8amyl" />
</p>

UTMRS is the simulator interface that interacts with the Human module (PedSim) and the local robot navigation module. More specifically, as shown in the figure above, UTMRS updates the state of the simulator and sends the updated state to both PedSim and the local navigation modules. Given the state, both modules use their respective policies to select the optimal action which is sent back to UTMRS. PedSim additionally transmits internal state/action information to the local navigation module so that the robots are aware of the human states.

<p align="center">
  <img src="https://drive.google.com/uc?id=1tW4eIiSY2WU1mjo3vro0o26K8a0zp8AQ" />
</p>

This is how robots sense their environments in the simulator. The orange clusters represent lidar scans of the obstacles, the red cross is the local waypoint, the blue curves represent the 2D trajectory search space, and the red outer curves represent the minimum and maximum curvatures. In this Figure, we show that the search space gets clipped due to an obstacle in front.
 -->

Abstract
--------  
***
We present SocialGym 2.0, a multi-agent navigation simulator for social robot research. Our simulator models multiple autonomous agents, replicating real-world dynamics in complex environments, including doorways, hallways, intersections, and roundabouts. Unlike traditional simulators that concentrate on single robots with basic kinematic constraints in open spaces, SocialGym 2.0 employs multi-agent reinforcement learning (MARL) to develop optimal navigation policies for multiple robots with diverse, dynamic constraints in complex environments. Built on the PettingZoo MARL library and Stable Baselines3 API, SocialGym 2.0 offers an accessible python interface that integrates with a navigation stack through ROS messaging. SocialGym 2.0 can be easily installed and is packaged in a docker container, and it provides the capability to swap and evaluate different MARL algorithms, as well as customize observation and reward functions. We also provide scripts to allow users to create their own environments and have conducted benchmarks using various social navigation algorithms, reporting a broad range of social navigation metrics.


Project
--------  
***

1. [**Paper**](https://arxiv.org/pdf/2303.05584.pdf). This paper is submitted to RSS 2023.
2. [**Project**](https://github.com/ut-amrl/SocialGym2). GitHub repository
3. [**Documentation**](https://amrl.cs.utexas.edu/SocialGym2/index.html)


## If you use our work, please cite the following
---

```
@article{sprague2023socialgym,
  title={SOCIALGYM 2.0: Simulator for Multi-Agent Social Robot Navigation in Shared Human Spaces},
  author={Sprague, Zayne and Chandra, Rohan and Holtz, Jarrett and Biswas, Joydeep},
  journal={arXiv preprint arXiv:2303.05584},
  year={2023}
}
```

```
@inproceedings{holtz2022socialgym,
  title={Socialgym: A framework for benchmarking social robot navigation},
  author={Holtz, Jarrett and Biswas, Joydeep},
  booktitle={2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={11246--11252},
  year={2022},
  organization={IEEE}
}
```

<!-- <br><br> -->

<!-- Authors
---------------
***
| [Rohan Chandra](http://rohanchandra30.github.io/) | [Rahul Menon](https://www.linkedin.com/in/rmeno12/) | [Zayne Sprague](https://zaynesprague.com/) | [Arya Anantula](https://www.linkedin.com/in/arya-anantula-1aa3661aa/) |  [Joydeep Biswas](https://www.joydeepb.com/) | -->

<!-- | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| UT Austin     | UT Austin     | UT Austin          | UT Austin     | UT Austin     |  -->
<!-- | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/rohan.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/negar.png"> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/joydeep.png" width=580 height=580> | <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  <img src="https://obj.umiacs.umd.edu/badue-accepted/rss/peter.png"> |  -->
