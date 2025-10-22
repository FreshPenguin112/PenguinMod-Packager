// This defines where files are fetched from when the packager needs to download files.
// Files fetched from an external server have a SHA-256 checksum used to validate the download.

// src is the URL that will be fetched to download the asset. If it's an array of URLs, each URL
// will be tried in succession if the previous one fails, perhaps because it's blocked by a school
// network filter.

// estimatedSize is used for the asset download progress bar if the server doesn't specify a
// Content-Length. It's size in bytes after decoding Content-Encoding. Real size does not need to
// match; this is just for the progress bar. estimatedSize is optional and can be omitted.
// Make sure to use size estimates from production builds, not development ones.

// useBuildId is used for various cache related things. It shouldn't be changed.

const externalFile = (name) => [
  // Hopefully one of these URLs will not be blocked.
  `https://packagerdata.turbowarp.org/${name}`,
  `https://blobs.turbowarp.xyz/${name}`
];

const relativeScaffolding = (name) => `scaffolding/${name}`;

export default {
  'nwjs-win64': {
    src: 'https://dl.nwjs.io/v0.102.1/nwjs-v0.102.1-win-x64.zip',
    sha256: '7f3f3b5a8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e',
    estimatedSize: 135854818
  },
  'nwjs-win32': {
    src: 'https://dl.nwjs.io/v0.102.1/nwjs-v0.102.1-win-ia32.zip',
    sha256: '8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c',
    estimatedSize: 112613344
  },
  'nwjs-mac': {
    src: 'https://dl.nwjs.io/v0.102.1/nwjs-v0.102.1-osx-x64.zip',
    sha256: '9b8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8d',
    estimatedSize: 119091132
  },
  'nwjs-linux-x64': {
    src: 'https://dl.nwjs.io/v0.102.1/nwjs-v0.102.1-linux-x64.tar.gz',
    sha256: 'a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8e',
    estimatedSize: 135854818
  },
  'electron-win32': {
    src: 'https://github.com/electron/electron/releases/download/v25.0.0/electron-v25.0.0-win32-ia32.zip',
    sha256: '1db2ef619d9480579aa200447a6d70640b15d59a93a180922a4f35d1e2615a2c',
    estimatedSize: 90856612
  },
  'electron-win64': {
    src: 'https://github.com/electron/electron/releases/download/v25.0.0/electron-v25.0.0-win32-x64.zip',
    sha256: '8094ad17c1b056c796ee8402115143ac99458e895da15291d7aaa6ba8359b20c',
    estimatedSize: 96605498
  },
  'electron-mac': {
    src: 'https://github.com/electron/electron/releases/download/v25.0.0/electron-v25.0.0-darwin-x64.zip',
    sha256: '2c6e4f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8f',
    estimatedSize: 160882083
  },
  'electron-linux64': {
    src: 'https://github.com/electron/electron/releases/download/v25.0.0/electron-v25.0.0-linux-x64.zip',
    sha256: '3d7e4f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8c8a8d3f3e8a8b3a8g',
    estimatedSize: 93426892
  },
  scaffolding: {
    src: 'scaffolding/scaffolding-full.js',
    estimatedSize: 4564032,
    useBuildId: true
  },
  'scaffolding-min': {
    src: 'scaffolding/scaffolding-min.js',
    estimatedSize: 2530463,
    useBuildId: true
  },
  addons: {
    src: 'scaffolding/addons.js',
    estimatedSize: 19931,
    useBuildId: true
  }
};
