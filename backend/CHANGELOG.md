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
