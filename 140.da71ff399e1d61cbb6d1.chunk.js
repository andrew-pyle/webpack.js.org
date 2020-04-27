(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{432:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/compression-webpack-plugin"><img src="https://img.shields.io/npm/v/compression-webpack-plugin.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/compression-webpack-plugin.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/compression-webpack-plugin"><img src="https://david-dm.org/webpack-contrib/compression-webpack-plugin.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/compression-webpack-plugin/actions"><img src="https://github.com/webpack-contrib/compression-webpack-plugin/workflows/compression-webpack-plugin/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/compression-webpack-plugin"><img src="https://codecov.io/gh/webpack-contrib/compression-webpack-plugin/branch/master/graph/badge.svg" alt="cover"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=compression-webpack-plugin"><img src="https://packagephobia.now.sh/badge?p=compression-webpack-plugin" alt="size"></a></p>\n<p>Prepare compressed versions of assets to serve them with Content-Encoding.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>compression-webpack-plugin</code>:</p>\n<pre><code class="hljs language-console">$ npm install compression-webpack-plugin --save-dev\n</code></pre>\n<p>Then add the plugin to your <code>webpack</code> config. For example:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'compression-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="test"><code>test</code><a href="#test" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code>\nDefault: <code>undefined</code></p>\n<p>Test to match files against.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js(\\?.*)?$/i</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="include"><code>include</code><a href="#include" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code>\nDefault: <code>undefined</code></p>\n<p>Files to include.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      include<span class="token punctuation">:</span> <span class="token regex">/\\/includes/</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="exclude"><code>exclude</code><a href="#exclude" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|RegExp|Array&#x3C;String|RegExp></code>\nDefault: <code>undefined</code></p>\n<p>Files to exclude.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      exclude<span class="token punctuation">:</span> <span class="token regex">/\\/excludes/</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cache"><code>cache</code><a href="#cache" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean|String</code>\nDefault: <code>false</code></p>\n<p>Enable file caching.\nThe default path to cache directory: <code>node_modules/.cache/compression-webpack-plugin</code>.</p>\n<h4 id="boolean"><code>Boolean</code><a href="#boolean" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Enable/disable file caching.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      cache<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="string"><code>String</code><a href="#string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Enable file caching and set path to cache directory.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      cache<span class="token punctuation">:</span> <span class="token string">\'path/to/cache\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="filename"><code>filename</code><a href="#filename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Function</code>\nDefault: <code>[path].gz[query]</code></p>\n<p>The target asset filename.</p>\n<h4 id="string-1"><code>String</code><a href="#string-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><code>[file]</code> is replaced with the original asset filename.\n<code>[path]</code> is replaced with the path of the original asset.\n<code>[dir]</code> is replaced with the directory of the original asset.\n<code>[name]</code> is replaced with the filename of the original asset.\n<code>[ext]</code> is replaced with the extension of the original asset.\n<code>[query]</code> is replaced with the query.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'[path].gz[query]\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="function"><code>Function</code><a href="#function" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token function">filename</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// info.file is the original asset filename</span>\n        <span class="token comment">// info.path is the path of the original asset</span>\n        <span class="token comment">// info.query is the query</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.gz</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token punctuation">.</span>query<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="algorithm"><code>algorithm</code><a href="#algorithm" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Function</code>\nDefault: <code>gzip</code></p>\n<p>The compression algorithm/function.</p>\n<h4 id="string-2"><code>String</code><a href="#string-2" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The algorithm is taken from <a href="https://nodejs.org/api/zlib.html">zlib</a>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      algorithm<span class="token punctuation">:</span> <span class="token string">\'gzip\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="function-1"><code>Function</code><a href="#function-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Allow to specify a custom compression function.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token function">algorithm</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> compressionOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">compressionFunction</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> compressionOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="compressionoptions"><code>compressionOptions</code><a href="#compressionoptions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Object</code>\nDefault: <code>{ level: 9 }</code></p>\n<p>If you use custom function for the <code>algorithm</code> option, the default value is <code>{}</code>.</p>\n<p>Compression options.\nYou can find all options here <a href="https://nodejs.org/api/zlib.html#zlib_class_options">zlib</a>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      compressionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span> level<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="threshold"><code>threshold</code><a href="#threshold" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Number</code>\nDefault: <code>0</code></p>\n<p>Only assets bigger than this size are processed. In bytes.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      threshold<span class="token punctuation">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="minratio"><code>minRatio</code><a href="#minratio" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Number</code>\nDefault: <code>0.8</code></p>\n<p>Only assets that compress better than this ratio are processed (<code>minRatio = Compressed Size / Original Size</code>).\nExample: you have <code>image.png</code> file with 1024b size, compressed version of file has 768b size, so <code>minRatio</code> equal <code>0.75</code>.\nIn other words assets will be processed when the <code>Compressed Size / Original Size</code> value less <code>minRatio</code> value.\nYou can use <code>1</code> value to process assets that are smaller than the original. Use a value of Number.MAX_SAFE_INTEGER to process all assets even if they are larger than the original (useful when you are pre-zipping all assets for AWS)</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      minRatio<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="deleteoriginalassets"><code>deleteOriginalAssets</code><a href="#deleteoriginalassets" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>Whether to delete the original assets or not.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      deleteOriginalAssets<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="using-zopfli">Using Zopfli<a href="#using-zopfli" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Prepare compressed versions of assets using <code>zopfli</code> library.</p>\n<blockquote>\n<p>ℹ️ <code>@gfx/zopfli</code> require minimum <code>8</code> version of <code>node</code>.</p>\n</blockquote>\n<p>To begin, you\'ll need to install <code>@gfx/zopfli</code>:</p>\n<pre><code class="hljs language-console">$ npm install @gfx/zopfli --save-dev\n</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> zopfli <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@gfx/zopfli\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      compressionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        numiterations<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">algorithm</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> compressionOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> zopfli<span class="token punctuation">.</span><span class="token function">gzip</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> compressionOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="using-brotli">Using Brotli<a href="#using-brotli" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><a href="https://en.wikipedia.org/wiki/Brotli">Brotli</a> is a compression algorithm originally developed by Google, and offers compression superior to gzip.</p>\n<p>Node 10.16.0 and later has <a href="https://nodejs.org/api/zlib.html#zlib_zlib_createbrotlicompress_options">native support</a> for Brotli compression in its zlib module.</p>\n<p>We can take advantage of this built-in support for Brotli in Node 11.7.0 and later by just passing in the appropriate <code>algorithm</code> to the CompressionPlugin:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> zlib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zlib\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'[path].br[query]\'</span><span class="token punctuation">,</span>\n      algorithm<span class="token punctuation">:</span> <span class="token string">\'brotliCompress\'</span><span class="token punctuation">,</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.(js|css|html|svg)$/</span><span class="token punctuation">,</span>\n      compressionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.</span>\n        level<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      threshold<span class="token punctuation">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>\n      minRatio<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n      deleteOriginalAssets<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>Note</strong> The <code>level</code> option matches <code>BROTLI_PARAM_QUALITY</code> <a href="https://nodejs.org/api/zlib.html#zlib_for_brotli_based_streams">for Brotli-based streams</a></p>\n<h3 id="multiple-compressed-versions-of-assets-for-different-algorithm">Multiple compressed versions of assets for different algorithm<a href="#multiple-compressed-versions-of-assets-for-different-algorithm" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> zlib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zlib\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'[path].gz[query]\'</span><span class="token punctuation">,</span>\n      algorithm<span class="token punctuation">:</span> <span class="token string">\'gzip\'</span><span class="token punctuation">,</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js$|\\.css$|\\.html$/</span><span class="token punctuation">,</span>\n      threshold<span class="token punctuation">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>\n      minRatio<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'[path].br[query]\'</span><span class="token punctuation">,</span>\n      algorithm<span class="token punctuation">:</span> <span class="token string">\'brotliCompress\'</span><span class="token punctuation">,</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.(js|css|html|svg)$/</span><span class="token punctuation">,</span>\n      compressionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        level<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      threshold<span class="token punctuation">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>\n      minRatio<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/compression-webpack-plugin/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/compression-webpack-plugin/blob/master/LICENSE">MIT</a></p>\n'}}]);