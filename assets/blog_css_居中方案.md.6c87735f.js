import{o as n,c as s,e as a}from"./app.7aeaea67.js";const p='{"title":"居中方案","description":"","frontmatter":{"title":"居中方案","date":"2020-07-02T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"一、定宽高","slug":"一、定宽高"},{"level":3,"title":"样板 html 代码","slug":"样板-html-代码"},{"level":3,"title":"1. 绝对定位和负 magin 值","slug":"_1-绝对定位和负-magin-值"},{"level":3,"title":"2. 绝对定位 + transform","slug":"_2-绝对定位-transform"},{"level":3,"title":"3. 绝对定位 + left/right/bottom/top + margin","slug":"_3-绝对定位-left-right-bottom-top-margin"},{"level":3,"title":"4. flex 布局","slug":"_4-flex-布局"},{"level":3,"title":"5. grid 布局","slug":"_5-grid-布局"},{"level":3,"title":"6. table-cell + vertical-align + inline-block/margin: auto","slug":"_6-table-cell-vertical-align-inline-block-margin-auto"},{"level":2,"title":"二、不定宽高","slug":"二、不定宽高"},{"level":3,"title":"样板 html 代码","slug":"样板-html-代码-1"},{"level":3,"title":"1. 绝对定位 + transform","slug":"_1-绝对定位-transform"},{"level":3,"title":"2. table-cell","slug":"_2-table-cell"},{"level":3,"title":"3. flex 布局","slug":"_3-flex-布局"},{"level":3,"title":"4. flex 变异布局","slug":"_4-flex-变异布局"},{"level":3,"title":"5. grid + flex 布局","slug":"_5-grid-flex-布局"},{"level":3,"title":"6. gird + margin 布局","slug":"_6-gird-margin-布局"},{"level":3,"title":"7. writing-mode 属性布局","slug":"_7-writing-mode-属性布局"},{"level":2,"title":"三、图片定高|不定高居中","slug":"三、图片定高-不定高居中"},{"level":3,"title":"示例代码片段如下:","slug":"示例代码片段如下"},{"level":3,"title":"1. table-cell","slug":"_1-table-cell"},{"level":3,"title":"2. ::after / ::before","slug":"_2-after-before"},{"level":2,"title":"四、总结","slug":"四、总结"},{"level":3,"title":"1. 内联元素居中布局","slug":"_1-内联元素居中布局"},{"level":3,"title":"2. 块级元素居中布局","slug":"_2-块级元素居中布局"}],"relativePath":"blog/css/居中方案.md","lastUpdated":1629443465963}',t={},o=[a('<h2 id="一、定宽高"><a class="header-anchor" href="#一、定宽高" aria-hidden="true">#</a> 一、定宽高</h2><h3 id="样板-html-代码"><a class="header-anchor" href="#样板-html-代码" aria-hidden="true">#</a> 样板 html 代码</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>children-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="_1-绝对定位和负-magin-值"><a class="header-anchor" href="#_1-绝对定位和负-magin-值" aria-hidden="true">#</a> 1. 绝对定位和负 magin 值</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_2-绝对定位-transform"><a class="header-anchor" href="#_2-绝对定位-transform" aria-hidden="true">#</a> 2. 绝对定位 + transform</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_3-绝对定位-left-right-bottom-top-margin"><a class="header-anchor" href="#_3-绝对定位-left-right-bottom-top-margin" aria-hidden="true">#</a> 3. 绝对定位 + left/right/bottom/top + margin</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_4-flex-布局"><a class="header-anchor" href="#_4-flex-布局" aria-hidden="true">#</a> 4. flex 布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_5-grid-布局"><a class="header-anchor" href="#_5-grid-布局" aria-hidden="true">#</a> 5. grid 布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_6-table-cell-vertical-align-inline-block-margin-auto"><a class="header-anchor" href="#_6-table-cell-vertical-align-inline-block-margin-auto" aria-hidden="true">#</a> 6. table-cell + vertical-align + inline-block/margin: auto</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="二、不定宽高"><a class="header-anchor" href="#二、不定宽高" aria-hidden="true">#</a> 二、不定宽高</h2><h3 id="样板-html-代码-1"><a class="header-anchor" href="#样板-html-代码-1" aria-hidden="true">#</a> 样板 html 代码</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>children-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="_1-绝对定位-transform"><a class="header-anchor" href="#_1-绝对定位-transform" aria-hidden="true">#</a> 1. 绝对定位 + transform</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_2-table-cell"><a class="header-anchor" href="#_2-table-cell" aria-hidden="true">#</a> 2. table-cell</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_3-flex-布局"><a class="header-anchor" href="#_3-flex-布局" aria-hidden="true">#</a> 3. flex 布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_4-flex-变异布局"><a class="header-anchor" href="#_4-flex-变异布局" aria-hidden="true">#</a> 4. flex 变异布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_5-grid-flex-布局"><a class="header-anchor" href="#_5-grid-flex-布局" aria-hidden="true">#</a> 5. grid + flex 布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_6-gird-margin-布局"><a class="header-anchor" href="#_6-gird-margin-布局" aria-hidden="true">#</a> 6. gird + margin 布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_7-writing-mode-属性布局"><a class="header-anchor" href="#_7-writing-mode-属性布局" aria-hidden="true">#</a> 7. writing-mode 属性布局</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.children-box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="三、图片定高-不定高居中"><a class="header-anchor" href="#三、图片定高-不定高居中" aria-hidden="true">#</a> 三、图片定高|不定高居中</h2><h3 id="示例代码片段如下"><a class="header-anchor" href="#示例代码片段如下" aria-hidden="true">#</a> 示例代码片段如下:</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="_1-table-cell"><a class="header-anchor" href="#_1-table-cell" aria-hidden="true">#</a> 1. table-cell</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_2-after-before"><a class="header-anchor" href="#_2-after-before" aria-hidden="true">#</a> 2. ::after / ::before</h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.box::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="四、总结"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2><h3 id="_1-内联元素居中布局"><a class="header-anchor" href="#_1-内联元素居中布局" aria-hidden="true">#</a> 1. 内联元素居中布局</h3><p><code>a. 水平居中</code></p><ul><li>行内元素可设置：text-align: center;</li><li>flex 布局设置父元素：display: flex; justify-content: center;</li></ul><p><code>b. 垂直居中</code></p><ul><li>单行文本父元素确认高度：height === line-height</li><li>多行文本父元素确认高度：disaply: table-cell; vertical-align: middle;</li></ul><h3 id="_2-块级元素居中布局"><a class="header-anchor" href="#_2-块级元素居中布局" aria-hidden="true">#</a> 2. 块级元素居中布局</h3><p><code>a. 水平居中</code></p><ul><li>定宽: margin: 0 auto;</li><li>不定宽： 参考上诉例子中不定宽高例子。</li></ul><p><code>b.垂直居中</code></p><ul><li><p>position: absolute 设置 left、top、margin-left、margin-to(定高)；</p></li><li><p>position: fixed 设置 margin: auto(定高)；</p></li><li><p>display: table-cell；</p></li><li><p>transform: translate(x, y)；</p></li><li><p>flex(不定高，不定宽)；</p></li><li><p>grid(不定高，不定宽)，兼容性相对比较差；</p><p>转载自：<a href="https://juejin.im/post/5db706d5f265da4d31073959?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">蜗牛的北极星之旅</a></p></li></ul>',50)];t.render=function(a,p,t,e,c,l){return n(),s("div",null,o)};export{p as __pageData,t as default};
