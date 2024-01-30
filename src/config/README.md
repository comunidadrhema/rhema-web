## Config Folder

For easier maintenance and scalability, we aim to keep most of the application code inside the features folder. Every feature folder should contain domain-specific code for a given feature.

- api: All the fetch logic goes here. This decouples the API and the UI.
- components: Feature specific components.
- composables: Feature specific composables.
- stores: The state management code. Multiple sub-modules are expected and actually encouraged.
- types: Feature specific typeScript type definitions.
- index.ts: This is the entry point of the feature. It behaves as the public API of the feature, and it should only export things that should be public for other parts of the application.
