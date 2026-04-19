# Design System Document: The Illuminated Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Illuminated Editorial"
This design system is built to transform a standard portfolio into a premium, high-authority digital publication. We move away from cluttered layouts toward a structured, intentional editorial experience. By blending the readability of *Medium* with the structured authority of *Coursera*, we create a space that feels both intellectual and cutting-edge.

The "Illuminated" aspect comes from the surgical use of neon green accents against a void-like dark background. We utilize **Balanced Proportions** and **Structured Layouts** to guide the eye. The layout feels like a modern digital journal—where whitespace is used efficiently to create focus without feeling overly sparse.

---

## 2. Colors

The palette is anchored in deep obsidian tones, punctuated by hyper-chromatic neon green, pure white, and a soft, pale tertiary accent.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Separation must be achieved exclusively through:
1.  **Background Shifting:** Moving from `surface` (#0A0A0A) to `surface-container-low`.
2.  **Rhythmic Spacing:** Using standard vertical rhythm (32px to 48px) to signal a new context.
3.  **Tonal Transitions:** Using subtle gradients to bleed one section into another.

### Color Palette Roles
*   **Primary (#CCFF00):** Hyper-chromatic neon green used for core CTAs and high-impact indicators.
*   **Tertiary (#ffdbdb):** A soft, pale highlight color used for secondary badges, delicate notifications, or decorative underlines to provide a warm counterpoint to the neon.
*   **Neutral (#0A0A0A):** The deep obsidian base for all surfaces.

---

## 3. Typography

The typography strategy relies on the tension between a technical, wide-set display face and a highly readable, humanistic body face.

*   **Display & Headlines (Space Grotesk):** These are your "statement" elements. Use `display-lg` (3.5rem) for hero sections with tight letter-spacing (-0.02em) to create an authoritative feel.
*   **Body & Titles (Manrope):** Chosen for its exceptional legibility. `body-lg` (1rem) is the standard for content to ensure maximum reading endurance.
*   **Hierarchy as Identity:** Use `primary` (white/neon) for all headlines to maximize contrast. Use `on-surface-variant` for secondary text to reduce eye strain.

---

## 4. Elevation & Depth

We reject traditional shadows in favor of **Tonal Layering**.

### The Layering Principle
Depth is achieved by "stacking" surface-container tiers. For instance, a training module card should be slightly lighter than the base `surface` (#0A0A0A). This creates a "recessed" or "carved" look, conveying high-end craftsmanship.

### Ambient Glows
If a floating element requires a shadow, it must be an **Ambient Glow**:
- **Color:** `#CCFF00` (Primary) or `#ffdbdb` (Tertiary) at 5-8% opacity.
- **Blur:** 30px to 50px.
- **Spread:** -5px.
This creates a subtle aura rather than a traditional drop shadow.

---

## 5. Components

### Buttons
*   **Primary:** Solid `#CCFF00` background with dark text. Corner radius: `1` (subtle rounding).
*   **Secondary:** Ghost style. White text with a 20% opacity ghost border.
*   **Tertiary Accents:** Small chips or tags using `#ffdbdb` with low-opacity backgrounds for categorization.

### Training Module Cards
*   **Structure:** No dividers. Use `surface-container-low` background. 
*   **Typography:** Clear `headline-sm` titles. 
*   **Accent:** A 4px vertical "light bar" of the primary color on the left edge during the "active" or "hover" state.

### Input Fields
*   **Style:** Minimalist underline. 
*   **State:** The underline is `outline-variant`. On focus, the underline transforms into `#CCFF00` via a center-out transition.

---

## 6. Do's and Don'ts

### Do
*   **DO** use consistent padding (32px, 48px) to separate major sections.
*   **DO** use the tertiary `#ffdbdb` for soft highlights that don't require the intensity of neon green.
*   **DO** keep corner radii subtle (level 1) to maintain a professional, architectural feel.

### Don't
*   **DON'T** use pure black (#000000) if it prevents depth layering; stick to the neutral base (#0A0A0A).
*   **DON'T** over-round corners. Avoid pill shapes; keep the "technical" edge.
*   **DON'T** use the tertiary color for primary actions; it is strictly for supporting information.

---

## 7. Motion & Signature Transitions

To achieve the "High-End Feel," all interactions must be choreographed:
1.  **Standard Stagger:** Elements should fade and slide up with a `0.05s` delay.
2.  **Color Pulse:** Interactive elements can have a very faint pulse of the tertiary color when in a "waiting" state.
3.  **Smooth Navigation:** Maintain a fluid transition between pages to mimic the feel of a premium digital publication.