# FoundationJS

> A composable foundation layer for building production-grade applications.

FoundationJS is an opinionated, extensible engineering platform built on top of the modern Next.js ecosystem.

It provides reusable foundations for application development through:

- project architecture
- developer tooling
- configuration
- generators
- capabilities
- shared packages
- development workflows
- automation

The goal is simple:

Build applications on top of proven foundations instead of rebuilding the same infrastructure every time.

---

## Philosophy

Modern applications repeatedly solve the same problems:

- project structure
- configuration
- tooling
- testing
- documentation
- CI/CD
- code quality
- architecture conventions
- developer experience

FoundationJS turns these repeated decisions into reusable infrastructure.

The principle:

> Own the foundation. Compose the application.

---

## Built on Next.js

FoundationJS embraces the Next.js ecosystem while extending it with additional engineering infrastructure.

Next.js provides the application framework.

FoundationJS provides the surrounding foundation:

    Next.js Application
            │
            ▼
    FoundationJS Layer
            │
            ├── Architecture
            ├── Tooling
            ├── Configuration
            ├── Generators
            ├── Capabilities
            └── Development Workflow

---

## Core Model

FoundationJS treats applications as compositions of reusable capabilities.

    Foundation
        │
        ├── Core primitives
        ├── Configurations
        ├── Capabilities
        ├── Generators
        ├── Developer tools
        │
        ▼
    Application

Applications consume only what they require.

---

## Architecture

FoundationJS is organized as a modular monorepo.

    foundation/
    ├── apps/
    │   ├── docs
    │   └── website
    │
    ├── packages/
    │   ├── core
    │   ├── engine
    │   ├── cli
    │   ├── generators
    │   ├── capabilities
    │   ├── configs
    │   ├── adapters
    │   ├── devkit
    │   └── shared
    │
    ├── examples/
    ├── docs/
    ├── scripts/
    └── tests/

---

## Packages

### Core

Foundation primitives and shared concepts.

### Engine

Composition and orchestration logic.

### CLI

The developer interface for interacting with FoundationJS.

### Generators

Automated creation of project resources.

### Capabilities

Reusable application capabilities.

### Configs

Shared development configurations.

### Devkit

Developer utilities and helpers.

---

## Capabilities

FoundationJS is built around composability.

Instead of copying entire project templates, applications compose capabilities:

    Base Application

        +
        TypeScript

        +
        Testing

        +
        Documentation

        +
        Deployment

        =
        Production Foundation

---

## Developer Experience

FoundationJS aims to make high-quality engineering defaults automatic.

The developer should focus on the application problem.

FoundationJS handles:

- structure
- conventions
- tooling
- automation
- validation

---

## CLI

The CLI provides an interface for developers and automation systems.

Responsibilities:

- project initialization
- generation
- configuration
- orchestration

The underlying FoundationJS primitives remain usable independently.

---

## AI-Native Direction

FoundationJS is designed so both humans and AI agents can operate on explicit foundations.

Instead of agents inventing project structures repeatedly:

    Requirements

          ↓

    FoundationJS

          ↓

    Generated Application

          ↓

    Validation

The foundation already contains the engineering decisions.

---

## Non-Goals

FoundationJS is not:

- a replacement for Next.js
- a deployment platform
- an application framework
- a database layer
- a universal abstraction over every tool

FoundationJS provides the engineering foundation around applications.

---

## Status

FoundationJS is under active development.

The architecture evolves through real application requirements and reusable engineering patterns.

---

## License

MIT
