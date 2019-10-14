---
title: SRTR
layout: default
exclude: true
order: 3
---

### SRTR

#### Overview

Complex robot behaviors are often structured as
state machines, where states encapsulate actions
and a transition function switches between states.
Since transitions depend on physical parameters,
when the environment changes, a roboticist has to
painstakingly readjust the parameters to work in
the new environment. We present interactive SMT-
based Robot Transition Repair (SRTR): instead of
manually adjusting parameters, we ask the roboti-
cist to identify a few instances where the robot is
in a wrong state and what the right state should be.
A lightweight automated analysis of the transition
function’s source code then 1) identifies adjustable
parameters, 2) converts the transition function into
a system of logical constraints, and 3) formulates
the constraints and user-supplied corrections as a
MaxSMT problem that yields new parameter values.
 Our evaluation shows that SRTR is effective
on real robots and in simulation. We show that
SRTR finds new parameters 1) quickly, 2) with
only a few corrections, and 3) that the parameters
generalize to new scenarios. We also show that a
simple state machine corrected by SRTR can out-
perform a more complex, expert-tuned state machine in the real world.

##### For more information about how SRTR works see:

<a href="https://www.ijcai.org/proceedings/2018/0681.pdf">Interactive Robot Transition Repair with SMT</a>

Jarrett Holtz, Arjun Guha, and Joydeep Biswas.
In Proceedings of IJCAI-ECAI-2018, the International Joint Conference on Artificial Intelligence
Supported in part by AFRL and DARPA agreement
#FA8750-16-2-0042, and by NSF grant CCF-1717636

<iframe width="560" height="315" src="https://www.youtube.com/embed/OEnVv_vYA3U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
