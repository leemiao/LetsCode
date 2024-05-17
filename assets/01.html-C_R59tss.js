import{_ as s,o as a,c as e,e as p,a as n}from"./app-DyzXA5-Z.js";const t="/assets/image-20240509102534738-5221536-D2yLT29X.png",o="/assets/image-20240509113936495-5225978-B3NUpREE.png",c="/assets/image-20240509114353789-5226263-B5pijcpX.png",l={},i=n(`<h1 id="类和面向对象" tabindex="-1"><a class="header-anchor" href="#类和面向对象"><span>类和面向对象</span></a></h1><h2 id="概念理解" tabindex="-1"><a class="header-anchor" href="#概念理解"><span>概念理解</span></a></h2><p>日常生活中，我们会把一些事物进行分类，比如 <strong>动物</strong>、<strong>花</strong>、<strong>人</strong>、<strong>电器</strong> 等等</p><p>这些词汇都是抽象的，并不代表某一个具体的事物，这里以人来举例：</p><p><strong>人</strong> 是一个抽象的概念</p><p><strong>张三</strong> 是一个具体的人</p><p>在<strong>面向对象</strong>这种编程思想中，我们把这种抽象的概念用 <strong>类</strong> 来表达，把 <strong>类</strong> 的具体事物用 <strong>实例/对象</strong> 来表达。</p><h2 id="类的创建和使用" tabindex="-1"><a class="header-anchor" href="#类的创建和使用"><span>类的创建和使用</span></a></h2><h3 id="类的创建" tabindex="-1"><a class="header-anchor" href="#类的创建"><span>类的创建</span></a></h3><ul><li>语法：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> 类名<span class="token punctuation">{</span> 访问权限： 属性 <span class="token operator">/</span> 行为<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例子：</li></ul><p>设计一个人类</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token comment">// 一般类的名字首字母使用大写(约定俗称的习惯)</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>              <span class="token comment">// 公共权限 （数据的使用权限，后面会详细解释）</span>
    string p_name<span class="token punctuation">;</span>   <span class="token comment">// 人名</span>
    <span class="token keyword">double</span> p_weight<span class="token punctuation">;</span> <span class="token comment">// 体重</span>
    <span class="token keyword">double</span> p_height<span class="token punctuation">;</span> <span class="token comment">// 身高</span>

    <span class="token keyword">void</span> <span class="token function">bmi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 操作数据:计算bmi 体重/身高的平方</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">double</span> bmi <span class="token operator">=</span> p_weight <span class="token operator">/</span> p_height <span class="token operator">*</span> p_height<span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;BMI为:&quot;</span> <span class="token operator">&lt;&lt;</span> bmi <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意最后有一个英文分号</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+t+`" alt="image-20240509102534738" style="zoom:45%;border-radius:10px;"><p>在面向对象这种编程思想中，首先考虑的是数据以及数据的使用方法，组成数据的基本单元一般称为 <strong>属性</strong>，操作数据的方法一般称为 <strong>行为</strong> 。把属性和行为作为一个整体来表示某一类事物，这便是类的一个最大的特性——<strong>封装</strong>。封装的优势除了可以把属性和行为放在一起表现一类事物，还可以对属性和行为加上 <strong>权限</strong> 。</p><h3 id="类的使用" tabindex="-1"><a class="header-anchor" href="#类的使用"><span>类的使用</span></a></h3><p>类是一个抽象的概念，并不具体代表某个事物，因此在使用类的时候首先需要做的就是实例化具体的对象。</p><p>依旧以上面的代码为例</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token comment">// 一般类的名字首字母使用大写(约定俗称的习惯)</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>              <span class="token comment">// 公共权限 （数据的使用权限，后面会详细解释）</span>
    string p_name<span class="token punctuation">;</span>   <span class="token comment">// 人名</span>
    <span class="token keyword">double</span> p_weight<span class="token punctuation">;</span> <span class="token comment">// 体重</span>
    <span class="token keyword">double</span> p_height<span class="token punctuation">;</span> <span class="token comment">// 身高</span>

    <span class="token keyword">void</span> <span class="token function">bmi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 操作数据:计算bmi 体重/身高的平方</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">double</span> bmi <span class="token operator">=</span> p_weight <span class="token operator">/</span> <span class="token punctuation">(</span>p_height <span class="token operator">*</span> p_height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;BMI为:&quot;</span> <span class="token operator">&lt;&lt;</span> bmi <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意最后有一个英文分号</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Person p<span class="token punctuation">;</span>          <span class="token comment">// 实例化对象，取名为 p</span>
    p<span class="token punctuation">.</span>p_weight <span class="token operator">=</span> <span class="token number">45.0</span><span class="token punctuation">;</span> <span class="token comment">// 为实例对象属性赋值</span>
    p<span class="token punctuation">.</span>p_height <span class="token operator">=</span> <span class="token number">1.73</span><span class="token punctuation">;</span> <span class="token comment">// 为实例对象属性赋值</span>
    p<span class="token punctuation">.</span><span class="token function">bmi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 实例对象调用行为函数</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类可以理解为一种新的数据类型，创建一个整型变量，代码是 <code>int a;</code> ，实例化某个类的具体对象时，也是如此。</p><p><code>Person p</code> , 即 <code>类名 对象名</code> ，这样就是创建出了一个具体的类的对象。</p><p>类中的属性可以通过点标记法来赋值，按照类属性的数据类型来赋值即可。</p><h2 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限"><span>访问权限</span></a></h2><p>访问权限有三个，分别是:</p><ul><li><code>public</code>：公共权限，成员类内可以访问，类外也可以访问</li><li><code>protected</code>：保护权限，成员类内和派生类可以访问，类外不可以访问</li><li><code>private</code>：私有权限，成员类内可以访问，类外不可以访问</li></ul><p>这里提到一个词汇“成员”，所谓的“成员”是一个泛指的概念，用来表示类或对象所拥有的组成部分，比如属性可以叫做数据成员，类的行为可以叫做成员函数。</p><p>所谓的类内和类外表示的就是类的大括号，在大括号内即类内，大括号外就是类外。</p><p>在这三个权限中，<code>protected</code> 权限是比较特殊的，它是本身类内可以访问，类外不可以访问，但是如果是它的派生类也是可以访问的，后续在说明<strong>继承</strong>概念的时候会详细说明。</p><p>下面通过代码说明 <code>public</code> 和 <code>private</code> 。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Parrot</span> <span class="token comment">// 鹦鹉类</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string p_name<span class="token punctuation">;</span> <span class="token comment">// 鹦鹉的名字</span>

    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 鹦鹉的行为——说话</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我叫&quot;</span> <span class="token operator">&lt;&lt;</span> p_name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 类内访问成员属性 p_name</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Parrot d<span class="token punctuation">;</span>          <span class="token comment">// 实例化一个 Parrot 对象</span>
    d<span class="token punctuation">.</span>p_name <span class="token operator">=</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 属性赋值</span>
    d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 调用成员函数</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，类 <code>Parrot</code> 的成员属性和成员函数都是在 <code>public</code> 权限下的，因此都可以不管类内、类外都是可以访问到的。</p><br>`,33),d=n(`<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Parrot</span> <span class="token comment">// 鹦鹉类</span>
<span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>           <span class="token comment">// 私有权限</span>
    string p_name<span class="token punctuation">;</span> <span class="token comment">// 鹦鹉的名字</span>

<span class="token keyword">public</span><span class="token operator">:</span>          <span class="token comment">// 公共权限</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 鹦鹉的行为——说话</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我叫&quot;</span> <span class="token operator">&lt;&lt;</span> p_name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 类内访问成员属性 p_name</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Parrot d<span class="token punctuation">;</span>          <span class="token comment">// 实例化一个 Parrot 对象</span>
    d<span class="token punctuation">.</span>p_name <span class="token operator">=</span> <span class="token string">&quot;旺财&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 属性赋值</span>
    d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 调用成员函数</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><img src="`+o+`" alt="image-20240509113936495" style="zoom:40%;"><p>此时并不影响类内的成员函数使用它，但是这段代码中的<code>d.p_name = &quot;旺财&quot;;</code> 已经不能赋值了。因为私有权限类外是不可以访问的。</p><br><p>把程序中的 <code>d.p_name = &quot;旺财&quot;;</code> 注释掉:</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Parrot</span> <span class="token comment">// 鹦鹉类</span>
<span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>           <span class="token comment">// 私有权限</span>
    string p_name<span class="token punctuation">;</span> <span class="token comment">// 鹦鹉的名字</span>

<span class="token keyword">public</span><span class="token operator">:</span>          <span class="token comment">// 公共权限</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 鹦鹉的行为——说话</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我叫&quot;</span> <span class="token operator">&lt;&lt;</span> p_name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 类内访问成员属性 p_name</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Parrot d<span class="token punctuation">;</span> <span class="token comment">// 实例化一个 Parrot 对象</span>
    <span class="token comment">// d.p_name = &quot;旺财&quot;; // 属性赋值</span>
    d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用成员函数</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序：</p><img src="`+c+'" alt="image-20240509114353789" style="zoom:70%;border-radius:10px;"><p>得到这个结果是因为没有给属性赋值，<code>speak()</code> 成员函数是公共权限依旧可以在类外使用的。由于 <code>p_name</code> 并没有被赋值，<code>string类型</code> 在没赋值的情况下默认为空，因此 <code>p_name</code> 为空，最后只输出显示出了 <code>我叫</code> 。</p><p><strong>注意：在类中定义属性、方法默认都是 private 权限</strong></p><h2 id="成员属性私有化" tabindex="-1"><a class="header-anchor" href="#成员属性私有化"><span>成员属性私有化</span></a></h2><p>待更新...</p>',13);function u(r,k){return a(),e("div",null,[i,p(" 把代码稍作修改，给 `p_name` 添加私有权限: "),d])}const v=s(l,[["render",u],["__file","01.html.vue"]]),b=JSON.parse('{"path":"/C-plusplus/cplusplus%E7%BC%96%E7%A8%8B%E6%A0%B8%E5%BF%83/01.html","title":"类和面向对象","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概念理解","slug":"概念理解","link":"#概念理解","children":[]},{"level":2,"title":"类的创建和使用","slug":"类的创建和使用","link":"#类的创建和使用","children":[{"level":3,"title":"类的创建","slug":"类的创建","link":"#类的创建","children":[]},{"level":3,"title":"类的使用","slug":"类的使用","link":"#类的使用","children":[]}]},{"level":2,"title":"访问权限","slug":"访问权限","link":"#访问权限","children":[]},{"level":2,"title":"成员属性私有化","slug":"成员属性私有化","link":"#成员属性私有化","children":[]}],"git":{"updatedTime":1715931648000,"contributors":[{"name":"leemiao","email":"lm951103@126.com","commits":1}]},"filePathRelative":"C-plusplus/cplusplus编程核心/01.md"}');export{v as comp,b as data};
