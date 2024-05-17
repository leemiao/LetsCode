import{_ as n,o as s,c as a,a as t}from"./app-DyzXA5-Z.js";const p="/assets/image-20240508153106965-5153474-upVioYWx.png",e="/assets/image-20240508154358512-5154243-BaawyoMF.png",o="/assets/image-20240508155506595-5154909-DceNeJvg.png",l="/assets/image-20240508160509666-5155510-DuRLR_g-.png",c="/assets/image-20240508160843194-5155724-C8yXY6rI.png",i="/assets/image-20240508161854483-5156336-4iz7rPet.png",r="/assets/image-20240508163011705-5157014-D54NyeTt.png",u={},d=t(`<h1 id="内存模型-引用" tabindex="-1"><a class="header-anchor" href="#内存模型-引用"><span>内存模型&amp;引用</span></a></h1><h2 id="内存模型" tabindex="-1"><a class="header-anchor" href="#内存模型"><span>内存模型</span></a></h2><p>C++内存模型大体上可以分为四个区域，代码区、全局区、栈区和堆区，他们分别有各自的作用。（一些书籍也会分为五大分区，更加细致一些）</p><p>分区大体上如下：</p><ul><li>代码区：存放函数体的二进制代码，由操作系统管理</li><li>全局区：存放全局变量、静态变量、常量。</li><li>栈区：由编译器来分配和释放，存放函数的参数值、局部变量等。</li><li>堆区：由程序员分配和释放，程序员如果没有释放，则由操作系统收回。</li></ul><h2 id="内存详细说明" tabindex="-1"><a class="header-anchor" href="#内存详细说明"><span>内存详细说明</span></a></h2><p>我们可以把程序按照时间分为程序运行前和程序运行后来分段说明，</p><h3 id="程序运行前" tabindex="-1"><a class="header-anchor" href="#程序运行前"><span>程序运行前：</span></a></h3><p>程序运行前指的是，程序源代码编写完并编译完成后，已经生成了可执行程序，但还未执行程序。</p><p>此时的内存：</p><ul><li><p>代码区：</p><ol><li>存放了CPU可执行的机器指令。</li><li>代码区是共享的，其目的是对需要频繁被执行的程序，只需要在内存中有一份代码即可。</li><li>代码区是只读的，目的是防止程序意外修改了指令(保证安全性)</li></ol></li><li><p>全局区：</p><ol><li><strong>全局变量</strong>和<strong>静态变量</strong>在这个区</li><li><strong>字符串常量</strong>和 <strong>const 修饰的全局变量</strong></li><li>程序运行结束后由系统释放</li></ol></li></ul><p><strong>代码测试：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 全局变量</span>
<span class="token keyword">int</span> g_x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> g_y <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

<span class="token comment">// const 修饰的全局变量</span>
<span class="token keyword">int</span> c_g_x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c_g_y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 普通局部变量</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出普通局部变量的内存地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;普通局部变量 x 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;普通局部变量 y 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 输出全局变量的内存地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局变量 g_x 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g_x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;全局变量 g_y 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g_y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 静态变量，普通变量前加上 static 关键字就是静态变量</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> s_x <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> s_y <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出静态变量的内存地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;静态变量 s_x 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>s_x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;静态变量 s_y 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>s_y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 输出字符串常量的内存地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;字符串常量的地址&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span><span class="token string">&quot;hello&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 输出 const 修饰的全局变量的内存地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;const 修饰的全局变量 c_g_x 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>c_g_x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;const 修饰的全局变量 c_g_y 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>c_g_y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// const 修饰的局部变量</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> c_x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> c_y <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出 const 修饰的局部变量的地址</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;const 修饰的局部变量 c_x 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>c_x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;const 修饰的局部变量 c_y 的内存地址:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>c_y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><img src="`+p+'" alt="image-20240508153106965" style="zoom:80%;border-radius:10px;"><img src="'+e+`" alt="image-20240508154358512" style="zoom:60%;border-radius:10px;"><h3 id="程序运行后" tabindex="-1"><a class="header-anchor" href="#程序运行后"><span>程序运行后：</span></a></h3><p>程序编译完之后的可执行程序执行。</p><ul><li><strong>栈区：</strong><ol><li>栈区由编译器自动分配和释放，存放<strong>函数的参数值</strong>，<strong>局部变量</strong>，<strong>const 修饰的局部变量</strong></li><li>注意<strong>不要返回局部变量的地址</strong>，因为函数运行完之后编译器自动释放。</li></ol></li></ul><p>由上个代码可以看到<strong>普通局部变量</strong>以及**const修饰的局部变量(常量)**在栈区。</p><p><strong>代码测试：</strong>（不要返回局部变量的地址）</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 局部变量存储在栈区</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回的是地址，因此返回值类型是指针类型 加上 * 号</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span> <span class="token comment">// 返回局部变量地址</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为函数返回的是地址，因此需要指针来接收</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><img src="`+o+`" alt="image-20240508155506595" style="zoom:70%;border-radius:10px;"><p>运行结果报错，这是因为在栈区开辟内存是由编译器自动释放的，在函数运行结束之后则自动释放掉了，因此不能返回地址。</p><ul><li><strong>堆区：</strong><ol><li>由程序员分配和释放</li><li>C++中主要使用 <code>new</code> 关键字在堆区开辟内存</li><li>使用 <code>delete</code> 关键字在堆区释放内存</li></ol></li></ul><p><strong>代码测试：</strong>（new关键字创建堆区数据）</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 堆区内存由自己创建自己释放</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 使用 new 关键字把数据创建到堆区</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new 关键字返回的是堆区的地址，因此使用指针接收</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>             <span class="token comment">// p是指针，里面存储了堆区的地址，因此函数返回值类型需要加上 * 号</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 调用函数,因为返回的是地址，因此使用指针接收</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// p 是指针，想要查看指针指向的地址中的数据需要解开</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><img src="`+l+`" alt="image-20240508160509666" style="zoom:100%;border-radius:10px;"><p><strong>代码测试：</strong>（delete关键字释放堆区内存）</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 堆区内存由自己创建自己释放</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 使用 new 关键字把数据创建到堆区</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new 关键字返回的是堆区的地址，因此使用指针接收</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>             <span class="token comment">// p是指针，里面存储了堆区的地址，因此函数返回值类型需要加上 * 号</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 调用函数,因为返回的是地址，因此使用指针接收</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// p 是指针，想要查看指针指向的地址中的数据需要解开</span>

    <span class="token comment">// 释放堆区数据</span>
    <span class="token keyword">delete</span> p<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 查看堆区内存释放之后这块内存中的数据</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><img src="`+c+`" alt="image-20240508160843194" style="zoom:100%;border-radius:10px;"><p><strong>在堆区创建一个数组</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 在堆区创建一个数组</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数组的元素类型是 int 数组需要长度，因此需要[5]</span>
    <span class="token comment">// 为数组中添加数据</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 添加 100、200、300、400、500到数组中</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 输出数组中的内容查看</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 释放堆区中的数组</span>
    <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span> <span class="token comment">// 注意：释放堆区中的数组数据 delete 关键字后需要加上 []</span>

    <span class="token comment">// 堆区数组释放之后再输出数组测试</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><img src="`+i+'" alt="image-20240508161854483" style="zoom:50%;border-radius:10px;"><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><img src="'+r+'" alt="image-20240508163011705" style="zoom:50%;border-radius:10px;"><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2><p>待更新...</p>',42),k=[d];function m(v,b){return s(),a("div",null,k)}const y=n(u,[["render",m],["__file","00.html.vue"]]),w=JSON.parse('{"path":"/C-plusplus/cplusplus%E7%BC%96%E7%A8%8B%E6%A0%B8%E5%BF%83/00.html","title":"内存模型&引用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"内存模型","slug":"内存模型","link":"#内存模型","children":[]},{"level":2,"title":"内存详细说明","slug":"内存详细说明","link":"#内存详细说明","children":[{"level":3,"title":"程序运行前：","slug":"程序运行前","link":"#程序运行前","children":[]},{"level":3,"title":"程序运行后：","slug":"程序运行后","link":"#程序运行后","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]}],"git":{"updatedTime":1715931648000,"contributors":[{"name":"leemiao","email":"lm951103@126.com","commits":1}]},"filePathRelative":"C-plusplus/cplusplus编程核心/00.md"}');export{y as comp,w as data};
