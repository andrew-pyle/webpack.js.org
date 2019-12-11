(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{298:function(n,e,a){"use strict";a.r(e),e.default='<p>The <code>Compiler</code> module is the main engine that creates a compilation instance\nwith all the options passed through the <a href="/api/cli">CLI</a> or <a href="/api/node">Node API</a>. It extends the\n<code>Tapable</code> class in order to register and call plugins. Most user facing plugins\nare first registered on the <code>Compiler</code>.</p>\n<blockquote class="tip">\n<p>This module is exposed as <code>webpack.Compiler</code> and can be used directly. See\n<a href="https://github.com/pksjce/webpack-internal-examples/tree/master/compiler-example">this example</a>\nfor more information.</p>\n</blockquote>\n<p>When developing a plugin for webpack, you might want to know where each hook is called. To learn this, search for <code>hooks.&#x3C;hook name>.call</code> across the webpack source</p>\n<h2 id="watching">Watching<a href="#watching" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <code>Compiler</code> supports <a href="/api/node/#watching">watching</a> which monitors the file\nsystem and recompiles as files change. When in watch mode, the compiler will\nemit the additional events such as <code>watchRun</code>, <code>watchClose</code>, and <code>invalid</code>.\nThis is typically used in <a href="/guides/development">development</a>, usually under\nthe hood of tools like <code>webpack-dev-server</code>, so that the developer doesn\'t\nneed to re-compile manually every time. Watch mode can also be entered via the\n<a href="/api/cli/#watch-options">CLI</a>.</p>\n<h2 id="hooks">Hooks<a href="#hooks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following lifecycle hooks are exposed by the <code>compiler</code> and can be accessed\nas such:</p>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Depending on the hook type, <code>tapAsync</code> and <code>tapPromise</code> may also be available.</p>\n<p>For the description of hook types, see <a href="https://github.com/webpack/tapable#tapable">the Tapable docs</a>.</p>\n<h3 id="entryoption"><code>entryOption</code><a href="#entryoption" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called after the <a href="/configuration/entry-context/#entry"><code>entry</code> configuration</a> from webpack options has been processed.</p>\n<ul>\n<li>Callback Parameters: <a href="/configuration/entry-context/#context"><code>context</code></a>, <a href="/configuration/entry-context/#entry"><code>entry</code></a></li>\n</ul>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>entryOption<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> entry<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Parameters: <code>context</code>, <code>entry</code></p>\n<h3 id="afterplugins"><code>afterPlugins</code><a href="#afterplugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called after setting up initial set of internal plugins.</p>\n<ul>\n<li>Callback Parameters: <code>compiler</code></li>\n</ul>\n<h3 id="afterresolvers"><code>afterResolvers</code><a href="#afterresolvers" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Triggered after resolver setup is complete.</p>\n<ul>\n<li>Callback Parameters: <code>compiler</code></li>\n</ul>\n<h3 id="environment"><code>environment</code><a href="#environment" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called while preparing the compiler environment, right after inizializing the plugins in the configuration file.</p>\n<h3 id="afterenvironment"><code>afterEnvironment</code><a href="#afterenvironment" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called right after the <code>environment</code> hook, when the compiler environment setup is complete.</p>\n<h3 id="beforerun"><code>beforeRun</code><a href="#beforerun" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Adds a hook right before running the compiler.</p>\n<ul>\n<li>Callback Parameters: <code>compiler</code></li>\n</ul>\n<h3 id="run"><code>run</code><a href="#run" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Hook into the compiler before it begins reading <a href="/configuration/other-options/#recordspath"><code>records</code></a>.</p>\n<ul>\n<li>Callback Parameters: <code>compiler</code></li>\n</ul>\n<h3 id="watchrun"><code>watchRun</code><a href="#watchrun" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started.</p>\n<ul>\n<li>Callback Parameters: <code>compiler</code></li>\n</ul>\n<h3 id="normalmodulefactory"><code>normalModuleFactory</code><a href="#normalmodulefactory" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called after a <code>NormalModuleFactory</code> is created.</p>\n<ul>\n<li>Callback Parameters: <code>normalModuleFactory</code></li>\n</ul>\n<h3 id="contextmodulefactory"><code>contextModuleFactory</code><a href="#contextmodulefactory" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin after a <code>ContextModuleFactory</code> is created.</p>\n<ul>\n<li>Callback Parameters: <code>contextModuleFactory</code></li>\n</ul>\n<h3 id="beforecompile"><code>beforeCompile</code><a href="#beforecompile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executes a plugin after compilation parameters are created.</p>\n<ul>\n<li>Callback Parameters: <code>compilationParams</code></li>\n</ul>\n<p>The <code>compilationParams</code> variable is initialized as follows:</p>\n<pre><code class="hljs language-js">compilationParams <span class="token operator">=</span> <span class="token punctuation">{</span>\n  normalModuleFactory<span class="token punctuation">,</span>\n  contextModuleFactory<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>This hook can be used to add/modify the compilation parameters:</p>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeCompile<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>params<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  params<span class="token punctuation">[</span><span class="token string">\'MyPlugin - data\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'important stuff my plugin will use later\'</span><span class="token punctuation">;</span>\n  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="compile"><code>compile</code><a href="#compile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called right after <code>beforeCompile</code>, before a new compilation is created.</p>\n<ul>\n<li>Callback Parameters: <code>compilationParams</code></li>\n</ul>\n<h3 id="thiscompilation"><code>thisCompilation</code><a href="#thiscompilation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Executed while initializing the compilation, right before emitting the <code>compilation</code> event.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code>, <code>compilationParams</code></li>\n</ul>\n<h3 id="compilation"><code>compilation</code><a href="#compilation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin after a compilation has been created.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code>, <code>compilationParams</code></li>\n</ul>\n<h3 id="make"><code>make</code><a href="#make" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncParallelHook</code></p>\n<p>Executed before finishing the compilation.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code></li>\n</ul>\n<h3 id="aftercompile"><code>afterCompile</code><a href="#aftercompile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Called after finishing and sealing the compilation.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code></li>\n</ul>\n<h3 id="shouldemit"><code>shouldEmit</code><a href="#shouldemit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Called before emitting assets. Should return a boolean telling whether to emit.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code></li>\n</ul>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>shouldEmit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>compilation<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// return true to emit the output, otherwise false</span>\n  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="emit"><code>emit</code><a href="#emit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executed right before emitting assets to output dir.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code></li>\n</ul>\n<h3 id="afteremit"><code>afterEmit</code><a href="#afteremit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Called after emitting assets to output directory.</p>\n<ul>\n<li>Callback Parameters: <code>compilation</code></li>\n</ul>\n<h3 id="assetemitted"><code>assetEmitted</code><a href="#assetemitted" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Allows to get byte content of emitted asset. Available since webpack v4.39.0</p>\n<ul>\n<li>Callback Parameters: <code>file</code>, <code>content</code></li>\n</ul>\n<h3 id="done"><code>done</code><a href="#done" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executed when the compilation has completed.</p>\n<ul>\n<li>Callback Parameters: <code>stats</code></li>\n</ul>\n<h3 id="failed"><code>failed</code><a href="#failed" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called if the compilation fails.</p>\n<ul>\n<li>Callback Parameters: <code>error</code></li>\n</ul>\n<h3 id="invalid"><code>invalid</code><a href="#invalid" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Executed when a watching compilation has been invalidated.</p>\n<ul>\n<li>Callback Parameters: <code>fileName</code>, <code>changeTime</code></li>\n</ul>\n<h3 id="watchclose"><code>watchClose</code><a href="#watchclose" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Called when a watching compilation has stopped.</p>\n<h3 id="infrastructurelog"><code>infrastructureLog</code><a href="#infrastructurelog" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Allows to use infrastructure logging when enabled in the configuration via <a href="/configuration/other-options/#infrastructurelogging"><code>infrastructureLogging</code> option</a>.</p>\n<ul>\n<li>Callback Parameters: <code>name</code>, <code>type</code>, <code>args</code></li>\n</ul>\n<h3 id="log"><code>log</code><a href="#log" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Allows to log into <a href="/configuration/stats/">stats</a> when enabled, see <a href="/configuration/stats/#stats"><code>stats.logging</code>, <code>stats.loggingDebug</code> and <code>stats.loggingTrace</code> options</a>.</p>\n<ul>\n<li>Callback Parameters: <code>origin</code>, <code>logEntry</code></li>\n</ul>\n'}}]);