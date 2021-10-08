import{_ as n,c as s,o as a,a as p}from"./app.db7b71ac.js";const y='{"title":"\u57FA\u4E8Eel-tree\u7684\u865A\u62DF\u6EDA\u52A8","description":"","frontmatter":{"title":"\u57FA\u4E8Eel-tree\u7684\u865A\u62DF\u6EDA\u52A8","date":"2021-03-15T00:00:00.000Z","sidebar":"auto","categories":["Vue"],"tags":["Vue"]},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u96BE\u70B9","slug":"\u96BE\u70B9"},{"level":3,"title":"\u96BE\u70B9\u4E00\uFF1A\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811","slug":"\u96BE\u70B9\u4E00\uFF1A\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811"},{"level":3,"title":"\u96BE\u70B9\u4E8C\uFF1A\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811","slug":"\u96BE\u70B9\u4E8C\uFF1A\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811"},{"level":3,"title":"\u96BE\u70B9\u4E09\uFF1A\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316","slug":"\u96BE\u70B9\u4E09\uFF1A\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316"},{"level":2,"title":"\u4F18\u5316","slug":"\u4F18\u5316"},{"level":2,"title":"\u5B8C\u6574\u6D41\u7A0B","slug":"\u5B8C\u6574\u6D41\u7A0B"}],"relativePath":"blog/vue/\u57FA\u4E8Eel-tree\u7684\u865A\u62DF\u6EDA\u52A8.md","lastUpdated":1633672134783}',t={},o=p(`<h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><ol><li>\u7528\u4E00\u4E2A prop(<code>useVirtualScroll</code>)\u63A7\u5236\u8F93\u5165\u786E\u4FDD\u4E0D\u4F1A\u6C61\u67D3 el-tree \u6E90\u7801</li><li>\u5728\u5B8C\u6574\u7684\u6811\u4E0A\u622A\u53D6\u4E00\u4E2A\u6811\u7247\u6BB5</li><li>\u5BF9\u7247\u6BB5\u6811\u8FDB\u884C\u5904\u7406\uFF0C\u53BB\u9664\u6240\u6709\u7684 childNodes(\u79F0\u4E4B\u4E3A<code>releaseNodeLoad</code>)</li><li>\u4F7F\u7528\u6811\u7247\u6BB5\u8FDB\u884C\u6E32\u67D3</li><li>\u5904\u7406\u6EDA\u52A8/\u5C55\u5F00/\u6536\u7F29/\u67E5\u8BE2\uFF0C\u6BCF\u4E00\u6B21\u90FD\u89E6\u53D1\u4EE5\u4E0A\u6B65\u9AA4 2-4</li></ol><h2 id="\u96BE\u70B9" tabindex="-1">\u96BE\u70B9 <a class="header-anchor" href="#\u96BE\u70B9" aria-hidden="true">#</a></h2><ul><li>\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811</li><li>\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811</li><li>\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> ELTree <span class="token operator">=</span> <span class="token punctuation">{</span>
  root<span class="token operator">:</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u5165\u7684data</span>
    childNodes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5B9E\u9645\u6E32\u67D3\u7684\u6811\u8282\u70B9</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6811\u7684\u6839\u8282\u70B9(\u5B8C\u6574\u6811)</span>
  virtualTree<span class="token operator">:</span> <span class="token punctuation">{</span> childNodes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u7247\u6BB5\u6811</span>
  start<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8D77\u59CB\u4F4D\u7F6E</span>
  itemHeight<span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token comment">// \u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u9AD8\u5EA6</span>
  paddingTop<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u865A\u62DF\u6EDA\u52A8\u57AB\u7684\u9AD8\u5EA6</span>
  boxMaxNumber<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u89C6\u533A\u57DF\u53EF\u5BB9\u7EB3\u4E2A\u6570</span>
  totalDisplay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u5B8C\u6574\u6811\u4E2D\u9700\u8981\u663E\u793A\u5728\u9875\u9762\u7684\u8282\u70B9\u6570</span>
  counter<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA1\u6570\u5668\uFF0C\u8BB0\u5F55\u904D\u5386\u63A8\u5165\u7247\u6BB5\u6811</span>
  maxStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8D77\u59CB\u4F4D\u7F6E\u7684\u6700\u5927\u503C(\u89E6\u5E95\u5224\u65AD)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u96BE\u70B9\u4E00\uFF1A\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811" tabindex="-1">\u96BE\u70B9\u4E00\uFF1A\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811 <a class="header-anchor" href="#\u96BE\u70B9\u4E00\uFF1A\u5982\u4F55\u622A\u53D6\u7247\u6BB5\u6811" aria-hidden="true">#</a></h3><p>\u786E\u5B9A\u7247\u6BB5\u6811()\u7684\u8D77\u70B9\u548C\u7EC8\u70B9</p><div class="language-js"><pre><code><span class="token comment">// 1. \u9875\u9762mounted 2.\u4F20\u5165data\u6539\u53D8 3. \u8FC7\u6EE4\u65F6</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// \u6EDA\u52A8\u65F6</span>
<span class="token keyword">function</span> <span class="token function">getStartIndex</span><span class="token punctuation">(</span><span class="token parameter">scrollTop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> startIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> startIndex <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6298\u53E0/\u5C55\u5F00</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paddingTop <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemHeight<span class="token punctuation">;</span>
</code></pre></div><p>\u8BA1\u7B97\u53EF\u89C6\u533A\u57DF\u53EF\u5BB9\u7EB3\u4E2A\u6570(boxMaxNumber)</p><ul><li>\u6B63\u5E38\u60C5\u51B5 <ul><li>\u8BB0\u5F55\u6240\u6709\u5C55\u5F00\u7684 key\uFF0C\u5E76\u63A8\u5165\u6570\u7EC4(expandedKeys)</li><li>\u5728\u5C55\u5F00/\u6298\u53E0\u7684\u65F6\u5019\u7EF4\u62A4 expandedKeys</li><li>\u904D\u5386 expandedKeys\uFF0C\u5E76\u901A\u8FC7 key \u9012\u5F52\u8BE5 key \u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u5C06\u6EE1\u8DB3\u6761\u4EF6 1.\u6CA1\u6709 push \u8FC7 2.level \u5927\u4E8E 1 \u7684 key \u63A8\u5165\u6570\u7EC4(keys)</li><li>\u8F93\u51FA<code>keys.length + this.root.childNodes.length</code></li></ul></li><li>\u8FC7\u6EE4\u6761\u4EF6 <ul><li>\u53EA\u8981\u904D\u5386\u5B8C\u6574\u6811\uFF0C\u9009\u51FA\u5176\u4E2D\u8282\u70B9\u7684<code>expanded</code>\u4E3A<code>true</code></li></ul></li></ul><div class="language-js"><pre><code><span class="token comment">// \u8BA1\u7B97\u51FA\u6240\u6709\u9ED8\u8BA4\u5C55\u5F00\u7684keys</span>
<span class="token keyword">function</span> <span class="token function">calcExpandedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>expandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandAll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>expandedKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodesMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>expandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C55\u5F00/\u6298\u53E0\u7EF4\u62A4expandedKeys</span>
<span class="token keyword">function</span> <span class="token function">handleVirtualTreeExpand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>useVirtualScroll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> expandedKeys<span class="token punctuation">,</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tree<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    <span class="token keyword">const</span> nodeKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>expanded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> expandedKeys<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>nodeKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        expandedKeys<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      expandedKeys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>tree<span class="token punctuation">.</span><span class="token function">resetAndSliceTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u5E94\u8BE5\u663E\u793A\u5728\u9875\u9762\u4E0A\u7684\u4E2A\u6570</span>
<span class="token keyword">function</span> <span class="token function">getTotalDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> nodesMap <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6level\u4E3A1\u7684\u8282\u70B9\u957F\u5EA6</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">pushKey</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>keys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nodesMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>level <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u9012\u5F52\u627E\u51FA\u6240\u6709\u9700\u8981\u5C55\u5F00\u7684key</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>expandedKeys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">judgeShow</span><span class="token punctuation">(</span>nodesMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>show<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pushKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      nodesMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">judgeShow</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        show <span class="token operator">&amp;&amp;</span> <span class="token function">pushKey</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> len <span class="token operator">+</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u96BE\u70B9\u4E8C\uFF1A\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811" tabindex="-1">\u96BE\u70B9\u4E8C\uFF1A\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811 <a class="header-anchor" href="#\u96BE\u70B9\u4E8C\uFF1A\u5982\u4F55\u5C06\u7247\u6BB5\u6784\u5EFA\u6210\u4E00\u4E2A\u7247\u6BB5\u6811" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u5C06\u62FF\u5230\u7684\u6811\u8282\u70B9\u653E\u5165\u865A\u62DF\u6EDA\u52A8\u6811\u4E2D</span>
<span class="token keyword">function</span> <span class="token function">setTreeNode</span><span class="token punctuation">(</span><span class="token parameter">targetNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u80FD\u5426\u627E\u5230\u7236\u7EA7</span>
  <span class="token keyword">let</span> canFindParent <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> childNodes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>virtualTree<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> childNodes <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token comment">// \u627E\u5230\u7236\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> targetNode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      canFindParent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> node<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// \u6CA1\u6709\u7F13\u5B58\u8FC7</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span>childrenMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7F13\u5B58\u539F\u8282\u70B9\u6570\u636E</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span>childrenMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>childNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      node<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u627E\u4E0D\u5230\u5C31\u76F4\u63A5\u63A8\u8FDB\u53BB</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canFindParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    childNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">releaseNodeLoad</span><span class="token punctuation">(</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u96BE\u70B9\u4E09\uFF1A\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316" tabindex="-1">\u96BE\u70B9\u4E09\uFF1A\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316 <a class="header-anchor" href="#\u96BE\u70B9\u4E09\uFF1A\u6EDA\u52A8\u7684\u5B9E\u73B0\u548C\u4F18\u5316" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u6EDA\u52A8\u4E8B\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">handleScroll</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>useVirtualScroll<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollTop <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> scrollTop <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>totalHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateVisibleArea</span><span class="token punctuation">(</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u66F4\u65B0\u53EF\u89C6\u533A\u57DF</span>
<span class="token keyword">function</span> <span class="token function">updateVisibleArea</span><span class="token punctuation">(</span><span class="token parameter">scrollTop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStartIndex</span><span class="token punctuation">(</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemHeight <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resetAndSliceTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h2><blockquote><p>\u95EE\u9898\uFF1A\u865A\u62DF\u6EDA\u52A8\u6811\u4FDD\u7559\u4E86\u5BF9 childNodes \u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u5728 el-tree \u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u53BB\u751F\u6210\u5BF9\u5E94\u8282\u70B9\uFF0C\u8282\u70B9\u592A\u591A\u4F1A\u5F88\u5361</p></blockquote><blockquote><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728\u6784\u5EFA\u5B8C\u6210\u865A\u62DF\u6EDA\u52A8\u6811\u4E4B\u540E\uFF0C\u5378\u8F7D\u6240\u6709 childNodes\uFF0C\u5E76\u5B58\u5165 map \u4E2D\uFF0C<code>{nodeId: childNodes}</code>\uFF0C\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u91CD\u65B0\u6302\u8F7D\u5230\u5B8C\u6574\u6811\u4E0A</p></blockquote><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">releaseNodeLoad</span><span class="token punctuation">(</span><span class="token parameter">childNodes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>boxMaxNumber <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>totalDisplay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> childNodes<span class="token punctuation">,</span> expanded<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>expanded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span>childrenMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> childNodes<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>childNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B8C\u6574\u6D41\u7A0B" tabindex="-1">\u5B8C\u6574\u6D41\u7A0B <a class="header-anchor" href="#\u5B8C\u6574\u6D41\u7A0B" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u521D\u59CB\u5316\u76F8\u5173\u7684\u6570\u503C(resetVirtualTree) =&gt; \u5C06\u6811\u5207\u7247(sliceTree) =&gt; \u5C06\u5207\u51FA\u6765\u7684\u6BCF\u4E2A\u8282\u70B9\u653E\u5165\u865A\u62DF\u6EDA\u52A8\u6811(setTreeNode) =&gt; \u53BB\u9664\u8282\u70B9\u5305\u88B1(releaseNodeLoad)

mounted/data\u6539\u53D8/\u5C55\u5F00/\u6298\u53E0/\u8FC7\u6EE4\u6587\u672C/\u6EDA\u52A8 \u6267\u884C\u4E0A\u8FF0\u64CD\u4F5C
</code></pre></div>`,21),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{y as __pageData,m as default};
