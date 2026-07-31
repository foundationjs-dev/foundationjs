# Placeholder Specification

## Overview

This document defines the canonical placeholder vocabulary used throughout every repository template.

All templates under `templates/` MUST use only the placeholders defined in this document.

The scaffolder is responsible for resolving every placeholder before a repository is generated.

---

## Repository

### `{{REPOSITORY_NAME}}`

The repository identifier.

**Examples**

```text
api
security
analytics
search
payments
```

---

### `{{PACKAGE_NAME}}`

The package identifier.

**Examples**

```text
@paszed/api
@paszed/security
@paszed/analytics
```

---

### `{{TITLE}}`

The human-readable repository title.

**Examples**

```text
API

Security

Analytics
```

---

### `{{DESCRIPTION}}`

A concise repository description.

**Example**

```text
Shared API contracts, standards, and communication infrastructure.
```

---

## Ownership

### `{{AUTHOR}}`

Repository author.

**Example**

```text
Edvard Pasz
```

---

### `{{GITHUB_OWNER}}`

GitHub user or organization.

**Examples**

```text
paszed

acme

my-organization
```

---

### `{{DEFAULT_BRANCH}}`

Default Git branch.

**Examples**

```text
main

master

develop
```

---

## Licensing

### `{{LICENSE}}`

Repository license identifier.

**Examples**

```text
MIT

Apache-2.0

GPL-3.0
```

---

### `{{YEAR}}`

Copyright year.

**Example**

```text
2026
```

---

## Tooling

### `{{NODE_LTS}}`

Target Node.js LTS version.

**Example**

```text
22.17.1
```

---

### `{{PNPM_VERSION}}`

Target pnpm version.

**Example**

```text
10.33.0
```

---

## Placeholder Resolution

The scaffolder MUST replace every placeholder before repository generation is complete.

If a placeholder cannot be resolved, generation MUST fail with an error.

Templates MUST NOT define additional placeholder names outside this specification.

All placeholders are case-sensitive.

---

## Naming Rules

Every placeholder MUST:

- Use uppercase snake case.
- Be wrapped in double braces (`{{` and `}}`).
- Be documented in this file before being used.
- Represent exactly one value.
- Be globally reusable across every template.

---

## Canonical Placeholder Set

| Placeholder | Description |
| ------------ | ----------- |
| `{{REPOSITORY_NAME}}` | Repository identifier |
| `{{PACKAGE_NAME}}` | Package identifier |
| `{{TITLE}}` | Human-readable repository title |
| `{{DESCRIPTION}}` | Repository description |
| `{{AUTHOR}}` | Repository author |
| `{{GITHUB_OWNER}}` | GitHub user or organization |
| `{{DEFAULT_BRANCH}}` | Default Git branch |
| `{{LICENSE}}` | Repository license |
| `{{YEAR}}` | Copyright year |
| `{{NODE_LTS}}` | Target Node.js LTS version |
| `{{PNPM_VERSION}}` | Target pnpm version |

---

## Version

This specification is the single source of truth for placeholder names used by every template and every scaffolder implementation.
