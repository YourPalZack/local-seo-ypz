# Promptimizer Tool Style Guide

This document provides specifications for styling and layout to ensure consistent design across all pages in the promptimizer tool suite.

## Table of Contents
1. [General Layout](#general-layout)
2. [Typography](#typography)
3. [Color Palette](#color-palette)
4. [Components](#components)
   - [Container](#container)
   - [Form Controls](#form-controls)
   - [Buttons](#buttons)
   - [Result Containers](#result-containers)
   - [Example Sections](#example-sections)
   - [How-to-Use Section](#how-to-use-section)
5. [Responsive Design](#responsive-design)
6. [JavaScript Patterns](#javascript-patterns)
7. [HTML Structure Template](#html-structure-template)
8. [CSS Template](#css-template)

## General Layout

All promptimizer tool pages follow a consistent vertical layout with the following sections in order:

1. **Header**: Title and introduction text
2. **Input Controls**: Form elements for user input
3. **Result Container**: Area to display generated content
4. **How-to-Use Section**: Instructions for using the tool
5. **Examples Section**: Tabbed examples of tool usage
6. **CSS Styles**: Styling rules
7. **JavaScript**: Functionality code

The main container has the following properties:
- Width: 100%
- Padding: 30px
- Background color: #f9f9f9
- Border radius: 10px
- Box shadow: 0 2px 15px rgba(0, 0, 0, 0.1)

## Typography

- **Font Family**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif
- **Base Text Color**: #333
- **Base Font Size**: 16px
- **Line Height**: 1.6

### Text Elements

| Element | Font Size | Font Weight | Color | Margin |
|---------|-----------|-------------|-------|--------|
| h1 (main title) | 28px | normal | #2c3e50 | 0 0 10px 0 |
| h3 (section titles) | 20px | normal | #2c3e50 | 0 0 15px 0 |
| h4 (example titles) | 18px | normal | #2c3e50 | 0 0 15px 0 |
| p (intro text) | 16px | normal | #5a6a7a | 0 0 30px 0 |
| p (general) | 14px | normal | #333 | 0 0 15px 0 |
| label | 15px | 600 | #445566 | 0 0 6px 0 |

## Color Palette

| Element | Color | Usage |
|---------|-------|-------|
| Primary Color | #008348 | Buttons, active tabs, accents |
| Primary Hover | #006738 | Button hover states |
| Background | #f9f9f9 | Main container background |
| White | #ffffff | Section backgrounds, form controls |
| Light Gray | #f5f5f5 | Inactive tabs, secondary buttons |
| Medium Gray | #ddd | Borders |
| Dark Gray | #333 | Text color |
| Text Secondary | #5a6a7a | Secondary text (intro paragraph) |
| Text Heading | #2c3e50 | Headings |
| Text Label | #445566 | Form labels |
| Box Background | #f8fafc | Example boxes, result container |
| Border Light | #e1e8ed | Box borders |
| How-to-Use Background | #f0f7f4 | How-to-use section background |

## Components

### Container

The main container `.seo-prompt-generator` has the following properties:
```css
.seo-prompt-generator {
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #333;
  box-sizing: border-box;
}
```

### Form Controls

Form controls are contained within `.prompt-controls` with the following properties:
```css
.prompt-controls {
  margin-bottom: 30px;
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}
```

Input groups have consistent styling:
```css
.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #445566;
  font-size: 15px;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  transition: border 0.3s;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #008348;
  outline: none;
  box-shadow: 0 0 3px rgba(0, 131, 72, 0.3);
}
```

### Buttons

Primary action buttons (generate):
```css
.generate-button {
  width: 100%;
  padding: 14px;
  background-color: #008348;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.generate-button:hover {
  background-color: #006738;
}
```

Secondary action buttons (copy):
```css
.copy-button {
  padding: 10px 18px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.copy-button:hover {
  background-color: #e0e0e0;
}
```

### Result Containers

Result containers have consistent styling:
```css
.result-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

.prompt-box {
  min-height: 150px;
  padding: 20px;
  background-color: #f8fafc;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  margin-bottom: 15px;
  white-space: pre-wrap;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}
```

### Example Sections

Example sections use a tabbed interface:
```css
.examples-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.example-tab {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.example-tab:hover {
  background-color: #e0e0e0;
}

.example-tab.active {
  background-color: #008348;
  color: white;
  border-color: #008348;
}

.example-item {
  display: none;
}

.example-item.active {
  display: block;
}

.example-box {
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e1e8ed;
  font-size: 14px;
  line-height: 1.6;
}
```

### How-to-Use Section

The how-to-use section has a distinct style:
```css
.how-to-use {
  background-color: #f0f7f4;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 4px solid #008348;
}
```

## Responsive Design

Mobile responsiveness is handled with the following media query:
```css
@media (max-width: 768px) {
  .seo-prompt-generator {
    padding: 20px;
  }
  
  .example-tabs {
    flex-direction: column;
    gap: 5px;
  }
  
  .example-tab {
    width: 100%;
    text-align: center;
  }
}
```

## JavaScript Patterns

All promptimizer tools follow these JavaScript patterns:

1. Code is wrapped in a `DOMContentLoaded` event listener
2. Tab switching functionality for examples
3. Form input handling for generating content
4. Template functions for different content types
5. Copy to clipboard functionality

Example of the standard JavaScript structure:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const generateButton = document.getElementById('generate-prompt');
  const copyButton = document.getElementById('copy-prompt');
  const promptResult = document.getElementById('prompt-result');
  const exampleTabs = document.querySelectorAll('.example-tab');
  const exampleItems = document.querySelectorAll('.example-item');
  
  // Tab switching functionality
  exampleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and examples
      exampleTabs.forEach(t => t.classList.remove('active'));
      exampleItems.forEach(item => item.classList.remove('active'));
      
      // Add active class to current tab
      this.classList.add('active');
      
      // Show corresponding example
      const exampleId = this.getAttribute('data-example') + '-example';
      document.getElementById(exampleId).classList.add('active');
    });
  });
  
  // Generate content when button is clicked
  generateButton.addEventListener('click', function() {
    // Get form values
    // Generate content based on template functions
    // Update result container
  });
  
  // Template functions for different content types
  
  // Copy to clipboard functionality
  copyButton.addEventListener('click', function() {
    const textToCopy = promptResult.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      const originalText = copyButton.textContent;
      copyButton.textContent = 'Copied!';
      setTimeout(function() {
        copyButton.textContent = originalText;
      }, 2000);
    }).catch(function(err) {
      console.error('Could not copy text: ', err);
      alert('Failed to copy to clipboard. Please try again or copy manually.');
    });
  });
});
```

## HTML Structure Template

Here's the standard HTML structure for promptimizer tool pages:

```html
<!-- [TOOL NAME] HTML -->
<div class="seo-prompt-generator">
  <h1>[Tool Title]</h1>
  <p class="intro-text">[Tool description]</p>
  
  <div class="prompt-controls">
    <!-- Form controls go here -->
    <button id="generate-prompt" class="generate-button">Generate [Content Type]</button>
  </div>
  
  <div class="result-container">
    <h3>Your [Content Type]:</h3>
    <div id="prompt-result" class="prompt-box"></div>
    <button id="copy-prompt" class="copy-button">Copy [Content Type]</button>
  </div>
  
  <!-- How to Use Section -->
  <div class="how-to-use">
    <h3>How to Use This Tool</h3>
    <ol>
      <!-- Instructions go here -->
    </ol>
  </div>
  
  <div class="examples-container">
    <h3>Example [Content Type]s</h3>
    <div class="example-tabs">
      <!-- Example tabs go here -->
    </div>
    <div class="example-content" id="example-content">
      <!-- Example content goes here -->
    </div>
  </div>
</div>

<!-- CSS Styles -->
<style>
  /* CSS styles go here */
</style>

<!-- JavaScript Code -->
<script>
  /* JavaScript code goes here */
</script>
```

## CSS Template

Here's the complete CSS template for promptimizer tool pages:

```css
.seo-prompt-generator {
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #333;
  box-sizing: border-box;
}

.seo-prompt-generator h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
}

.intro-text {
  text-align: center;
  color: #5a6a7a;
  margin-bottom: 30px;
  font-size: 16px;
}

.prompt-controls {
  margin-bottom: 30px;
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #445566;
  font-size: 15px;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  transition: border 0.3s;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #008348;
  outline: none;
  box-shadow: 0 0 3px rgba(0, 131, 72, 0.3);
}

.generate-button {
  width: 100%;
  padding: 14px;
  background-color: #008348;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.generate-button:hover {
  background-color: #006738;
}

.result-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

.result-container h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 15px;
}

.prompt-box {
  min-height: 150px;
  padding: 20px;
  background-color: #f8fafc;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  margin-bottom: 15px;
  white-space: pre-wrap;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}

.copy-button {
  padding: 10px 18px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.copy-button:hover {
  background-color: #e0e0e0;
}

.examples-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.examples-container h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 15px;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.example-tab {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.example-tab:hover {
  background-color: #e0e0e0;
}

.example-tab.active {
  background-color: #008348;
  color: white;
  border-color: #008348;
}

.example-item {
  display: none;
}

.example-item.active {
  display: block;
}

.example-item h4 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
}

.example-box {
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e1e8ed;
  font-size: 14px;
  line-height: 1.6;
}

.example-box p {
  margin-top: 0;
  margin-bottom: 15px;
}

.example-box ul {
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 20px;
}

.example-box li {
  margin-bottom: 8px;
}

.how-to-use {
  background-color: #f0f7f4;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 4px solid #008348;
}

.how-to-use h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 15px;
}

.how-to-use ol {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 20px;
}

.how-to-use li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .seo-prompt-generator {
    padding: 20px;
  }
  
  .example-tabs {
    flex-direction: column;
    gap: 5px;
  }
  
  .example-tab {
    width: 100%;
    text-align: center;
  }
}

/* Ensure all child elements respect container width */
.seo-prompt-generator * {
  max-width: 100%;
  box-sizing: border-box;
}

/* Make sure content doesn't overflow its container */
.prompt-box, .example-box {
  overflow-wrap: break-word;
  word-wrap: break-word;
}
```

This style guide provides all the necessary specifications to ensure consistent styling and layout across all pages in the promptimizer tool suite.
