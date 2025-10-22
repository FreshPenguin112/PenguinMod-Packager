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
    src: 'https://registry.npmmirror.com/nwjs/v0.102.1/nwjs-v0.102.1-win-x64.zip',
    estimatedSize: 135854818
  },
  'nwjs-win32': {
    src: 'https://registry.npmmirror.com/nwjs/v0.102.1/nwjs-v0.102.1-win-ia32.zip',
    estimatedSize: 112613344
  },
  'nwjs-mac': {
    src: 'https://registry.npmmirror.com/nwjs/v0.102.1/nwjs-v0.102.1-osx-x64.zip',
    estimatedSize: 119091132
  },
  'nwjs-linux-x64': {
    src: 'https://registry.npmmirror.com/nwjs/v0.102.1/nwjs-v0.102.1-linux-x64.tar.gz',
    estimatedSize: 135854818
  },
  'electron-win32': {
    src: 'https://registry.npmmirror.com/electron/v25.0.0/electron-v25.0.0-win32-ia32.zip',
    estimatedSize: 90856612
  },
  'electron-win64': {
    src: 'https://registry.npmmirror.com/electron/v25.0.0/electron-v25.0.0-win32-x64.zip',
    estimatedSize: 96605498
  },
  'electron-mac': {
    src: 'https://registry.npmmirror.com/electron/v25.0.0/electron-v25.0.0-darwin-x64.zip',
    estimatedSize: 160882083
  },
  'electron-linux64': {
    src: 'https://registry.npmmirror.com/electron/v25.0.0/electron-v25.0.0-linux-x64.zip',
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
