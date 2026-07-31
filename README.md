# KASP — Summer AI Training 2026
*Designed by the KAUST Academy*

A static course website with lectures and labs for the KAUST Academy AI Specializations Summer Program
(KASP) AI Training. Content is organised into one page per day, grouped by week. Each
day links to its lecture slides (`Week*/Day*/Lecture/`) and to its labs and
exercises (`Week*/Day*/Labs/`), which open directly in Google Colab.

The site is fully responsive and works on desktop and mobile.

> **Status:** Weeks 1–6 are published. The remaining weeks will be added later.

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

## Week 3 — Generative Modeling
*Sun 12 July – Thu 16 July 2026 · Instructor: Muhammad Mubashar*

The generative modeling arc — autoencoders and VAEs, GANs, diffusion, Stable
Diffusion, and normalizing flows.

11. **Autoencoders & VAEs** — The latent space, KL divergence, and VQ-VAE; autoencoder on MNIST and VAE on anime faces.
12. **GANs** — Adversarial training and the major variants; GAN on anime faces; conditional GANs on faces.
13. **Diffusion Models** — Denoising diffusion, training and sampling; DDPM on anime faces; score-based diffusion.
14. **Stable Diffusion** — Latent diffusion and classifier-free guidance; running Stable Diffusion components.
15. **Normalizing Flows** — Change of variables, RealNVP / Glow, and flow matching; flows on autoencoder latents.

## Week 4 — Reinforcement Learning
*Sun 19 July – Thu 23 July 2026 · Instructor: Abdallah Hammad*

The first week of reinforcement learning — from the MDP foundations through
value-based methods and policy gradients to continuous control.

16. **Reinforcement Learning Foundations** — MDPs, returns, value functions, and exploration vs exploitation; tabular Q-learning and an RL-with-policies demo.
17. **Value-Based Methods** — TD learning, SARSA vs Q-learning, and Deep Q-Networks; DQN and SARSA labs.
18. **Vanilla Policy Gradient** — the policy gradient theorem and REINFORCE.
19. **Policy Optimization** — actor-critic methods, PPO, and GRPO; actor-critic, PPO, and GRPO (Flappy Bird) labs.
20. **Continuous Control 1** — reinforcement learning in continuous action spaces with DDPG.

## Week 5 — Reinforcement Learning 2
*Sun 26 July – Thu 30 July 2026 · Instructor: Abdallah Hammad*

The second week of reinforcement learning — maximum entropy methods, the reward
problem, model-based and offline RL, real-world deployment, and the open frontiers.

21. **Continuous Control 2 — Max Entropy RL & SAC** — the entropy bonus, soft policy iteration, Soft Actor-Critic and automatic temperature tuning; SAC from scratch on Pendulum.
22. **The Reward Problem** — exploration vs exploitation, bandits and regret, UCB and Thompson sampling, deep exploration (RND), and inverse RL; bandits, RND, and MaxEnt IRL labs.
23. **Model-Based & Offline RL** — learning a dynamics model, planning with CEM/MPC, and offline RL with conservatism; CEM-MPC and CQL labs.
24. **RL in the Real World** — RLHF, RLAIF and RLVR, plus multi-agent RL and robotics; reward-model + GRPO, DPO, Panda pick-and-place, and PettingZoo multi-agent labs.
25. **RL Frontiers** — meta-RL, multi-task and hierarchical RL, and the field's open problems.

## Week 6 — Natural Language Processing 1
*Sun 2 Aug – Thu 6 Aug 2026 · Instructor: Naeemullah Khan*

The first week of natural language processing — from text pre-processing and
word embeddings through recurrent models and seq2seq to attention and the
Transformer.

26. **Introduction to NLP & Word Embeddings** — the classic NLP pipeline, vector space models, word2vec and GloVe; text pre-processing, N-gram feature engineering, and GloVe labs.
27. **Recurrent Neural Networks** — recurrence, BPTT, vanishing gradients, LSTM and GRU; many-to-one / one-to-many RNNs, cell comparison, and review sentiment analysis labs.
28. **Seq2Seq Models & Intro to Attention** — encoder-decoder architectures and the context bottleneck; Arabic–English and English–Japanese translation labs.
29. **Attention Mechanism Deep Dive** — alignment scores, Bahdanau vs Luong attention, and attention visualisation; attention-based translation and classification labs.
30. **Introduction to Transformers** — self-attention, multi-head attention, positional encoding, and BERT vs GPT variants; self-attention/MHA, encoder-vs-decoder, and BERT labs.

## Coming soon
- **Week 7 onward** — to be added.

---

*Note: exercise notebooks are paired with their `_Solution` versions where available.
Recording and uploading lectures online is not permitted.*
