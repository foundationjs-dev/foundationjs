# Bootstrapper

> **Opinionated project scaffolding and development environment automation.**

Bootstrapper provides a consistent way to create and initialize projects across the development ecosystem.

It composes shared tooling, configurations, templates, generators, and repository conventions into reproducible project foundations that can be used across personal projects, products, client work, and automated development workflows.

The goal is simple:

- Start new projects in minutes instead of hours
- Keep repositories structurally consistent
- Reuse proven development infrastructure
- Automate repetitive setup work
- Make project creation deterministic
- Provide foundations that humans and AI agents can operate predictably

---

## Why

Starting a production project involves much more than creating a directory and installing a framework.

A typical project may require:

- TypeScript configuration
- Package management
- Workspace configuration
- Formatting
- Linting
- Testing
- Build tooling
- CI
- Versioning
- Repository conventions
- Environment configuration
- Shared packages
- Documentation
- Project structure

Rebuilding these decisions for every repository creates unnecessary work and architectural drift.

Bootstrapper turns those decisions into reusable infrastructure.

\```text
Project Requirements
        │
        ▼
   Bootstrapper
        │
        ├── Presets
        ├── Templates
        ├── Generators
        ├── Configuration
        └── Tooling
        │
        ▼
Initialized Project
\```

---

## Philosophy

Every project should begin from a known, understandable foundation.

Bootstrapper is opinionated where consistency provides leverage and composable where projects genuinely require different capabilities.

It is designed around several principles:

- Convention over repeated configuration
- Composition over monolithic templates
- Reproducibility over manual setup
- Explicit architecture over hidden behavior
- Automation over repetitive work
- Stable interfaces for humans and agents

The objective is not to make every project identical.

The objective is to make intentional differences explicit.

---

## Core Model

Bootstrapper treats project creation as composition.

\```text
Base Project
    │
    ├── TypeScript
    ├── Workspace
    ├── Quality Tooling
    └── Repository Standards
    │
    ├── Application
    ├── Package
    ├── Library
    └── Service
    │
    ├── Testing
    ├── CI
    ├── Documentation
    └── Optional Capabilities
    │
    ▼
Generated Project
\```

Projects consume only the capabilities they require.

---

## Scope

Bootstrapper may include:

- Project scaffolding
- Repository initialization
- Workspace generation
- Project templates
- Package templates
- Configuration presets
- Code generators
- Development tooling configuration
- CI templates
- Testing setup
- TypeScript configuration
- Linting configuration
- Formatting configuration
- Versioning setup
- Documentation scaffolding
- Environment initialization
- Capability composition
- Project validation

---

## Repository Structure

\```text
bootstrapper/
├── configs/
├── generators/
├── presets/
├── templates/
├── tooling/
├── validation/
├── packages/
├── scripts/
└── docs/
\```

The structure will evolve as reusable project capabilities become concrete.

---

## Tooling

Bootstrapper currently targets a modern TypeScript development environment built around tools such as:

| Tool | Responsibility |
| --- | --- |
| TypeScript | Type system and language tooling |
| pnpm | Package and workspace management |
| Turborepo | Task and build orchestration |
| Biome | Code-quality tooling |
| Vitest | Testing |
| Changesets | Package versioning and releases |
| GitHub Actions | Continuous integration |

Specific tools are implementation choices rather than the architecture itself.

They may evolve while the project-generation model remains stable.

---

## Templates

Templates provide reusable project structures.

A template should represent a meaningful project shape rather than a complete copy of an existing application.

Examples may include:

\```text
templates/
├── application/
├── library/
├── package/
└── service/
\```

Templates establish structure.

Generators and presets compose additional capabilities into that structure.

---

## Presets

Presets represent reusable groups of configuration.

For example:

\```text
base
typescript
react
next
library
testing
ci
\```

A project can compose presets according to its requirements rather than inheriting every available tool.

Conceptually:

\```text
base
 + typescript
 + react
 + testing
 + ci
      │
      ▼
Application Foundation
\```

---

## Generators

Generators automate repeatable structural changes.

They may create:

- Applications
- Packages
- Components
- Libraries
- Configuration
- Documentation
- Tests
- Workspace resources

Generators should produce deterministic output from explicit input.

Running the same generator with the same configuration should produce the same project structure.

---

## Configuration

Project configuration should be explicit and inspectable.

Bootstrapper should avoid relying on hidden global state.

Conceptually:

\```text
Project Definition
       │
       ▼
Configuration
       │
       ▼
Composition
       │
       ▼
Generation
       │
       ▼
Validation
\```

This makes generated projects easier to understand, reproduce, and automate.

---

## Validation

Generation is only useful if the resulting project is valid.

Bootstrapper may validate:

- Required files
- Repository structure
- Configuration
- Workspace relationships
- Package metadata
- Tooling compatibility
- Generated output

The goal is to detect invalid project states during creation rather than after development begins.

---

## Development

Install dependencies:

\```bash
pnpm install
\```

Build the project:

\```bash
pnpm build
\```

Type-check:

\```bash
pnpm typecheck
\```

Run tests:

\```bash
pnpm test
\```

Run repository checks:

\```bash
pnpm check
\```

Available commands should remain documented by the repository itself as implementation evolves.

---

## Automation

Bootstrapper is designed to work without requiring manual project setup.

The same project-generation capabilities should eventually be usable by:

- Developers
- Shell scripts
- CI systems
- CLI
- AI agents

\```text
Human ───────┐
             │
CLI ─────────┤
             ▼
Automation ─► Bootstrapper ─► Project
             ▲
Agent ───────┘
\```

Interactive interfaces may exist, but the underlying generation primitives should remain deterministic and programmatically accessible.

---

## Agent-Native Project Creation

A long-term objective is allowing agents to construct projects from explicit requirements.

Conceptually:

\```text
Project Specification
        │
        ▼
      Agent
        │
        ▼
       CLI
        │
        ▼
  Bootstrapper
        │
        ▼
Capability Composition
        │
        ▼
Generated Repository
        │
        ▼
Validation
\```

Agents should not need to recreate repository conventions or infer development standards independently.

Those decisions should already exist as reusable infrastructure.

---

## Bootstrapper vs CLI

Bootstrapper and CLI have separate responsibilities.

\```text
Bootstrapper
│
├── Project generation
├── Templates
├── Presets
├── Configuration composition
└── Initialization logic

CLI
│
├── Command interface
├── User interaction
├── Automation interface
└── Capability orchestration
\```

CLI may invoke Bootstrapper.

Bootstrapper should remain usable independently of the CLI.

---

## Bootstrapper vs Engineering

Engineering defines how repositories should be built.

Bootstrapper implements those decisions during project creation.

\```text
Engineering
    │
    │ standards
    ▼
Bootstrapper
    │
    │ implementation
    ▼
New Project
\```

This distinction keeps architectural policy separate from scaffolding machinery.

---

## Boundaries

Bootstrapper owns:

- Project scaffolding
- Templates
- Presets
- Generators
- Initial project configuration
- Development tooling setup
- Project initialization
- Generated-project validation

Bootstrapper does **not** own:

- Engineering policy
- General command-line orchestration
- Application business logic
- UI components
- Identity
- Event infrastructure
- Observability infrastructure
- Testing infrastructure itself
- Deployment platforms

Those capabilities belong to their respective repositories.

---

## Ecosystem

Bootstrapper is part of a broader set of composable development infrastructure.

It may integrate with:

- **Engineering** — Standards and architectural conventions
- **CLI** — Command interface for project creation
- **Testkit** — Shared testing infrastructure
- **Observability** — Shared telemetry conventions
- **Identity** — Identity capabilities when required
- **Event Platform** — Event infrastructure when required
- **Design System** — Interface foundations
- **Content Engine** — Content infrastructure
- **Search** — Search and discovery capabilities
- **Trust Platform** — Trust and safety capabilities
- **Data Platform** — Data integration capabilities
- **Agent Network** — Automated project construction and operation

Applications can consume the resulting foundations without requiring Bootstrapper to own their product architecture.

---

## Non-Goals

Bootstrapper is not intended to become:

- An application framework
- A deployment platform
- A package manager
- A replacement for underlying open-source tooling
- A universal abstraction over every development tool
- The owner of application architecture

It composes existing tools and ecosystem capabilities into reproducible project foundations.

The principle is:

> **Own the opinion; outsource the commodity.**

---

## Long-Term Vision

The long-term goal is to make creating a well-structured project almost mechanical.

A developer should be able to describe the project they need, compose the appropriate capabilities, generate it, validate it, and immediately begin working on the problem that actually matters.

The same infrastructure should work for automated systems.

Eventually:

\```text
Requirements
     │
     ▼
Composition
     │
     ▼
Generation
     │
     ▼
Validation
     │
     ▼
Working Project
\```

Project setup becomes infrastructure rather than repeated manual work.

---

## Status

Bootstrapper is under active development.

Its architecture will continue to evolve from real project requirements and repeated patterns rather than speculative abstractions.

---

## License

Licensed under the MIT License.
