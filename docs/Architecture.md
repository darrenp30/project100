# 🏗 Project 100 Architecture

Version 1.0

---

# Purpose

This document describes the technical architecture of Project 100.

Unlike the Product Specification, which explains what the application should become, this document explains how it is organised.

The architecture should remain simple, modular and maintainable.

---

# Philosophy

Project 100 follows four architectural principles.

## 1. One responsibility per file.

Each file should have a single purpose.

Avoid large files that contain unrelated logic.

---

## 2. Data drives the interface.

The application should never hard-code training information.

The UI simply displays the current expedition.

Changing the expedition data should require no UI changes.

---

## 3. Calm over complexity.

If there are two equally good technical solutions, choose the simpler one.

Maintainability is preferred over cleverness.

---

## 4. Build for tomorrow.

Small architectural improvements are encouraged if they make future development significantly easier.

Avoid over-engineering.

---

# Folder Structure

project100/

assets/

css/

data/

docs/

js/

index.html

manifest.json

sw.js

README.md

CHANGELOG.md

LICENSE

---

# Assets

Contains all graphical resources.

Examples:

- application icon
- SVG artwork
- roadmap graphics
- custom icons

---

# CSS

theme.css

Design tokens

Colours

Spacing

Typography

Animation

style.css

Application layout

Component styling

Responsive behaviour

---

# JavaScript

script.js

Application entry point.

Starts Project 100.

ui.js

Responsible for rendering interface elements.

greeting.js

Time-based greeting logic.

future:

storage.js

notifications.js

roadmap.js

---

# Data

missions.js

Stores expedition data.

Eventually this will become expedition.js.

No application logic should exist here.

---

# Documentation

All project documentation lives inside docs/.

Documentation should evolve alongside the software.

---

# Future Architecture

Project 100 should eventually become component based.

Trailhead

↓

Map

↓

Journal

↓

Camp

↓

Project Beyond

Each should become its own independent module.

---

# Design Rule

Every future architectural decision should answer one question.

"Does this make Project 100 easier to understand?"

If not, reconsider the design.

---

# Closing Principle

Good architecture should disappear.

The athlete should never notice it.

The developer should rarely have to think about it.