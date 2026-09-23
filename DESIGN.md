---
name: Legal Fusion Hub
description: A bright operational system for visible lead routing and managed handoffs.
colors:
  white: "#ffffff"
  paper: "#f7f9fc"
  paper-blue: "#f1f6ff"
  ink: "#0c1e3b"
  ink-soft: "#53627a"
  line: "#dce3ed"
  line-dark: "#c8d2e0"
  routing-blue: "#175cff"
  routing-blue-dark: "#0d42bd"
  routing-blue-soft: "#eaf1ff"
  action-coral: "#f05b47"
  action-coral-dark: "#c94333"
  completion-green: "#13865f"
  completion-green-soft: "#e7f7f0"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(3.2rem, 6.4vw, 5.8rem)"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(2.15rem, 4vw, 3.7rem)"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope Variable, sans-serif"
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
    backgroundColor: "{colors.action-coral}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.action-coral-dark}"
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
    backgroundColor: "{colors.routing-blue-soft}"
    textColor: "{colors.routing-blue-dark}"
    rounded: "{rounded.pill}"
    padding: "5px 8px"
---

# Design System: Legal Fusion Hub

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
- **Small:** Header actions retain the same character at a 41px minimum height.

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
- The sticky white header uses a translucent surface, bottom hairline, and subtle blur. Desktop links are compact and darken to routing blue on hover. At 1020px, navigation moves into a bordered, lifted dropdown with the primary action retained.

### Dispatch Board
- A bordered 16px panel combines live status chrome, route tabs, a continuous progress line, an updating message, and a nested lead ticket.
- Stage changes use short opacity, vertical, and blur transitions. Progress follows a responsive 500ms emphasized ease; the entire interaction becomes effectively static when reduced motion is requested.
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
- **Don't** introduce atmospheric AI meshes, stock imagery, or ornamental effects that obscure the operating model.
