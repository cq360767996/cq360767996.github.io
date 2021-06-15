import{o as n,c as a,d as s}from"./app.bb310e7e.js";const e='{"title":"记录力扣日常","description":"","frontmatter":{"title":"记录力扣日常","date":"2021-04-09T00:00:00.000Z","sidebar":"auto","categories":["leetcode"],"tags":["leetcode"]},"headers":[{"level":2,"title":"easy","slug":"easy"},{"level":3,"title":"罗马文字解析","slug":"罗马文字解析"},{"level":3,"title":"最长公共前缀","slug":"最长公共前缀"},{"level":3,"title":"有效的括号","slug":"有效的括号"},{"level":3,"title":"合并两个有序链表","slug":"合并两个有序链表"},{"level":3,"title":"删除有序数组中的重复项","slug":"删除有序数组中的重复项"},{"level":3,"title":"实现 strStr()","slug":"实现-strstr"},{"level":3,"title":"外观数列","slug":"外观数列"},{"level":3,"title":"最大子序和","slug":"最大子序和"},{"level":3,"title":"最后一个单词的长度","slug":"最后一个单词的长度"},{"level":3,"title":"x 的平方根","slug":"x-的平方根"},{"level":3,"title":"合并两个有序数组","slug":"合并两个有序数组"},{"level":3,"title":"只出现一次的数字","slug":"只出现一次的数字"},{"level":3,"title":"相交链表","slug":"相交链表"},{"level":3,"title":"多数元素","slug":"多数元素"},{"level":3,"title":"阶乘后的零","slug":"阶乘后的零"},{"level":3,"title":"颠倒二进制位","slug":"颠倒二进制位"},{"level":3,"title":"快乐数","slug":"快乐数"},{"level":3,"title":"计算质数","slug":"计算质数"},{"level":3,"title":"反转链表","slug":"反转链表"},{"level":3,"title":"汇总区间","slug":"汇总区间"},{"level":3,"title":"2 的幂","slug":"_2-的幂"},{"level":3,"title":"回文链表","slug":"回文链表"},{"level":3,"title":"二叉搜索树的最近公共祖先","slug":"二叉搜索树的最近公共祖先"},{"level":3,"title":"各数相加","slug":"各数相加"}],"relativePath":"blog/leetcode/index.md","lastUpdated":1623771591566}',t={},p=s('<h2 id="easy"><a class="header-anchor" href="#easy" aria-hidden="true">#</a> easy</h2><h3 id="罗马文字解析"><a class="header-anchor" href="#罗马文字解析" aria-hidden="true">#</a> 罗马文字解析</h3><p><a href="https://leetcode-cn.com/problems/roman-to-integer/" target="_blank" rel="noopener noreferrer">地址</a></p><blockquote><p>当前数字小于后一个的值时，后一个值减去前一个值，i++</p></blockquote><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  val <span class="token operator">=</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> val<span class="token punctuation">;</span>\n  i<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="最长公共前缀"><a class="header-anchor" href="#最长公共前缀" aria-hidden="true">#</a> 最长公共前缀</h3><p><a href="https://leetcode-cn.com/problems/longest-common-prefix/solution/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>先遍历一次拿长度最短的</li><li>再遍历比较遇到值不对的直接跳出，并截取公共串</li></ul><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>demo<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  demo <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>更好的思路</p><ul><li>取第一个为参照</li><li>依次去对比所有项中对应的字符</li><li>遇到不同退出循环，记录第一个参照此时的索引</li></ul><div class="language-js"><pre><code><span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>nowChar <span class="token operator">!==</span> strs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  j<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="有效的括号"><a class="header-anchor" href="#有效的括号" aria-hidden="true">#</a> 有效的括号</h3><p><a href="https://leetcode-cn.com/problems/valid-parentheses/" target="_blank" rel="noopener noreferrer">地址</a></p><blockquote><p>优化思路，这种找对应关系的题目，可以通过取余来判断</p></blockquote><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="合并两个有序链表"><a class="header-anchor" href="#合并两个有序链表" aria-hidden="true">#</a> 合并两个有序链表</h3><p><a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/" target="_blank" rel="noopener noreferrer">地址</a></p><p>思路一：</p><ul><li>用一个结果链表装载结果</li><li>每次移动 l1/l2 中的较小值的那个指针</li><li>将结果指针指向较小值的那个节点</li><li>后移较小值的指针和结果链表的指针</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> prevHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> prevNode <span class="token operator">=</span> prevHead<span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>\n      l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>\n      l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    prevNode <span class="token operator">=</span> prevNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">||</span> l2<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> prevHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>思路二：</p><ul><li>将结果集由 l1/l2 输出</li><li>通过移动 l1/l2 的指针不断递归</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l1<span class="token punctuation">)</span> <span class="token keyword">return</span> l2<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l2<span class="token punctuation">)</span> <span class="token keyword">return</span> l1<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> l1<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> l2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="删除有序数组中的重复项"><a class="header-anchor" href="#删除有序数组中的重复项" aria-hidden="true">#</a> 删除有序数组中的重复项</h3><p><a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener noreferrer">地址</a></p><blockquote><ol><li>不能使用额外空间</li><li>不需要处理之后的元素</li></ol></blockquote><ul><li>用两个指针，<code>i=1</code>、<code>j=0</code>，\b\b\b<code>i</code>是遍历的指针，<code>j</code>是输出集的指针</li><li><code>nums[i] !== nums[i - 1]</code>，<code>j++</code>，并且<code>nums[j] = nums[i]</code></li></ul><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  j<span class="token operator">++</span><span class="token punctuation">;</span>\n  nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ni<span class="token operator">++</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="实现-strstr"><a class="header-anchor" href="#实现-strstr" aria-hidden="true">#</a> 实现 strStr()</h3><p><a href="https://leetcode-cn.com/problems/implement-strstr/solution/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>比较长度，仅在前者长度大于后者进行遍历</li><li>遍历长度为<code>len1 - len2 + 1</code></li><li>不相等直接退出内部循环</li></ul><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> diff <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> equal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>haystack<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">!==</span> needle<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        equal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>equal<span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>\n</code></pre></div><h3 id="外观数列"><a class="header-anchor" href="#外观数列" aria-hidden="true">#</a> 外观数列</h3><p><a href="https://leetcode-cn.com/problems/count-and-say/" target="_blank" rel="noopener noreferrer">地址</a></p><p>思路一：正则表达式</p><div class="language-js"><pre><code>start <span class="token operator">=</span> start<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)\\1*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token parameter">matcher</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>matcher<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>matcher<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="最大子序和"><a class="header-anchor" href="#最大子序和" aria-hidden="true">#</a> 最大子序和</h3><p><a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank" rel="noopener noreferrer">地址</a></p><p>思路一：动态规划</p><div class="language-js"><pre><code><span class="token comment">// 转移方程</span>\n<span class="token function">f</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol><li>前 i 项的最大值 = 前 i-1 项最大值 + 第 i 项 和 第 i 项的最大值</li><li>保留每次计算的前 i 项的和和前 i 项的最大值</li><li>取其中的最大值</li></ol><h3 id="最后一个单词的长度"><a class="header-anchor" href="#最后一个单词的长度" aria-hidden="true">#</a> 最后一个单词的长度</h3><p><a href="https://leetcode-cn.com/problems/length-of-last-word/" target="_blank" rel="noopener noreferrer">地址</a></p><p>思路从右往左遍历，先去除所有空格，再计算长度，再次遇到空格或者 i=0 输出结果</p><h3 id="x-的平方根"><a class="header-anchor" href="#x-的平方根" aria-hidden="true">#</a> x 的平方根</h3><p><a href="https://leetcode-cn.com/problems/sqrtx/" target="_blank" rel="noopener noreferrer">地址</a></p><p>二分查找,对比<code>mid * mid</code>和<code>x</code>的大小，<code>mid * mid &lt; x</code></p><h3 id="合并两个有序数组"><a class="header-anchor" href="#合并两个有序数组" aria-hidden="true">#</a> 合并两个有序数组</h3><p><a href="https://leetcode-cn.com/problems/merge-sorted-array/" target="_blank" rel="noopener noreferrer">地址</a></p><p>双指针法 从前往后遍历需要额外的空间 时间复杂度：O(m+n) 空间复杂度：O(m+n)</p><p>优化思路 从后往前遍历，因为后面都是 0，不会出现覆盖的问题 时间复杂度：O(m+n) 空间复杂度：O(1)</p><h3 id="只出现一次的数字"><a class="header-anchor" href="#只出现一次的数字" aria-hidden="true">#</a> 只出现一次的数字</h3><p><a href="https://leetcode-cn.com/problems/single-number/" target="_blank" rel="noopener noreferrer">地址</a></p><p>使用异或运算符<code>^</code>，具备以下特点</p><ul><li><code>a ^ 0 === a</code></li><li><code>a ^ a === 0</code></li><li><code>a ^ b ^ a === b</code></li></ul><h3 id="相交链表"><a class="header-anchor" href="#相交链表" aria-hidden="true">#</a> 相交链表</h3><p><a href="https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/" target="_blank" rel="noopener noreferrer">地址</a></p><p>双指针法</p><div class="language-"><pre><code>p1: headA =&gt; headA End =&gt; headB =&gt; node\np2: headB =&gt; headB End =&gt; headA =&gt; node\n如果相交的话，则满足：\na + (b - c) = b + (a - c)\n</code></pre></div><h3 id="多数元素"><a class="header-anchor" href="#多数元素" aria-hidden="true">#</a> 多数元素</h3><p><a href="https://leetcode-cn.com/problems/majority-element/description/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li><p>思路一：hash table 时间复杂度：O(n) 空间复杂度：O(n)</p></li><li><p>思路二：打分法 遍历，然后给每一个元素打分，等于 candidate 记为 1，不等于记为-1，<code>count===0</code>表示需要变更<code>candidate</code> 核心思想就是多数是大于<code>n / 2</code>，所以通过消除法，最后剩余的肯定是最多的数</p></li></ul><h3 id="阶乘后的零"><a class="header-anchor" href="#阶乘后的零" aria-hidden="true">#</a> 阶乘后的零</h3><p><a href="https://leetcode-cn.com/problems/factorial-trailing-zeroes/" target="_blank" rel="noopener noreferrer">地址</a></p><p>规律就是</p><ul><li>每隔 5 个数出现一次 0，所以总数应该是 n / 5</li><li>但是每隔 25 个数又会额外多处一个 1 一个 0</li><li>每隔 625 个数又会额外多处一个 0</li><li>以此类推</li><li>总数 = n / 5 + n / 25 + n / 625 +++</li></ul><h3 id="颠倒二进制位"><a class="header-anchor" href="#颠倒二进制位" aria-hidden="true">#</a> 颠倒二进制位</h3><p><a href="https://leetcode-cn.com/problems/reverse-bits/" target="_blank" rel="noopener noreferrer">地址</a></p><p>位运算符笔记</p><ul><li>&gt;&gt; 右移运算符，正数高位补 0，负数高位补 1 <code>111</code> =&gt; <code>11</code> <code>-111</code> =&gt; <code>11111111111111111111111111111100</code></li><li>&lt;&lt; 左移运算符，低位补 0 <code>111</code> =&gt; <code>1110</code></li><li>&gt;&gt;&gt; 无符号右移，高位补 0 <code>-111</code> =&gt; <code>11111111111111111111111111111000</code> =&gt; <code>01111111111111111111111111111100</code></li></ul><ol><li>JavaScript 中数字存储格式是 64 位浮点数</li><li>JavaScript 中进行位运算的数字格式是 32 位二进制数</li><li>负数的二进制写法是正数的二进制补码+1</li><li>这种长位数作运算的时候会用 16 进制来表示，即四位变成一位，用 0x 作开头</li><li>toString(2)可以将十进制转换成二进制，带正负号。。</li></ol><p>无符号右移 0 作用 <a href="https://www.jianshu.com/p/588eb74b5a03" target="_blank" rel="noopener noreferrer">地址</a></p><h3 id="快乐数"><a class="header-anchor" href="#快乐数" aria-hidden="true">#</a> 快乐数</h3><p><a href="https://leetcode-cn.com/problems/happy-number/description/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：哈希表，缓存所有值</li><li>思路二：可以理解为一个循环指针</li></ul><h3 id="计算质数"><a class="header-anchor" href="#计算质数" aria-hidden="true">#</a> 计算质数</h3><p><a href="https://leetcode-cn.com/problems/count-primes/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：暴力法</li><li>思路二：依此遍历，如果 i 是质数，则 i 的 x 倍是合数，缓存结果减少计算</li></ul><h3 id="反转链表"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h3><p><a href="https://leetcode-cn.com/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：迭代</li><li>思路二：递归，归的过程需要反转两个链表<code>head.next.next = head; head.next = null;</code></li></ul><h3 id="汇总区间"><a class="header-anchor" href="#汇总区间" aria-hidden="true">#</a> 汇总区间</h3><p><a href="https://leetcode-cn.com/problems/summary-ranges/" target="_blank" rel="noopener noreferrer">地址</a></p><p>读清楚题目，要求是连续就收起来，不连续就单独放 <code>0 1 2 4 5 7</code><code>0 1 2</code>连续 =&gt; <code>0-&gt;2</code><code>4 5</code> 连续 =&gt; <code>4-&gt;5</code><code>7</code> =&gt; <code>7</code></p><h3 id="_2-的幂"><a class="header-anchor" href="#_2-的幂" aria-hidden="true">#</a> 2 的幂</h3><p><a href="https://leetcode-cn.com/problems/power-of-two/" target="_blank" rel="noopener noreferrer">地址</a></p><p>2 的幂满足二进制表示的时候只有一个 1，且在最高位 所以可以判断<code>n &amp; (n - 1)</code>是否等于 0 来求解</p><h3 id="回文链表"><a class="header-anchor" href="#回文链表" aria-hidden="true">#</a> 回文链表</h3><p><a href="https://leetcode-cn.com/problems/palindrome-linked-list/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：转为数组，然后循环判断是否回文</li><li>思路二：快慢指针，找到中点并且反转前半部分 =&gt; 对比反转链表和剩余链表的值</li></ul><h3 id="二叉搜索树的最近公共祖先"><a class="header-anchor" href="#二叉搜索树的最近公共祖先" aria-hidden="true">#</a> 二叉搜索树的最近公共祖先</h3><p><a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：先找到 p 和 q 节点的路径，再对比找到最后一个相等的节点就是高度最低的节点</li><li>思路二：如果 p 和 q 都当前节点小，<code>node = node.left</code>，如果都比当前节点大<code>node = node.right</code>，找到介于两者之间的值就是结果</li><li>思路三：递归实现思路二</li></ul><h3 id="各数相加"><a class="header-anchor" href="#各数相加" aria-hidden="true">#</a> 各数相加</h3><p><a href="https://leetcode-cn.com/problems/add-digits/" target="_blank" rel="noopener noreferrer">地址</a></p><ul><li>思路一：循环+递归</li><li>思路二：可以理解为除以 9 的余数</li></ul>',97);t.render=function(s,e,t,o,l,c){return n(),a("div",null,[p])};export default t;export{e as __pageData};
