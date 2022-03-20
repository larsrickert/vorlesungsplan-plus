# [vorlesungsplan-plus-v1.0.0-beta.12](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.11...vorlesungsplan-plus-v1.0.0-beta.12) (2022-03-20)


### Features

* changed app and api host ([704ecd4](https://github.com/larsrickert/vorlesungsplan-plus/commit/704ecd4735190faf43e7fd27390879da94ffcf45))

# [vorlesungsplan-plus-v1.0.0-beta.11](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.10...vorlesungsplan-plus-v1.0.0-beta.11) (2022-03-20)


### Features

* added apps page with installation instructions for pwa and ios widget ([#6](https://github.com/larsrickert/vorlesungsplan-plus/issues/6)) ([673ac41](https://github.com/larsrickert/vorlesungsplan-plus/commit/673ac4113ce7b8acd3d89f5371c0d3522fa71868))

# [vorlesungsplan-plus-v1.0.0-beta.10](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.9...vorlesungsplan-plus-v1.0.0-beta.10) (2022-03-20)


### Bug Fixes

* removed presenting element from modal ([acbca0b](https://github.com/larsrickert/vorlesungsplan-plus/commit/acbca0b35822affb646f7eaa2fad6a851e78279a))

# [vorlesungsplan-plus-v1.0.0-beta.9](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.8...vorlesungsplan-plus-v1.0.0-beta.9) (2022-03-20)


### Bug Fixes

* added message when no courses selected ([7d1004d](https://github.com/larsrickert/vorlesungsplan-plus/commit/7d1004d4da370ba63cebb7aef85aa3cc3cf40015))

# [vorlesungsplan-plus-v1.0.0-beta.8](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.7...vorlesungsplan-plus-v1.0.0-beta.8) (2022-03-20)


### Features

* added setting to enable theme detection ([09e5936](https://github.com/larsrickert/vorlesungsplan-plus/commit/09e59360171cd8da4fb52e406132c2cef0a1dc59))

# [vorlesungsplan-plus-v1.0.0-beta.7](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.6...vorlesungsplan-plus-v1.0.0-beta.7) (2022-03-19)


### Features

* added button to show/hide past lectures ([b246338](https://github.com/larsrickert/vorlesungsplan-plus/commit/b246338d936afbfd5e7cb072cf25d4120483d44e))


### Performance Improvements

* removed duplicate lecture load on app start ([7c0e442](https://github.com/larsrickert/vorlesungsplan-plus/commit/7c0e44268bc2a481b3ca7fc5856d91bd5543280f))

# [vorlesungsplan-plus-v1.0.0-beta.6](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.5...vorlesungsplan-plus-v1.0.0-beta.6) (2022-03-19)


### Features

* redirect to settings on initial app launch ([b597cd2](https://github.com/larsrickert/vorlesungsplan-plus/commit/b597cd239caea7c972693296f8669d54817f3a56))

# [vorlesungsplan-plus-v1.0.0-beta.5](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.4...vorlesungsplan-plus-v1.0.0-beta.5) (2022-03-19)


### Features

* added contact link to menu ([37c2a50](https://github.com/larsrickert/vorlesungsplan-plus/commit/37c2a50a89a5dd70cf999c836f9b83cfda1f7f1f))

# [vorlesungsplan-plus-v1.0.0-beta.4](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.3...vorlesungsplan-plus-v1.0.0-beta.4) (2022-03-19)


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

# [vorlesungsplan-plus-v1.0.0-beta.3](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.2...vorlesungsplan-plus-v1.0.0-beta.3) (2022-03-18)


### Bug Fixes

* Added dynamic branch name to changelog url ([ab50dc4](https://github.com/larsrickert/vorlesungsplan-plus/commit/ab50dc485ee67fb17e2d69a026367c9fbc11c22f))
* Fixed changed lecture status ([1f38a63](https://github.com/larsrickert/vorlesungsplan-plus/commit/1f38a63eb7ed4d486d2c128017560c1756ee6d32))
* Made lecture changes/status persistant ([dff4706](https://github.com/larsrickert/vorlesungsplan-plus/commit/dff4706500c54df90d6ce50ba90e6a04b6ebc083))
* Showing error when using cached lectures ([2952699](https://github.com/larsrickert/vorlesungsplan-plus/commit/2952699d7ef368e758315c9dd46c100ca76611c0))

# [vorlesungsplan-plus-v1.0.0-beta.2](https://github.com/larsrickert/vorlesungsplan-plus/compare/vorlesungsplan-plus-v1.0.0-beta.1...vorlesungsplan-plus-v1.0.0-beta.2) (2022-03-16)


### Features

* Added changed lectures and lecture fallback ([028af94](https://github.com/larsrickert/vorlesungsplan-plus/commit/028af9423c1407c4117afc5fd73dc5e92ad31146))
* Added link to changelog ([0bf752a](https://github.com/larsrickert/vorlesungsplan-plus/commit/0bf752aaddabd8aa084a45b341c6faae81772b66))
* Updated dependencies ([f3645c7](https://github.com/larsrickert/vorlesungsplan-plus/commit/f3645c7b387be5b9e95fc5f5553be579919a46d6))

# vorlesungsplan-plus-v1.0.0-beta.1 (2022-03-16)


### Features

* Switched to monorepo ([82356cf](https://github.com/larsrickert/vorlesungsplan-plus/commit/82356cf7832e929bc31d399b12950131e55af675))
