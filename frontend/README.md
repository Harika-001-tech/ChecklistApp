# Checklist System

## Overview
This project implements a dynamic checklist system in Node.js with a simple dashboard. It evaluates application data against predefined rules and displays results.

## Adding New Rules
To add a new rule:

1. Open the `rulesConfig.js` file.
2. Add a new rule object to the `rules` array. Each rule should have:
   - A unique `id`.
   - A `description` string to describe the rule.
   - A `condition` function that takes application data and returns `true` or `false`.
3. Save the file. The new rule will be automatically included in the evaluation.

### Example Rule
```javascript
{
    id: 'exampleRule',
    description: 'Example Rule Description',
    condition: (data) => data.exampleField === true,
}
