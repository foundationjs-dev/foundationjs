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

FoundationJS treats applications as compositions of reusable foundations.

        Archetype
        │
        ▼
    Foundation Plan
        │
        ├── Capabilities
        ├── Integrations
        └── Automations
                │
                ▼
            Application

Applications consume only what they require.

---

## Archetypes

Archetypes define the type of project being created.

An archetype is the starting blueprint that determines the foundation an application receives.

Examples:

    platform
        ├── application structure
        ├── TypeScript setup
        ├── Next.js foundation
        ├── development tooling
        └── production conventions

    website
        ├── frontend structure
        ├── Next.js setup
        └── deployment workflow

    library
        ├── package configuration
        ├── build tooling
        └── publishing workflow

    cli
        ├── executable structure
        ├── command framework
        └── release workflow

Archetypes should provide sensible defaults instead of forcing developers through unnecessary configuration.

---

## Capabilities

Capabilities are reusable pieces of engineering infrastructure.

Instead of copying entire templates, applications compose capabilities.

Examples:

    Base Application

        +
        Git Repository

        +
        Dependency Management

        +
        Metadata

        +
        Testing

        +
        Documentation

        =
        Production Foundation

Capabilities represent what a project can do.

They are independent building blocks that can be reused across different archetypes.

---

## Integrations

Integrations connect FoundationJS projects with external services.

Examples:

- GitHub
- Vercel
- databases
- authentication providers
- storage providers
- monitoring systems

Integrations should only be enabled where they make sense for the chosen archetype.

A CLI project should not receive frontend deployment tooling.

A website should not receive database infrastructure by default.

---

## Automations

Automations execute setup tasks based on the selected foundation.

Example:

    foundation init website

            ↓

    Create project

            ↓

    Initialize git

            ↓

    Install dependencies

            ↓

    Create GitHub repository

            ↓

    Configure deployment

Automations return structured results that can be consumed by different interfaces.

The CLI is only one possible consumer.

---

## Project Composition Model

FoundationJS treats an archetype as the source of truth for creating a project.

An archetype defines the default foundation a project receives:

    Archetype

        ├── Stack decisions
        │       ├── framework
        │       ├── language
        │       └── tooling
        │
        ├── Capabilities
        │       ├── git
        │       ├── testing
        │       ├── documentation
        │       └── development workflow
        │
        ├── Integrations
        │       ├── GitHub
        │       ├── Vercel
        │       ├── Supabase
        │       └── external services
        │
        └── Optional decisions
                ├── database
                ├── authentication
                ├── storage
                └── background jobs

The goal is not maximum configuration.

The goal is the correct foundation with minimal friction.

---

## Guided and Power User Workflows

FoundationJS supports both guided workflows and complete automation.

The default workflow is designed around sensible engineering decisions.

Example:

    foundation init platform

Foundation determines obvious decisions automatically:

    ✓ TypeScript
    ✓ Next.js
    ✓ Git
    ✓ Dependencies
    ✓ Project structure

Only architectural decisions require input:

    Optional services:

    Database?
    Authentication?
    Storage?
    Deployment?

A developer should not need to configure decisions that are already determined by the selected archetype.

---

## Automated Workflows

Power users and CI environments can configure everything explicitly.

The same foundation engine can be driven through commands, configuration files, or presets.

Example:

    foundation init my-app \
        --archetype platform \
        --database supabase \
        --auth supabase \
        --deployment vercel \
        --github \
        --private

Or through a reusable preset:

    foundation init my-app --preset production

Example preset:

    archetype: platform

    capabilities:
      - git
      - dependencies
      - testing
      - documentation

    integrations:
      - github
      - vercel
      - supabase

Both workflows produce the same result.

The CLI is only an interface. The underlying FoundationJS model remains the source of truth.

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

## Developer Experience

FoundationJS aims to make high-quality engineering defaults automatic.

The developer should focus on the application problem.

FoundationJS handles:

- structure
- conventions
- tooling
- automation
- validation
- project setup

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
