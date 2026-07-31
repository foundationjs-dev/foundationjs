# @paszed/tsconfig

> Shared TypeScript configurations for Paszed projects.

---

# About

`@paszed/tsconfig` provides production-ready TypeScript configuration presets used across all Paszed projects.

The goal is to keep TypeScript configuration centralized, consistent, and easy to maintain.

Instead of copying `tsconfig.json` between repositories, projects extend one of the provided presets.

---

# Available Presets

## base

The foundation for all other presets.

Designed for:

- Node packages
- Libraries
- Tooling
- Internal platform packages

```json
{
  "extends": "@paszed/tsconfig/base"
}
```

---

## node

TypeScript configuration for Node.js applications and CLIs.

Examples:

- CLI
- Generators
- Scripts
- Build tooling

```json
{
  "extends": "@paszed/tsconfig/node"
}
```

---

## next

Configuration for Next.js applications.

Examples:

- paszed.me
- Verra
- Future SaaS applications

```json
{
  "extends": "@paszed/tsconfig/next"
}
```

---

## react-library

Configuration for React component libraries.

Examples:

- UI libraries
- Design systems
- Shared React packages

```json
{
  "extends": "@paszed/tsconfig/react-library"
}
```

---

# Philosophy

The presets are designed to be:

- Strict
- Production-ready
- Type-safe
- Minimal
- Reusable

Projects should override configuration only when absolutely necessary.

---

# License

MIT
