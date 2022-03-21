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