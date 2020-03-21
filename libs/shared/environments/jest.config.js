module.exports = {
  name: 'shared-environments',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/environments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
