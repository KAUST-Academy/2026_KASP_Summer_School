# KASP — Summer AI Training 2026
*Designed by the KAUST Academy*

A static course website with lectures and labs for the KAUST Academy AI Specializations Summer Program
(KASP) AI Training. Content is organised into one page per day, grouped by week. Each
day links to its lecture slides (`Week*/Day*/Lecture/`) and to its labs and
exercises (`Week*/Day*/Labs/`), which open directly in Google Colab.

The site is fully responsive and works on desktop and mobile.

> **Status:** Weeks 1–2 are published. The remaining weeks will be added later.

---

## Structure

```
index.html                  # Home — hero + one section per week
pages/Week1/ pages/Week2/    # day pages, grouped by week
  w1d1.html … w1d5.html     #   one page per day
  extras.html               #   that week's Extra Content page
assets/                     # Bootstrap, icons, AOS, CSS and JS
  js/layout.js              #   shared header/nav + footer (edit nav here)
Week1/ Week2/                # course content for each week
  Day*/Lecture/             #   lecture slides (PDF)
  Day*/Labs/                #   labs and exercises (.ipynb)
  Extras/                   #   extra shared files for the week
```

The navigation is defined once in `assets/js/layout.js` (the `weeks` array) and
injected into every page's `<div id="site-header">` / `<div id="site-footer">`
slots — adding a day or a whole week is a single edit there. Each week's pages
live under `pages/Week<N>/` and its content under `Week<N>/` (with a
`Week<N>/Extras/` folder for supplementary files).

Colab links point to this repository on the `main` branch:
`https://colab.research.google.com/github/KAUST-Academy/2026_KASP_Summer_School/blob/main/…`
They become live once the repository is pushed to GitHub.

---

## Week 1 — Computer Vision 1
*Sun 28 June – Thu 2 July 2026 · Instructor: Mohammed Farouk Ahmed*

A recap of CNNs followed by sequence models, Transformers, Vision Transformers, and
video understanding.

1. **Convolutional Neural Networks (recap)** — CNN fundamentals; CIFAR-10 classifier; CNN from scratch on Fashion-MNIST.
2. **Sequential Models — RNNs, LSTM & Attention** — RNN/LSTM image captioning; attention-based (Transformer) image captioning.
3. **Transformers** — Vision-language models (VLLM); Segment Anything 3.
4. **Vision Transformers** — ViT fine-tuning.
5. **Video Handling** — Video classification with CNNs.

## Week 2 — Computer Vision 2
*Sun 5 July – Thu 9 July 2026 · Instructor: Muhammad Mubashar*

Representation learning and self-supervision, building up to world models and
foundation models.

6. **Representation Learning — SSL** — Self-supervised learning demos; image search with EfficientNetV2 embeddings.
7. **Contrastive Learning** — Contrastive self-supervised representation learning with SimCLR.
8. **Advanced SSL & JEPA** — Joint-embedding predictive architectures (I-JEPA / V-JEPA).
9. **Foundation Models** — Grounding DINO, Depth Anything, and other foundation models; Segment Anything 3.
10. **World Models** — DreamerV3 / RSSM-style world models.

## Coming soon
- **Week 3 onward** — to be added.

---

*Note: exercise notebooks are paired with their `_Solution` versions where available.
Recording and uploading lectures online is not permitted.*
