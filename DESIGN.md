---
name: Legal Fusion Hub
description: A bright operational system for visible lead routing and managed handoffs.
colors:
  white: "#ffffff"
  gray: "#e7e8e4"
  paper: "#f3f4f1"
  paper-blue: "#e7f4f1"
  ink: "#0b213f"
  ink-soft: "#4a5a6e"
  line: "#dcdfd9"
  line-dark: "#c7cbc3"
  teal: "#33b89f"
  teal-dark: "#0c6a5c"
  teal-soft: "#e5f6f3"
  action-orange: "#f2421b"
  action-orange-dark: "#c3330f"
typography:
  display:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(42px, 5.4vw, 78px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(2.15rem, 4vw, 3.7rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Open Sans Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Open Sans Variable, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.65
rounded:
  control: "8px"
  button: "9px"
  card: "12px"
  panel: "16px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action-orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.action-orange-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 20px"
    height: "50px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 13px"
    height: "47px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  status-pill:
    backgroundColor: "{colors.teal-soft}"
    textColor: "{colors.teal-dark}"
    rounded: "{rounded.pill}"
    padding: "5px 8px"
---

# Design System: Legal Fusion Hub

> Brand update (launch): the palette is Deep Navy `#0B213F`, Modern Teal `#33B89F`, Orange `#F2421B` for company CTAs, and Light Gray `#E7E8E4`. Headlines use Montserrat, body uses Open Sans. In the shipped CSS the teal is stored in the `--blue*` tokens and the orange in the `--coral*` tokens, so prose below that says "blue" means teal and "coral" means orange. Never use gradients, glossy mockups, or robot imagery.

## Overview

**Creative North Star: "The Managed Dispatch Board"**

Legal Fusion Hub presents acquisition as visible operations: a bright working field where routes, owners, states, and handoffs can be understood at a glance. The system is crisp, calm, and commercially direct rather than cinematic or editorial. White space supplies confidence; dense operational modules supply specificity.

The visual language pairs strongly shaped grotesque headings with highly legible body copy, then assigns color by job. Blue routes and focuses, coral asks for action, and green confirms completion. Hairline boundaries, pale work surfaces, and selectively lifted panels make the experience feel managed without turning it into a generic dashboard.

**Key Characteristics:**
- White-first operational fields with pale blue or cool-gray work zones.
- Split layouts that place plain-language explanation beside visible system behavior.
- Color used semantically: blue routing, coral action, green completion.
- Fine dividers, compact labels, and structured rows that expose handoffs.
- Restrained motion that communicates progression and respects reduced-motion preferences.

## Colors

The palette is a cool, high-contrast operational field with three disciplined signals.

### Primary
- **Routing Blue:** Directs attention through routes, active stages, links, focus states, and process indexes.
- **Deep Routing Blue:** Carries blue text where stronger contrast is required.
- **Soft Routing Blue:** Marks selected or active operational states without overwhelming the white field.

### Secondary
- **Action Coral:** Reserved for the primary conversion action.
- **Deep Action Coral:** Supplies the primary action's hover state.

### Tertiary
- **Completion Green:** Confirms live, synchronized, checked, or successful states.
- **Soft Completion Green:** Provides completion-state surfaces and success feedback.

### Neutral
- **Operational White:** Owns page grounds, navigation, cards, and controls.
- **Cool Paper:** Separates working sections and internal board regions from the page ground.
- **Blue Paper:** Supports routed or managed sections with a faint blue cast.
- **Deep Ink:** Carries headings, primary copy, and the darkest chrome.
- **Soft Ink:** Carries explanatory body copy.
- **Hairline** and **Firm Hairline:** Structure rows, cards, section boundaries, and fields.

### Named Rules
**The Color Has a Job Rule.** Blue routes, coral asks, and green confirms; do not exchange these roles for decoration.

**The White Owns the Field Rule.** White or near-white remains the dominant ground, while signal colors occupy controls, states, and small route details.

## Typography

**Display Font:** Bricolage Grotesque Variable (with sans-serif fallback)  
**Body Font:** Manrope Variable (with sans-serif fallback)

**Character:** Bricolage gives promises and operational titles a compact, purposeful silhouette. Manrope keeps explanations, controls, and data labels calm and highly readable.

### Hierarchy
- **Display:** The responsive display role is reserved for page-level promises and hero headlines.
- **Headline:** The responsive headline role introduces major sections and closing calls to action.
- **Title:** The title role labels operational modules, steps, and card-level ideas.
- **Body:** The body role carries explanation and defaults to an open reading rhythm; long supporting copy is typically constrained to roughly 48–68 characters.
- **Label:** The compact label role identifies fields, statuses, metadata, and navigation; uppercase is limited to genuinely operational labels such as timestamps and board chrome.

### Named Rules
**The Two-Voice Rule.** Bricolage names the promise or operation; Manrope explains it and carries every control.

**The Operational Uppercase Rule.** Uppercase belongs to timestamps, statuses, indexes, and compact system labels—not to marketing headlines.

## Layout

The system uses a centered container capped at 1180px, with 24px desktop gutters and 16px mobile gutters. Desktop compositions favor asymmetric two-column grids: explanation sits beside proof, process, or an interactive operating surface. Section spacing is generous and responsive, while cards and workflow rows use a tighter 8–32px internal rhythm.

At 1020px, primary navigation collapses and major multi-column compositions stack. At 720px, actions become full-width where appropriate, forms collapse to one column, board content stacks, and section spacing settles at 90px. Operational grids simplify without hiding their content.

**The Explanation Beside Evidence Rule.** On wide screens, pair the claim with the mechanism, structured proof, or workflow that demonstrates it.

## Elevation & Depth

Depth is selective and structural. Most sections remain flat and are separated with hairlines or pale tonal fields. Large interactive panels and form panels use a broad cool shadow; smaller tickets and document-like cards use a tighter version. Primary buttons carry a small coral-tinted lift that increases on hover.

### Shadow Vocabulary
- **Panel lift:** `0 24px 70px -36px rgba(19, 46, 88, 0.35)` for dispatch boards, forms, and floating mobile navigation.
- **Card lift:** `0 14px 34px -24px rgba(19, 46, 88, 0.42)` for nested tickets and reading cards.
- **Action lift:** `0 10px 25px -16px rgba(177, 47, 29, 0.8)` at rest and `0 16px 34px -18px rgba(177, 47, 29, 0.9)` on hover.

**The Lift the Working Surface Rule.** Elevation belongs to an actionable panel, floating menu, or contained working artifact; ordinary content sections stay flat.

## Shapes

The form language is gently engineered rather than pill-heavy. Controls use 8–9px corners, nested cards use 12px corners, and primary panels use 16px corners. Pills are reserved for statuses, while circles represent route nodes, completion dots, avatars, and numbered process markers. One restrained rotated backing plane may sit behind a key operating surface to distinguish it from the page field.

**The Radius Shows Hierarchy Rule.** Controls are tighter than cards, and cards are tighter than major panels.

## Components

Components feel precise, responsive, and managed: each exposes its state with a small number of semantic signals.

### Buttons
- **Shape:** Gently rounded control with a coral border and a minimum 50px touch height.
- **Primary:** Coral field, white label, strong Manrope weight, and compact horizontal padding.
- **Hover / Focus:** Deepens to dark coral and lifts by 1px on hover; global keyboard focus uses a visible blue outline.
- **Small:** The header action keeps the same character at a 44px minimum height, with slightly larger type than the previous compact size.

### Chips
- **Style:** Fully rounded status pills use a soft semantic field with darker matching text.
- **State:** Blue communicates current routing state; green communicates live or completed state.

### Cards / Containers
- **Corner Style:** Nested cards use 12px corners; major panels use 16px corners.
- **Background:** White cards sit on white, cool-paper, or blue-paper grounds.
- **Shadow Strategy:** Only working surfaces and contained artifacts receive lift.
- **Border:** Cool hairlines organize every region and row.
- **Internal Padding:** Compact cards use 12–16px; major working panels use roughly 24–34px.

### Inputs / Fields
- **Style:** White fields use a firm cool border, 8px corners, and compact labels above the control.
- **Focus:** The border turns routing blue and receives a translucent blue 3px ring.
- **Error / Disabled:** Error borders and messages turn restrained red; disabled actions retain their shape and reduce opacity.

### Navigation
- At the top of the page, the sticky header is a full-width frosted bar. As the page scrolls, it eases into a centered capsule. Its translucent neutral surface and deep blur contain the brand mark, compact links, and a coral Book a demo action. At 1020px, navigation moves into a bordered, lifted dropdown with the primary action retained.

### Dispatch Board
- A bordered 16px panel combines live status chrome, route tabs, a continuous progress line, an updating message, and a nested lead ticket.
- Stage changes use short opacity and vertical transitions on an ease-out curve, under 300ms. The entire interaction becomes effectively static when reduced motion is requested.
- Blue marks passed and active routing, green confirms synchronization, and neutral hairlines preserve the board's information architecture.

### Operational Rows
- Repeated capability and process rows use borders instead of card grids. Icons occupy small blue-accented containers, titles use display type, and completion marks remain green. Hover adds only a white tonal field.

## Do's and Don'ts

### Do:
- **Do** keep white or near-white dominant and use pale fields to separate working zones.
- **Do** pair claims with a visible route, state, handoff, structured row, or working panel.
- **Do** preserve blue for routing and focus, coral for the primary action, and green for completion.
- **Do** use hairlines and spacing before introducing elevation.
- **Do** keep motion short, functional, and reduced-motion safe.

### Don't:
- **Don't** turn the experience into a dark-first, warm paper, or image-led visual world.
- **Don't** scatter coral across decoration, secondary links, or status states.
- **Don't** convert every piece of content into a floating card or bento grid.
- **Don't** use uppercase display copy or replace the established two-family type hierarchy.
- **Don't** introduce atmospheric AI meshes, stock imagery, or ornamental effects that obscure the operating model. Photographic wallpapers are allowed only inside the homepage showcase cards, behind the product screens.
