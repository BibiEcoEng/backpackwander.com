# Backpack Wander GmbH - Implementation Checklist

## SUMMARY
This is a **complete website restructuring** from a generic "Coaching & Community" site to a professional B2B engineering company with two brands:
1. **Pipeline Quality** (Engineering & QA/QC Services)
2. **BW Digit** (Digital Tools & Automation)

---

## PHASE 1: CONTENT & STRUCTURE CHANGES

### ✅ Navigation Menu (Simplify & Hide)
**Current:** Home | Coaching & Courses | Digital Services | Community | Shop | Contact

**New:** Home | Engineering (Pipeline Quality) | Digital (BW Digit) | Contact

**Actions Required:**
- [ ] Remove "Coaching & Courses" link
- [ ] Remove "Digital Services" link
- [ ] Remove "Community" link
- [ ] Remove "Shop" link
- [ ] Update Navbar.jsx to only show: Home, Engineering, Digital, Contact
- [ ] Make "Engineering" and "Digital" anchor links (#engineering, #digital) that scroll to sections
- [ ] Hide old pages (don't delete database, set to "Draft" status)
- [ ] Remove hidden pages from sitemap.xml

### ✅ Hide/Archive Pages (Keep in Database, Remove from Public)
**Pages to hide:**
- [ ] Coaching page
- [ ] Community page
- [ ] Shop pages
- [ ] Update sitemap.xml to exclude these pages

### ✅ Update Navbar (common/Navbar.jsx)
- [ ] Update menu items in translation files
- [ ] Implement anchor link behavior (#engineering → scrolls to Pipeline Quality section)
- [ ] Implement anchor link behavior (#digital → scrolls to BW Digit section)
- [ ] Keep LanguageSwitcher but only show: EN and DE (hide Serbian)

---

## PHASE 2: HERO SECTION RESTRUCTURING

### ✅ Hero Section - English Content
**File:** `src/components/Hero.jsx`

**New Content Structure:**
```
┌─────────────────────────────────────────────────────────────────┐
│ HEADLINE: "Engineering Excellence Meets Digital Innovation."    │
│                                                                 │
│ SUBHEADLINE: "Backpack Wander GmbH provides specialized         │
│ QA/QC engineering services and custom digital tools designed    │
│ to make construction sites safer, faster and more efficient."   │
│                                                                 │
│ ───────────────────────────────────────────────────────────────│
│ THE TWO PILLARS OF BACKPACK WANDER GMBH                         │
│ ───────────────────────────────────────────────────────────────│
│                                                                 │
│ [LOGO] Pipeline Quality    [LOGO] BW Digit                      │
│ Engineering & QA/QC        Digital Tools & Automation          │
│                                                                 │
│ Services:                  Services:                            │
│ • Welding Traceability    • Digital Documentation & Logs       │
│ • QA/QC Documentation    • Interactive Site Maps               │
│ • Site Walkdowns         • Automated Traceability              │
│ • ISO 9001 & 45001       • Custom App Development              │
│                                                                 │
│ [Button] Visit Pipeline Quality  [Button] Visit BW Digit        │
│                                                                 │
│ ───────────────────────────────────────────────────────────────│
│ OUR MISSION:                                                    │
│ "We bridge the gap between heavy engineering and modern         │
│ technology. Our digital tools are built by engineers, for       │
│ engineers, specifically to eliminate manual errors and ensure   │
│ every weld, map, and log is documented with 100% accuracy      │
│ and safety."                                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Actions:**
- [ ] Update Hero.jsx headline and subheadline
- [ ] Add "Two Pillars" section with two-column layout
- [ ] Add Pipeline Quality logo and description
- [ ] Add BW Digit logo and description
- [ ] Add feature lists for both brands
- [ ] Add buttons: "Visit Pipeline Quality" and "Visit BW Digit"
- [ ] Add Mission statement
- [ ] Update en/translation.json with all English text

### ✅ Hero Section - German Content
**Actions:**
- [ ] Add all German translations to de/translation.json
- [ ] Ensure German version displays when language is switched
- [ ] Test both EN and DE versions of hero section

---

## PHASE 3: ARCHITECTURE - ADD BRANDED SECTIONS

### ✅ Create New Components (or Update Existing)
Currently you have: WhatWeDo, WeOffer, OurVision, Potential, etc.

**New Structure (instead of old components):**

- [ ] **#engineering section** (anchor: #engineering)
  - Full details about Pipeline Quality
  - Services list
  - ISO compliance info
  - Contact CTA
  
- [ ] **#digital section** (anchor: #digital)
  - Full details about BW Digit
  - Features / Products
  - Use cases
  - Contact CTA

**Option A (Preferred):** Repurpose existing components
- Rename WhatWeDo.jsx → PipelineQuality.jsx
- Rename WeOffer.jsx → BwDigit.jsx
- Keep styling intact, just update content

**Option B:** Update existing components
- Keep filenames, update content and add id="engineering" and id="digital"

### ✅ Update App.jsx Routing
Current:
```jsx
<Hero />
<WhatWeDo />
<WeOffer />
<BeginSection />
<Visible />
<OurVision />
<Potential />
<ContactUs />
```

**New (suggested):**
```jsx
<Hero />           {/* Contains Two Pillars overview */}
<PipelineQuality /> {/* id="engineering" */}
<BwDigit />         {/* id="digital" */}
<ContactUs />       {/* CTA */}
```

- [ ] Decide which old sections to keep vs remove
- [ ] Remove or hide BeginSection, Visible, OurVision, Potential if they're coaching-related
- [ ] Test anchor links work properly (#engineering, #digital)

---

## PHASE 4: LEGAL & REGULATORY

### ✅ Update Legal Pages
**File:** `src/components/PrivacyPolicy.jsx`
**File:** `src/components/TermsAndConditions.jsx` (or create Impressum.jsx)

**Company Info to Update:**
```
Company Name: Backpack Wander GmbH
Address: Kolonnenstraße 8, 10827 Berlin, Germany
HRB: 282058 B (Commercial Register)
Email: info@backpackwander.com (official)
Website: backpackwander.com
```

**Actions:**
- [ ] Update PrivacyPolicy.jsx with company details
- [ ] Create/Update Impressum (Legal Notice) - German requirement
- [ ] Add GDPR compliance information
- [ ] Add data processing info for contact form
- [ ] Create German versions (Datenschutzerklärung, Impressum)
- [ ] Add footer links to both in German AND English
- [ ] Ensure footer shows: "Impressum" | "Privacy Policy" | "Datenschutzerklärung"

### ✅ Regulatory Links in Footer
**File:** `src/components/common/Footer.jsx`

- [ ] Add link to Privacy Policy (English & German versions)
- [ ] Add link to Impressum (German legal notice)
- [ ] Add link to Terms & Conditions if needed
- [ ] Ensure easily accessible (within 2 clicks from any page)
- [ ] Add DSGVO badge/indicator if needed

---

## PHASE 5: LANGUAGE & LOCALIZATION

### ✅ Update Translation Files

**File:** `src/locales/en/translation.json`
- [ ] navbar.engineering: "Engineering (Pipeline Quality)"
- [ ] navbar.digital: "Digital (BW Digit)"
- [ ] navbar.contact: "Contact"
- [ ] Remove old menu items (coaching, community, shop)
- [ ] Add hero section translations
- [ ] Add mission statement translations
- [ ] Add feature lists translations

**File:** `src/locales/de/translation.json`
- [ ] Add all German translations
- [ ] navbar items in German
- [ ] Hero section in German
- [ ] Feature lists in German
- [ ] Legal page text in German

**File:** `src/locales/sr/translation.json`
- [ ] Mark Serbian as hidden/deprecated
- [ ] OR remove it entirely
- [ ] Update Navbar to not show Serbian option

### ✅ Language Switcher
**File:** `src/components/common/LanguageSwitcher.jsx`

- [ ] Hide Serbian option
- [ ] Only show: English | Deutsch
- [ ] Remove build scripts for Serbian (build:sr)
- [ ] Remove dist-sr from preview scripts

### ✅ Update i18n Configuration
**File:** `src/i18n.js`

- [ ] Ensure only EN and DE are available
- [ ] Hide SR language
- [ ] Set fallback to EN if needed

---

## PHASE 6: EMAIL SETUP

### ✅ Email Configuration
**Official Email:** `info@backpackwander.com`

**Actions:**
- [ ] Update contact form to send to info@backpackwander.com
- [ ] Configure email backend (likely already in ContactUs.jsx)
- [ ] Test email functionality
- [ ] Ensure SMTP settings handle @backpackwander.com domain
- [ ] Add email to Privacy Policy as data controller

**Note:** .de domain avoided due to German registration rules; .com is official

---

## PHASE 7: BRANDING & VISUAL

### ✅ Add Brand Assets
- [ ] Add Pipeline Quality logo/icon
- [ ] Add BW Digit logo/icon
- [ ] Add images of construction sites (Hero background)
- [ ] Add images of welding inspections
- [ ] Add images of tablets/apps in field use

**Folder:** `src/assets/`
- [ ] Create subdirectories for logos (Pipeline Quality, BW Digit)
- [ ] Add hero images
- [ ] Update img imports in components

### ✅ Styling & Aesthetic
- [ ] Maintain professional, industrial aesthetic
- [ ] Use dark/neutral colors for engineering feel
- [ ] High-contrast buttons for CTA
- [ ] Responsive design for mobile (construction site workers use phones)

---

## PHASE 8: SITEMAP & SEO

### ✅ Update sitemap.xml
**File:** `public/sitemap.xml`

- [ ] Keep: /en, /de (remove or comment out /sr)
- [ ] Remove hidden pages (coaching, community, shop)
- [ ] Add legal pages (impressum, privacy)
- [ ] Include anchor sections if needed (#engineering, #digital)
- [ ] Update domain to backpackwander.com

### ✅ Update Meta Tags
- [ ] Update SEO keywords in translation.json
- [ ] Keywords: "QA/QC engineering", "pipeline quality", "construction automation", etc.
- [ ] Update description tags for company

---

## PHASE 9: DOMAIN & VERCEL

### ✅ Domain Configuration
- [ ] Primary domain: **backpackwander.com** (NOT .de)
- [ ] Reason: German registration rules for .de domains
- [ ] Email: info@backpackwander.com
- [ ] Vercel already configured per Biljana's note

### ✅ GitHub Integration
- [ ] Already connected per Biljana's note
- [ ] Just needs email functional

---

## PHASE 10: GERMAN REDIRECT (OPTIONAL, ADVANCED)

❓ **Clarification Needed:** 
Biljana mentioned: "make redirect to German visitors when they visit website to open German version but no need to duplicate"

This could mean:
1. Use browser language detection to auto-switch to DE (already supported by i18next)
2. Use GeoIP to detect German users and auto-redirect
3. Keep same domain, just auto-switch language in browser

**Current setup (Option 1):**
- Use Navbar language switcher
- i18next auto-detects browser language
- User can manually switch

**If GeoIP redirect needed (Option 2):**
- Would require Vercel Edge Functions or middleware
- Adds complexity
- **Recommend clarifying with Biljana before implementing**

---

## FINAL CHECKLIST

- [ ] All old pages hidden (not deleted)
- [ ] Menu simplified to 4 items
- [ ] Anchor links working (#engineering, #digital)
- [ ] Hero section updated with new content
- [ ] Two Pillars section with logos
- [ ] Feature lists for both brands
- [ ] Legal pages updated with company info
- [ ] Footer has legal links
- [ ] Translations complete (EN & DE)
- [ ] Serbian hidden/removed
- [ ] Email functional
- [ ] Sitemap updated
- [ ] All links working
- [ ] Mobile responsive
- [ ] Domain set to backpackwander.com
- [ ] Test on both desktop & mobile

---

## IMPLEMENTATION ORDER (RECOMMENDED)

1. ✅ **FIRST:** Update translation files (en/translation.json, de/translation.json)
2. ✅ **SECOND:** Update Navbar (remove old items, add anchor links)
3. ✅ **THIRD:** Update Hero section with new content
4. ✅ **FOURTH:** Create/Update Pipeline Quality & BW Digit sections
5. ✅ **FIFTH:** Update legal pages (Privacy, Impressum)
6. ✅ **SIXTH:** Update Footer with legal links
7. ✅ **SEVENTH:** Hide old pages (Coaching, Community, Shop)
8. ✅ **EIGHTH:** Test language switching (EN/DE only)
9. ✅ **NINTH:** Update sitemap.xml
10. ✅ **TENTH:** Test email functionality
11. ✅ **ELEVENTH:** Final testing across all devices

---

## QUESTIONS TO CLARIFY WITH BILJANA

1. **German Redirect Logic:** How to handle German visitors?
   - Auto-detect browser language? ✅ Already possible
   - GeoIP redirect? (Requires more setup)
   
2. **BW Digit - External Links?**
   - Should "Visit BW Digit" button link to external site?
   - Or scroll to #digital section on same page?

3. **Brand Logos:**
   - Do you have Pipeline Quality & BW Digit logos ready?
   - Where are they located?

4. **Feature Images:**
   - Do you have construction site images?
   - Who supplies these or should stock photos be used?

---

## ESTIMATED TIME

Based on current setup:
- **Content Update:** 2-3 hours
- **Layout Changes:** 2-3 hours
- **Legal Pages:** 1-2 hours
- **Testing & QA:** 1-2 hours
- **Total:** ~6-10 hours of development

Ready to start? Recommend **Phase 1 & 2 first** (navigation + hero section).
