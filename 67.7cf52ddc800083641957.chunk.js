(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{361:function(e,n,s){"use strict";s.r(n),n.default='<p>Asset Modules is a type of module that allows to use asset files (fonts, icons, etc) without configuring additional loaders.</p>\n<p>Prior to webpack 5 it was common to use:</p>\n<ul>\n<li><a href="/loaders/raw-loader/"><code>raw-loader</code></a> to import a file as a string</li>\n<li><a href="/loaders/url-loader/"><code>url-loader</code></a> to inline a file into the bundle as a data URI</li>\n<li><a href="/loaders/file-loader/"><code>file-loader</code></a> to emit a file into the output directory</li>\n</ul>\n<p>Asset Modules type replaces all of these loaders by adding 4 new module types:</p>\n<ul>\n<li><code>asset/resource</code> emits a separate file and exports the URL. Previously achievable by using <code>file-loader</code>.</li>\n<li><code>asset/inline</code> exports a data URI of the asset. Previously achievable by using <code>url-loader</code>.</li>\n<li><code>asset/source</code> exports the source code of the asset. Previously achievable by using <code>raw-loader</code>.</li>\n<li><code>asset</code> automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using <code>url-loader</code> with asset size limit.</li>\n</ul>\n<blockquote class="warning">\n<p>This is an experimental feature. Enable Asset Modules by setting <code>experiments.asset: true</code> in <a href="/configuration/experiments/">experiments</a> option of your webpack configuration.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n<span class="token inserted">+ experiments: {</span>\n<span class="token inserted">+   asset: true</span>\n<span class="token inserted">+ },</span>\n};</code></pre>\n<h2 id="resource-assets">Resource assets<a href="#resource-assets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n  experiments: {\n    asset: true\n  },\n<span class="token inserted">+ module: {</span>\n<span class="token inserted">+   rules: [</span>\n<span class="token inserted">+     {</span>\n<span class="token inserted">+       test: /\\.png/,</span>\n<span class="token inserted">+       type: \'asset/resource\'</span>\n<span class="token inserted">+     }</span>\n<span class="token inserted">+   ]</span>\n<span class="token inserted">+ },</span>\n};</code></pre>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> mainImage <span class="token keyword">from</span> <span class="token string">\'./images/main.png\'</span><span class="token punctuation">;</span>\n\nimg<span class="token punctuation">.</span>src <span class="token operator">=</span> mainImage<span class="token punctuation">;</span> <span class="token comment">// \'/dist/151cfcfa1bd74779aadb.png\'</span></code></pre>\n<p>All <code>.png</code> files will be emitted to the output directory and their paths will be injected into the bundles.</p>\n<h3 id="custom-output-filename">Custom output filename<a href="#custom-output-filename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>By default, <code>asset/resource</code> modules are emitting with <code>[hash][ext][query]</code> filename into output directory.</p>\n<p>You can modify this template by setting <a href="/configuration/output/#outputassetmodulefilename"><code>output.assetModuleFilename</code></a> in your webpack configuration:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\'),\n<span class="token inserted">+   assetModuleFilename: \'images/[hash][ext][query]\'</span>\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.png/,\n        type: \'asset/resource\'\n      }\n    ]\n  },\n};</code></pre>\n<p>Another case to customize output filename is to emit some kind of assets to a specified directory:</p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\'),\n<span class="token inserted">+   assetModuleFilename: \'images/[hash][ext][query]\'</span>\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.png/,\n        type: \'asset/resource\'\n<span class="token deleted">-     }</span>\n<span class="token inserted">+     },</span>\n<span class="token inserted">+     {</span>\n<span class="token inserted">+       test: /\\.html/,</span>\n<span class="token inserted">+       type: \'asset/resource\',</span>\n<span class="token inserted">+       generator: {</span>\n<span class="token inserted">+         filename: \'static/[hash][ext][query]\'</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     }</span>\n    ]\n  },\n};</code></pre>\n<p>With this configuration all the <code>html</code> files will be emitted into a <code>static</code> directory within the output directory.</p>\n<p><code>Rule.generator.filename</code> is the same as <a href="/configuration/output/#outputassetmodulefilename"><code>output.assetModuleFilename</code></a> and works only with <code>asset</code> and <code>asset/resource</code> module types.</p>\n<h2 id="inlining-assets">Inlining assets<a href="#inlining-assets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\'),\n<span class="token deleted">-   assetModuleFilename: \'images/[hash][ext][query]\'</span>\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n<span class="token deleted">-       test: /\\.png/,</span>\n<span class="token deleted">-       type: \'asset/resource\'</span>\n<span class="token inserted">+       test: /\\.svg/,</span>\n<span class="token inserted">+       type: \'asset/inline\'</span>\n<span class="token deleted">-     },</span>\n<span class="token inserted">+     }</span>\n<span class="token deleted">-     {</span>\n<span class="token deleted">-       test: /\\.html/,</span>\n<span class="token deleted">-       type: \'asset/resource\',</span>\n<span class="token deleted">-       generator: {</span>\n<span class="token deleted">-         filename: \'static/[hash][ext][query]\'</span>\n<span class="token deleted">-       }</span>\n<span class="token deleted">-     }</span>\n    ]\n  }\n};</code></pre>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff"><span class="token deleted">- import mainImage from \'./images/main.png\';</span>\n<span class="token inserted">+ import metroMap from \'./images/matro.svg\';</span>\n\n<span class="token deleted">- img.src = mainImage; // \'/dist/151cfcfa1bd74779aadb.png\'</span>\n<span class="token inserted">+ block.style.background = `url(${metroMap})`; // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)</span></code></pre>\n<p>All <code>.svg</code> files will be injected into the bundles as data URI.</p>\n<h3 id="custom-data-uri-generator">Custom data URI generator<a href="#custom-data-uri-generator" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>By default, data URI emitted by webpack represents file contents encoded by using Base64 algorithm.</p>\n<p>If you want to use a custom encoding algorithm, you may specify a custom function to encode a file content:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n<span class="token inserted">+ const svgToMiniDataURI = require(\'mini-svg-data-uri\');</span>\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.svg/,\n        type: \'asset/inline\',\n<span class="token inserted">+       generator: {</span>\n<span class="token inserted">+         dataUrl: content => {</span>\n<span class="token inserted">+           content = content.toString();</span>\n<span class="token inserted">+           return svgToMiniDataURI(content);</span>\n<span class="token inserted">+         }</span>\n<span class="token inserted">+       }</span>\n      }\n    ]\n  },\n};</code></pre>\n<p>Now all <code>.svg</code> files will be encoded by <code>mini-svg-data-uri</code> package.</p>\n<h2 id="source-assets">Source assets<a href="#source-assets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n<span class="token deleted">- const svgToMiniDataURI = require(\'mini-svg-data-uri\');</span>\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n<span class="token deleted">-       test: /\\.svg/,</span>\n<span class="token deleted">-       type: \'asset/inline\',</span>\n<span class="token deleted">-       generator: {</span>\n<span class="token deleted">-         dataUrl: content => {</span>\n<span class="token deleted">-           content = content.toString();</span>\n<span class="token deleted">-           return svgToMiniDataURI(content);</span>\n<span class="token deleted">-         }</span>\n<span class="token deleted">-       }</span>\n<span class="token inserted">+       test: /\\.txt/,</span>\n<span class="token inserted">+       type: \'asset/source\',</span>\n      }\n    ]\n  },\n};</code></pre>\n<p><strong>src/example.txt</strong></p>\n<pre><code class="hljs language-text">Hello world\n</code></pre>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff"><span class="token deleted">- import metroMap from \'./images/matro.svg\';</span>\n<span class="token inserted">+ import exampleText from \'./example.txt\';</span>\n\n<span class="token deleted">- block.style.background = `url(${metroMap}); // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)</span>\n<span class="token inserted">+ block.textContent = exampleText; // \'Hello world\'</span></code></pre>\n<p>All <code>.txt</code> files will be injected into the bundles as is.</p>\n<h2 id="general-asset-type">General asset type<a href="#general-asset-type" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n<span class="token inserted">+       test: /\\.txt/,</span>\n<span class="token inserted">+       type: \'asset\',</span>\n      }\n    ]\n  },\n};</code></pre>\n<p>Now webpack will automatically choose between <code>resource</code> and <code>inline</code> by following a default condition: a file with size less than 8kb will be treated as a <code>inline</code> module type and <code>resource</code> module type otherwise.</p>\n<p>You can change this condition by setting a <a href="/configuration/module/#ruleparserdataurlcondition"><code>Rule.parser.dataUrlCondition.maxSize</code></a> option on the module rule level of your webpack configuration:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'main.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n  experiments: {\n    asset: true\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.txt/,\n        type: \'asset\',\n<span class="token inserted">+       parser: {</span>\n<span class="token inserted">+         dataUrlCondition: {</span>\n<span class="token inserted">+           maxSize: 4 * 1024 // 4kb</span>\n<span class="token inserted">+         }</span>\n<span class="token inserted">+       }</span>\n      }\n    ]\n  },\n};</code></pre>\n<p>Also you can <a href="/configuration/module/#ruleparserdataurlcondition">specify a function</a> to decide to inlining a module or not.</p>\n'}}]);