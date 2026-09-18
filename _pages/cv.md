---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!--
  The three PDFs below live in the REPOSITORY ROOT (not in files/), so they are
  served at /resume.pdf, /cv-short.pdf and /cv-full.pdf. They are maintained by
  hand and committed directly; nothing in this repo generates them. To update
  the CV, replace the PDF at the repo root and commit - no changes are needed
  on this page.
-->

<p>
  <a href="{{ base_path }}/resume.pdf" class="btn btn--large">Résumé (short)</a>
  <a href="{{ base_path }}/cv-short.pdf" class="btn btn--large">CV (short academic)</a>
  <a href="{{ base_path }}/cv-full.pdf" class="btn btn--large">CV (full academic)</a>
</p>

The outline below summarizes the CV. The PDFs above are authoritative and more complete.

Education and background
======
* **Ph.D. candidate (stipendiat)**, Health Management and Health Economics, University of Oslo, 2023–present
* **MPH**, Health Policy and Management, Harvard T.H. Chan School of Public Health, 2008–2009
* **Medical degree (3. Staatsexamen)**, Charité – Universitätsmedizin Berlin, 1998–2006
* Board-certified in internal medicine; residency at NYU School of Medicine, 2012–2015

Positions held
======
* **Doctoral Research Fellow**, Department of Health Management and Health Economics (HELED), Faculty of Medicine, University of Oslo, 2023–present
* **Attending Physician / Hospitalist**, Massachusetts General Hospital, 2015–2024
* **Instructor in Medicine**, Harvard Medical School, 2015–2024
* **Adjunct Associate Professor**, Flinders University, Adelaide, 2019–2022
* **Adjunct Lecturer**, University of Adelaide, 2017–2020
* **Senior Consultant**, Wing Tech Inc., 2009–2020
* **Resident in Internal Medicine**, NYU School of Medicine, 2012–2015

Fellowships, scholarships and awards
======
* Fellow, Society for Hospital Medicine (FHM), 2020
* Fellow, American College of Physicians (FACP), 2019
* Distinguished Service Award, ISPOR, 2017
* DAAD Graduate Scholarship, 2008–2009

Appointments and editorial work
======
* **Associate Editor**, *PLOS Digital Health*, 2022–present
* **Editorial Board Member**, *Pharmacoeconomics*, 2017–present
* **Editorial Board Member**, *Digital Medicine*, 2017–present
* **Academic Editor**, *PLOS One*, 2018–2022
* **Co-editor**, *Value in Health*, 2008–2017

Teaching
======
* **HMAN4230**, University of Oslo
* **HEVAL5130**, University of Oslo
* Clinical and bedside teaching of residents and medical students as Instructor in Medicine, Harvard Medical School, 2015–2024

Current collaborations
======
* Department of Oncology, Akershus University Hospital
* ASCERTAIN, an EU-funded multi-stakeholder project on the affordability and sustainability of health innovations

Selected publications
======

A curated highlight list follows. It is **not** a complete bibliography: the full record of 60+ publications is on
[Google Scholar](https://scholar.google.com/citations?user=qVtQpFgAAAAJ) and
[ORCID](https://orcid.org/0000-0003-1704-6067).

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

[See all publications on this site →]({{ base_path }}/publications/)
