module.exports = {
  name: 'shared-assets',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/assets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
