module.exports = {
  name: 'tiny-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tiny-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
