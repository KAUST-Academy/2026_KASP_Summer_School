# KASP — Summer AI Training 2026
*Designed by the KAUST Academy*

A static course website with lectures and labs for the KAUST Academy Summer Program
(KASP) AI Training. Content is organised into one page per day, grouped by week. Each
day links to its lecture slides (`Week*/Day*/Lecture/`) and to its labs and
exercises (`Week*/Day*/Labs/`), which open directly in Google Colab.

The site is fully responsive and works on desktop and mobile.

> **Status:** Week 1 only is published for now. Week 2 and the remaining weeks
> will be added later.

---

## Structure

```
index.html                  # Home — hero + Week 1 + Extra Content
pages/Week1/                # day pages, grouped by week
  w1d1.html … w1d5.html     #   one page per day (Week 1)
  extras.html               #   Week 1 Extra Content — fill-in table
assets/                     # Bootstrap, icons, AOS, CSS and JS
Extras/                     # drop-in folder for any extra shared files
Week1/                      # course content: Lecture/ (PDF) + Labs/ (.ipynb)
```

Each week's pages live under `pages/Week<N>/`; add `pages/Week2/`, etc. as new
weeks are published, each with its own day pages and an `extras.html`.

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
4. **Vision Transformers (+DETR)** — ViT fine-tuning; Faster R-CNN object detection.
5. **Video Handling** — Video classification with CNNs.

## Coming soon
- **Week 2 — Computer Vision 2** — Representation learning (SSL), contrastive learning, advanced SSL & JEPA, world models, foundation models.
- **Week 3 onward** — to be added.

---

*Note: exercise notebooks are paired with their `_Solution` versions where available.
Recording and uploading lectures online is not permitted.*
