---
title: UMass MinuteBots
layout: default
exclude: false
order: 5
---

### UMass Minutebots RoboCup SSL Team

AMRL is home to the UMass Minutebots, a [RoboCup Small Size League](http://wiki.robocup.org/Small_Size_League) team that we treat as a research platform.

![UMass Minutebots Logo](assets/images/umassminutebotscoloredlogo512x512.png){: .center-image height="200px" width="200px" }

### Media

#### UMass MinuteBots 2018 Qualification Video

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NlYVthtSh2M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
</div>

---

#### UMass MinuteBots 2017 World Cup Highlights

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pJw_yZ2q7Jg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
</div>

---

### Related Research

###### Interactive Robot Transition Repair With SMT.
 - **Authors:** Jarrett Holtz, Arjun Guha, Joydeep Biswas
 - **Published:** arXiv preprint. ([pdf](https://www.joydeepb.com/Publications/arxiv_srtr.pdf))
 - **Abstact:** Complex robot behaviors are often structured as state machines, where states encapsulate actions and a transition function switches between states. Since transitions depend on physical parameters, when the environment changes, a roboticist has to painstakingly readjust the parameters to work in the new environment. We present interactive SMTbased Robot Transition Repair (SRTR): instead of manually adjusting parameters, we ask the roboticist to identify a few instances where the robot is in a wrong state and what the right state should be. An automated analysis of the transition function 1) identifies adjustable parameters, 2) converts the transition function into a system of logical constraints, and 3) formulates the constraints and user-supplied corrections as a MaxSMT problem that yields new parameter values. We show that SRTR finds new parameters 1) quickly, 2) with few corrections, and 3) that the parameters generalize to new scenarios. We also show that a SRTR-corrected state machine can outperform a more complex, expert-tuned state machine.
 
###### Augmenting Planning Graphs in 2-Dimensional Dynamic Environments With Obstacle Scaffolds. 
 - **Authors:** Spencer Lane, Kyle Vedder, Joydeep Biswas
 - **Published:** PlanRob Workshop, International Conference on Automated Planning and Scheduling. ([pdf](https://www.joydeepb.com/Publications/planrob2017_scaffold.pdf))
 - **Abstact:** In this paper, we present an extension to roadmap based path planners that allows for finer control over motions near dynamic obstacles. We utilize the fact that we know the shape of the dynamic obstacles offline and the location of the obstacles online. We supplement the roadmap graph by adding predefined graphs around obstacles, known as scaffold graphs. These graphs are inserted at query time and updated as the obstacles move throughout the environment. We performed a preliminary evaluation our approach in the RoboCup SSL domain and show similar average case performance and improved performance in the case where there are obstacles between the start and the goal.
 
###### A Real-Time Solver For Time-Optimal Control Of Omnidirectional Robots with Bounded Acceleration.
 - **Authors:** David Balaban, Joydeep Biswas
 - **Published:** arXiv preprint. ([pdf](https://www.joydeepb.com/Publications/arxiv_tsocs.pdf))
 - **Abstact:** We are interested in the problem of time-optimal control of omnidirectional robots with bounded acceleration (TOC-ORBA). While there exist approximate solutions for such robots, and exact solutions with unbounded acceleration, exact solvers to the TOC-ORBA problem have remained elusive until now. In this paper, we present a real-time solver for true time-optimal control of omnidirectional robots with bounded acceleration. We first derive the general parameterized form of the solution to the TOC-ORBA problem by application of Pontryagin’s maximum principle. We then frame the boundary value problem of TOC-ORBA as an optimization problem over the parametrized control space. To overcome local minima and poor initial guesses to the optimization problem, we introduce a two-stage optimal control solver (TSOCS): The first stage computes an upper bound to the total time for the TOCORBA problem and holds the time constant while optimizing the parameters of the trajectory to approach the boundary value conditions. The second stage uses the parameters found by the first stage, and relaxes the constraint on the total time to solve for the parameters of the complete TOC-ORBA problem. We further implement TSOCS as a closed loop controller to overcome actuation errors on real robots in realtime. We empirically demonstrate the effectiveness of TSOCS in simulation and on real robots, showing that 1) it runs in real time, generating solutions in less than 0.5ms on average; 2) it generates faster trajectories compared to an approximate solver; and 3) it is able to solve TOC-ORBA problems with nonzero final velocities that were previously unsolvable in real-time.

