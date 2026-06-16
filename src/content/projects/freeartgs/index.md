---
title: "FreeArtGS"
description: "Articulated 3D Gaussian Splatting under free-moving capture. Paper, project page, code, and data are now available."
date: "2026-03-23"
draft: false
demoURL: "https://freeartgs.github.io/"
repoURL: "https://github.com/FreeArtGS/FreeArtGS"
---

# [CVPR 2026] FreeArtGS: Articulated Gaussian Splatting Under Free-moving Scenario

FreeArtGS has been accepted to **CVPR 2026**. The project page, arXiv paper, official code release, and FreeArt-21 data are now public.

## Authors

Hang Dai\*, Hongwei Fan\*, **Han Zhang**\*, Duojin Wu, Jiyao Zhang, Hao Dong  
*\* indicates equal contribution*

## Status

- **Project page:** published at [freeartgs.github.io](https://freeartgs.github.io/)
- **Code:** open-sourced as the official implementation under Apache-2.0
- **Data:** FreeArt-21 is publicly available through the project page

## Abstract

The increasing need for augmented reality and robotics is driving demand for articulated object reconstruction with high scalability. Existing settings — reconstructing from discrete articulation states or casual monocular video — require non-trivial axes alignment or suffer from insufficient geometric coverage, limiting practical applications.

FreeArtGS introduces a novel approach for reconstructing articulated objects under a **free-moving scenario**: a new setting with a simpler setup and higher scalability. It combines three key components into an end-to-end pipeline:

- **Free-moving Part Segmentation** — discovers rigid parts from relative motion in unconstrained capture using priors from off-the-shelf point-tracking and feature models
- **Joint Estimation** — a noise-resistant approach to recover joint type and axis robustly from the segmented parts
- **3DGS-based End-to-End Optimization** — jointly reconstructs visual textures, geometry, and joint angles of the articulated object

The method takes only a monocular RGB-D video as input and produces a fully articulated 3D Gaussian representation of the object.

## Keywords

- 3D Gaussian Splatting
- Articulated Object Reconstruction

## Links

- **[Project Page](https://freeartgs.github.io/)**
- **[arXiv Paper](https://arxiv.org/abs/2603.22102)**
- **[GitHub Code](https://github.com/FreeArtGS/FreeArtGS)**
- **[FreeArt-21 Data](https://drive.google.com/file/d/1hl6s3C3919gXKvHC0ZfgrxWqFCKM3XXf/view?usp=drive_link)**

---

*This work was conducted during a research internship at PKU Agibot Lab (July – November 2025).*
