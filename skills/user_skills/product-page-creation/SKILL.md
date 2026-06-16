---
name: product-page-creation
description: Guidelines and strict rules for creating new product pages in the application. Use this whenever the user requests the creation or update of a product page.
---

# Product Page Creation Skill

When generating or modifying product pages based on templates or provided materials, you MUST follow these guidelines precisely:

## 1. Template strictness
- Use the main `hakon/index.html` structure as the definitive base template for all new product pages.
- Retain all classes, standard HTML structures, responsive behavior, and overall layout exactly as they are in the template.

## 2. No Pricing Information
- **CRITICAL**: You must NEVER copy, transcribe, or compute any product prices from screenshots, PDF attachments, or user images provided as references.
- New product pages MUST NOT display any prices, discounts, or installment plans. Exclude any placeholder tags or HTML blocks related to price rendering from the output.

## 3. Remove "Manual" from Ficha Técnica
- When populating the "Ficha Técnica" (Technical Specifications/Details) section of a product page, you must NOT include any links, lines, or references to "Manual", "Manual Completo", "Baixar manual", or similar elements.
- The product specifications section should contain only physical attributes (dimensions, weight, voltage, guarantee, etc.) without manual download links.

## 4. Short Sales Description & Tags
- You MUST create an exclusive, engaging, sales-focused short description (maximum 7 lines) to place below the product name for EACH product. Do not copy the short description from other products (like Hakon's).
- Between the product name and the short description, you MUST include the following tags exactly as they appear in the Hakon template: "Crédito pré-aprovado no boleto", "Aprovação rápida", "Treinamento incluso".

## 5. Automation and Workflow
- Replace standard metadata (title, text wrappers, images, specific specs).
- Do not introduce arbitrary new sections if they aren't part of the base template.
- Use placeholders for images (e.g., `https://placehold.co/...`) if specific image assets are missing, maintaining dimensions appropriate for the layout.
