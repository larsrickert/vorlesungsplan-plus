# [vorlesungsplan-plus-api-v2.0.0](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0...vorlesungsplan-plus-api-v2.0.0) (2022-03-21)


### Bug Fixes

* **CI/CD:** Release action dependency ([8148d2a](https://github.com/larsrickert/vorlesungsplan-plus/commit/8148d2a69de7f026cebc7665772bd2bacdf13a9d))
* Fixed swagger docs in prod ([de431fe](https://github.com/larsrickert/vorlesungsplan-plus/commit/de431fef38308ee7c3dc2c619f2a196f01fe035c))
* Logger middleware not called ([9343238](https://github.com/larsrickert/vorlesungsplan-plus/commit/9343238a2ae9a84c08236aee15ec3df8feaa4653))
* Showing error when using cached lectures ([2952699](https://github.com/larsrickert/vorlesungsplan-plus/commit/2952699d7ef368e758315c9dd46c100ca76611c0))
* widget not served in prod build ([b94be5c](https://github.com/larsrickert/vorlesungsplan-plus/commit/b94be5c00e341fb0d49c8ab027cbc852a7809bf5))


### Code Refactoring

* Refactored config and logger ([5ccf815](https://github.com/larsrickert/vorlesungsplan-plus/commit/5ccf81575bbc4885b7f48d50d609deec12b4ab8d))
* Removed deprecated route "/" ([037d1f5](https://github.com/larsrickert/vorlesungsplan-plus/commit/037d1f55a6a1a9a7c2fe67a6819b5c6b1341483e))


* fixed semantic-release with breaking changes ([3fe996a](https://github.com/larsrickert/vorlesungsplan-plus/commit/3fe996a5bae564a741427f797ee448d540ca2560)), closes [M#TINF19](https://github.com/M/issues/TINF19)


### Features

* added message to index route with docs ref ([66b24ac](https://github.com/larsrickert/vorlesungsplan-plus/commit/66b24ac51e41debdd6f2a4f8a5e5e8b167cf4020))
* changed app and api host ([704ecd4](https://github.com/larsrickert/vorlesungsplan-plus/commit/704ecd4735190faf43e7fd27390879da94ffcf45))
* refactored lecture data structure ([8ee83ac](https://github.com/larsrickert/vorlesungsplan-plus/commit/8ee83ac10d4c3b0621c24eb4598bff5763d78527))
* Removed android APK ([8e14167](https://github.com/larsrickert/vorlesungsplan-plus/commit/8e1416700fc926d2048e79dbca812e39e739b84e))
* Switched to monorepo ([82356cf](https://github.com/larsrickert/vorlesungsplan-plus/commit/82356cf7832e929bc31d399b12950131e55af675))
* updated ios widget ([#7](https://github.com/larsrickert/vorlesungsplan-plus/issues/7)) ([5da5805](https://github.com/larsrickert/vorlesungsplan-plus/commit/5da5805c6d44daa89f5390125a4acb3184c99049))


### BREAKING CHANGES

* `ios/widget` returns json instead of string on error
* Removed deprecated route "/"

The deprecated route `/` is removed.
Please use `/courses` and `/lectures/{course}` instead.
* Removed deprecated route `/help`, use `/docs` instead.
* Removed Android APK
* Changed lecture data structure

- Renamed property `uid` to `id`
- Renamed property `room` to `rooms` which now contains an array of rooms instead of a single string with seperated rooms
- Removed deprecated property `lastModified`
- Added property `type` which is either `PRESENCE` or `ONLINE` and indicates whether the lecture is online or presence
- Added property `isExam` which indicates whether the lecture is an exam (will be false for exam reviews (Klausureinsicht))
* Removed deprecated course name mappings for `INF19A`, `INF19B` and `MGH-INF19`
* Returning all lectures by default instead of only upcomig ones

All lectures (including past ones) will now be returned by the API by default instead of only upcoming
ones. You can use the query parameter `excludePast=true` to filter out past lectures.

# [vorlesungsplan-plus-api-v1.0.0-beta.7](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.6...vorlesungsplan-plus-api-v1.0.0-beta.7) (2022-03-20)


### Features

* updated ios widget ([#7](https://github.com/larsrickert/vorlesungsplan-plus/issues/7)) ([5da5805](https://github.com/larsrickert/vorlesungsplan-plus/commit/5da5805c6d44daa89f5390125a4acb3184c99049))

# [vorlesungsplan-plus-api-v1.0.0-beta.6](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.5...vorlesungsplan-plus-api-v1.0.0-beta.6) (2022-03-20)


### Features

* changed app and api host ([704ecd4](https://github.com/larsrickert/vorlesungsplan-plus/commit/704ecd4735190faf43e7fd27390879da94ffcf45))

# [vorlesungsplan-plus-api-v1.0.0-beta.5](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.4...vorlesungsplan-plus-api-v1.0.0-beta.5) (2022-03-20)


### Bug Fixes

* widget not served in prod build ([b94be5c](https://github.com/larsrickert/vorlesungsplan-plus/commit/b94be5c00e341fb0d49c8ab027cbc852a7809bf5))


### Features

* added message to index route with docs ref ([66b24ac](https://github.com/larsrickert/vorlesungsplan-plus/commit/66b24ac51e41debdd6f2a4f8a5e5e8b167cf4020))


### BREAKING CHANGES

* `ios/widget` returns json instead of string on error

# [vorlesungsplan-plus-api-v1.0.0-beta.4](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.3...vorlesungsplan-plus-api-v1.0.0-beta.4) (2022-03-19)


### Bug Fixes

* Fixed swagger docs in prod ([de431fe](https://github.com/larsrickert/vorlesungsplan-plus/commit/de431fef38308ee7c3dc2c619f2a196f01fe035c))
* Logger middleware not called ([9343238](https://github.com/larsrickert/vorlesungsplan-plus/commit/9343238a2ae9a84c08236aee15ec3df8feaa4653))


### Code Refactoring

* Refactored config and logger ([5ccf815](https://github.com/larsrickert/vorlesungsplan-plus/commit/5ccf81575bbc4885b7f48d50d609deec12b4ab8d))
* Removed deprecated route "/" ([037d1f5](https://github.com/larsrickert/vorlesungsplan-plus/commit/037d1f55a6a1a9a7c2fe67a6819b5c6b1341483e))


### Features

* Removed android APK ([8e14167](https://github.com/larsrickert/vorlesungsplan-plus/commit/8e1416700fc926d2048e79dbca812e39e739b84e))


### BREAKING CHANGES

* Removed deprecated route "/"

The deprecated route `/` is removed.
Please use `/courses` and `/lectures/{course}` instead.
* Removed deprecated route `/help`, use `/docs` instead.
* Removed Android APK

# [vorlesungsplan-plus-api-v1.0.0-beta.3](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.2...vorlesungsplan-plus-api-v1.0.0-beta.3) (2022-03-19)


### Features

* refactored lecture data structure ([8ee83ac](https://github.com/larsrickert/vorlesungsplan-plus/commit/8ee83ac10d4c3b0621c24eb4598bff5763d78527))


### BREAKING CHANGES

* Changed lecture data structure

- Renamed property `uid` to `id`
- Renamed property `room` to `rooms` which now contains an array of rooms instead of a single string with seperated rooms
- Removed deprecated property `lastModified`
- Added property `type` which is either `PRESENCE` or `ONLINE` and indicates whether the lecture is online or presence
- Added property `isExam` which indicates whether the lecture is an exam (will be false for exam reviews (Klausureinsicht))
* Removed deprecated course name mappings for `INF19A`, `INF19B` and `MGH-INF19`. Please use the updated course names `MOS-TINF19A`, `MOS-TINF19B` and `MGH-TINF19`.
* Returning all lectures by default instead of only upcoming ones

All lectures (including past ones) will now be returned by the API by default instead of only upcoming
ones. You can use the query parameter `excludePast=true` to filter out past lectures.

# [vorlesungsplan-plus-api-v1.0.0-beta.2](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-api-v1.0.0-beta.1...vorlesungsplan-plus-api-v1.0.0-beta.2) (2022-03-18)


### Bug Fixes

* Showing error when using cached lectures ([2952699](https://github.com/larsrickert/vorlesungsplan-plus/commit/2952699d7ef368e758315c9dd46c100ca76611c0))

# vorlesungsplan-plus-api-v1.0.0-beta.1 (2022-03-16)


### Bug Fixes

* **CI/CD:** Release action dependency ([8148d2a](https://github.com/larsrickert/vorlesungsplan-plus/commit/8148d2a69de7f026cebc7665772bd2bacdf13a9d))


### Features

* Switched to monorepo ([82356cf](https://github.com/larsrickert/vorlesungsplan-plus/commit/82356cf7832e929bc31d399b12950131e55af675))
