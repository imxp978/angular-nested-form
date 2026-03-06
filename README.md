# Angular Dynamic Approval Workflow

**Live Demo**: https://imxp978.github.io/angular-nested-form

A reusable multi-level approval workflow component built with Angular 20,
demonstrating advanced Reactive Forms patterns for enterprise applications.

## What This Demonstrates

- Dynamic nested FormArray — add/remove approval levels and approvers at runtime
- Cross-level form validation with real-time feedback
- Modern Angular patterns: standalone components, inject(), takeUntilDestroyed()
- Clean component architecture with parent/child form communication

## Use Case

Approval workflows are common in ERP, CRM, and HR systems.
This component handles variable approval chains
(e.g. 1–5 levels, each with multiple approvers)
without hardcoding form structure.

## Tech Stack

Angular 20 · TypeScript · Reactive Forms · Angular Material · RxJS
