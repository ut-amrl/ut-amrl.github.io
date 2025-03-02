---
layout: default
title: Research Projects
exclude: false
order: 3
---

# Research Projects
<div class="container">
  {% assign sorted_projects = site.projects | sort: "published_year" | reverse %}
  {% for project in sorted_projects %}
    <div class="row mb-4 border-bottom pb-3"> <!-- Ensure each project is in a row -->
      <!-- Left Column: Image/Video (1/3 width) -->
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        {% if project.media_url %}
          {% if project.media_url contains ".mp4" or project.media_url contains ".webm" or project.media_url contains ".ogg" %}
            <video class="img-fluid rounded" autoplay loop muted playsinline>
               <source src="{{ project.media_url }}" type="video/mp4">
            </video>
          {% else %}
            <img src="{{ project.media_url }}" alt="{{ project.title }}" class="img-fluid rounded">
          {% endif %}
        {% endif %}
      </div>
      <!-- Right Column: Text Content (2/3 width) -->
      <div class="col-md-8">
         <h3 class="fw-bold text-primary">{{ project.title }}</h3>
         <p class="fs-5 text-muted">{{ project.description }}</p>
         <p class="fs-5"><strong>Venue:</strong> {{ project.venue }}</p>
         <p class="fs-5"><strong>Published Year:</strong> {{ project.published_year }}</p>
         {% if project.webpage_url %}
         <p class="fs-5">
            <strong>Project Page:</strong> 
            <a href="{{ project.webpage_url }}" target="_blank" class="text-decoration-none fw-bold">
                  {{ project.webpage_url }} <i class="bi bi-box-arrow-up-right ms-1"></i>
            </a>
         </p>
         {% endif %}
      </div>
    </div> <!-- End row -->
  {% endfor %}
</div>
