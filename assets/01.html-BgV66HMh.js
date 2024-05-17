import{_ as s,o as a,c as p,a as n,b as t}from"./app-DyzXA5-Z.js";const e="/assets/image-20240422170047578-CEQRlJh2.png",o="/assets/image-20240422172952680-AvU7PCy2.png",c="/assets/image-20240422170323985-DF12Dyde.png",i="/assets/image-20240422181316149-DVBd2e7R.png",l={},u=n('<h1 id="递归函数-2-递推算法" tabindex="-1"><a class="header-anchor" href="#递归函数-2-递推算法"><span>递归函数(2)&amp;递推算法</span></a></h1><blockquote><p>小标题：01｜递归函数(2)｜递归函数的缺陷｜引出递推算法</p></blockquote><h2 id="本篇简介" tabindex="-1"><a class="header-anchor" href="#本篇简介"><span>本篇简介</span></a></h2><p>本篇文章和视频主要介绍了递归函数的缺陷和递推算法</p><h2 id="视频" tabindex="-1"><a class="header-anchor" href="#视频"><span>视频</span></a></h2>',5),r=t("iframe",{src:"//player.bilibili.com/player.html?aid=365429542&bvid=BV1h94y1G7Ni&cid=1320656902&p=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"800",height:"500px"},null,-1),d=n('<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2><p>大家好，欢迎来到《从0开始的C++算法课》的第1期，</p><p>本期将带大家发现递归函数的弊端，进一步理解递归，并引出递推算法来弥补递归的缺陷。</p><h3 id="兔子数列问题" tabindex="-1"><a class="header-anchor" href="#兔子数列问题"><span>兔子数列问题</span></a></h3><blockquote><p>有一对兔子，从出生之后的第3个月起每个月都生一对兔子，一对小兔子成长到第3个月后每个月又生一对兔子，假如兔子都不死，问第n个月（n&lt;=50）的兔子总数为多少对？</p></blockquote><h4 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h4><p>这是一个非常经典的问题，使用上个视频的知识点递归即可求解。</p><p>废话不多说来分析一下：</p><ul><li><p>我们把第1个月的这俩只兔子记为 a1 和 a2，此时兔子对数是 1 对。</p></li><li><p>第2个月的时候，兔子依旧是 a1 和 a2，兔子对数依旧是 1 对。</p></li><li><p>第3个月的时候，除了a1和a2之外，a1和a2 还会生一对兔子，可以记为 b1, b2，此时兔子对数是 2 对。</p></li><li><p>第4个月的时候，除了a1、a2、b1、b2之外，注意从第3个月起兔子每个月都会生一对兔子，所以a1和a2还会再生一对兔子，我们记为 c1, c2，此时兔子对数是 3 对。</p></li><li><p>第5个月的时候，除了a1、a2、b1、b2、c1、c2之外，a1和a2会生一对兔子 d1, d2，这个月也恰好是b1、b2出生后的第三个月，因此也会生一对兔子，记为e1 和 e2，此时兔子对数是 5 对。</p></li></ul><p>以此类推...</p><table><thead><tr><th>月份</th><th>兔子</th><th>兔子对数</th></tr></thead><tbody><tr><td>1</td><td>a1, a2</td><td>1</td></tr><tr><td>2</td><td>a1, a2</td><td>1</td></tr><tr><td>3</td><td>a1, a2, b1, b2</td><td>2</td></tr><tr><td>4</td><td>a1, a2, b1, b2, c1, c2</td><td>3</td></tr><tr><td>5</td><td>a1, a2, b1, b2, c1, c2, d1, d2, e1,e2</td><td>5</td></tr></tbody></table><p>其实我们只需要关注每个月有多少对兔子就可以了，得到这样一组数据：</p><table><thead><tr><th>月份</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody><tr><td>兔子对数</td><td>1</td><td>1</td><td>2</td><td>3</td><td>5</td></tr></tbody></table><p>请发现它们之间的规律，计算出第6个月有几对兔子？</p><p>没错，第6个月的兔子对数是 8 ，怎么来的呢？</p><p>第一个数 1 和第二个数 1 相加，得到的是第三个数 2，第二个数 1 和第三个数 2 相加，得到第四个数 3，同理，第五个数 5 是它前面的两个数 2 和 3 相加。</p><p>这个规律显而易见是当前项的值等于前一项的值加上前前项的值。</p><p>可以把它记作：</p><blockquote><p>A(n) = A(n-1) + A(n-2)</p><p>当前项 = 前一项 + 前前项</p></blockquote><p><img src="'+e+`" alt="image-20240422170047578"></p><h3 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列"><span>斐波那契数列</span></a></h3><p>熟悉数列的朋友一定发现了，它其实是斐波那契数列，也可以叫做兔子数列。</p><p>接下来我们来使用递归的方式求解这个问题：</p><table><thead><tr><th>月份</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>...</th><th>n-2</th><th>n-1</th><th>n</th></tr></thead><tbody><tr><td>兔子对数</td><td>1</td><td>1</td><td>2</td><td>3</td><td>5</td><td>...</td><td></td><td></td><td></td></tr></tbody></table><p>创建函数之前，首先确定函数是否有返回值，如果有返回值，返回值的类型是什么？</p><p>这个问题最终是需要返回第n个月的兔子对数？通过这一点可以确定函数有整型返回值，且有整型参数。</p><p>当函数有返回值的时候，先把返回值在函数内部写好，以免忘记，这是一个比较好的编程习惯。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 创建函数时先思考函数返回值</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res<span class="token punctuation">;</span>  <span class="token comment">// 这个函数需要有整型返回值，因此创建一个整型变量并返回</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>	<span class="token comment">// 返回整型变量</span>
<span class="token punctuation">}</span> 

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数返回的是数列中第n项的结果，根据规律，第n项的值是它前一项和前前项的值的和。这个函数就是用来求解数列某一个项的值的，因此前一项和前前项的值可以表达为f(n-1) 和 f(n-2)。</p><p>因此：<code>res = f(n-1) + f(n-2)</code>。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res<span class="token punctuation">;</span>
    res <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>	
<span class="token punctuation">}</span> 

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时递归函数构建完了吗？</strong></p><p>没有！，递归函数需要有起始项，避免无限制递归，对于这个数列来说，起始项应该有两项，分别是第1项和第2项，因为只有知道了两项才能推算出接下来一项的结果。</p><p>在代码中补充递归的起始项，当 n == 1 或者 n==2 的时候，结果都是 1，else里把刚才的规律代码填入即可。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span> <span class="token operator">||</span> n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>	
<span class="token punctuation">}</span> 


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> ret <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把代码放到编程环境中进行测试：</p><p>结果正确！</p><p>我们也可以使用 for 循环将每一项都输出查看一下结果，结果依旧正确。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span> <span class="token operator">||</span> n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>	
<span class="token punctuation">}</span> 


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不知道你有没有注意到题目中的这个提示：</p><p><img src="`+o+`" alt="image-20240422172952680"></p><p><code>n&lt;=50</code>，题目中为什么要有这样的一条限制呢？</p><p>我们在程序中修改 for 循环次数为 50 次，运行程序，观察一下结果：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span> <span class="token operator">||</span> n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>	
<span class="token punctuation">}</span> 


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>  <span class="token comment">// 修改此处为50</span>
        <span class="token punctuation">{</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一开始一瞬间就算出了前面的数据，但是越往后越慢，甚至等了半天也不见出结果，这就是递归的缺陷了，我们来具体分析一下为什么会导致这样的结果？</p><p>为了方便画图，这里以求解第6项举例</p><ul><li><p>求解第 6 项，n = 6 ,则结果是f(6)，</p></li><li><p>想要求出 f(6) ，则需要知道它的前两项，即f(5) 和 f(4)</p></li><li><p>想要求出 f(5) ，则需要知道它的前两项，即f(4) 和 f(3)</p></li><li><p>想要求出 f(4) ，在需要知道它的前两项，即f(3) 和 f(2)</p></li><li><p>左侧这里也有 f(4)，同样要知道 f(3) 和 f(2)。</p></li></ul><p>此时应该已经有人发现问题了，在递归函数求解的过程中，很多项都在重复计算着。</p><p>这也就自然造成了，求解的项数越多执行效率越低。</p><img src="`+c+`" alt="image-20240422170323985" style="zoom:40%;"><p>那么如何解决这个问题呢？</p><p>不卖关子，答案是：<strong>不使用递归</strong></p><p>我们可以使用for循环将的每个月的兔子对数计算出来并记录在数组中。</p><p>需要注意的是，数组的下标不是从1开始的，而是从0开始的，为了将代码和实际使用之间映射得更加易懂，我们可以在使用数组的时候不使用下标为 0 的这个位置，这样就可以用下标来代表月份。</p><table><thead><tr><th>月份</th><th>1</th><th>2</th><th>3</th><th>...</th><th>n-2</th><th>n-1</th><th>n</th></tr></thead><tbody><tr><td>兔子对数</td><td>1</td><td>1</td><td>2</td><td>...</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>数组元素(兔子对数)</th><th>1</th><th>1</th><th>2</th><th>...</th><th>n-2</th><th>n-1</th><th>n</th></tr></thead><tbody><tr><td>数组下标</td><td>0</td><td>1</td><td>2</td><td>...</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>数组元素(兔子对数)</th><th></th><th>1</th><th>1</th><th>2</th><th>...</th><th>n-2</th><th>n-1</th><th>n</th></tr></thead><tbody><tr><td>数组下标</td><td>0</td><td>1</td><td>2</td><td>3</td><td>...</td><td></td><td></td><td></td></tr></tbody></table><p>接下来就是编写代码了</p><p>首先创建一个整数数组，</p><p><code>int a[];</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的长度可以由输入来决定，也可以预估一个长度，比如这里我们想要计算第50个月的兔子对数，那么可以将数组的长度定为60，</p><p><code>int a[60];</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍微定义得比实际要使用的长度长一丢丢，防止太短不够用，定义太长又会浪费，因此多一丢丢丢就可以了。这种预估数组长度的方式是解题中比较常见的。</p><p>在主函数main中，只定义数组不赋值的情况下，数组中的所有元素是随机的，为了避免错误，将其初始化为 0 。</p><p><code>int a[60] = {0};</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前两个月的兔子对数同样是需要初始化说明的，将它们存储在数组下标为1和下标为2的位置。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来使用 for 循环求解。</p><p>前两个月的兔子对数已经初始化，因此只需要从第三个月开始循环求解 i=3。我们要求解第 50 个月，因此循环到数组下标为 50 的位置 i&lt;=50。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span> 
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个月的兔子对数求解结果需要存储在数组对应的位置，</p><p>即 <code>a[i];</code></p><p>根据兔子数列的规律，当前项的值是前一项的值加上前前项的值，所以是</p><p><code>a[i] = a[i-1] + a[i-2];</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span> 
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码完成，在编辑器中运行测试一下~</p><p>依旧使用 for 循环将每个月以及每个月对应的兔子对数输出出来查看结果，这样做可以和之前递归方式求解速度进行对比</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span> 
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现一瞬间就计算出了所有的结果，很直观。但是！求解的结果正确吗？</p><p>结果中出现了负数，显然是不对的，这个问题和代码中使用的数据类型有关系，我们知道不同的数据类型都有自己的存储范围，因为求解出的结果太大，int 类型已经不足以存储了，所以导致了这个错误。可以修改一下代码，将 int 类型换成 long long 。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">long</span> <span class="token keyword">long</span> a<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span> 
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时再运行代码，结果正确。</p><p>并且是瞬间就计算出了所有的结果，这是因为每个月的计算结果都被存储到了数组中，并没有重复计算的部分，这是优于递归的。</p><h2 id="递推" tabindex="-1"><a class="header-anchor" href="#递推"><span>递推</span></a></h2><p>这种方式我们称为<strong>递推</strong>，递推是一种用若干可重复运算来描述复杂问题的方法。简单粗暴的理解就是找规律。</p><p>这个规律可以称为递推式</p><h3 id="实际举例说明递推" tabindex="-1"><a class="header-anchor" href="#实际举例说明递推"><span>实际举例说明递推</span></a></h3><p>看下面这道题：</p><blockquote><p>在墙角按照规律堆放着一堆完全相同的正方体小块儿，只需要知道层数就可以计算所有小块儿的数量。</p><p>要求：</p><p>输入：一个整数 n ,代表层数(1&lt;=n&lt;=100)</p><p>输出：一个整数，表示这堆小块儿的总量。</p></blockquote><img src="`+i+`" alt="image-20240422181316149" style="zoom:40%;"><p>可以先找一找规律</p><p>相信很多人都找到了规律，让我浅浅猜测一下，你们有没有人在找规律的时候是把每一层的数量都算出来的，</p><h4 id="题目解析" tabindex="-1"><a class="header-anchor" href="#题目解析"><span>题目解析</span></a></h4><p>其实并不需要去思考每一层有多少个小块儿，我们只需要找到每一层之间的变化规律就可以了，从上往下看，总共有五层，第一层是1个小块儿，第二层比第一层多了2个小块儿，第三层比第二层多了3个小块儿，第四层比第三层多了4个小块儿，第五层比第四层多了5个小块儿</p><ul><li><h4 id="规律" tabindex="-1"><a class="header-anchor" href="#规律"><span>规律</span></a></h4></li></ul><p>这里的规律就是：除第一层外，每一层比上一层多了层数量的木块儿。</p><p>那么递推式就可以写作：<code>A(n) = A(n)-1 + n</code></p><blockquote><p>n代表层数，也就是当前层是上一层加上当前层的层数。</p></blockquote><p>编写代码:</p><p>首先需要输入要求解的层数，记为 n ，</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把第一层的小块儿数量作为递推的开始，需要先设置，创建一个变量来存储，初始化为1，</p><p><code>int level = 1；</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着写 for 循环，从第二层开始计算即可，所以 for 循环从 2 开始，总共到第 n 层，要包含 n ，</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>level 代表每一层小方块的数量，for 循环中的 i 动态表达了层数，根据递推式代码可以写作</p><p><code>level = level + i;</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            level <span class="token operator">=</span> level <span class="token operator">+</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这道题是求出所有小方块儿的数量，所以我们需要再做一个累加</p><p>新建一个变量用来存储总数，因为 for 循环是从第二层开始计算的，所以总数初始化为 1，也就是把第一层的数量先初始化在总数中。</p><p><code>int sum=1；</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            level <span class="token operator">=</span> level <span class="token operator">+</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 for 循环中补充累加的代码</p><p><code>sum = sum + level;</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            level <span class="token operator">=</span> level <span class="token operator">+</span> i<span class="token punctuation">;</span>
            sum <span class="token operator">=</span> sum <span class="token operator">+</span> level<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后输出 sum</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
	<span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            level <span class="token operator">=</span> level <span class="token operator">+</span> i<span class="token punctuation">;</span>
            sum <span class="token operator">=</span> sum <span class="token operator">+</span> level<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编辑器中运行代码测试，测试结果正确</p><p>关于 for 循环的使用以及累加比较简单，在编写代码时没有做出非常详细的解释，如果在这里有不理解的地方，可以去补充一下 for 循环的相关基础知识。</p><h2 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题"><span>练习题</span></a></h2><p>和上期一样，这里也给出两道题，供大家练习</p><h3 id="第一题" tabindex="-1"><a class="header-anchor" href="#第一题"><span>第一题</span></a></h3><blockquote><p>名称：猴子吃桃子</p><p>描述：猴子第一天摘下若干个桃子，当即吃了一半还不过瘾，又多吃了一个，第二天又将剩下的桃子吃掉一半又多吃了一个，以后每天早上都吃了前一天剩下的一半零一个。到了第十天想再吃时，见只剩下一个桃子，求第一天共摘了多少个桃子？</p><p>输入：无</p><p>输出：一个整数，第一天共有多少个桃子</p></blockquote><h3 id="第二题" tabindex="-1"><a class="header-anchor" href="#第二题"><span>第二题</span></a></h3><blockquote><p>描述：求1/1 + 1/2 + 2/3 + 3/5 + 5/8 + 8/13 + 13/21 + 21/34......的前n项的和</p><p>输入：</p><p>第1行：一个整数 n (1&lt;=n&lt;=30)</p><p>输出：</p><p>一行：一个小数，即前 n 项之和(保留3位小数)</p><p>样例输入：20</p><p>样例输出：12.660</p></blockquote><p>提示一下，第2道题可以结合递归和递推两种方式共同求解。</p><p>好了以上就是本期的所有内容了，如果觉得对你有所帮助的话，欢迎关注～</p>`,131),k=[u,r,d];function v(m,b){return a(),p("div",null,k)}const y=s(l,[["render",v],["__file","01.html.vue"]]),g=JSON.parse('{"path":"/C-plusplus/Cplusplus%E7%AE%97%E6%B3%95/01.html","title":"递归函数(2)&递推算法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"本篇简介","slug":"本篇简介","link":"#本篇简介","children":[]},{"level":2,"title":"视频","slug":"视频","link":"#视频","children":[]},{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[{"level":3,"title":"兔子数列问题","slug":"兔子数列问题","link":"#兔子数列问题","children":[]},{"level":3,"title":"斐波那契数列","slug":"斐波那契数列","link":"#斐波那契数列","children":[]}]},{"level":2,"title":"递推","slug":"递推","link":"#递推","children":[{"level":3,"title":"实际举例说明递推","slug":"实际举例说明递推","link":"#实际举例说明递推","children":[]}]},{"level":2,"title":"练习题","slug":"练习题","link":"#练习题","children":[{"level":3,"title":"第一题","slug":"第一题","link":"#第一题","children":[]},{"level":3,"title":"第二题","slug":"第二题","link":"#第二题","children":[]}]}],"git":{"updatedTime":1715931648000,"contributors":[{"name":"leemiao","email":"lm951103@126.com","commits":1}]},"filePathRelative":"C-plusplus/Cplusplus算法/01.md"}');export{y as comp,g as data};
