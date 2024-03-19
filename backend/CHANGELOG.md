# [vorlesungsplan-plus-api-v2.1.9](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.8...vorlesungsplan-plus-api-v2.1.9) (2024-03-19)


### Bug Fixes

* remove vulnerable dependencies ([#15](https://github.com/larsrickert/vorlesungsplan-plus/issues/15)) ([baaece2](https://github.com/larsrickert/vorlesungsplan-plus/commit/baaece2a613123ae477e775626544ede39e727aa))

# [vorlesungsplan-plus-api-v2.1.8](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.7...vorlesungsplan-plus-api-v2.1.8) (2024-01-20)


### Bug Fixes

* update dependencies ([#14](https://github.com/larsrickert/vorlesungsplan-plus/issues/14)) ([a5839b5](https://github.com/larsrickert/vorlesungsplan-plus/commit/a5839b53332098b4ed62585246917c1515546216))

# [vorlesungsplan-plus-api-v2.1.7](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.6...vorlesungsplan-plus-api-v2.1.7) (2023-04-07)


### Bug Fixes

* remove vulnerable dependencies ([8f0655f](https://github.com/larsrickert/vorlesungsplan-plus/commit/8f0655f0e19aec2879c9e745c175b6d26ebc7ff5))

# [vorlesungsplan-plus-api-v2.1.6](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.5...vorlesungsplan-plus-api-v2.1.6) (2022-09-12)


### Bug Fixes

* remove vulnerable dependency ([d0cde7c](https://github.com/larsrickert/vorlesungsplan-plus/commit/d0cde7c05701d2ce7a44d3dde3c8a2ded93d4a5e))

# [vorlesungsplan-plus-api-v2.1.5](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.4...vorlesungsplan-plus-api-v2.1.5) (2022-06-10)


### Bug Fixes

* remove vulnerable dependencies ([fbb02ac](https://github.com/larsrickert/vorlesungsplan-plus/commit/fbb02ac95158be02a8c2806738e76e630efe9bdc))

# [vorlesungsplan-plus-api-v2.1.4](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.3...vorlesungsplan-plus-api-v2.1.4) (2022-06-05)


### Bug Fixes

* update vulnerable dependencies ([4dc90af](https://github.com/larsrickert/vorlesungsplan-plus/commit/4dc90af1a4c30bbbbea8981f7faac889e178a34d))

# [vorlesungsplan-plus-api-v2.1.3](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.2...vorlesungsplan-plus-api-v2.1.3) (2022-04-09)


### Bug Fixes

* update vulnerable dependencies ([6b6605c](https://github.com/larsrickert/vorlesungsplan-plus/commit/6b6605cda423f736b53250ab36e8e3f0ee01708f))

# [vorlesungsplan-plus-api-v2.1.2](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.1...vorlesungsplan-plus-api-v2.1.2) (2022-03-27)


### Bug Fixes

* error middleware not catching app errors ([642a144](https://github.com/larsrickert/vorlesungsplan-plus/commit/642a1449333963def672964f79c5e71ac635738a))

# [vorlesungsplan-plus-api-v2.1.1](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.1.0...vorlesungsplan-plus-api-v2.1.1) (2022-03-26)


### Bug Fixes

* remove vulnerable dependencies ([d047794](https://github.com/larsrickert/vorlesungsplan-plus/commit/d047794f6ba24d88585cf1f9931cc2f28c865da9))

# [vorlesungsplan-plus-api-v2.1.0](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v2.0.0...vorlesungsplan-plus-api-v2.1.0) (2022-03-26)


### Bug Fixes

* lectures containing "prüfung" not classified as exam ([820e846](https://github.com/larsrickert/vorlesungsplan-plus/commit/820e846764e191a4c25954c827d68318eea99413))
* self study ("Selbststudium") classified as PRESENCE ([9a8b6ff](https://github.com/larsrickert/vorlesungsplan-plus/commit/9a8b6ff6899d0e3b7ef14b634eb8fd064344f4f3))


### Features

* add lecture type "HOLIDAY" ([79eb922](https://github.com/larsrickert/vorlesungsplan-plus/commit/79eb9221a41cebadbd4d46797a7f90ec78defaf8))

# [vorlesungsplan-plus-api-v2.0.0](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0...vorlesungsplan-plus-api-v2.0.0) (2022-03-21)


### Bug Fixes

* swagger docs in prod are empty ([de431fe](https://github.com/larsrickert/vorlesungsplan-plus/commit/de431fef38308ee7c3dc2c619f2a196f01fe035c))
* ios widget is not served in prod build ([b94be5c](https://github.com/larsrickert/vorlesungsplan-plus/commit/b94be5c00e341fb0d49c8ab027cbc852a7809bf5))


### Features

* update ios widget to `v4.0.0` ([#7](https://github.com/larsrickert/vorlesungsplan-plus/issues/7)) ([5da5805](https://github.com/larsrickert/vorlesungsplan-plus/commit/5da5805c6d44daa89f5390125a4acb3184c99049))


### BREAKING CHANGES

* route `/ios/widget` returning json instead of string on error
* remove deprecated route `/`,  a 404 error message with reference to api docs is shown instead. Please use routes `/courses` and `/lectures/{course}`
* remove deprecated route `/help`, use `/docs` instead
* remove android APK in favour of PWA
* adjust `lecture` data structure
  - rename property `uid` to `id`
  - rename property `room` to `rooms` which now contains an array of rooms instead of a single string
  - remove deprecated property `lastModified`
  - add property `type` which is either `PRESENCE` or `ONLINE` and indicates whether the lecture is online or presence
  - add property `isExam` which indicates whether the lecture is an exam (will be false for exam reviews (Klausureinsicht))
* remove deprecated course name mappings for `INF19A`, `INF19B` and `MGH-INF19`. Use `MOS-TINF19A`, `MOS-TINF19B` and `MGH-TINF19` instead
* route `/lectures/{course}` returns all lectures by default instead of only upcoming ones. You can use the query parameter `excludePast=true` to filter out past lectures

# vorlesungsplan-plus-api-v1.0.0 (2022-03-16)


### Features

* add monorepo and semantic-release ([#4](https://github.com/larsrickert/vorlesungsplan-plus/issues/4)) ([304087f](https://github.com/larsrickert/vorlesungsplan-plus/commit/304087f38b11b8c11336286f0463da03907b08b5))
